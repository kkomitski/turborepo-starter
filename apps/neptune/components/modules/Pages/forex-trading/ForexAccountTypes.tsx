import OnboardingButton from "@/components/elements/OnboardingButton";
import {
  ColumnMapping,
  InstrumentMapping,
  InstrumentTableMapping,
} from "@/components/tables/InstrumentTable/InstrumentTableTypes";
import InstrumentsTable from "@/components/tables/InstrumentTable/InstrumentsTable";
import { awsImage } from "@/helpers/constants";
import Image from "next/image";
import Link from "next/link";
import React, { ForwardedRef, forwardRef } from "react";

type Props = {};

const ForexAccountTypes = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    // Instrument table mappings
    const sbInstrumentMapping: InstrumentTableMapping = {
      columns: [
        { name: "Product" },
        { name: "Min Spread" },
        { name: "Margin" },
        { name: "Price" },
      ],
      instruments: [
        {
          tabName: "Majors",
          instruments: [
            "X-AALUO",
            "X-AARBY",
            "X-AARDJ",
            "X-AASKN",
            "X-ABFQF",
            "X-ABFPO",
            "X-AASJY",
          ],
        },
        {
          tabName: "Minors",
          instruments: [
            "X-AALTU",
            "X-AALTZ",
            "X-AARBF",
            "X-AALUF",
            "X-AARDA",
            "X-AASJM",
            "X-AANZJ",
          ],
        },
        {
          tabName: "Exotics",
          instruments: [
            "X-ABFQO",
            "X-ABFPY",
            "X-ABFPW",
            "X-AARDI",
            "X-ABFQD",
            "X-ABFQJ",
            "X-ABFQK",
          ],
        },
        {
          tabName: "Forex indices",
          instruments: [
            "X-AHWRD",
            "X-AHWQW",
            "X-AHWQX",
            "X-AHWQS",
            "X-AHWQT",
            "X-AHWQY",
            "X-AHWRA",
          ],
        },
      ],
    };

    const cfdInstrumentMapping: InstrumentTableMapping = {
      columns: [
        { name: "Product" },
        { name: "Min Spread" },
        { name: "Margin" },
        { name: "Price" },
      ],
      instruments: [
        {
          tabName: "Majors",
          instruments: [
            "X-AALUO",
            "X-AARBY",
            "X-AARDJ",
            "X-AASKN",
            "X-ABFQF",
            "X-ABFPO",
            "X-AASJY",
          ],
        },
        {
          tabName: "Minors",
          instruments: [
            "X-AALTU",
            "X-AALTZ",
            "X-AARBF",
            "X-AALUF",
            "X-AARDA",
            "X-AASJM",
            "X-AANZJ",
          ],
        },
        {
          tabName: "Exotic",
          instruments: [
            "X-ABFQO",
            "X-ABFPY",
            "X-ABFPW",
            "X-AARDI",
            "X-ABFQD",
            "X-ABFQJ",
            "X-ABFQK",
          ],
        },
        {
          tabName: "Forex indices",
          instruments: [
            "X-AHWRD",
            "X-AHWQW",
            "X-AHWQX",
            "X-AHWQS",
            "X-AHWQT",
            "X-AHWQY",
            "X-AHWRA",
          ],
        },
      ],
    };

    const fxActiveInstrumentMapping: InstrumentTableMapping = {
      columns: [
        { name: "Product" },
        { name: "Min Spread Discount", nameOverride: "Min Spread" },
        {
          name: "Min Spread",
          nameOverride: "Standard \n CFD Account \n Min Spread",
        },
        {
          name: "Margin",
          nameOverride: "Margin rate",
          options: { decimal: 3 },
        },
        { name: "Spread Discount" },
      ],
      instruments: [
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
          loadMoreEnabled: false,
          columns: [
            { name: "Product" },
            {
              name: "FX Active Min Spread",
              nameOverride: "FX Active \n Min Spread",
            },
            {
              name: "Min Spread",
              nameOverride: "Standard \n CFD Account \n Min Spread",
            },
            {
              name: "Margin",
              nameOverride: "Margin rate",
              options: { decimal: 3 },
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
        },
        {
          tabName: "Exotic",
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
          ],
        },
      ],
    };

    return (
      <section className="Module menu-section relative bg-navy-100" ref={ref}>
        <div className="main-xl-container relative">
          <div className="mb-10 text-center text-white">
            <h2 className="headline-lg mb-6 text-center text-white">
              Account types for every trader
            </h2>
            <p className="mx-auto max-w-3xl text-xl">
              Whether you want to spread bet or trade CFDs, you&apos;ll get
              access to 330+ FX pairs with tight spreads and no hidden fees.
            </p>
          </div>
          <div className="mb-6 rounded-3xl bg-white-95 p-6 lg:p-10">
            <div className="mb-10 flex flex-col gap-x-10 lg:flex-row lg:items-center">
              <Image
                className="h-[88px] w-[88px]"
                src={awsImage("symbol_spread-betting-88.png")}
                alt=""
                width={88}
                height={88}
              />

              <div>
                <h3 className="mb-2 text-[28px] lg:text-[32px]">
                  Spread betting
                </h3>
                <p>
                  Spread betting is a tax-free<sup>6</sup> way of speculating on
                  the price movement of global financial instruments.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-y-10 lg:flex-row lg:gap-x-10 lg:gap-y-0">
              <div className="lg:w-5/12">
                <h4 className="mb-6 text-xl font-semibold">Benefits</h4>
                <div className="mb-10 space-y-2 lg:mb-14">
                  <div className="items-center rounded-lg bg-white px-4 py-3 shadow">
                    <span>
                      Pay no capital gains tax on profits<sup>6</sup>
                    </span>
                  </div>
                  <div className="items-center rounded-lg bg-white px-4 py-3 shadow">
                    <span>
                      Pay no stamp duty on profits<sup>6</sup>
                    </span>
                  </div>
                  <div className="items-center rounded-lg bg-white px-4 py-3 shadow">
                    <span>330+ FX pairs – more than anyone else</span>
                  </div>
                  <div className="items-center rounded-lg bg-white px-4 py-3 shadow">
                    <span>Access to 12,000 other financial instruments</span>
                  </div>
                  <div className="items-center rounded-lg bg-white px-4 py-3 shadow">
                    <span>Web platform and mobile app available</span>
                  </div>
                </div>
                <OnboardingButton
                  variant="azure"
                  className="mb-2"
                  account="demo"
                >
                  Open a demo account
                </OnboardingButton>
                <Link
                  className="btn btn-primary-outline btn-with-icon font-semibold"
                  href="/spread-betting"
                >
                  <span>Learn more</span>
                  <svg
                    width="14"
                    height="12"
                    viewBox="0 0 14 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.33333 1.16895L13 5.83561M13 5.83561L8.33333 10.5023M13 5.83561L1 5.83561"
                      stroke="#101626"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </Link>
              </div>
              <div className="lg:w-7/12">
                <h4 className="mb-6 text-xl font-semibold">Costs</h4>
                <InstrumentsTable
                  loadMoreEnabled={false}
                  columns={sbInstrumentMapping.columns}
                  instrumentMappings={sbInstrumentMapping.instruments}
                ></InstrumentsTable>
              </div>
            </div>
          </div>
          <div className="mb-6 overflow-x-hidden rounded-3xl bg-white-95 px-4 py-6 lg:p-10">
            <div className="mb-10 flex flex-col gap-x-10 lg:flex-row lg:items-center">
              <Image
                className="h-[88px] w-[88px]"
                src={awsImage("symbol_cfd-88.png")}
                alt=""
                width={88}
                height={88}
                unoptimized={true}
              />
              <div>
                <h3 className="mb-2 text-[28px] lg:text-[32px]">CFD trading</h3>
                <p>
                  CFD trading is a derivative product which enables you to trade
                  on the price movement of underlying financial assets, with no
                  stamp duty on profits<sup>6</sup>.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-y-10 lg:flex-row lg:gap-x-10 lg:gap-y-0">
              <div className="lg:w-5/12">
                <h4 className="mb-6 text-xl font-semibold">Benefits</h4>
                <div className="mb-14 space-y-2">
                  <div className="items-center rounded-lg bg-white px-4 py-3 shadow">
                    <span>
                      Pay no capital gains tax on profits<sup>6</sup>
                    </span>
                  </div>
                  <div className="items-center rounded-lg bg-white px-4 py-3 shadow">
                    <span>
                      Capital gains can be offset against losses<sup>6</sup>
                    </span>
                  </div>
                  <div className="items-center rounded-lg bg-white px-4 py-3 shadow">
                    <span>330+ FX pairs – more than anyone else</span>
                  </div>
                  <div className="items-center rounded-lg bg-white px-4 py-3 shadow">
                    <span>Access to 12,000 other financial instruments</span>
                  </div>
                  <div className="items-center rounded-lg bg-white px-4 py-3 shadow">
                    <span>Web platform and mobile app available</span>
                  </div>
                </div>
                <OnboardingButton
                  variant="azure"
                  className="mb-2"
                  account="demo"
                >
                  Open a demo account
                </OnboardingButton>
                <Link
                  className="btn btn-primary-outline btn-with-icon font-semibold"
                  href="/cfds"
                >
                  <span>Learn more</span>
                  <svg
                    width="14"
                    height="12"
                    viewBox="0 0 14 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.33333 1.16895L13 5.83561M13 5.83561L8.33333 10.5023M13 5.83561L1 5.83561"
                      stroke="#101626"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </Link>
              </div>
              <div className="lg:w-7/12">
                <h4 className="mb-6 text-xl font-semibold">Costs</h4>
                <InstrumentsTable
                  loadMoreEnabled={false}
                  columns={cfdInstrumentMapping.columns}
                  instrumentMappings={cfdInstrumentMapping.instruments}
                ></InstrumentsTable>
              </div>
            </div>
          </div>
          <div className="overflow-x-hidden rounded-3xl bg-white-95 px-4 py-6 lg:p-10">
            <div className="mb-10 flex flex-col gap-x-10 lg:flex-row lg:items-center">
              <Image
                className="h-[88px] w-[88px]"
                src={awsImage("symbol_fx-active-88.png")}
                alt=""
                width={88}
                height={88}
              />

              <div>
                <h3 className="mb-2 text-[28px] lg:text-[32px]">FX Active</h3>
                <p>
                  Our CFD account designed for forex traders who want spreads
                  from 0.0 pips on six major FX pairs, with a fixed low
                  commission rate
                  <sup>2</sup>. Plus, get a 25% spread discount on 300+ other FX
                  pairs.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-y-10 lg:flex-row lg:gap-x-10 lg:gap-y-0">
              <div className="lg:w-5/12">
                <h4 className="mb-6 text-xl font-semibold">Benefits</h4>
                <div className="mb-14 space-y-2">
                  <div className="items-center rounded-lg bg-white px-4 py-3 shadow">
                    <span>
                      Pay no stamp duty on profits<sup>6</sup>
                    </span>
                  </div>
                  <div className="items-center rounded-lg bg-white px-4 py-3 shadow">
                    <span>
                      Capital gains can be offset against losses<sup>6</sup>
                    </span>
                  </div>
                  <div className="items-center rounded-lg bg-white px-4 py-3 shadow">
                    <span>
                      Spreads from 0.0 pips on 6 major pairs<sup>2</sup>
                    </span>
                  </div>
                  <div className="items-center rounded-lg bg-white px-4 py-3 shadow">
                    <span>25% spread discount on 300+ FX pairs</span>
                  </div>
                  <div className="items-center rounded-lg bg-white px-4 py-3 shadow">
                    <span>Access to 12,000 other financial instruments</span>
                  </div>
                  <div className="items-center rounded-lg bg-white px-4 py-3 shadow">
                    <span>Web platform, mobile app and MT4 available</span>
                  </div>
                </div>
                <OnboardingButton
                  variant="azure"
                  className="mb-2"
                  account="demo"
                >
                  Open a demo account
                </OnboardingButton>
                <Link
                  className="btn btn-primary-outline btn-with-icon font-semibold"
                  href="/forex-trading/forex-active-trader"
                >
                  <span>Learn more</span>
                  <svg
                    width="14"
                    height="12"
                    viewBox="0 0 14 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.33333 1.16895L13 5.83561M13 5.83561L8.33333 10.5023M13 5.83561L1 5.83561"
                      stroke="#101626"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </Link>
              </div>
              <div data-bg-color="bg-white-95" className="lg:w-7/12">
                <h4 className="mb-6 text-xl font-semibold">Costs</h4>
                <InstrumentsTable
                  columns={fxActiveInstrumentMapping.columns}
                  instrumentMappings={fxActiveInstrumentMapping.instruments}
                  loadMoreEnabled={true}
                  type="MT4"
                />
                <p className="pt-10 text-sm text-navy-40">
                  A minimum spread is the lowest spread that will be shown on
                  the given product. Minimum spread will vary subject to
                  after-hours trading. If the underlying market spread widens
                  throughout the trading day, or you are trading out of hours,
                  the platform spread may also widen. The spreads shown are for
                  the first price available for the average market trade/bet
                  sizes in the relevant product. The spread will widen for
                  larger trade/bet sizes, see our platform for more information.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
);

ForexAccountTypes.displayName = "ForexAccountTypes";

export default ForexAccountTypes;
