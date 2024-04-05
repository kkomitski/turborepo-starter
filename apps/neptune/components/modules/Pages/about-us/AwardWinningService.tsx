import { awsImage } from "@/helpers/constants";
import { AwardObject } from "@/helpers/types/awards";
import Image from "next/image";
import React from "react";

const AwardWinningService = ({
  title,
  awards,
}: {
  title: string;
  awards: AwardObject[];
}) => {
  return (
    <section className="bg-white-95">
      <div className="main-xl-container">
        <div className="mb-10 lg:mb-20 lg:w-4/12">
          <h2 className="headline-lg relative -ml-6 border-l-8 border-black pl-4">
            {title}
          </h2>
        </div>
        <div className="grid gap-20 sm:grid-cols-2 sm:gap-x-10 md:grid-cols-3 xl:grid-cols-5 xl:gap-x-12">
          {awards.map((award: AwardObject, index: number) => (
            <div
              key={index}
              className="flex flex-col gap-x-4 px-6 sm:px-0 md:items-start"
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
                  {award.year} Winner
                </span>
                <span className="block font-semibold">{award.title}</span>
                <span className="block text-sm">{award.giver}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AwardWinningService;
