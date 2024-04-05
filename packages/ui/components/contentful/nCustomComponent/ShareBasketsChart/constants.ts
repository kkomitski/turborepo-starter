import { TypedArray, Options } from "uplot";
import { SeriesData, ShareBasketListing } from "./types";
import tooltipLinechart from "../../../../helpers/chartsTooltips";

export const shareBasketsList: Array<ShareBasketListing> = [
  {
    apiCode: "X-ALMEN",
    comparisonApiCode: "X-ABFMB",
    comparisonName: "US NDAQ 100",
    url: "automation-robotics",
    name: "Automation & Robotics",
  },
  {
    apiCode: "X-ALMEQ",
    comparisonApiCode: "X-AATTA",
    comparisonName: "Hong Kong 50",
    url: "china-tech",
    name: "China Tech",
  },
  {
    apiCode: "X-ALMES",
    comparisonApiCode: "X-ABFMB",
    comparisonName: "US NDAQ 100",
    url: "driverless-cars",
    name: "Driverless Cars",
  },
  {
    apiCode: "X-ALMEY",
    comparisonApiCode: "X-ABFMY",
    comparisonName: "US SPX 500",
    url: "social-media",
    name: "Social Media",
  },
  {
    apiCode: "X-ALMFA",
    comparisonApiCode: "X-ABFMB",
    comparisonName: "US NDAQ 100",
    url: "streaming",
    name: "Streaming",
  },
  {
    apiCode: "X-ALMEO",
    comparisonApiCode: "X-ABFMB",
    comparisonName: "US NDAQ 100",
    url: "big-tech",
    name: "Big Tech",
  },
  {
    apiCode: "X-ALMFB",
    comparisonApiCode: "X-ABFDN",
    comparisonName: "UK 100",
    url: "uk-banks",
    name: "UK Banks",
  },
  {
    apiCode: "X-ALMEM",
    comparisonApiCode: "X-ABFMB",
    comparisonName: "US NDAQ 100",
    url: "5g",
    name: "5G",
  },
  {
    apiCode: "X-ALMEV",
    comparisonApiCode: "X-ABFMB",
    comparisonName: "US NDAQ 100",
    url: "gaming",
    name: "Gaming",
  },
  {
    apiCode: "X-ALMEX",
    comparisonApiCode: "X-ABFMY",
    comparisonName: "US SPX 500",
    url: "renewable-energy",
    name: "Renewable Energy",
  },
  {
    apiCode: "X-ALMEU",
    comparisonApiCode: "X-AAREF",
    comparisonName: "Euro 50",
    url: "european-banks",
    name: "European Banks",
  },
  {
    apiCode: "X-ALMFC",
    comparisonApiCode: "X-ABFMY",
    comparisonName: "US SPX 500",
    url: "us-banks",
    name: "US Banks",
  },
  {
    apiCode: "X-ALMER",
    comparisonApiCode: "X-ABFMB",
    comparisonName: "US NDAQ 100",
    url: "cyber-security",
    name: "Cyber Security",
  },
  {
    apiCode: "X-ALMET",
    comparisonApiCode: "X-AAREF",
    comparisonName: "Euro 50",
    url: "eu-automobiles",
    name: "EU Automobiles",
  },
  {
    apiCode: "X-ALRRU",
    comparisonApiCode: "X-AAREF",
    comparisonName: "Euro 50",
    url: "luxury-lifestyle",
    name: "Luxury Lifestyle",
  },
  {
    apiCode: "X-ALRRT",
    comparisonApiCode: "X-ABFMY",
    comparisonName: "US SPX 500",
    url: "oil-gas",
    name: "Oil & Gas",
  },
  {
    apiCode: "X-ALRRS",
    comparisonApiCode: "X-ABFMY",
    comparisonName: "US SPX 500",
    url: "us-gold",
    name: "US Gold",
  },
  {
    apiCode: "X-ALRRW",
    comparisonApiCode: "X-ABFMY",
    comparisonName: "US SPX 500",
    url: "collaborative-technology",
    name: "Collaborative Technology",
  },
];

export const formatSeriesData = (data: Array<SeriesData>): TypedArray | any => {
  const date: Int32Array | any = [];
  const open: Float64Array | any = [];
  let i = 0;
  const len = data.length;
  const defaultOpenVal = data[0].o;
  while (i < len) {
    date.push(Math.floor((new Date(data[i].t) as any) / 1000));
    open.push(
      (((data[i].o - defaultOpenVal) / defaultOpenVal) * 100).toFixed(2)
    );
    i++;
  }
  return [date, open];
};

export const priceChange = (period: string, amount: number) => {
  const thisPeriod = period.toLowerCase();
  let thisType = "year";

  if (thisPeriod === "day") {
    thisType = "1day";
  } else if (thisPeriod === "week") {
    thisType = "week";
  } else if (thisPeriod === "month") {
    thisType = `${amount}${thisPeriod}${amount > 1 ? "s" : ""}`;
  }

  return thisType;
};

export const getOpts = (
  uplotContainerElem: HTMLElement,
  selectedShareBasket: ShareBasketListing,
  minMax: {
    min: number;
    max: number;
  }
): Options => {
  return {
    class: "instruments-chart",
    ...getContainerSize(uplotContainerElem),
    cursor: {
      x: true,
      y: true,
    },
    plugins: [tooltipLinechart(uplotContainerElem)],

    series: [
      {},
      {
        show: true,
        points: {
          show: false,
        },
        spanGaps: false,
        stroke: "#FD8CA5",
        width: 3,
        label: selectedShareBasket.name,
        class: "bg-[#FD8CA5]",
      },
      {
        show: true,
        points: {
          show: false,
        },
        spanGaps: false,
        stroke: "#5B7FFF",
        width: 3,
        label: selectedShareBasket.comparisonName,
        class: "bg-[#5B7FFF]",
      },
    ],
    axes: [
      {
        stroke: "#6D7691",
        grid: {
          show: false,
          stroke: "#6D7691",
          width: 1,
          dash: [],
        },
        border: {
          show: true,
          stroke: "#6D7691",
          width: 1,
        },
        ticks: {
          show: false,
        },
      },
      {
        side: 1,
        stroke: "#6D7691",
        grid: {
          show: false,
          stroke: "#6D7691",
          width: 1,
          dash: [],
        },
        border: {
          show: true,
          stroke: "#6D7691",
          width: 1,
        },
        ticks: {
          show: false,
        },
        values: (u: any, vals: Array<Object>) => vals.map((v) => `${v}%`),
      },
    ],

    scales: {
      y: {
        min: minMax.min,
        max: minMax.max,
      },
    },

    legend: {
      show: false,
    },
  };
};

export const getContainerSize = (uplotContainerElem: HTMLElement) => {
  if (uplotContainerElem?.parentElement) {
    let width = uplotContainerElem.parentElement.offsetWidth;
    const height = uplotContainerElem.parentElement.offsetHeight;

    // Give slightly more space to chart for smaller screens
    if (screen.width < 1024) {
      width = width + 20;
    }
    return {
      width: width,
      height: height,
    };
  }

  return {
    width: 0,
    height: 0,
  };
};
