import OnboardingButton from "@/components/elements/OnboardingButton";
import { awsImage } from "@/helpers/constants";
import Image from "next/image";
import Link from "next/link";
import React, { ReactNode } from "react";

type Point = {
  title: string | ReactNode;
  description: string | ReactNode;
  icon: string;
};

const PinpointPricing = ({
  title,
  list,
}: {
  title?: string;
  list: Array<Point>;
}) => {
  return (
    <section className="relative pb-32 md:pb-60 xl:pb-72">
      <div className="main-xl-container">
        <h2 className="headline-lg mb-20 text-center">
          {title ?? "Pinpoint pricing"}
        </h2>
        <div className="mb-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {list.map((point, index) => (
            <div key={index} className="bg-white-95 px-3 py-4 shadow-lg">
              <Image
                className="mb-2 h-12 w-12"
                width={48}
                height={48}
                alt=""
                src={point.icon}
              />
              <h3 className="mb-2 text-xl font-semibold">{point.title}</h3>
              <p>{point.description}</p>
            </div>
          ))}
        </div>
        <div className="flex justify-center">
          <div className="flex flex-col gap-2 xxs:flex-row">
            <OnboardingButton
              className="mx-auto"
              account="live"
              variant="azure"
            >
              Create account
            </OnboardingButton>
            <OnboardingButton
              className="mx-auto"
              account="demo"
              variant="primary-outline"
            >
              Open demo account
            </OnboardingButton>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 mx-auto flex translate-y-1/2 justify-center px-6 lg:px-0">
        <Image
          className="h-auto w-full max-w-5xl shadow-xl"
          width={1024}
          height={470}
          src={awsImage("web-platform_mid-img-v2.png")}
          unoptimized={true}
          loading="lazy"
          alt=""
        />
      </div>
    </section>
  );
};

export default PinpointPricing;
