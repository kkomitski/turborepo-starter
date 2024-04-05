import Button from "@/components/elements/Button";
import { awsImage } from "@/helpers/constants";
import Image from "next/image";
import React, { ReactNode } from "react";

const ExclusiveAccess = ({
  title,
  content,
}: {
  title?: string | ReactNode;
  content?: ReactNode;
}) => {
  return (
    <section className="Module menu-section bg-white-95">
      <div className="main-xl-container relative h-full py-0">
        <div className="flex h-full flex-col lg:flex-row">
          <Image
            className="absolute left-0 top-0 hidden h-full object-cover lg:block"
            src={awsImage("mobile-trading-app_news-and-insight-bg.png")}
            alt=""
            width={370}
            height={905}
          />
          <div className="order-2 -mx-6 flex items-center lg:order-1 lg:mx-0 lg:w-7/12 lg:py-20 lg:pb-20 lg:pl-20">
            <Image
              className="relative mx-auto hidden h-auto lg:ml-0 lg:block lg:pr-12"
              src={awsImage("mobile-trading-app_news-and-insight-img.png")}
              width={664}
              height={697}
              alt=""
            />
            <Image
              className="relative h-auto w-full lg:hidden"
              src={awsImage("mobile-trading-app_news-and-insight-mob.png")}
              width={750}
              height={801}
              alt=""
            />
          </div>
          <div className="order-1 py-10 lg:order-2 lg:w-5/12 lg:border-l lg:border-l-navy-100 lg:py-20 lg:px-6">
            <div className="relative -ml-6 mb-6 border-l-8 border-black pl-4">
              <small className="mb-4 block uppercase">
                Insights and analysis
              </small>
              <h2 className="headline-lg mb-6">
                {title ? title : "Exclusive access to market news and insight"}
              </h2>
            </div>
            <div className="text-xl">
              {content ? (
                content
              ) : (
                <>
                  <p className="mb-10">
                    Get free access to insight and analysis from our
                    award-winning in-house analysts<sup>2</sup>, as well as news
                    and market commentary from Reuters, a comprehensive economic
                    calendar, plus news and equity valuation data from
                    Morningstar.
                  </p>
                  <Button
                    variant="primary-outline"
                    href="/en-gb/news-and-analysis"
                    icon="arrow"
                    linkType="anchor"
                  >
                    View news & analysis
                  </Button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExclusiveAccess;
