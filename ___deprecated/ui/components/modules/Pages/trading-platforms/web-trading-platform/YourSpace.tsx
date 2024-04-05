/* eslint-disable @next/next/no-html-link-for-pages */
import Lines from "@/components/global/Misc/Lines";
import RightArrowSVG from "@/components/svg/RightArrowSVG";
import { awsImage } from "@/helpers/constants";
import Image from "next/image";
import Link from "next/link";
;

const YourSpace = () => {
  return (
    <section className="Module menu-section relative bg-white-95">
      <Lines left />
      <div className="main-xl-container relative py-0">
        <Image
          className="absolute right-0 top-0 hidden h-full object-cover lg:block"
          src={awsImage("web-platform_your-space-side-bg.png")}
          width={413}
          height={914}
          alt=""
        />
        <div className="flex flex-col gap-x-[72px] lg:flex-row">
          <div className="py-20 lg:w-5/12">
            <div className="relative -ml-6 mb-6 border-l-8 border-black pl-4">
              <h2 className="headline-lg">Your space, your place</h2>
            </div>
            <p className="mb-10 text-xl">
              Choose your own setup by customising the web-based platform to
              suit your individual style.
            </p>
            <div className="mb-10 space-y-2">
              <div className="flex items-center gap-x-2 rounded-lg p-3 shadow-lg">
                <svg
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 12.9575L11 14.9575L15 10.9575M21 12.9575C21 17.9281 16.9706 21.9575 12 21.9575C7.02944 21.9575 3 17.9281 3 12.9575C3 7.98696 7.02944 3.95752 12 3.95752C16.9706 3.95752 21 7.98696 21 12.9575Z"
                    stroke="#325FFF"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>

                <p className="mb-0 text-xl">Editable auto stop-loss order</p>
              </div>
              <div className="flex items-center gap-x-2 rounded-lg p-3 shadow-lg">
                <svg
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 12.9575L11 14.9575L15 10.9575M21 12.9575C21 17.9281 16.9706 21.9575 12 21.9575C7.02944 21.9575 3 17.9281 3 12.9575C3 7.98696 7.02944 3.95752 12 3.95752C16.9706 3.95752 21 7.98696 21 12.9575Z"
                    stroke="#325FFF"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>

                <p className="mb-0 text-xl">Default trade sizes</p>
              </div>
              <div className="flex items-center gap-x-2 rounded-lg p-3 shadow-lg">
                <svg
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 12.9575L11 14.9575L15 10.9575M21 12.9575C21 17.9281 16.9706 21.9575 12 21.9575C7.02944 21.9575 3 17.9281 3 12.9575C3 7.98696 7.02944 3.95752 12 3.95752C16.9706 3.95752 21 7.98696 21 12.9575Z"
                    stroke="#325FFF"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>

                <p className="mb-0 text-xl">Charting templates</p>
              </div>
              <div className="flex items-center gap-x-2 rounded-lg p-3 shadow-lg">
                <svg
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 12.9575L11 14.9575L15 10.9575M21 12.9575C21 17.9281 16.9706 21.9575 12 21.9575C7.02944 21.9575 3 17.9281 3 12.9575C3 7.98696 7.02944 3.95752 12 3.95752C16.9706 3.95752 21 7.98696 21 12.9575Z"
                    stroke="#325FFF"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>

                <p className="mb-0 text-xl">Customisable dashboards</p>
              </div>
            </div>
            <div className="flex flex-col">
              <a
                className="btn btn-primary-outline btn-with-icon"
                href="/en-gb/trading-platform/trading-tools"
              >
                <span>More on trading tools</span>
                <RightArrowSVG />
              </a>
            </div>
          </div>

          <div className="flex items-center py-20 lg:w-7/12">
            <Image
              className="relative -ml-6 h-auto w-[calc(100%+48px)] max-w-none lg:ml-0 lg:w-full"
              src={awsImage("web-platform_your-space-img.png")}
              width={1378}
              height={981}
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default YourSpace;
