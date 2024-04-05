import constants, { getApiKey } from "@/helpers/constants";
import { numberFormatter } from "@/helpers/utils";
import { MutableRefObject, useEffect, useRef, useState } from "react";
import uPlot, { AlignedData, Options } from "uplot";
import InstrumentLabels from "./ShareBasketsChart/InstrumentLabels";
import InstrumentSelection from "./ShareBasketsChart/InstrumentSelection";
import InstrumentsChart from "./ShareBasketsChart/InstrumentsChart";
import {
  formatSeriesData,
  getContainerSize,
  getOpts,
  priceChange,
  shareBasketsList,
} from "./ShareBasketsChart/constants";
import {
  FeedTypes,
  SeriesData,
  ShareBasketListing,
} from "./ShareBasketsChart/types";

const ShareBasketsChart = (props: any) => {
  const uplotContainerElem = useRef<HTMLDivElement | null>(null);
  const abortController: MutableRefObject<AbortController> = useRef(
    new AbortController()
  );
  const [chartLoading, setChartLoading] = useState(true);
  const [pricePerValueLoading, setPricePerValueLoading] = useState(true);
  const period = "MONTH";
  const amount = 3;
  const [selectedShareBasket, setSelectedShareBasket]: [
    selectedShareBasket: ShareBasketListing,
    setSelectedShareBasket: Function
  ] = useState(shareBasketsList[0]);

  let mainChart: uPlot | null = null;
  let finalData: Array<[number[], number[]]> = [
    [[], []],
    [[], []],
  ];

  const updateSelectedShareBasket = (
    shareBasket: ShareBasketListing | null
  ) => {
    if (shareBasket && shareBasket.name !== selectedShareBasket.name) {
      setSelectedShareBasket(shareBasket);
    }
  };

  const getFeeds = ({
    endpoint,
    instrumentCode,
    period,
    amount,
  }: FeedTypes) => {
    let endpointURL: string | null = null;
    if (endpoint === "prices") {
      endpointURL = constants.endpoints.instruments.prices;
    } else if (endpoint === "price") {
      endpointURL = constants.endpoints.instruments.price;
    }

    return new Promise((resolve, reject) => {
      fetch(
        `${endpointURL}${instrumentCode}/${period}/${amount}?key=${getApiKey()}`,
        { signal: abortController.current.signal }
      ).then((response) => {
        if (response.status < 400) {
          return response
            .json()
            .then((data) => resolve(data))
            .catch((err) => reject(err));
        }
        return reject(response);
      });
    });
  };

  const makeChart = () => {
    if (!uplotContainerElem.current) {
      return;
    }

    const chartData: AlignedData | [] = [];

    if (finalData[0] && finalData[1]) {
      // @ts-ignore
      chartData.push(finalData[0][0]);
      // @ts-ignore
      chartData.push(finalData[0][1]);
      // @ts-ignore
      chartData.push(finalData[1][1]);
    }

    // Used to sort the min and max values for the scales of the chart.
    // Works by getting the lowest and highest value for both sets of chartData

    // @ts-ignore
    const chartDataPercentagesSorted = chartData[1]
      // @ts-ignore
      .concat(chartData[2])
      // @ts-ignore
      .sort((a, b) => a - b);

    const minMax = {
      min: chartDataPercentagesSorted[0],
      max: chartDataPercentagesSorted[chartDataPercentagesSorted.length - 1],
    };

    const opts: Options = getOpts(
      uplotContainerElem.current,
      selectedShareBasket,
      minMax
    );

    if (uplotContainerElem.current) {
      mainChart = new uPlot(opts, chartData, uplotContainerElem.current);
      window.addEventListener("resize", () => {
        if (uplotContainerElem.current) {
          mainChart?.setSize(getContainerSize(uplotContainerElem.current));
        }
      });

      // Update chart labels
      pricePercentageValue({
        apiCode: selectedShareBasket.apiCode,
        comparisonApiCode: selectedShareBasket.comparisonApiCode,
        specDate: `${amount}${period.toLowerCase()}${amount > 1 ? "s" : null}`,
      });
    }
  };

  const pricePercentageValue = (obj: {
    apiCode: string;
    comparisonApiCode: string;
    specDate: string;
  }) => {
    // Create an array to store the promises for both fetch requests
    const fetchPromises = [
      fetch(
        `${constants.endpoints.instruments.priceChange}${
          obj.apiCode
        }?key=${getApiKey()}`
      ).then((response) => response.json()),

      fetch(
        `${constants.endpoints.instruments.priceChange}${
          obj.comparisonApiCode
        }?key=${getApiKey()}`
      ).then((response) => response.json()),
    ];

    // Use Promise.all to wait for both fetch requests to complete
    Promise.all(fetchPromises)
      .then(([data1, data2]) => {
        const percValue1 = data1[obj.apiCode][obj.specDate]?.movement;
        const percValue2 = data2[obj.comparisonApiCode][obj.specDate]?.movement;

        const updatedBasket = { ...selectedShareBasket };

        if (percValue1 !== null && percValue1 !== undefined) {
          const elemValue1 = numberFormatter.doubleDecimal.format(percValue1);
          updatedBasket.mainPricePerValue = elemValue1;
        }

        if (percValue2 !== null && percValue2 !== undefined) {
          const elemValue2 = numberFormatter.doubleDecimal.format(percValue2);
          updatedBasket.comparisonPricePerValue = elemValue2;
        }

        setSelectedShareBasket(updatedBasket);
        setPricePerValueLoading(false);
      })
      .catch((err) => console.warn(err));
  };

  const getBaskets = () => {
    finalData = [];

    setChartLoading(true);
    setPricePerValueLoading(true);

    // Do not work within loop as call to api could have delay
    // 1st instrument - option value
    getFeeds({
      endpoint: "prices",
      instrumentCode: selectedShareBasket.apiCode,
      period: period,
      amount: amount,
    }).then((periodData: Array<SeriesData> | any) => {
      const currDate = new Date();
      currDate.setHours(0, 0, 0);

      // set main array to use base on previous days
      const mainPeriodData: Array<SeriesData> = [];
      periodData.forEach((data: SeriesData) => {
        const dataDate = new Date(data.t);
        if (dataDate < currDate) {
          mainPeriodData.push(data);
        }
      });

      // 2nd instrument - dataset json comparison
      getFeeds({
        endpoint: "prices",
        instrumentCode: selectedShareBasket.comparisonApiCode,
        period: period,
        amount: amount,
      }).then((periodData2: Array<SeriesData> | any) => {
        const firstPeriodData: Array<SeriesData> = [];
        const secondPeriodData: Array<SeriesData> = [];

        // has to be within for loop to be able to use break
        for (let a = 0; a < mainPeriodData.length; a++) {
          for (let b = 0; b < periodData2.length; b++) {
            if (mainPeriodData[a].t === periodData2[b].t) {
              firstPeriodData.push(mainPeriodData[a]);
              secondPeriodData.push(periodData2[b]);
              break;
            }
          }
        }

        finalData.push(formatSeriesData(firstPeriodData));
        finalData.push(formatSeriesData(secondPeriodData));

        // insert new data point (last) from price change value
        fetch(
          `${constants.endpoints.instruments.priceChange}${
            selectedShareBasket.apiCode
          }?key=${getApiKey()}`
        )
          .then((response) => response.json())
          .then((firstPriceChange) => {
            fetch(
              `${constants.endpoints.instruments.priceChange}${
                selectedShareBasket.comparisonApiCode
              }?key=${getApiKey()}`
            )
              .then((response) => response.json())
              .then((secondPriceChange) => {
                // create data to use for last data point
                const currDatePriceChange = Math.floor(
                  (new Date() as any) / 1000
                );
                const priceChangeVal = priceChange(period, amount);

                if (finalData[0] && finalData[1]) {
                  finalData[0][0].push(currDatePriceChange);
                  finalData[0][1].push(
                    firstPriceChange[selectedShareBasket.apiCode][
                      priceChangeVal
                    ].movement.toFixed(2)
                  );

                  finalData[1][0].push(currDatePriceChange);
                  finalData[1][1].push(
                    secondPriceChange[selectedShareBasket.comparisonApiCode][
                      priceChangeVal
                    ].movement.toFixed(2)
                  );
                }

                // plot linechart
                if (mainChart !== null) {
                  updateChart();
                } else {
                  if (uplotContainerElem.current) {
                    uplotContainerElem.current.innerHTML = "";
                  }
                  makeChart();
                }

                setChartLoading(false);
              })
              .catch((err) => console.warn(err));
          })
          .catch((err) => console.warn(err));
      });
    });
  };

  const updateChart = () => {
    const chartData: Array<any> = [];
    if ([0] && finalData[1]) {
      chartData.push(finalData[0][0]);
      chartData.push(finalData[0][1]);
      chartData.push(finalData[1][1]);
    }

    if (mainChart) {
      mainChart.setData(chartData);
    }
  };

  // Cleanup when component is unmounted
  const cleanup = () => {
    // Cancel feed fetch requests
    abortController.current.abort();
  };

  useEffect(() => {
    if (selectedShareBasket !== null) {
      abortController.current = new AbortController();
      getBaskets();

      return () => {
        cleanup();
      };
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedShareBasket.name]);

  return (
    <>
      <div className="h-full w-full rounded bg-white p-6 shadow">
        <InstrumentSelection
          chartLoading={chartLoading}
          selectedShareBasket={selectedShareBasket}
          shareBasketsList={shareBasketsList}
          updateSelectedShareBasket={updateSelectedShareBasket}
        />
        <InstrumentLabels
          selectedShareBasket={selectedShareBasket}
          pricePerValueLoading={pricePerValueLoading}
          period={period}
        />
        <InstrumentsChart
          chartLoading={chartLoading}
          uplotContainerElem={uplotContainerElem}
        />
      </div>
    </>
  );
};

export default ShareBasketsChart;
