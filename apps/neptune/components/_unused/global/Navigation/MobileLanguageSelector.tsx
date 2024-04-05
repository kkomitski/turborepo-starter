/* eslint-disable uinext/next/no-html-link-for-pages */
import { awsImage } from "ui/helpers/constants";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const MobileLanguageSelector = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {}, []);

  return (
    <div className="mb-12 lg:hidden">
      <div className="mb-4 flex justify-end pb-4 lg:relative">
        <button
          id="mobileMegamenuLanguageSelectorBtn"
          className="flex items-center gap-x-2 rounded-lg text-sm"
          type="button"
          onClick={() => setIsOpen(true)}
        >
          <span>
            <Image
              width={22}
              height={16}
              src={awsImage("flag_GB.png")}
              alt=""
            />
          </span>
          <span>ENG</span>
          <svg
            className="stroke-navy-100"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6 3.33317L10.6667 7.99984L6 12.6665"
              stroke="inherit"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <div
          id="mobileMegamenuLanguageSelector"
          className={
            "fixed left-0 top-0 z-40 h-screen w-full bg-navy-70 px-4 py-6 text-white " +
            (isOpen ? "" : "hidden")
          }
        >
          <div className="mb-4 flex items-center justify-between xxs:mb-11">
            <span className="block text-2xl">Please select a country</span>
            <button
              id="mobileMegamenuLanguageSelectorCloseBtn"
              onClick={() => setIsOpen(false)}
              type="button"
            >
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 24L24 8M8 8L24 24"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
          <span className="mb-2 block uppercase">EMEA</span>
          <div className="mb-4 grid grid-cols-2 gap-1 xxs:mb-8">
            <a
              href="/de-de/"
              className="flex items-center gap-x-2 bg-navy-40 p-2 text-sm no-underline hover:bg-navy-20"
            >
              <Image
                className="h-4 w-[22px]"
                width={22}
                height={16}
                src={awsImage("flag_DE.png")}
                alt=""
              />
              <span>Deutschland</span>
            </a>
            <a
              href="/nb-no/"
              className="flex items-center gap-x-2 bg-navy-40 p-2 text-sm no-underline hover:bg-navy-20"
            >
              <Image
                className="h-4 w-[22px]"
                width={22}
                height={16}
                src={awsImage("flag_NO.png")}
                alt=""
              />
              <span>Norge</span>
            </a>
            <a
              href="/es-es/"
              className="flex items-center gap-x-2 bg-navy-40 p-2 text-sm no-underline hover:bg-navy-20"
            >
              <Image
                className="h-4 w-[22px]"
                width={22}
                height={16}
                src={awsImage("flag_ES.png")}
                alt=""
              />
              <span>España</span>
            </a>
            <a
              href="/de-at/"
              className="flex items-center gap-x-2 bg-navy-40 p-2 text-sm no-underline hover:bg-navy-20"
            >
              <Image
                className="h-4 w-[22px]"
                width={22}
                height={16}
                src={awsImage("flag_AT.png")}
                alt=""
              />
              <span>Österreich</span>
            </a>
            <a
              href="/fr-fr/"
              className="flex items-center gap-x-2 bg-navy-40 p-2 text-sm no-underline hover:bg-navy-20"
            >
              <Image
                className="h-4 w-[22px]"
                width={22}
                height={16}
                src={awsImage("flag_FR.png")}
                alt=""
              />
              <span>France</span>
            </a>
            <a
              href="/pl-pl/"
              className="flex items-center gap-x-2 bg-navy-40 p-2 text-sm no-underline hover:bg-navy-20"
            >
              <Image
                className="h-4 w-[22px]"
                width={22}
                height={16}
                src={awsImage("flag_PO.png")}
                alt=""
              />
              <span>Polska</span>
            </a>
            <a
              href="/en-ie/"
              className="flex items-center gap-x-2 bg-navy-40 p-2 text-sm no-underline hover:bg-navy-20"
            >
              <Image
                className="h-4 w-[22px]"
                width={22}
                height={16}
                src={awsImage("flag_IE.png")}
                alt=""
              />
              <span>Ireland</span>
            </a>
            <a
              href="/sv-se/"
              className="flex items-center gap-x-2 bg-navy-40 p-2 text-sm no-underline hover:bg-navy-20"
            >
              <Image
                className="h-4 w-[22px]"
                width={22}
                height={16}
                src={awsImage("flag_SE.png")}
                alt=""
              />
              <span>Sverige</span>
            </a>
            <a
              href="/it-it/"
              className="flex items-center gap-x-2 bg-navy-40 p-2 text-sm no-underline hover:bg-navy-20"
            >
              <Image
                className="h-4 w-[22px]"
                width={22}
                height={16}
                src={awsImage("flag_IT.png")}
                alt=""
              />
              <span>Italia</span>
            </a>
            <a
              href="/en-gb/"
              className="flex items-center gap-x-2 bg-azure-70 p-2 text-sm no-underline"
            >
              <Image
                className="h-4 w-[22px]"
                width={22}
                height={16}
                src={awsImage("flag_GB.png")}
                alt=""
              />
              <span>United Kingdom</span>
            </a>
          </div>

          <span className="mb-2 block uppercase">APAC</span>
          <div className="mb-4 grid gap-1 xxs:mb-8">
            <span className="flex items-center gap-x-2 bg-navy-40 p-2 text-sm no-underline hover:bg-navy-20">
              <Image
                className="h-4 w-[22px]"
                width={22}
                height={16}
                src={awsImage("flag_AU.png")}
                alt=""
              />
              <span className="inline-flex gap-x-2">
                <a href="/en-au/">Australia</a> | <a href="/en-au/">English</a>{" "}
                <a href="/zh-au/">简体中文</a>
              </span>
            </span>
            <span className="flex items-center gap-x-2 bg-navy-40 p-2 text-sm no-underline hover:bg-navy-20">
              <Image
                className="h-4 w-[22px]"
                width={22}
                height={16}
                src={awsImage("flag_NZ.png")}
                alt=""
              />
              <span className="inline-flex gap-x-2">
                <a href="/en-nz/">New Zealand</a> |{" "}
                <a href="/en-nz/">English</a> <a href="/zh-nz/">简体中文</a>{" "}
              </span>
            </span>
            <span className="flex items-center gap-x-2 bg-navy-40 p-2 text-sm no-underline hover:bg-navy-20">
              <Image
                className="h-4 w-[22px]"
                width={22}
                height={16}
                src={awsImage("flag_SG.png")}
                alt=""
              />
              <span className="inline-flex gap-x-2">
                <a href="/en-sg/">Singapore</a> | <a href="/en-sg/">English</a>{" "}
                <a href="/zh-sg">简体中文</a>
              </span>
            </span>
          </div>

          <span className="mb-2 block uppercase">NAFTA</span>
          <div className="mb-4 grid gap-1 xxs:mb-8">
            <span className="flex items-center gap-x-2 bg-navy-40 p-2 text-sm no-underline hover:bg-navy-20">
              <Image
                className="h-4 w-[22px]"
                width={22}
                height={16}
                src={awsImage("flag_CA.png")}
                alt=""
              />
              <span className="inline-flex gap-x-2">
                <a href="/en-ca/">Canada</a> | <a href="/en-ca/">English</a>{" "}
                <a href="/en-ca/chinese">简体中文</a>
              </span>
            </span>
          </div>

          <span className="mb-2 block uppercase">INTERNATIONAL</span>
          <div className="grid gap-1">
            <span className="flex items-center gap-x-2 bg-navy-40 p-2 text-sm no-underline hover:bg-navy-20">
              <Image
                className="h-4 w-[22px]"
                width={22}
                height={16}
                src={awsImage("flag_international.png")}
                alt=""
              />
              <span className="inline-flex gap-x-2">
                <a href="/en-gb">International</a> | <a href="/en">English</a>{" "}
                <a href="/zh">简体中文</a>
              </span>
            </span>
          </div>
        </div>
      </div>
      <Link
        className="flex items-center justify-center gap-x-3 rounded-full bg-indigo-200 px-6 py-4 text-sm font-semibold no-underline"
        href="/markets"
      >
        <span>Search instruments</span>
        <svg
          width="13"
          height="14"
          viewBox="0 0 13 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.5 13L8.5 9M9.83333 5.66667C9.83333 8.244 7.744 10.3333 5.16667 10.3333C2.58934 10.3333 0.5 8.244 0.5 5.66667C0.5 3.08934 2.58934 1 5.16667 1C7.744 1 9.83333 3.08934 9.83333 5.66667Z"
            stroke="#101626"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </Link>
    </div>
  );
};

export default MobileLanguageSelector;
