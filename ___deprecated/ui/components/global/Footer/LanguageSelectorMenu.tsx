import { awsImage } from "@/helpers/constants";
import Image from "next/image";
const LanguageSelectorMenu = ({ isOpen = false }: { isOpen: Boolean }) => {
  return (
    <div
      id="footerLanguageSelector"
      className={
        "absolute top-11 z-10 w-full max-w-[342px] rounded-b-lg rounded-tl-lg bg-navy-70 px-4 py-6 " +
        (isOpen ? "block" : "hidden")
      }
    >
      <span className="mb-2 block uppercase">EMEA</span>
      <div className="mb-8 grid grid-cols-2 gap-1">
        <a
          href="https://www.cmcmarkets.com/de-de"
          className="flex items-center gap-x-2 bg-navy-40 p-2 text-sm no-underline hover:bg-navy-20"
        >
          <Image className="h-4 w-[22px]" src={awsImage("flag_DE.png")} alt="" width={22} height={16} />
          <span>Deutschland</span>
        </a>
        <a
          href="https://www.cmcmarkets.com/nb-no"
          className="flex items-center gap-x-2 bg-navy-40 p-2 text-sm no-underline hover:bg-navy-20"
        >
          <Image className="h-4 w-[22px]" src={awsImage("flag_NO.png")} alt="" width={22} height={16} />
          <span>Norge</span>
        </a>
        <a
          href="https://www.cmcmarkets.com/es-es"
          className="flex items-center gap-x-2 bg-navy-40 p-2 text-sm no-underline hover:bg-navy-20"
        >
          <Image className="h-4 w-[22px]" src={awsImage("flag_ES.png")} alt="" width={22} height={16} />
          <span>España</span>
        </a>
        <a
          href="https://www.cmcmarkets.com/de-at"
          className="flex items-center gap-x-2 bg-navy-40 p-2 text-sm no-underline hover:bg-navy-20"
        >
          <Image className="h-4 w-[22px]" src={awsImage("flag_AT.png")} alt="" width={22} height={16} />
          <span>Österreich</span>
        </a>
        <a
          href="https://www.cmcmarkets.com/fr-fr"
          className="flex items-center gap-x-2 bg-navy-40 p-2 text-sm no-underline hover:bg-navy-20"
        >
          <Image className="h-4 w-[22px]" src={awsImage("flag_FR.png")} alt="" width={22} height={16} />
          <span>France</span>
        </a>
        <a
          href="https://www.cmcmarkets.com/pl-pl"
          className="flex items-center gap-x-2 bg-navy-40 p-2 text-sm no-underline hover:bg-navy-20"
        >
          <Image className="h-4 w-[22px]" src={awsImage("flag_PO.png")} alt="" width={22} height={16} />
          <span>Polska</span>
        </a>
        <a
          href="https://www.cmcmarkets.com/en-ie"
          className="flex items-center gap-x-2 bg-navy-40 p-2 text-sm no-underline hover:bg-navy-20"
        >
          <Image className="h-4 w-[22px]" src={awsImage("flag_IE.png")} alt="" width={22} height={16} />
          <span>Ireland</span>
        </a>
        <a
          href="https://www.cmcmarkets.com/sv-se"
          className="flex items-center gap-x-2 bg-navy-40 p-2 text-sm no-underline hover:bg-navy-20"
        >
          <Image className="h-4 w-[22px]" src={awsImage("flag_SE.png")} alt="" width={22} height={16} />
          <span>Sverige</span>
        </a>
        <a
          href="https://www.cmcmarkets.com/it-it"
          className="flex items-center gap-x-2 bg-navy-40 p-2 text-sm no-underline hover:bg-navy-20"
        >
          <Image className="h-4 w-[22px]" src={awsImage("flag_IT.png")} alt="" width={22} height={16} />
          <span>Italia</span>
        </a>
        <a
          href="https://www.cmcmarkets.com/en-gb"
          className="flex items-center gap-x-2 bg-azure-70 p-2 text-sm no-underline"
        >
          <Image className="h-4 w-[22px]" src={awsImage("flag_GB.png")} alt="" width={22} height={16} />
          <span>United Kingdom</span>
        </a>
      </div>

      <span className="mb-2 block uppercase">APAC</span>
      <div className="mb-8 grid gap-1">
        <span className="flex items-center gap-x-2 bg-navy-40 p-2 text-sm no-underline hover:bg-navy-20">
          <Image className="h-4 w-[22px]" src={awsImage("flag_AU.png")} alt="" width={22} height={16} />
          <span className="inline-flex gap-x-2">
            <a href="https://www.cmcmarkets.com/en-au">Australia</a> |
            <a href="https://www.cmcmarkets.com/en-au">English</a>
            <a href="https://www.cmcmarkets.com/zh-au">简体中文</a>
          </span>
        </span>
        <span className="flex items-center gap-x-2 bg-navy-40 p-2 text-sm no-underline hover:bg-navy-20">
          <Image className="h-4 w-[22px]" src={awsImage("flag_NZ.png")} alt="" width={22} height={16} />
          <span className="inline-flex gap-x-2">
            {" "}
            <a href="https://www.cmcmarkets.com/en-nz">New Zealand</a> |
            <a href="https://www.cmcmarkets.com/en-nz">English</a>
            <a href="https://www.cmcmarkets.com/zh-nz">简体中文</a>
          </span>
        </span>
        <span className="flex items-center gap-x-2 bg-navy-40 p-2 text-sm no-underline hover:bg-navy-20">
          <Image className="h-4 w-[22px]" src={awsImage("flag_SG.png")} alt="" width={22} height={16} />
          <span className="inline-flex gap-x-2">
            {" "}
            <a href="https://www.cmcmarkets.com/en-sg">Singapore</a> |
            <a href="https://www.cmcmarkets.com/en-sg">English</a>
            <a href="https://www.cmcmarkets.com/zh-sg">简体中文</a>
          </span>
        </span>
      </div>

      <span className="mb-2 block uppercase">NAFTA</span>
      <div className="mb-8 grid gap-1">
        <span className="flex items-center gap-x-2 bg-navy-40 p-2 text-sm no-underline hover:bg-navy-20">
          <Image className="h-4 w-[22px]" src={awsImage("flag_CA.png")} alt="" width={22} height={16} />
          <span className="inline-flex gap-x-2">
            <a href="https://www.cmcmarkets.com/en-ca">Canada</a> |
            <a href="https://www.cmcmarkets.com/en-ca">English</a>{" "}
            <a href="https://www.cmcmarkets.com/en-ca/chinese">简体中文</a>
          </span>
        </span>
      </div>

      <span className="mb-2 block uppercase">INTERNATIONAL</span>
      <div className="grid gap-1">
        <span className="flex items-center gap-x-2 bg-navy-40 p-2 text-sm no-underline hover:bg-navy-20">
          <Image
            className="h-4 w-[22px]"
            src={awsImage("flag_international.png")}
            alt=""
            width={22}
            height={16}
          />
          <a href="https://www.cmcmarkets.com/en">International</a> |
          <a href="https://www.cmcmarkets.com/en">English</a>{" "}
          <a href="https://www.cmcmarkets.com/zh">简体中文</a>
        </span>
      </div>
    </div>
  );
};

export default LanguageSelectorMenu;
