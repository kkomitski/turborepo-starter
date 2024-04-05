;
import InstrumentsTable from "@/components/tables/InstrumentTable/InstrumentsTable";
import {
  ColumnMapping,
  InstrumentMapping,
} from "@/components/tables/InstrumentTable/InstrumentTableTypes";
import Image from "next/image";
import { awsImage } from "@/helpers/constants";
import Lines from "@/components/global/Misc/Lines";

const FXAdvantage = () => {
  const columnMapping: ColumnMapping[] = [
    {
      name: "Product",
      nameOverride: "Instrument",
    },
    {
      name: "Min Spread",
    },
    {
      name: "FX Active Commission",
      nameOverride: "FX Active Commission \n (Per US $100,000)",
    },
    {
      name: "Min Spread",
      nameOverride: "Standard Account \n Min Spread",
    },
    {
      name: "Margin MT4",
      nameOverride: "Margin Rate",
    },
  ];

  const instrumentMapping: InstrumentMapping[] = [
    {
      tabName: "Majors",
      instruments: [
        "X-AALUO",
        "X-AARDJ",
        "X-AASKN",
        "X-AAZGX",
        "X-ABFPO",
        "X-ABFQF",
      ],
      columns: [
        {
          name: "Product",
          nameOverride: "Instrument",
        },
        {
          name: "FX Active Min Spread",
          nameOverride: "FX Active \n Min Spread",
        },
        {
          name: "Min Spread",
          nameOverride: "Standard CFD Account \n Min Spread",
        },
        {
          name: "Margin",
          nameOverride: "Margin Rate",
        },
        {
          name: "FX Active Commission",
          nameOverride: "Commission \n (Per US $100,000)",
        },
      ],
    },
    {
      tabName: "Minors",
      instruments: [
        "X-AALTL",
        "X-AALTN",
        "X-AALTT",
        "X-AALTU",
        "X-AALTZ",
        "X-AALUF",
        "X-AANHF",
        "X-AANHG",
        "X-AANHM",
        "X-AANHN",
        "X-AANHR",
        "X-AANHV",
        "X-AANIB",
        "X-AANYY",
        "X-AANYZ",
        "X-AANZE",
        "X-AANZF",
        "X-AANZJ",
        "X-AANZN",
        "X-AANZT",
        "X-AARBF",
        "X-AARBI",
        "X-AARBK",
        "X-AARBY",
        "X-AARCM",
        "X-AARDA",
        "X-AASJF",
        "X-AASJJ",
        "X-AASJM",
        "X-AASJT",
        "X-AASJY",
        "X-AASKE",
        "X-AAZFZ",
        "X-AAZGA",
        "X-AAZGC",
        "X-AAZGI",
        "X-AAZGJ",
        "X-AAZGN",
        "X-AAZGX",
        "X-ABFQA",
        "X-ABFQB",
        "X-ABFQM",
        "X-ABFQR",
      ],
      loadMoreEnabled: true,
      columns: [
        {
          name: "Product",
          nameOverride: "Instrument",
        },
        {
          name: "Min Spread Discount",
          nameOverride: "Min Spread",
        },
        {
          name: "Min Spread",
          nameOverride: "Standard \n CFD Account \n Min Spread",
        },
        {
          name: "Margin MT4",
          nameOverride: "Margin Rate",
        },
        {
          name: "Spread Discount MT4",
          nameOverride: "Spread Discount",
        },
      ],
    },
    {
      tabName: "Exotics",
      loadMoreEnabled: true,
      instruments: [
        "X-AALTW",
        "X-AALTX",
        "X-AALUE",
        "X-AALUI",
        "X-AALUK",
        "X-AALUL",
        "X-AALUN",
        "X-AANHO",
        "X-AANHP",
        "X-AANHU",
        "X-AANHW",
        "X-AANHY",
        "X-AANHZ",
        "X-AANIA",
        "X-AANZG",
        "X-AANZH",
        "X-AANZM",
        "X-AANZO",
        "X-AANZQ",
        "X-AANZR",
        "X-AANZS",
        "X-AARBX",
        "X-AARCJ",
        "X-AARCK",
        "X-AARCY",
        "X-AARDD",
        "X-AARDF",
        "X-AARDH",
        "X-AARDI",
        "X-AARDV",
        "X-AASJS",
        "X-AASJV",
        "X-AASJW",
        "X-AASKD",
        "X-AASKH",
        "X-AASKJ",
        "X-AASKK",
        "X-AASKM",
        "X-AATQA",
        "X-AATQB",
        "X-AATQC",
        "X-AATQG",
        "X-AATQH",
        "X-AATQI",
        "X-AATQJ",
        "X-AATQL",
        "X-AATQM",
        "X-AATQN",
        "X-AATQP",
        "X-AATQQ",
        "X-AATQR",
        "X-AATQS",
        "X-AAYWA",
        "X-AAYWB",
        "X-AAYWC",
        "X-AAYWG",
        "X-AAYWH",
        "X-AAYWI",
        "X-AAYWJ",
        "X-AAYWK",
        "X-AAYWN",
        "X-AAYWO",
        "X-AAYWQ",
        "X-AAYWS",
        "X-AAYWT",
        "X-AAYWU",
        "X-AAZGK",
        "X-AAZGL",
        "X-AAZGQ",
        "X-AAZGR",
        "X-AAZGT",
        "X-AAZGU",
        "X-AAZGW",
        "X-ABAIB",
        "X-ABAIC",
        "X-ABAID",
        "X-ABAII",
        "X-ABAIJ",
        "X-ABAIK",
        "X-ABAIL",
        "X-ABAIN",
        "X-ABAIP",
        "X-ABAIQ",
        "X-ABAIS",
        "X-ABAIT",
        "X-ABAIU",
        "X-ABAIV",
        "X-ABCBE",
        "X-ABCBF",
        "X-ABCBG",
        "X-ABCBL",
        "X-ABCBM",
        "X-ABCBN",
        "X-ABCBO",
        "X-ABCBQ",
        "X-ABCBS",
        "X-ABCBT",
        "X-ABCBU",
        "X-ABCBW",
        "X-ABCBX",
        "X-ABCBY",
        "X-ABCEQ",
        "X-ABCER",
        "X-ABCES",
        "X-ABCEX",
        "X-ABCEY",
        "X-ABCEZ",
        "X-ABCFA",
        "X-ABCFC",
        "X-ABCFE",
        "X-ABCFF",
        "X-ABCFG",
        "X-ABCFI",
        "X-ABCFJ",
        "X-ABCFK",
        "X-ABFPN",
        "X-ABFPW",
        "X-ABFPY",
        "X-ABFPZ",
        "X-ABFQC",
        "X-ABFQD",
        "X-ABFQJ",
        "X-ABFQK",
        "X-ABFQN",
        "X-ABFQP",
        "X-ABFQT",
        "X-ABFQV",
      ],
      columns: [
        {
          name: "Product",
          nameOverride: "Instrument",
        },
        {
          name: "Min Spread Discount",
          nameOverride: "Min Spread",
        },
        {
          name: "Min Spread",
          nameOverride: "Standard \n CFD Account \n Min Spread",
        },
        {
          name: "Margin MT4",
          nameOverride: "Margin Rate",
        },
        {
          name: "Spread Discount MT4",
          nameOverride: "Spread Discount",
        },
      ],
    },
  ];

  return (
    <section className="relative">
      <Lines left />
      <div className="main-xl-container lg:pb-20">
        <Image
          className="mb-10"
          width={80}
          height={77}
          alt="FX Active"
          src={awsImage("account-type__forex-gfx.png")}
        />
        <div className="flex flex-col lg:flex-row lg:gap-x-16">
          <div className="mb-10 lg:mb-0 lg:w-5/12">
            <h2 className="headline-lg relative -ml-6 mb-6 border-l-8 border-black pl-4">
              The FX Active <span className="lg:block">advantage</span>
            </h2>
            <p className="text-xl">
              Trade on EUR/USD, GBP/USD, AUD/USD, NZD/USD, USD/CAD, and USD/JPY,
              with spreads from 0.0 pips, plus enjoy a 25% spread discount on
              all our other forex pairs. FX Active is available on CMC
              Markets&apos; own platform and on MetaTrader 4. With an FX Active
              account, you can also trade on all the instruments available with
              a standard CFD account on either platform.
            </p>
          </div>

          <div className="lg:w-7/12">
            <InstrumentsTable
              searchEnabled={false}
              columns={columnMapping}
              instrumentMappings={instrumentMapping}
              instrumentDataType="MT4"
            />
            <p className="pt-10 text-sm text-navy-40">
              A minimum spread is the lowest spread that will be shown on the
              given product. Minimum spread will vary subject to after-hours
              trading. If the underlying market spread widens throughout the
              trading day, or you are trading out of hours, the platform spread
              may also widen. The spreads shown are for the first price
              available for the average market trade/bet sizes in the relevant
              product. The spread will widen for larger trade/bet sizes, see our
              platform for more information.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FXAdvantage;
