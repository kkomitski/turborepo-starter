import Image from "next/image";
import React, { useState } from "react";
import LanguageSelectorMenu from "./LanguageSelectorMenu";
import { awsImage } from "ui/helpers/constants";

const LanguageSelectorBtn = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative mb-4 flex justify-end border-b border-b-navy-70 pb-4">
      <button
        id="footerLanguageSelectorBtn"
        className="flex items-center gap-x-2 rounded-lg bg-navy-70 px-4 py-3 hover:bg-navy-40"
        type="button"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>
          <Image src={awsImage("flag_GB.png")} width={25} height={25} alt="" />
        </span>
        <span>ENG</span>
        <svg
          width="16"
          height="17"
          viewBox="0 0 16 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.6666 6.83545L7.99998 11.5021L3.33331 6.83545"
            stroke="white"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      <LanguageSelectorMenu isOpen={isOpen} />
    </div>
  );
};

export default LanguageSelectorBtn;
