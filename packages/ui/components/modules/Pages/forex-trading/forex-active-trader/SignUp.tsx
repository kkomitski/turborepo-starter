import OnboardingButton from "@/components/elements/OnboardingButton";
import Lines from "../../../components/global/Misc/Lines";
import { awsImage } from "@/helpers/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const SignUp = () => {
  return (
    <section className="relative">
      <Lines left />
      <div className="main-xl-container pb-0 lg:pb-20">
        <div className="flex flex-col lg:flex-row lg:justify-between">
          <div className="lg:w-5/12">
            <div className="relative -ml-6 mb-10 border-l-8 border-black pl-4">
              <h2 className="headline-lg">How to sign up</h2>
            </div>
            <div className="mb-10 flex flex-col gap-y-2">
              <div className="flex items-center gap-x-6 rounded-lg bg-white-95 py-3 px-6 shadow-lg">
                <span className="text-6xl">1</span>
                <span className="text-xl">
                  Choose your platform: CMC or MT4
                </span>
              </div>
              <div className="flex items-center gap-x-6 rounded-lg bg-white-95 py-3 px-6 shadow-lg">
                <span className="text-6xl">2</span>
                <span className="text-xl">
                  Select the FX Active account option
                </span>
              </div>
              <div className="flex items-center gap-x-6 rounded-lg bg-white-95 py-3 px-6 shadow-lg">
                <span className="text-6xl">3</span>
                <span className="text-xl">
                  Complete our online application form
                </span>
              </div>
            </div>
            <OnboardingButton
              className="mb-6"
              variant="primary-outline"
              account="live"
              params="jid=gb1&amp;iaid=null&amp;lsrc=1"
              icon="arrow"
            >
              Sign up
            </OnboardingButton>
            <Link
              className="mb-2 block font-semibold"
              target="_blank"
              rel="noopener noreferrer"
              href="https://assets.cmcmarkets.com/legal-documents/en-gb/CMC_CFD_NextGen_FXAT_TAC.pdf"
            >
              CMC platform terms & conditions
            </Link>
            <Link
              className="block font-semibold"
              target="_blank"
              rel="noopener noreferrer"
              href="https://assets.cmcmarkets.com/legal-documents/en-gb/CMC_CFD_MT4_FXAT_TAC.pdf"
            >
              MT4 terms &amp; conditions
            </Link>
          </div>
          <div className="hidden w-7/12 lg:block">
            <Image
              className="absolute top-0 right-0  h-full w-auto object-cover"
              width={573}
              height={1024}
              alt=""
              src={awsImage("fx-active_sign-up-bg.jpg")}
            />
            <Image
              className="absolute top-0 bottom-0 right-0 my-auto w-5/12 min-w-[500px] max-w-[800px] object-cover"
              width={896}
              height={609}
              alt=""
              src={awsImage("fx-active_sign-up-img.png")}
            />
          </div>
        </div>
      </div>
      <Image
        className="block lg:hidden"
        width={1170}
        height={943}
        alt=""
        src={awsImage("fx-active_sign-up-mob.png")}
      />
    </section>
  );
};

export default SignUp;
