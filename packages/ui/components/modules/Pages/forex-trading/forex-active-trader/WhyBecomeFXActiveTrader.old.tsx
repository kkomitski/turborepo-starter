import { awsImage } from "@/helpers/constants";
import Image from "next/image";
;

const WhyBecomeFXActiveTrader = () => {
  return (
    <section>
      <div className="main-xl-container relative py-0">
        <div className="flex flex-col lg:flex-row">
          <Image
            className="absolute left-0 top-0 hidden h-full object-cover lg:block"
            src={awsImage("fx-active_why-become-side-bg.jpg")}
            alt=""
            width={370}
            height={905}
          />
          <Image
            className="absolute top-0 bottom-0 -left-[15%] my-auto hidden lg:block lg:w-8/12 3xl:w-7/12"
            src={awsImage("fx-active_why-become-side-img.png")}
            alt=""
            width={1256}
            height={969}
          />

          <div className="lg:w-7/12"></div>
          <div className="order-1 pt-20 lg:order-2 lg:w-5/12 lg:border-l lg:border-l-navy-100 lg:py-20 lg:px-6">
            <div className="relative -ml-6 mb-10 border-l-8 border-black pl-4">
              <small className="mb-4 block text-xs uppercase">
                Web platform
              </small>
              <h2 className="headline-lg">Why become an FX Active trader?</h2>
            </div>
            <div className="mb-10 space-y-2">
              <div className="flex items-center gap-x-2 rounded-lg p-3 shadow-lg">
                <Image
                  className="h-12 w-12"
                  width={48}
                  height={48}
                  src={awsImage("icon_chart-square-bar-48-black.svg")}
                  alt=""
                />
                <p className="mb-0 text-xl">
                  Trade raw spreads from 0.0 pips on six major FX pairs
                  including EUR/USD and GBP/USD
                </p>
              </div>
              <div className="flex items-center gap-x-2 rounded-lg p-3 shadow-lg">
                <Image
                  className="h-12 w-12"
                  width={48}
                  height={48}
                  src={awsImage("icon_receipt-tax-48-black.svg")}
                  alt=""
                />

                <p className="mb-0 text-xl">
                  Benefit from low commissions at 0.0025% per transaction
                </p>
              </div>
              <div className="flex items-center gap-x-2 rounded-lg p-3 shadow-lg">
                <Image
                  className="h-12 w-12"
                  width={48}
                  height={48}
                  src={awsImage("icon_pound-magnifying-glass-48-black.svg")}
                  alt=""
                />

                <p className="mb-0 text-xl">
                  Trading on true price action ensures wholly transparent order
                  execution
                </p>
              </div>
              <div className="flex items-center gap-x-2 rounded-lg p-3 shadow-lg">
                <Image
                  className="h-12 w-12"
                  width={48}
                  height={48}
                  src={awsImage("icon_switch-vertical-48-black.svg")}
                  alt=""
                />

                <p className="mb-0 text-xl">
                  Trade on as many as 330 FX instruments, or 175+ pairs on MT4
                </p>
              </div>
            </div>
            <div className="mb-4 flex flex-col lg:mb-0">
              <a
                className="js-modal btn btn-azure"
                data-iframe-params="?jid=gb3&amp;iaid=null&amp;lsrc=1"
                data-url="/en-gb/onboarding"
                data-function="demo"
                data-label="Create Account"
                href="https://signup.cmcmarkets.com/#/emailRegistration?jid=gb3&amp;iaid=null&amp;lsrc=1"
              >
                Open demo account
              </a>
            </div>
          </div>
        </div>
      </div>
      <Image
        className="w-full lg:hidden"
        src={awsImage("fx-active_why-become-side-mob.png")}
        alt=""
        width={1170}
        height={958}
      />
    </section>
  );
};

export default WhyBecomeFXActiveTrader;
