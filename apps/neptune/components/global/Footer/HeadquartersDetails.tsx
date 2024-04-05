import { awsImage } from "@/helpers/constants";
import Image from "next/image";
import React from "react";

const HeadquartersDetails = () => {
  return (
    <div className="border-t border-t-navy-70 pb-14 pt-4 md:col-span-7 md:pb-0">
      <span className="mb-4 block uppercase"> CMC Markets Headquarters </span>
      <div className="flex flex-col gap-y-4">
        <div className="flex flex-col gap-x-2.5 md:flex-row md:items-center">
          <Image
            className="mb-2 h-[14px] w-5 md:mb-0"
            width="20"
            height="14"
            src={awsImage("flag_GB.png")}
            alt=""
          />
          <span>133 Houndsditch, London, EC3A 7BX</span>
        </div>
        <div className="flex flex-col gap-x-2.5 md:flex-row md:items-center">
          <Image
            className="mb-2 h-[14px] w-5 md:mb-0"
            width="20"
            height="14"
            src={awsImage("flag_EU.svg")}
            alt=""
          />
          <span>Garden Tower Neue Mainzer Str. 46-50, Frankfurt, 60311</span>
        </div>
        <div className="flex flex-col gap-x-2.5 md:flex-row md:items-center">
          <Image
            className="mb-2 h-[14px] w-5 md:mb-0"
            width="20"
            height="14"
            src={awsImage("flag_AU.png")}
            alt=""
          />
          <span>
            Level 20, Tower 3, International Towers 300 Barangaroo Avenue
          </span>
        </div>
      </div>
    </div>
  );
};

export default HeadquartersDetails;
