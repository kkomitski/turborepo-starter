import Button from "@/components/elements/Button";
import OnboardingButton from "@/components/elements/OnboardingButton";
import WhyTradeCard, {
  WhyTradeObj,
} from "@/components/modules/Markets/WhyTrade/WhyTradeCard";
import React, { ForwardedRef, forwardRef } from "react";

const TotalControl = forwardRef(
  (
    {
      whyTradeData,
    }: {
      whyTradeData: Array<WhyTradeObj>;
    },
    ref: ForwardedRef<HTMLElement>
  ) => {
    return (
      <section ref={ref} className="bg-navy-100">
        <div className="main-xl-container">
          <h2 className="headline-lg mb-20 text-center text-white">
            Total control, even when you&apos;re on the move
          </h2>

          <div className="mx-auto flex w-full justify-center lg:w-10/12">
            <div className="grid gap-4 text-white sm:grid-cols-2">
              {whyTradeData.map((item, index) => (
                <div key={index}>
                  <WhyTradeCard className="h-full" item={item} />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="main-xl-container">
          <h2 className="headline-lg mb-16 text-center text-white">
            How we support our traders
          </h2>

          <div className="grid gap-16 px-6 text-white sm:grid-cols-2 sm:px-0 lg:grid-cols-4">
            <div className="flex flex-col">
              <div className="mb-6 border-b border-b-white pb-6">
                <svg
                  className="mx-auto"
                  width="120"
                  height="121"
                  viewBox="0 0 120 121"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M105 105.835L75 75.8354M85 50.8354C85 70.1654 69.33 85.8354 50 85.8354C30.67 85.8354 15 70.1654 15 50.8354C15 31.5055 30.67 15.8354 50 15.8354C69.33 15.8354 85 31.5055 85 50.8354Z"
                    stroke="white"
                    strokeWidth="3.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M60.0001 38.6132C60.0001 34.3177 56.2692 30.8354 51.6668 30.8354C47.0644 30.8354 43.3335 34.3177 43.3335 38.6132V58.0577C43.3335 62.3532 39.6025 65.8355 35.0001 65.8355H60.0001M35.0001 50.2799H51.6668"
                    stroke="white"
                    strokeWidth="3.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="mb-6">
                <h3 className="mb-2 text-[32px] leading-snug">
                  Regulated in the UK
                </h3>
                <p>
                  We&apos;re fully FCA-regulated and hold your funds in
                  segregated accounts protected by the FSCS<sup>1</sup>.
                </p>
              </div>
              <Button
                className="mt-auto"
                href="/en-gb/regulations"
                variant="primary-outline-dark"
                icon="arrow"
                linkType="anchor"
              >
                More on regulation
              </Button>
            </div>
            <div className="flex flex-col">
              <div className="mb-6 border-b border-b-white pb-6">
                <svg
                  className="mx-auto"
                  width="120"
                  height="121"
                  viewBox="0 0 120 121"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M65 35.8359H105M105 35.8359V75.8359M105 35.8359L65 75.8359L45 55.8359L15 85.8359"
                    stroke="white"
                    strokeWidth="3.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="mb-6">
                <h3 className="mb-2 text-[32px] leading-snug">
                  Straightforward application
                </h3>
                <p>
                  With ID verification built in, our mobile application process
                  is easier than ever.
                </p>
              </div>
              <OnboardingButton
                className="mt-auto"
                account="live"
                variant="primary-outline-dark"
                icon="arrow"
              >
                Sign up now
              </OnboardingButton>
            </div>
            <div className="flex flex-col">
              <div className="mb-6 border-b border-b-white pb-6">
                <svg
                  className="mx-auto"
                  width="120"
                  height="121"
                  viewBox="0 0 120 121"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M45 60.8355L55 70.8355L75 50.8355M103.09 30.7571C102.066 30.809 101.036 30.8353 100 30.8353C84.6327 30.8353 70.6148 25.0581 59.9997 15.5571C49.3846 25.0577 35.3669 30.8347 20 30.8347C18.9639 30.8347 17.9339 30.8084 16.9106 30.7565C15.6635 35.5746 15 40.6276 15 45.8355C15 73.7931 34.1216 97.2846 60 103.945C85.8784 97.2846 105 73.7931 105 45.8355C105 40.6278 104.337 35.575 103.09 30.7571Z"
                    stroke="white"
                    strokeWidth="3.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="mb-6">
                <h3 className="mb-2 text-[32px] leading-snug">
                  A transparent broker
                </h3>
                <p>
                  We&apos;re listed on the London Stock Exchange and governed by
                  GDPR, with personal data encrypted.
                </p>
              </div>
              <Button
                className="mt-auto"
                href="/en-gb/fraud-awareness#productSecurity"
                variant="primary-outline-dark"
                icon="arrow"
                linkType="anchor"
              >
                More on security
              </Button>
            </div>
            <div className="flex flex-col">
              <div className="mb-6 border-b border-b-white pb-6">
                <svg
                  className="mx-auto"
                  width="120"
                  height="121"
                  viewBox="0 0 120 121"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19.9999 20.8359V45.8359H22.9075M99.6905 55.8359C97.23 36.1044 80.398 20.8359 59.9999 20.8359C43.213 20.8359 28.8414 31.1768 22.9075 45.8359M22.9075 45.8359H44.9999M99.9999 100.836V75.8359H97.0924M97.0924 75.8359C91.1585 90.4951 76.7868 100.836 59.9999 100.836C39.6018 100.836 22.7699 85.5675 20.3094 65.8359M97.0924 75.8359H74.9999"
                    stroke="white"
                    strokeWidth="3.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M45 60.8359L55 70.8359L75 50.8359"
                    stroke="white"
                    strokeWidth="3.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="mb-6">
                <h3 className="mb-2 text-[32px] leading-snug">
                  Easy fund & withdrawal
                </h3>
                <p>
                  Fund your account and withdraw in minutes by debit card,
                  credit card or bank transfer.
                </p>
              </div>
              <Button
                className="mt-auto"
                href="/en-gb/support/faqs/account-support"
                variant="primary-outline-dark"
                icon="arrow"
                linkType="anchor"
              >
                More on funding
              </Button>
            </div>
          </div>
        </div>
      </section>
    );
  }
);

TotalControl.displayName = "TotalControl";
export default TotalControl;
