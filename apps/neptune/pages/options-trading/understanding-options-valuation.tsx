import OnboardingButton from "@/components/elements/OnboardingButton";
import ReadyToGetStarted from "@/components/modules/Common/ReadyToGetStarted";
import LearnPageContent from "@/components/templates/learn-page-content";
import LearnPageHeader from "@/components/templates/learn-page.header";
import { awsImage } from "@/helpers/constants";
import Image from "next/image";
import React from "react";
import LearnPageTryTheseNext from "../../components/templates/learn-page-try-these-next";
import Head from "next/head";
import Link from "next/link";

const UnderstandingOptionsValuation = () => {
  return (
    <>
      <Head>
        <title>Understanding Options Valuation | CMC Markets</title>
      </Head>

      <LearnPageHeader
        title="How to accurately value your options"
        tags={["Trading strategies"]}
        author="michaelHewson"
      >
        <p className="pb-5">
          Learn about the factors that can impact the pricing of options, and
          find out how options are priced.{" "}
        </p>
        <p>The value of an option is determined by several factors:</p>
        <ul className="list-disc pb-4 pl-8">
          <li>Underlying asset price</li>
          <li>Strike price</li>
          <li>Time until the -contract’s expiry</li>
          <li>Implied volatility</li>
          <li>Interest rate</li>
        </ul>
      </LearnPageHeader>

      <LearnPageContent>
        <section>
          <h2 className="pb-5 text-3xl">Understanding options valuation</h2>
          <p>
            Various calculation methods use this data to work out the premium –
            the price a trader pays for an option. The most used calculation in
            options pricing is the Black-Scholes model (BSM). It uses the five
            variables mentioned above to derive the theoretical value of an
            option.
          </p>
          <Image
            height={0}
            width={0}
            sizes="100vw"
            alt="long call"
            className="mx-auto w-full pb-10 md:min-h-[400px] md:w-auto"
            src={awsImage("options-valuation-factors-v2.png")}
          />
          <p className="pb-10">
            BSM calculators are available online, where you can enter the
            variables to get your calculation.
          </p>
        </section>

        <section>
          <h2 className="pb-5 text-3xl">Factors affecting options value</h2>
          <p className="pb-10">
            The following factors have an impact on the value of an option:
            <br /> <br />
            <strong className="font-bold">Underlying asset price: </strong>
            changes in the asset price will increase or decrease an
            option&apos;s price – but have opposite effects for calls and puts.
            When the price of an asset rises, a call option value will generally
            rise, but a put option value would decrease. If the price of an
            asset falls, the opposite happens.
            <br /> <br />
            <strong className="font-bold">Strike price: </strong>
            this influences the price of an option by determining whether it has
            intrinsic value. In essence, how much an option would be worth if it
            was exercised right now (see below).
            <br /> <br />
            <strong className="font-bold">Time to expiration: </strong>
            the further away the expiry date, the more time you have for the
            contract to potentially move ‘in-the-money’ (in favour of the
            option’s buyer), which therefore means a higher premium. The less
            time there is for the trade to turn profitable, the cheaper the
            option’s price will be (but the risk of the contract expiring
            worthless increases).
            <br /> <br />
            <strong className="font-bold">Implied volatility: </strong>
            when implied volatility (IV) increases, so does the probability of
            the option being in-the-money at expiration – which pushes options
            prices up.
            <br /> <br />
            <strong className="font-bold">Interest rates: </strong>
            when interest rates go up, call option premiums generally rise, and
            put option premium generally decrease.
          </p>
        </section>

        <section>
          <h2 className="pb-5 text-3xl">Intrinsic value vs extrinsic value</h2>
          <p>
            An option premium is set by two sets of values – intrinsic value,
            which reflects the value of the strike price compared to the asset
            price, and extrinsic value, which factors in the time until expiry,
            implied volatility, dividends and interest-rate risks.
          </p>
          <Image
            height={0}
            width={0}
            sizes="100vw"
            alt="formula for option contract value"
            className="mx-auto w-full pb-10 md:min-h-[100px] md:w-auto"
            src={awsImage("formula-for-option-contract-value.png")}
          />
          <h3 className="pb-5 text-2xl">
            How to calculate the intrinsic value of an option
          </h3>
          <p className="pb-5">
            The intrinsic value is the value of an option if it were exercised
            now. An option only has intrinsic value if it’s in-the-money,
            meaning the option holder would benefit from exercising the
            contract. This occurs if the strike price of a call option is below
            the underlying asset price, or the strike price of a put option is
            above the underlying asset price.
            <br />
            <br />
            The intrinsic value is calculated by taking the strike price and
            underlying asset price and subtracting one from the other – and
            which way around depends on whether it’s a call or a put:
          </p>
          <p className="pl-16">
            Intrinsic value (call options) = underlying price - strike price
            <br />
            Intrinsic value (put options) = strike price - underlying price
          </p>
          <br />
          <p>
            For example, if a call option has a strike price of £10 and the
            asset price is £15, the option is in-the-money and immediately has
            an intrinsic value of £5. This means the holder of the call option
            could exercise the option and buy the asset for £5 less than its
            market price.
            <br /> <br />
            But, if the strike price is at-the-money (the asset price and the
            strike price are both £10) or is out-of-the-money (the asset price
            drops to £5), there is no profitability in exercising the option and
            therefore it has no intrinsic value.
          </p>
          <Image
            height={0}
            width={0}
            sizes="100vw"
            alt="intrinsic value example"
            className="mx-auto w-full pb-10 md:min-h-[400px] md:w-auto"
            src={awsImage("options-intrinsic-value-chart.png")}
          />

          <h3 className="pb-5 text-2xl">
            How to calculate the extrinsic value of an option
          </h3>
          <Image
            height={0}
            width={0}
            sizes="100vw"
            alt="intrinsic value example"
            className="mx-auto w-full pb-10 md:min-h-[100px] md:w-auto"
            src={awsImage("options-extrinsic-value-formula.png")}
          />
          <div className="pb-10">
            The ‘extrinsic value’ is the value of an option that exceeds its
            intrinsic value. In essence, it’s a number that reflects the
            potential for an option to become more valuable before it expires.
            <br /> <br />
            If the implied volatility of an option increases, the probability of
            the contract ending up in the money when the contract expires
            increases, and therefore raises its extrinsic value. All this is
            framed by the duration of the contract, and, for this reason,
            extrinsic value is sometimes known as “time value”.
            <br /> <br />
            The extrinsic value is calculated by subtracting the intrinsic value
            from the option price. For example, if the option has an intrinsic
            value of £5 and the call option has a premium of £7, the extrinsic
            value is £2.
            <br /> <br />
            Extrinsic value tends to diminish over the duration of the contract.
            This is because as time till expiry decreases, the likelihood of a
            large enough move in the underlying asset price to move the options
            contract in-the-money also diminishes. Additionally, the rate at
            which this value diminishes can be assessed through the{" "}
            <Link href="/options-trading/understanding-options-greeks">
              option Greeks
            </Link>
            , particularly Theta and Vega.
          </div>
        </section>

        <section>
          <h2 className="pb-5 text-3xl">
            Theoretical options pricing versus market value
          </h2>
          <p className="pb-10">
            As with any trade, the prices of options do not always reflect their
            true market value. If there is an obvious disparity between the
            option price and the theoretical value, this could suggest that the
            option is overpriced or underpriced.
            <br /> <br />
            Option pricing models provide an estimate of what an option should
            be worth assuming efficient markets and no transaction costs.
            Traders use options pricing models to assess whether an option is
            overvalued or undervalued relative to its theoretical value.
            <br /> <br />
            Market value in options trading refers to the actual price at which
            an option is currently trading in the market. Market value is
            determined by supply and demand dynamics, investor sentiment, news,
            and other market factors. It can differ from an option’s theoretical
            value due to various factors, like changes in market conditions,
            sudden shifts in volatility, changes in interest rates, and changes
            in the underlying asset&apos;s price. Market value reflects
            real-world conditions and the perceptions of market participants.
            <br /> <br />
            In summary, the theoretical value is a calculated estimate of an
            option&apos;s value based on mathematical models and assumptions,
            while market value is the actual price at which options are
            currently trading in the market, influenced by real-time supply and
            demand dynamics. Traders often compare an options&apos;s theoretical
            values to their market values, to identify potential trading
            opportunities based on discrepancies between the two.
          </p>
        </section>

        <section>
          <h2 className="pb-5 text-3xl">Practical tips for valuing options</h2>
          <p>
            A fair price for an option essentially reflects the probability of
            it expiring in-the-money, combined with the potential profit. It’s
            important to remember that trading options is high risk, and that
            you could also make a loss.
            <br />
            <br />
            To use options valuations for potential trading ideas, you may find
            the following guidelines useful:
          </p>
          <ul className="pb-4 pl-8">
            <li>
              1. Establish what you want out of the trade – is this a
              speculative trade or are you using it to hedge an existing asset?
              This will influence your option and how much you want to pay for
              it.
            </li>
            <li>
              2. Make time to understand the conditions and individual factors
              that influence an option’s price. Check economic and company
              financial event calendars for any events which could influence
              volatility during the contract’s duration.
            </li>
            <li>3. Determine the ratio of risk to reward.</li>
            <li>
              4. Use a pricing tool such as the BSM (described above) to value
              the option.
            </li>
            <li>5. Set trading parameters.</li>
          </ul>
          <p className="">
            Ultimately, understanding how to value options can ensure you’re
            paying the right price, and help to maximise your potential profits.{" "}
          </p>
        </section>

        <LearnPageTryTheseNext
          links={[
            {
              title: "What is options trading?",
              subtitle:
                "New to options trading? Learn the fundamentals with our step-by-step guide.",
              url: "/en-gb/options-trading/what-is-options-trading",
            },
            {
              title: "Advantages of options trading?",
              subtitle:
                "Explore the benefits of options trading and find out if it’s the right fit for you. ",
              url: "/en-gb/options-trading/benefits-of-options-trading",
            },
            {
              title: "Want to know more about volatility?",
              subtitle:
                "Check out our guide to how options can be traded in a fluctuating market.",
              url: "/en-gb/options-trading/options-volatility",
            },
          ]}
        />
      </LearnPageContent>

      <ReadyToGetStarted
        platformImg={awsImage("options-trading_bottom-img-v3.png")}
        mobilePlatformImg={awsImage("options-trading_bottom-img-v3.png")}
        mobileBgImg={awsImage("options-trading_bottom-bg-mob.jpg")}
        bgImg={awsImage("options-bottom-img-bg.png")}
        content={
          "Open a demo account with £10,000 of virtual funds or open a live account."
        }
        ctaBtns={
          <>
            <div className="flex flex-col md:flex-row md:gap-2">
              <OnboardingButton
                className="mx-auto mb-2 md:mx-0 md:mb-0"
                variant="azure"
                account="live"
                params="jid=gb1&amp;iaid=null&amp;lsrc=1"
              >
                Start CFD trading
              </OnboardingButton>
              <OnboardingButton
                className="mx-auto md:mx-0"
                variant="primary-outline"
                account="demo"
                params="jid=gb3&amp;iaid=null&amp;lsrc=1"
              >
                Open a demo account
              </OnboardingButton>
            </div>
          </>
        }
      />
    </>
  );
};

export default UnderstandingOptionsValuation;
