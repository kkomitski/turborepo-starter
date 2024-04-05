import React, { ForwardedRef, ReactNode, forwardRef } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";
import SimpleTable from "@/components/tables/SimpleTable/SimpleTable";
import { getHtmlLang } from "@/helpers/constants";

type Props = {};
const TradingCostsOtherCosts = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    type Bullet = {
      title: string;
      content: string | ReactNode;
    };

    const considerationsList: Array<Bullet> = [
      {
        title: "Rollover costs",
        content:
          "You can roll forward positions over to keep a trade open beyond its expiry date. When you roll a forward position to the next contract, your profit or loss is realised and you enter the new trade at the mid-price, saving 50% on the spread cost.",
      },
      {
        title: "Guaranteed stop-loss orders",
        content: (
          <>
            <p>
              You can add a guaranteed stop-loss order (GSLO) to your trade for
              a premium, which guarantees to close you out at your specified
              level, regardless of market volatility or gapping. If the GSLO is
              not triggered, we&apos;ll refund 100% of the original GSLO charge.
              The charge, or &apos;premium&apos;, is calculated by multiplying
              the premium rate by the bet size.
            </p>
            <p>
              <a
                href={`/${getHtmlLang()}/platform-guides/guaranteed-stop-loss-orders`}
              >
                <span>Learn more about GSLOs</span>
              </a>
            </p>
          </>
        ),
      },
      {
        title: "Market data fees",
        content: (
          <>
            <p>
              If you want to trade or view our price data for certain share CFD
              instruments, you will need to activate the relevant market data
              subscription. Monthly subscription charges may apply depending on
              your market data classification and the type of account you hold.
            </p>
            <p>
              <a href={`/${getHtmlLang()}/learn-cfd-trading/market-data-fee`}>
                Learn more about market data fees
              </a>
            </p>
          </>
        ),
      },
      {
        title: "Account inactivity fee",
        content: (
          <>
            <p>
              There&apos;s a monthly charge of £10 (the amount depends on your
              account currency) on dormant accounts, but no deduction is made if
              there are no funds in the account. An account is considered
              dormant if there has been no trading activity for a continuous
              period of one year.
            </p>
            <p>
              <a href={`/${getHtmlLang()}/support/faqs/charges`}>
                Learn more about dormancy data fees
              </a>
            </p>
          </>
        ),
      },
      {
        title: "**Additional spread for US share spread bets",
        content: (
          <>
            <SimpleTable
              columns={[
                { name: "Share price", sortable: false },
                { name: "Cost", sortable: false },
              ]}
              rows={[
                [
                  {
                    content: "$0-15",
                    sortableValue: "$0-15",
                  },
                  {
                    content: "1 cent (each side)",
                    sortableValue: "1 cent (each side)",
                  },
                ],
                [
                  {
                    content: "$15-25",
                    sortableValue: "$15-25",
                  },
                  {
                    content: "2 cents (each side)",
                    sortableValue: "2 cents (each side)",
                  },
                ],
                [
                  {
                    content: "$25-35",
                    sortableValue: "$25-35",
                  },
                  {
                    content: "3 cents (each side)",
                    sortableValue: "3 cents (each side)",
                  },
                ],
                [
                  {
                    content: "$35+",
                    sortableValue: "$35",
                  },
                  {
                    content: "4 cents (each side)",
                    sortableValue: "4 cent (each side)",
                  },
                ],
              ]}
            />
          </>
        ),
      },
    ];
    return (
      <section
        ref={ref}
        className="flex flex-col gap-y-10 lg:flex-row lg:justify-between lg:gap-y-0 lg:gap-x-16"
      >
        <div className="lg:w-5/12">
          <div className="relative lg:-ml-6 lg:border-l-8 lg:border-navy-100 lg:pl-4">
            <div className=" -ml-6 border-l-8 border-navy-100 pl-4 lg:ml-0 lg:border-none lg:pl-0">
              <h2 className="headline-lg mb-6">Other costs & considerations</h2>
            </div>
            <p className="mb-10 text-xl">
              There are some other potential costs you may incur, depending on
              what and how you trade. These include rollover costs, guaranteed
              stop-loss orders, market data fees and dormancy fees.
            </p>
          </div>
        </div>
        <div className="lg:w-7/12">
          <Accordion type="multiple" className="w-full space-y-2">
            {considerationsList.map((column, index) => (
              <AccordionItem
                className="rounded-lg bg-white shadow"
                key={index}
                value={`item-${index}`}
              >
                <AccordionTrigger className="relative cursor-pointer px-4 py-3 pr-3.5 text-base font-semibold hover:no-underline">
                  {column.title}
                </AccordionTrigger>
                <AccordionContent className="px-4 pt-4 text-base">
                  {column.content}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    );
  }
);

TradingCostsOtherCosts.displayName = "TradingCostsOtherCosts";
export default TradingCostsOtherCosts;
