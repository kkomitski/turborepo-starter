import Lines from "../../../components/global/Misc/Lines";
import constants, { awsImage } from "@/helpers/constants";
import Image from "next/image";
import React from "react";

const HeroAccoladesSectionA = ({
  fscsFootnote,
  awardsOverride,
}: {
  fscsFootnote: string;
  awardsOverride?: {
    year: string;
    title: string;
    subtitle: string;
  }[];
}) => {
  let awards = [
    {
      year: "2023",
      title: "No.1 Web Platform",
      subtitle: "ForexBrokers.com Awards",
    },
    {
      year: "2022",
      title: "Best Mobile Trading Platform",
      subtitle: "ADVFN International Financial Awards",
    },
    {
      year: "2022",
      title: "Best CFD Provider",
      subtitle: "Online Money Awards",
    },
  ];

  awards =
    awardsOverride && awardsOverride.length > 0 ? awardsOverride : awards;
  return (
    <section className="Module relative bg-white-95">
      <Lines left />

      <div className="main-xl-container py-0">
        <div className="flex flex-col md:flex-row">
          <div className="relative flex flex-col gap-y-1 py-10 md:w-2/5">
            <div className="flex items-center gap-x-3">
              <Image
                className="h-8 w-8"
                width={32}
                height={32}
                alt="FCA"
                src={awsImage("common_FCA-navy.svg")}
              />

              <span className="font-semibold">FCA regulated</span>
            </div>
            <div className="flex items-center gap-x-3">
              <Image
                className="h-8 w-8"
                width={32}
                height={32}
                alt="FSCS"
                src={awsImage("common_FSCS-navy.svg")}
              />

              <span className="font-semibold">
                Protected up to {constants.DIDS.UK_COMPENSATION_AMOUNT}
                <sup>{fscsFootnote}</sup>
              </span>
            </div>
            <div className="flex items-center gap-x-3">
              <Image
                className="h-8 w-8"
                width={32}
                height={32}
                alt="FTSE"
                src={awsImage("common_FTSE-navy.svg")}
              />

              <span className="font-semibold">FTSE-listed group</span>
            </div>
          </div>
          <div className="grid items-center gap-y-6 pb-10 md:w-3/5 md:grid-cols-3 md:gap-x-4 md:gap-y-0 md:pb-0">
            {awards.map((award, index) => (
              <div
                key={index}
                className="flex items-center gap-x-4 md:flex-col md:items-start"
              >
                <Image
                  className="mb-2"
                  src={awsImage("common_ribbon-navy.svg")}
                  width={78}
                  height={32}
                  alt="Ribbon"
                />
                <div>
                  <span className="mb-2 block text-xs uppercase">
                    {award.year} winner
                  </span>
                  <span className="block font-semibold">{award.title}</span>
                  <span className="block text-sm">{award.subtitle}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroAccoladesSectionA;
