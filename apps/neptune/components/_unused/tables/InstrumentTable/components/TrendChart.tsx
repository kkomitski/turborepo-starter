"use client";
import { numberFormatter, slugify } from "ui/helpers/utils";
import uPlot, { AlignedData, Options } from "uplot";
import { useEffect } from "react";
import { Instrument, InstrumentEverythingData } from "../InstrumentTableTypes";

const uPlotTrend = (
  elMain: HTMLElement,
  data: Instrument,
  tabName: string,
  color: string = "#325FFF"
) => {
  const trendChartElem: HTMLElement | null = elMain.querySelector(
    `.trend-uplot.trend-uplot-${data.instrumentCode}-${tabName}`
  );
  if (!trendChartElem) {
    return;
  }

  // Uplot Options
  const opts: Options = {
    ...getSize(elMain),
    padding: [0, 0, -50, -50],
    series: [
      {},
      {
        width: 1,
        stroke: color,
      },
    ],
    legend: {
      show: false,
    },
    cursor: {
      show: false,
    },
    axes: [
      {
        grid: {
          show: false,
        },
      },
      {
        grid: {
          show: false,
        },
      },
    ],
  };

  if (trendChartElem.querySelector(".uplot")) {
    return;
  }
  if (!data?.everything?.prices) {
    return;
  }

  // Create new uPlot instance
  const linechart: uPlot = new uPlot(
    opts,
    formatData(data.everything.prices),
    trendChartElem
  );

  // Set the size of the chart when the window is resized
  const setSizeOnLoad = () => linechart.setSize(getSize(trendChartElem));
  setSizeOnLoad();
  window.addEventListener("resize", setSizeOnLoad);
  window.addEventListener("unload", () => {
    window.removeEventListener("resize", setSizeOnLoad);
  });
};

// Format the data from the cupcake API to be used by uPlot
// Takes price data of the instrument and formats it into arrays representing dates and percentage changes in opening prices.
const formatData = (data: InstrumentEverythingData["prices"]): AlignedData => {
  if (!data) {
    return [[], []];
  }

  const date: Array<number> = [];
  const open: Array<number> = [];

  // Store the opening price of the first data point as a reference value.
  const defaultOpenVal: number = data[0].o;

  // Loop through each data point to format and store date and opening price data.
  for (let i = 0; i < data.length; i++) {
    // Convert the timestamp to a Unix timestamp (seconds since epoch) and store it in the date array.
    date.push(Math.floor((new Date(data[i].t) as any) / 1000));

    // Calculate the percentage change in opening price relative to the first data point, format it, and store it in the open array.
    open.push(
      parseFloat(
        numberFormatter.doubleDecimal.format(
          ((data[i].o - defaultOpenVal) / defaultOpenVal) * 100
        )
      )
    );
  }

  return [date, open];
};

// Get the size of the uPlot chart container
// Used to resize the chart when the window is resized (currently size is hardcoded)
const getSize = (elContainer: HTMLElement) => {
  return {
    width: 120,
    height: 25,
  };
};

const TrendChart = ({
  data,
  tabName,
}: {
  data: Instrument;
  tabName: string;
}) => {
  const tabNameSlug = slugify(tabName);

  useEffect(() => {
    const compTableContainer: HTMLElement | null = document.querySelector(
      ".comp-table-container"
    );
    if (compTableContainer) {
      uPlotTrend(compTableContainer, data, tabNameSlug);
    }
  });

  return (
    <td>
      <div
        className={`trend-uplot trend-uplot-${data.instrumentCode}-${tabNameSlug}`}
      ></div>
    </td>
  );
};

export default TrendChart;
