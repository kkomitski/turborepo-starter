import { awsImage } from "@/helpers/constants";
import Image from "next/image";
import Link from "next/link";
import React, { ReactNode } from "react";

const PerformanceAnalytics = ({
  title,
  content,
  image,
}: {
  title?: string | ReactNode;
  content?: ReactNode;
  image?: string;
}) => {
  return (
    <section className="Module menu-section bg-white-95">
      <div className="main-xl-container relative h-full py-0">
        <div className="flex h-full flex-col lg:flex-row">
          <Image
            className="absolute left-0 top-0 hidden h-full object-cover lg:block"
            src={awsImage("web-platform_analytics-side-bg.png")}
            alt=""
            width={370}
            height={905}
          />
          <div className="order-2 flex items-center pb-20 lg:order-1 lg:w-7/12 lg:py-20">
            <Image
              className="relative mx-auto h-auto lg:ml-0 lg:pr-12"
              src={
                image
                  ? image
                  : awsImage("web-platform_performance-analytics-img.png")
              }
              width={689}
              height={431}
              alt=""
            />
          </div>
          <div className="order-1 py-10 lg:order-2 lg:w-5/12 lg:border-l lg:border-l-navy-100 lg:px-6 lg:py-20">
            <div className="relative -ml-6 mb-6 border-l-8 border-black pl-4">
              <h2 className="headline-lg mb-6">
                {title ? title : "Performance analytics"}
              </h2>
            </div>
            <div className="text-xl">
              {content ? (
                content
              ) : (
                <>
                  <p className="mb-6">
                    Performance analytics analyses your trading history and
                    presents your data in an intuitive and meaningful way.
                    Understand which trading behaviours and patterns are making
                    you the most money, where your strategy is leaking money,
                    and your current level of risk.
                  </p>
                  <p>Available to all live account holders</p>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PerformanceAnalytics;
