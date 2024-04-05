import Lines from "@/components/global/Misc/Lines";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import React, { ReactNode } from "react";

type Bullet = {
  title: string;
  content: Array<ReactNode | string>;
};

const PlatformFeatures = ({}: {}) => {
  const columnOne: Array<Bullet> = [
    {
      title: "Order execution types",
      content: [
        "Market, limit and stop entry orders (ability to set expiry)",
        "Guaranteed stop-loss orders",
        "Regular stop-loss orders",
        "Trailing stop-loss orders",
        "Take-profit orders",
      ],
    },
    {
      title: "Advanced order management",
      content: [
        "Trade from charts",
        "Boundary orders (to help prevent slippage)",
        "Enable/disable account netting (ability to go long and short on the same instrument at the same time)",
        "Tiered margins",
        "Trade using unrealised profit",
        "Custom stop order triggering (specify stops to trigger off buy, mid or sell price)",
        "Price depth for larger trade sizes",
        "One-click trading, partially close open trades",
        "Auto rollover forward positions (with reduced spread); and a range of default order setting options to make placing a trade as quick and as simple as possible",
      ],
    },
    {
      title: "Account close-out methods",
      content: [
        "Standard close-out",
        "Last in first out",
        "Largest position loss first",
        "Largest position margin first",
      ],
    },
    {
      title: "Charting tools",
      content: [
        "Charting tools",
        "Free charting package with 115+ technical indicators and drawing tools",
        "Intervals from one second, multiple chart presets",
        "Autosave analysis",
        "Trade from charts",
        "Automatic pattern recognition",
        "Comparison charts, 10 chart types",
        "Chart forum and advanced mobile charts",
      ],
    },
  ];

  const columnTwo: Array<Bullet> = [
    {
      title: "Layout management",
      content: [
        "Save up to five custom layouts",
        "Multiscreen support",
        "Small or large platform resolution",
        "Easily switch between multiple accounts (demo, live, CFD, spread betting)",
        "Autosave platform changes, easily load or change module instruments using our quick search options",
        "Snap modules to grid and fast platform navigation with our module-linking feature",
      ],
    },
    {
      title: "Trading tools",
      content: [
        "Comprehensive instrument overviews",
        "Market calendar",
        "Price alerts",
        "Client sentiment (minute by minute updates)",
        "Morningstar quantitative equity research reports",
        "Reuters news",
        "CMC market analysts' 'Insights' feature",
        "Statement centre",
        "Price ticker",
        "CMC TV",
        "CMC Twitter feed",
      ],
    },
    {
      title: "Mobile trading",
      content: [
        "Advanced mobile apps for iPhone",
        "iPad and Android (tablet and phone)",
        "Our apps include our complete range of order types",
        "Advanced charting",
        "Intelligent watchlists",
        "Client sentiment",
        "Market calendar",
        "Reuters news",
        "CMC market analysts' 'Insights' feature",
        "Real-time alerts",
        "Customisable home screen and swipe login for quicker access to your account",
      ],
    },
    {
      title: "Alerts available",
      content: [
        "Price",
        "Order execution",
        "Market calendar & completed chart pattern",
      ],
    },
  ];
  return (
    <section className="relative">
      <Lines left />
      <div className="main-xl-container relative py-0">
        <div className="pt-20 lg:pb-0">
          <h2 className="headline-lg relative -ml-6 mb-6 border-l-8 border-black pl-4">
            Platform features
          </h2>
        </div>
      </div>
      <div className="main-xl-container pt-10 lg:pt-20">
        <div className="grid gap-x-6 gap-y-2 md:grid-cols-2">
          <div>
            <Accordion type="multiple" className="w-full space-y-2">
              {columnOne.map((column, index) => (
                <AccordionItem
                  className="rounded-lg bg-white shadow"
                  key={index}
                  value={`item-${index}`}
                >
                  <AccordionTrigger className="relative cursor-pointer px-4 py-3 pr-3.5 text-base font-semibold hover:no-underline">
                    {column.title}
                  </AccordionTrigger>
                  <AccordionContent className="px-4 pt-4 text-base">
                    <ul>
                      {column.content.map((item, index) => (
                        <li key={index} className="rounded-lg bg-white-95 p-4">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
          <div>
            <Accordion type="multiple" className="w-full space-y-2">
              {columnTwo.map((column, index) => (
                <AccordionItem
                  className="rounded-lg bg-white shadow"
                  key={index}
                  value={`item-${index}`}
                >
                  <AccordionTrigger className="relative cursor-pointer px-4 py-3 pr-3.5 text-base font-semibold hover:no-underline">
                    {column.title}
                  </AccordionTrigger>
                  <AccordionContent className="px-4 pt-4 text-base">
                    <ul>
                      {column.content.map((item, index) => (
                        <li key={index} className="rounded-lg bg-white-95 p-4">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlatformFeatures;
