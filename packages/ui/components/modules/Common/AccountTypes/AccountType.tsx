import Button from "@/components/elements/Button";
import OnboardingButton from "@/components/elements/OnboardingButton";
import constants, { awsImage } from "@/helpers/constants";
import Image from "next/image";
import Link from "next/link";
import React, { ReactNode } from "react";

type AccountTypes = {
  sb: AccountType;
  cfd: AccountType;
  fx: AccountType;
};

type AccountType = {
  image: string;
  title: string;
  description: ReactNode;
  list: BulletItem[];
  spreadDescription: string | ReactNode;
  scheme: string | ReactNode;
  ctaButtons: ReactNode;
};

type ClosingLine = {
  enabled: boolean;
  type?: "scheme" | "spreadDescription";
  textOverride?: "string" | ReactNode | undefined;
};

type BulletItem = {
  content: ReactNode;
  bulletType?: "tick" | "cross" | "minus";
};

const AccountType = ({
  type,
  footnotes,
  enableBulletPoints = true,
  closingLine = {
    enabled: true,
    type: "scheme",
  },
  imageOverride,
  titleOverride,
  descriptionOverride,
  listOverride,
  ctaOverride,
}: {
  type: "sb" | "cfd" | "fx";
  footnotes: Array<String>;
  enableBulletPoints?: boolean;
  closingLine?: ClosingLine;
  imageOverride?: string;
  titleOverride?: ReactNode | string;
  descriptionOverride?: ReactNode | string;
  listOverride?: Array<{
    content: ReactNode | string;
    bulletType?: "tick" | "cross" | "minus";
  }>;
  ctaOverride?: ReactNode;
}) => {
  const accountTypes: AccountTypes = {
    sb: {
      image: awsImage("account-type__spreadbetting-gfx.png"),
      title: "Spread betting",
      description: (
        <>
          A tax-efficient<sup>{footnotes[0]}</sup> way of speculating on the
          price movement of global financial instruments.
        </>
      ),
      list: [
        {
          content: (
            <>
              Go long or short on {constants.DIDS.INSTRUMENT_TOTAL_COUNT}{" "}
              instruments
            </>
          ),
          bulletType: "tick",
        },
        {
          content: <>Trade with leverage</>,
          bulletType: "tick",
        },
        {
          content: <>CMC web platform, iOS and Android app</>,
          bulletType: "tick",
        },
        {
          content: (
            <>
              Tax-free profits<sup>{footnotes[0]}</sup>
            </>
          ),
          bulletType: "tick",
        },
        {
          content: <>MT4 platform available</>,
          bulletType: "tick",
        },
      ],
      spreadDescription: `Spreads from ${constants.DIDS.GLOBAL_US_30_MIN_SPREAD} points on US 30`,
      scheme: (
        <>
          Available schemes:{" "}
          <span className="font-semibold">Price+, Alpha</span>
        </>
      ),
      ctaButtons: (
        <>
          <div className="flex flex-col">
            <OnboardingButton
              className="mb-2"
              variant="azure"
              account="live"
              params="jid=gb1&amp;iaid=null&amp;lsrc=1"
            >
              Create account
            </OnboardingButton>
            <Button
              variant="primary-outline"
              icon="arrow"
              href="/spread-betting"
            >
              More on spread betting
            </Button>
          </div>
        </>
      ),
    },
    cfd: {
      image: awsImage("account-type__cfd-gfx.png"),
      title: "CFD trading",
      description: (
        <>
          Trade on the price movement of underlying financial assets, with no
          stamp duty on profits<sup>{footnotes[0]}</sup>
        </>
      ),
      list: [
        {
          content: (
            <>
              Go long or short on {constants.DIDS.INSTRUMENT_TOTAL_COUNT}{" "}
              instruments
            </>
          ),
          bulletType: "tick",
        },
        {
          content: <>Trade with leverage</>,
          bulletType: "tick",
        },
        {
          content: <>CMC web platform, iOS and Android app</>,
          bulletType: "tick",
        },
        {
          content: (
            <>
              Pay no stamp duty on CFD trading profits<sup>{footnotes[0]}</sup>
            </>
          ),
          bulletType: "tick",
        },
        {
          content: <>MT4 platform available</>,
          bulletType: "tick",
        },
      ],
      spreadDescription: "Spreads from 1 point on UK 100",
      scheme: (
        <>
          Available schemes:{" "}
          <span className="font-semibold">Price+, Alpha</span>
        </>
      ),
      ctaButtons: (
        <>
          <div className="flex flex-col">
            <OnboardingButton
              className="mb-2"
              variant="azure"
              account="live"
              params="jid=gb1&amp;iaid=null&amp;lsrc=1"
            >
              Create account
            </OnboardingButton>
            <Button variant="primary-outline" icon="arrow" href="/cfds">
              More on CFD trading
            </Button>
          </div>
        </>
      ),
    },
    fx: {
      image: awsImage("account-type__forex-gfx.png"),
      title: "FX Active",
      description: (
        <>
          Commission-based forex trading<sup>{footnotes[0]}</sup>, designed for
          CFD traders who want to trade on pure price action.
        </>
      ),
      list: [
        {
          content: (
            <>
              Go long or short on {constants.DIDS.INSTRUMENT_TOTAL_COUNT}{" "}
              instruments
            </>
          ),
          bulletType: "tick",
        },
        {
          content: <>Trade with leverage</>,
          bulletType: "tick",
        },
        {
          content: <>CMC web platform, iOS and Android app</>,
          bulletType: "tick",
        },
        {
          content: (
            <>
              Pay no stamp duty on CFD trading profits<sup>{footnotes[1]}</sup>
            </>
          ),
          bulletType: "tick",
        },
        {
          content: <>MT4 platform available</>,
          bulletType: "tick",
        },
        {
          content: (
            <>
              Spreads from 0.0 pips on 6 major FX pairs<sup>{footnotes[0]}</sup>
            </>
          ),
          bulletType: "tick",
        },
        {
          content: <>25% spread discount on 300+ FX pairs</>,
          bulletType: "tick",
        },
      ],
      spreadDescription: "Spreads from 0.0 pips on 6 major FX pairs",
      scheme: (
        <>
          Available schemes:{" "}
          <span className="font-semibold">Price+, Alpha</span>
        </>
      ),
      ctaButtons: (
        <>
          <div className="flex flex-col">
            <OnboardingButton
              className="mb-2"
              variant="azure"
              account="live"
              params="jid=gb1&amp;iaid=null&amp;lsrc=1"
            >
              Create account
            </OnboardingButton>
            <Button
              variant="primary-outline"
              icon="arrow"
              href="/forex-trading/forex-active-trader"
            >
              More on FX Active
            </Button>
          </div>
        </>
      ),
    },
  };

  const accountType = accountTypes[type];

  const tickImg = (tickType: BulletItem["bulletType"] = "tick") => {
    if (tickType === "tick") {
      return awsImage("circle-tick-azure.svg");
    } else if (tickType === "cross") {
      return awsImage("circle-tick-azure.svg"); // TODO: UPDATE WITH CORRECT IMAGE
    }

    return awsImage("circle-tick-azure.svg");
  };

  // Allow manually overrides of the account type
  const image = imageOverride || accountType.image;
  const title = titleOverride || accountType.title;
  const description = descriptionOverride || accountType.description;
  const list = listOverride || accountType.list;
  const ctaButtons = ctaOverride || accountType.ctaButtons;

  return (
    <div className="flex flex-col justify-between">
      <div>
        <div className="mb-4 w-full border-b border-b-navy-100 pb-6">
          <Image
            className="h-[230px] w-auto"
            src={image}
            alt=""
            width={284}
            height={346}
          />
        </div>
        <h3 className="headline-md mb-4">{title}</h3>
        <p>{description}</p>
        <ul className="mb-10 lg:mb-16">
          {enableBulletPoints &&
            list.map((item: BulletItem, index: number) => (
              <li className="flex items-center gap-x-2" key={index}>
                <Image
                  src={tickImg(item.bulletType)}
                  alt=""
                  width={25}
                  height={24}
                />
                <span>{item.content}</span>
              </li>
            ))}
        </ul>
      </div>
      <div>
        {closingLine.enabled && (
          <>
            {closingLine.type === "scheme" && (
              <p className="mb-4">
                {closingLine.textOverride || accountType.scheme}
              </p>
            )}
            {closingLine.type === "spreadDescription" && (
              <p className="mb-4">
                {closingLine.textOverride || accountType.spreadDescription}
              </p>
            )}
          </>
        )}
        {ctaButtons}
      </div>
    </div>
  );
};

export default AccountType;
