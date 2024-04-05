/* eslint-disable @next/next/no-html-link-for-pages */
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import OneColumn from "../../Common/Basic/OneColumn";
import SimpleTable, { SimpleTableColumn } from "@/components/tables/SimpleTable/SimpleTable";
import Link from "next/link";
import { getHtmlLang } from "@/helpers/constants";

const AccountComparisonTable = () => {
  const tableColumns: SimpleTableColumn[] = [
    {
      name: "",
      width: 30,
    },
    {
      name: "Spread betting",
      sortable: true,
      width: 23.33,
    },
    {
      name: "CFD",
      sortable: true,
      width: 23.33,
    },
    {
      name: "FX Active",
      sortable: true,
      width: 23.33,
    },
  ];
  return (
    <OneColumn containerClassName="pt-0 lg:pt-1 pb-8 lg:pb-12">
      <Accordion className="w-full space-y-2" type="multiple" defaultValue={["instruments-available"]}>
        <AccordionItem className="rounded-lg bg-white px-4 shadow" value="instruments-available">
          <AccordionTrigger>
            {" "}
            <h3 className="font-semibold">Instruments available</h3>
          </AccordionTrigger>
          <AccordionContent>
            <SimpleTable
              columns={tableColumns}
              rows={[
                [
                  {
                    content: (
                      <a href={`/${getHtmlLang()}/instruments`}>
                        Total number <span className="block lg:inline">of instruments</span>
                      </a>
                    ),
                  },
                  {
                    content: "12,000",
                    sortableValue: 12000,
                  },
                  {
                    content: "12,000",
                    sortableValue: 12000,
                  },
                  {
                    content: "12,000",
                    sortableValue: 12000,
                  },
                ],
                [
                  {
                    content: <Link href="/forex-trading">Forex pairs</Link>,
                  },
                  {
                    content: "330+",
                    sortableValue: 330,
                  },
                  {
                    content: "330+",
                    sortableValue: 330,
                  },
                  {
                    content: "330+",
                    sortableValue: 330,
                  },
                ],
                [
                  {
                    content: <Link href="/markets-indices">Indices</Link>,
                  },
                  {
                    content: "80+",
                    sortableValue: 80,
                  },
                  {
                    content: "80+",
                    sortableValue: 80,
                  },
                  {
                    content: "80+",
                    sortableValue: 80,
                  },
                ],
                [
                  {
                    content: <Link href="/markets-commodity-trading">Commodities</Link>,
                  },
                  {
                    content: "100+",
                    sortableValue: 100,
                  },
                  {
                    content: "100+",
                    sortableValue: 100,
                  },
                  {
                    content: "100+",
                    sortableValue: 100,
                  },
                ],
                [
                  {
                    content: <Link href="/markets-shares">Shares</Link>,
                  },
                  {
                    content: "9,000+",
                    sortableValue: 9000,
                  },
                  {
                    content: "9,500+",
                    sortableValue: 9500,
                  },
                  {
                    content: "9,500+",
                    sortableValue: 9500,
                  },
                ],
                [
                  {
                    content: <Link href="/markets-treasuries">Treasuries</Link>,
                  },
                  {
                    content: "50+",
                    sortableValue: 50,
                  },
                  {
                    content: "50+",
                    sortableValue: 50,
                  },
                  {
                    content: "50+",
                    sortableValue: 50,
                  },
                ],
                [
                  {
                    content: (
                      <>
                        Maximum leverage <span className="block md:inline">(retail clients)</span>
                      </>
                    ),
                  },
                  {
                    content: "30:1",
                    sortableValue: 30,
                  },
                  {
                    content: "30:1",
                    sortableValue: 30,
                  },
                  {
                    content: "30:1",
                    sortableValue: 30,
                  },
                ],
                [
                  {
                    content: "Trade size",
                  },
                  {
                    content: "£ PER POINT",
                  },
                  {
                    content: "Number of units/notional value",
                  },
                  {
                    content: "Number of units/notional value",
                  },
                ],
                [
                  {
                    content: "Fractional trade sizes",
                  },
                  {
                    content: "Yes",
                  },
                  {
                    content: "Yes",
                  },
                  {
                    content: "Yes",
                  },
                ],
              ]}
            />
          </AccordionContent>
        </AccordionItem>
        <AccordionItem className="rounded-lg bg-white px-4 shadow" value="costs">
          <AccordionTrigger>
            {" "}
            <h3 className="font-semibold">Costs</h3>
          </AccordionTrigger>
          <AccordionContent>
            <SimpleTable
              columns={tableColumns}
              rows={[
                [
                  {
                    content: "Spreads from",
                  },
                  {
                    content: "0.0 pips",
                  },
                  {
                    content: "0.0 pips",
                  },
                  {
                    content: "0.0 pips",
                  },
                ],
                [
                  {
                    content: "Commissions",
                  },
                  {
                    content: "NO",
                  },
                  {
                    content: "YES (SHARES ONLY)",
                  },
                  {
                    content: "YES (SHARES ONLY)",
                  },
                ],
                [
                  {
                    content: "Minimum commissions",
                  },
                  {
                    content: "NO",
                  },
                  {
                    content: <>YES (SHARES ONLY) - US shares from $10; UK shares from £9</>,
                  },
                  {
                    content: <>YES (SHARES ONLY) - US shares from $10; UK shares from £9</>,
                  },
                ],
                [
                  {
                    content: (
                      <>
                        Holding costs <span className="block md:inline">if held overnight</span>
                      </>
                    ),
                  },
                  {
                    content: "YES",
                  },
                  {
                    content: "YES",
                  },
                  {
                    content: "YES",
                  },
                ],
                [
                  {
                    content: "Market data fees",
                  },
                  {
                    content: "NO",
                  },
                  {
                    content: "YES",
                  },
                  {
                    content: "YES",
                  },
                ],
                [
                  {
                    content: "GSLO premium",
                  },
                  {
                    content: "YES (100% REFUND IF NOT TRIGGERED)",
                  },
                  {
                    content: "YES (100% REFUND IF NOT TRIGGERED)",
                  },
                  {
                    content: "YES (100% REFUND IF NOT TRIGGERED)",
                  },
                ],
                [
                  {
                    content: "Dormancy fees",
                  },
                  {
                    content: (
                      <>
                        £10 monthly, if no trading activity for one year. No fee on accounts with zero funds.
                      </>
                    ),
                  },
                  {
                    content: (
                      <>
                        £10 monthly, if no trading activity for one year. No fee on accounts with zero funds.
                      </>
                    ),
                  },
                  {
                    content: (
                      <>
                        £10 monthly, if no trading activity for one year. No fee on accounts with zero funds.
                      </>
                    ),
                  },
                ],
              ]}
            />
          </AccordionContent>
        </AccordionItem>
        <AccordionItem className="rounded-lg bg-white px-4 shadow" value="additional-key-features">
          <AccordionTrigger>
            {" "}
            <h3 className="font-semibold">Additional key features</h3>
          </AccordionTrigger>
          <AccordionContent>
            <SimpleTable
              columns={tableColumns}
              rows={[
                [
                  {
                    content: "Demo account",
                  },
                  {
                    content: "YES",
                  },
                  {
                    content: "YES",
                  },
                  {
                    content: "YES",
                  },
                ],
                [
                  {
                    content: (
                      <>
                        Negative balance protection{" "}
                        <span className="block md:inline">(retail clients only)</span>
                      </>
                    ),
                  },
                  {
                    content: "YES",
                  },
                  {
                    content: "YES",
                  },
                  {
                    content: "YES",
                  },
                ],
                [
                  {
                    content: "Order boundaries",
                  },
                  {
                    content: "YES",
                  },
                  {
                    content: "YES",
                  },
                  {
                    content: "YES",
                  },
                ],
                [
                  {
                    content: "Account netting",
                  },
                  {
                    content: "YES",
                  },
                  {
                    content: "YES",
                  },
                  {
                    content: "YES",
                  },
                ],
                [
                  {
                    content: (
                      <>
                        Accurately hedge a <span className="block md:inline">physical position</span>
                      </>
                    ),
                  },
                  {
                    content: "NO",
                  },
                  {
                    content: "YES",
                  },
                  {
                    content: "YES",
                  },
                ],
                [
                  {
                    content: "Price depth ladder",
                  },
                  {
                    content: "YES",
                  },
                  {
                    content: "YES",
                  },
                  {
                    content: "YES",
                  },
                ],
                [
                  {
                    content: "Account currency",
                  },
                  {
                    content: "GBP, EUR",
                  },
                  {
                    content: (
                      <>
                        GBP, EUR, USD, AUS, CAD,{" "}
                        <span className="block md:inline">NOK, NZD, PLN, SEK, SGD</span>
                      </>
                    ),
                  },
                  {
                    content: (
                      <>
                        GBP, EUR, USD, AUS, CAD,{" "}
                        <span className="block md:inline">NOK, NZD, PLN, SEK, SGD</span>
                      </>
                    ),
                  },
                ],
                [
                  {
                    content: "Telephone trading",
                  },
                  {
                    content: "YES",
                  },
                  {
                    content: "YES",
                  },
                  {
                    content: "YES",
                  },
                ],
                [
                  {
                    content: (
                      <>
                        Support during <span className="block lg:inline">market hours</span>
                      </>
                    ),
                  },
                  {
                    content: "YES",
                  },
                  {
                    content: "YES",
                  },
                  {
                    content: "YES",
                  },
                ],
              ]}
            />
          </AccordionContent>
        </AccordionItem>
        <AccordionItem className="rounded-lg bg-white px-4 shadow" value="free-with-your-account">
          <AccordionTrigger>
            {" "}
            <h3 className="font-semibold">Free with your account</h3>
          </AccordionTrigger>
          <AccordionContent>
            <SimpleTable
              columns={tableColumns}
              rows={[
                [
                  {
                    content: (
                      <>
                        Education, seminars <span className="block md:inline">& webinars</span>
                      </>
                    ),
                  },
                  {
                    content: "YES",
                  },
                  {
                    content: "YES",
                  },
                  {
                    content: "YES",
                  },
                ],
                [
                  {
                    content: (
                      <>
                        CMC market analyst <span className="block md:inline">&apos;Insights&apos;</span>
                      </>
                    ),
                  },
                  {
                    content: "YES",
                  },
                  {
                    content: "YES",
                  },
                  {
                    content: "YES",
                  },
                ],
                [
                  {
                    content: (
                      <>
                        Market calendar, <span className="block md:inline">powered by</span>
                        <span className="block md:inline">Thomson Reuters</span>
                      </>
                    ),
                  },
                  {
                    content: "YES",
                  },
                  {
                    content: "YES",
                  },
                  {
                    content: "YES",
                  },
                ],
                [
                  {
                    content: "Reuters news",
                  },
                  {
                    content: "YES, LIVE ACCOUNT ONLY",
                  },
                  {
                    content: "YES, LIVE ACCOUNT ONLY",
                  },
                  {
                    content: "YES, LIVE ACCOUNT ONLY",
                  },
                ],
                [
                  {
                    content: (
                      <>
                        Morningstar quantitative{" "}
                        <span className="block md:inline">equity research reports</span>
                      </>
                    ),
                  },
                  {
                    content: "YES, LIVE ACCOUNT ONLY",
                  },
                  {
                    content: "YES, LIVE ACCOUNT ONLY",
                  },
                  {
                    content: "YES, LIVE ACCOUNT ONLY",
                  },
                ],
                [
                  {
                    content: "Client sentiment",
                  },
                  {
                    content: "YES",
                  },
                  {
                    content: "YES",
                  },
                  {
                    content: "YES",
                  },
                ],
                [
                  {
                    content: "Pattern recognition scanner",
                  },
                  {
                    content: "YES",
                  },
                  {
                    content: "YES",
                  },
                  {
                    content: "YES",
                  },
                ],
                [
                  {
                    content: "Market data",
                  },
                  {
                    content: "N/A",
                  },
                  {
                    content: "ON A LIMITED TRIAL BASIS FOR DEMO ACCOUNTS",
                  },
                  {
                    content: "NO",
                  },
                ],
              ]}
            />
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </OneColumn>
  );
};

export default AccountComparisonTable;
