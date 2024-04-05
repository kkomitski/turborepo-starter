import { awsImage } from "@/helpers/constants";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const MT4Indicators = () => {
  type Indicator = {
    title: string;
    description: string;
    link: string;
    image: string;
    isVisible: boolean;
  };

  const [indicators, setIndicators] = useState<Array<Indicator>>([
    {
      title: "Order history",
      description:
        "Display trade entry and exit points on your charts. Show stop-loss and take-profit orders",
      link: "https://assets.cmcmarkets.com/pdfs/OrderHistoryindicator.pdf",
      image: awsImage("mt4-indicators_order-history.png"),
      isVisible: true,
    },
    {
      title: "Pivot points",
      description:
        "Add pivot points to charts and set alerts based on pivot levels",
      link: "https://assets.cmcmarkets.com/pdfs/Pivotindicator.pdf",
      image: awsImage("mt4-indicators_pivot-points.png"),
      isVisible: true,
    },
    {
      title: "Renko",
      description:
        "Overlay Renko blocks on normal time-based charts. Create traditional non-time based Renko charts",
      link: "https://assets.cmcmarkets.com/pdfs/Renkoindicator.pdf",
      image: awsImage("mt4-indicators_renko.png"),
      isVisible: true,
    },
    {
      title: "Donchian channel",
      description:
        "Show ranges of price movement and measure volatility with Donchian channels",
      link: "https://assets.cmcmarkets.com/pdfs/Donchianindicator.pdf",
      image: awsImage("mt4-indicators_donchian-channel.png"),
      isVisible: true,
    },
    {
      title: "Keltner channel",
      description:
        "Add bands to measure volatility while identifying extremes in price movement with Keltner channels",
      link: "https://assets.cmcmarkets.com/pdfs/Keltnerindicator.pdf",
      image: awsImage("mt4-indicators_keltner-channel.png"),
      isVisible: true,
    },
    {
      title: "Candle countdown",
      description: "View the time remaining in the current candle",
      link: "https://assets.cmcmarkets.com/pdfs/CandleCountdownindicator.pdf",
      image: awsImage("mt4-indicators_candle-countdown.png"),
      isVisible: true,
    },
    {
      title: "Symbol info",
      description:
        "See an overview of buy and sell signals from a series of indicators and range of timeframes",
      link: "https://assets.cmcmarkets.com/pdfs/SymbolInfoindicator.pdf",
      image: awsImage("mt4-indicators_symbol-info.png"),
      isVisible: false,
    },
    {
      title: "Bar changer",
      description:
        "Modify a chart to show only specific sessions, adjust times or scale prices",
      link: "https://assets.cmcmarkets.com/pdfs/BarChangerindicator.pdf",
      image: awsImage("mt4-indicators_bar-changer.png"),
      isVisible: false,
    },
    {
      title: "Chart groups",
      description:
        "Link charts so that changing the symbol in one changes the symbol in other linked charts",
      link: "https://assets.cmcmarkets.com/pdfs/ChartGroupindicator.pdf",
      image: awsImage("mt4-indicators_chart-groups.png"),
      isVisible: false,
    },
    {
      title: "Chart-in-chart",
      description:
        "Put the price action from another symbol into a chart directly to perform a candle-by-candle comparison of two symbols",
      link: "https://assets.cmcmarkets.com/pdfs/Chart-in-Chartindicator.pdf",
      image: awsImage("mt4-indicators_chart-in-chart.png"),
      isVisible: false,
    },
    {
      title: "Freehand drawing",
      description:
        "This feature enables you to draw directly on the chart with your cursor",
      link: "https://assets.cmcmarkets.com/pdfs/FreehandDrawingindicator.pdf",
      image: awsImage("mt4-indicators_freehand-drawing.png"),
      isVisible: false,
    },
    {
      title: "Gravity",
      description: "Easily visualise areas of support and resistance",
      link: "https://assets.cmcmarkets.com/pdfs/Gravityindicator.pdf",
      image: awsImage("mt4-indicators_gravity.png"),
      isVisible: false,
    },
    {
      title: "High-low",
      description:
        "Add high and low indicators from any timeframe or range to a chart",
      link: "https://assets.cmcmarkets.com/pdfs/High-lowindicator.pdf",
      image: awsImage("mt4-indicators_high-low.png"),
      isVisible: false,
    },
    {
      title: "Magnifier",
      description:
        "The magnifier lets you highlight an area of chart data and view a lower interval within the area to see more detail in the price action",
      link: "https://assets.cmcmarkets.com/pdfs/Magnifierindicator.pdf",
      image: awsImage("mt4-indicators_magnifier.png"),
      isVisible: false,
    },
    {
      title: "Mini chart",
      description:
        "Create smaller, drag-and-drop charts within your MT4 workspace",
      link: "https://assets.cmcmarkets.com/pdfs/MiniChartindicator.pdf",
      image: awsImage("mt4-indicators_mini-chart.png"),
      isVisible: false,
    },
  ]);

  const [loadMoreButtonVisible, setLoadMoreButtonVisible] = useState(true);

  const setAllVisible = () => {
    setIndicators(
      indicators.map((indicator) => ({
        ...indicator,
        isVisible: true,
      }))
    );

    setLoadMoreButtonVisible(false);
  };
  return (
    <div className="rounded-3xl bg-white-95 px-4 py-6 lg:p-10">
      <h3 className="mb-10 text-[32px]">Access free premium indicators</h3>
      <div className="relative grid gap-6 overflow-y-hidden md:grid-cols-2 xl:grid-cols-3">
        {indicators.map((indicator, index) => (
          <div
            key={index}
            className={`rounded bg-white p-4 lg:p-6 ${
              indicator.isVisible ? "block" : "hidden"
            } `}
          >
            <Link
              className="block text-2xl no-underline"
              href={indicator.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className="mx-auto mb-6 w-full rounded"
                width="491"
                height="274"
                src={indicator.image}
                alt={indicator.title}
              />
              <h4 className="mb-6 block">{indicator.title}</h4>
            </Link>
            <p>{indicator.description}</p>
          </div>
        ))}

        <div
          className={`absolute bottom-0 left-0 h-96 w-full bg-gradient-to-t from-white via-white/95 ${
            loadMoreButtonVisible ? "block" : "hidden"
          }`}
        >
          <button
            type="button"
            onClick={() => setAllVisible()}
            className="btn btn-azure absolute bottom-20 left-0 right-0 mx-auto font-semibold"
          >
            Load more indicators
          </button>
        </div>
      </div>
    </div>
  );
};

export default MT4Indicators;
