import OnboardingButton from "@/components/elements/OnboardingButton";
import ReadyToGetStarted from "@/components/modules/Common/ReadyToGetStarted";
import LearnPageContent from "@/components/templates/learn-page-content";
import LearnPageHeader from "@/components/templates/learn-page.header";
import { awsImage } from "@/helpers/constants";
import Image from "next/image";
import React from "react";
import LearnPageTryTheseNext from "../../components/templates/learn-page-try-these-next";
import Link from "next/link";
import LearnPageFAQ from "@/components/templates/learn-page-faq";
import Head from "next/head";

const OptionsVolatility = () => {
  return (
    <>
      <Head>
        <title>Options Volatility | CMC Markets</title>
      </Head>

      <LearnPageHeader
        title="Volatility in options trading: strategies and insights"
        tags={["Trading strategies"]}
        author="michaelHewson"
      >
        <p>
          A volatile asset or market means a significant price swing is likely
          to follow – but it’s often difficult to predict whether the asset will
          soar or plummet.
          <br /> <br />
          This article explains volatility in options trading, trading
          strategies and techniques based on volatility, and how you can learn
          to try and benefit from it.
        </p>
      </LearnPageHeader>

      <LearnPageContent>
        <section>
          <h2 className="pb-5 text-3xl">
            What is volatility in options trading?
          </h2>
          <p>
            Volatility refers to the often significant and sudden variations in
            the price of an asset. A sharp rise or fall can be down to many
            factors, which can either be expected – such as a company’s
            anticipated earnings report – or take the market by surprise.
            <br /> <br />
            For example, a shocking news story about a company or its leaders
            has the potential to shake up markets. There are two distinct types
            of volatility that should be considered:
          </p>
          <ul className="list-disc pb-10 pl-8">
            <li>
              <strong className="font-bold">Realised volatility (RV)</strong>:
              this measures how fast the price of the underlying asset has
              changed over time. Put simply, it’s a percentage calculated by
              working out its average price over a period of time, and how far
              and often it has deviated from that average. Realised volatility
              is sometimes also known as historical volatility.
            </li>
            <li>
              <strong className="font-bold">Implied volatility (IV)</strong>:
              this is the market’s forecast of how far the price of an
              underlying asset will fluctuate in the future. It considers
              factors including the price of the underlying asset, the strike
              price of the option and the duration of the option contract. An
              option with higher implied volatility tends to cost more because
              of its potential to deliver significant returns, though it also
              raises the possibility of an option being out-of-the-money at its
              expiration.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="pb-5 text-3xl">
            Strategies for options trading in volatile markets
          </h2>
          <p>
            There are a number of established option volatility trading
            strategies. If implied volatility is high and traders expect it to
            decrease, they may enter short option positions. When implied
            volatility falls, the writer will benefit from the falling option
            premiums, allowing them to purchase back the contracts they sold –
            at a lower price.
            <br /> <br /> When volatility spikes, the value of options can soar
            significantly, benefiting buyers of options. They can sell long
            contracts at a profit, since the option premiums would have risen.
            In this instance, an option seller/writer would suffer from having
            to buy back options at a higher premium.
            <br /> <br /> Popular option volatility strategies and techniques
            include the ‘straddle’ and the ‘strangle’.
          </p>
          <h3 className="pb-5 text-2xl">Long straddle</h3>
          <div id="straddle" className="absolute -mt-[250px]" />
          <p className="pb-5">
            A straddle, as its name suggests, is a neutral options strategy that
            involves the trade of both a put and a call option on the same
            underlying asset, each with the same strike price and time until
            expiration.
            <br /> <br />
            This is potentially an attractive strategy for traders purchasing
            options in a volatile market, because it has limited risk, with
            unlimited profit if the asset’s price moves dramatically, regardless
            of the direction.
            <br /> <br />
            There is a trade-off between choosing cheaper contracts that expire
            sooner, and buying longer-dated contracts, which are more expensive
            but allow more time for the market to move.
          </p>
          <p>
            <strong className="font-bold">Example</strong>:
          </p>
          <p className="pb-5">
            The FTSE 100 is trading at 7,000 points. You believe the index will
            move significantly but are unsure in which direction. At-the-money
            call and put options (with a 7,000-point strike) are trading at £20
            and £15 each, with each contract representing 1 unit of the
            underlying asset.
            <br /> <br />
            You decide to buy one call (£20 x 1) and one put (£15 x 1), both
            with identical expiration dates. You’ve paid a total of £35.
            <br /> <br />
            The index jumps to 7,100 points at expiration, giving you a
            100-point gain in your call option position. You exercise the call
            option, and allow the put option to expire, which achieves a total
            return of £100. After subtracting the £35 premium, you&apos;ve made
            a profit of £65.
            <br /> <br />
            Similarly, you also profit if the FTSE 100 falls to 6,900 points. In
            this scenario, the call option expires worthless, but the put option
            is in-the-money by 100 points – again, resulting in a return of £100
            and, after deducting the £35 premium, a profit of £65.
          </p>
          <Image
            height={0}
            width={0}
            sizes="100vw"
            alt="long call"
            className="mx-auto max-h-[400px] w-full pb-10 md:min-h-[400px] md:w-auto"
            src={awsImage("options-long-straddle-chart-v2.png")}
          />
          <h3 className="pb-5 text-2xl">Strangle</h3>
          <div id="strangle" className="absolute -mt-[250px]" />
          <p className="pb-5">
            A strangle differs from a straddle in two ways:
          </p>
          <ul className="list-disc pb-4 pl-8">
            <li>
              The trader simultaneously buys call and put options with the same
              expiry date but at different, out-of-the-money strike prices
            </li>
            <li>
              The call strike price is higher than the price of the underlying
              asset, and the put strike price is lower
            </li>
          </ul>
          <p>
            The cost, and therefore the maximum risk, is lower in comparison to
            a straddle, meaning you can trade in a larger size, or make more
            trades for your money.
          </p>
          <p>
            <strong className="font-bold">Example</strong>:
          </p>
          <p className="pb-5">
            The FTSE 100 is trading at 7,000 points. You decide to buy a call
            option with a strike price of 7,100 points. The premium for the call
            option is £1.20 per point. Then you buy a put option, with a strike
            price of 6,900 points, at £0.80 per point.
            <br /> <br />
            Therefore, you have paid a total premium cost of £2 (£1.2 for the
            call option and £0.8 for the put option).
            <br /> <br />
            The potential for profit is unlimited. However, the price had to
            climb significantly above the call strike price or fall
            significantly below the put strike price to make any profit. If the
            underlying price trades between the two strike prices at expiration,
            then your maximum loss would equal the sum of the premiums paid.
          </p>
          <Image
            height={0}
            width={0}
            sizes="100vw"
            alt="long call"
            className="mx-auto max-h-[400px] w-full pb-10 md:min-h-[400px] md:w-auto"
            src={awsImage("long-strangle-example.png")}
          />
        </section>

        <section>
          <h2 className="pb-5 text-3xl">Risk-management techniques</h2>
          <p className="pb-10">
            As with any form of trading, the more volatile the market, the
            greater the risk, so it’s important to understand how to manage this
            when trading volatility with options.
            <br /> <br /> If you own an asset, you can set a stop-loss order
            that takes effect when the price falls below a certain point (or, if
            you’re shorting stock, rises past a particular value). This figure
            is the amount you would be prepared to lose, and it makes sense when
            buying options to pay no more than that figure on premiums. However,
            stock stop losses are not foolproof. For example, they don’t cover
            gap openings, when the market opens at a different value from its
            previous close without any trading taking place.
            <br /> <br /> When buying options, it’s impossible to lose more than
            the premium you pay, and by using straddle or strangle strategies
            with simultaneous call and put positions, you can potentially
            capitalise on various scenarios. Sellers can, as previously
            mentioned, make a large profit on premiums when volatility is high,
            but they also face the risk of potentially unlimited losses from
            adverse movements in the underlying asset.
          </p>
        </section>

        <section>
          <h2 className="pb-5 text-3xl">
            Tools and resources for analysing volatility
          </h2>
          <p>
            How do you know when the market, or an asset, is volatile?
            Essentially, you need to understand the forces driving the market,
            as well as the standard deviation: how much, on average, its value
            fluctuates away from the mean.
            <br /> <br />
            The very definition of volatility means it’s challenging to forecast
            accurately, but there are various indicators and calculations to
            help you determine the probability of fluctuation, as well as when
            and how volatile it’s likely to be. These include:
          </p>
          <h3 className="pb-5 text-2xl">
            The average true range indicator (ATR)
          </h3>
          <p className="pb-5">
            The ATR calculates the true range of volatility of a given trading
            period (day, hour, minute, week) by taking the highest value of
            these three equations:
          </p>
          <ul className="list-disc pb-4 pl-8">
            <li>
              Current high minus previous close <br />- For day trading this
              will be today&apos;s high to yesterday&apos;s close
            </li>
            <li>
              Current low minus previous close <br /> - For day trading this
              will be today&apos;s low to yesterday&apos;s close
            </li>
            <li>
              Current high minus the current low <br /> - Today&apos;s high to
              today&apos;s low
            </li>
          </ul>
          <p className="pb-5">
            This calculation is made several times over a chosen time to give
            you an average, which you can use as a baseline to calculate
            volatility. A higher ATR indicates greater price movement and
            volatility, which might lead to higher options premiums.
            <br /> <br />
            Conversely, a lower ATR suggests less price volatility, potentially
            leading to lower options premiums. Traders might use the ATR to
            gauge the potential risk and reward of a particular options trade or
            to set stop-loss and take-profit levels.
          </p>

          <h3 className="pb-5 text-2xl">Volatility Index (VIX)</h3>
          <p className="pb-5">
            This is a real-time index derived as a percentage using the pricing
            of S&P 500 index options. It’s a complex mathematical formula, but
            its headline figures give a snapshot of future expected volatility
            over the coming 30 days. It’s a tool used by investors to measure
            the level of fear or risk in the markets.
          </p>
          <h3 className="pb-5 text-2xl">Bollinger Bands</h3>
          <p className="pb-5">
            This indicator consists of three lines on a graph indicating an
            asset’s upper value, lower value and moving average over a certain
            period, and is designed to show when assets are overbought or
            oversold. When the lines – or bands – narrow and “squeeze” together,
            it’s a general indication that volatility is likely. When they move
            further apart, it indicates the market or asset price is stable.
            <br /> <br /> There are several other indicators of volatility. It
            should be noted that no single tool is a reliable barometer of
            volatility, and trading decisions should be made by correlating with
            other tools and indicators.
          </p>
        </section>

        <section>
          <h3 className="pb-5 text-2xl">Summary</h3>
          <p className="pb-10">
            Volatility options trading can realise a profit, in whichever
            direction an asset or market fluctuates. By selling options, it’s
            possible to make a profit even if the underlying market price
            doesn’t move. This is because, as an options seller, you receive a
            premium upfront, which is your maximum potential profit. If the
            asset&apos;s price doesn’t move significantly, the option may expire
            worthless, allowing you to keep the entire premium.
            <br /> <br />
            Understanding the metrics of realised and implied volatility, and
            options-focused tools and indicators, is key to trading options in
            volatile markets. These metrics can help predict an asset’s future
            price movements and volatility.
            <br /> <br />
            There are risks, particularly if you sell call and put options: if
            the market moves sharply against your short position, your potential
            loss is unlimited. It’s therefore very important to manage your risk
            when you’re trading options.
          </p>
        </section>

        <LearnPageFAQ
          faqs={[
            {
              q: "Is volatility options trading risky?",
              a: "All trading carries some risk, but if you buy a put and a call option on a volatile asset, you automatically limit any losses to the price of the premium, while giving yourself the potential to make a profit. Traders who sell options can make a profit limited to the premium received, but can suffer unlimited losses.",
            },
            {
              q: "How can I start to trade volatility options?",
              a: (
                <>
                  Find out more about our{" "}
                  <Link href="/en-gb/options-trading">range of options</Link>.
                </>
              ),
            },
            {
              q: "How does implied volatility affect options pricing?",
              a: "The higher the implied volatility, the greater the likelihood the option will be in the money at its expiration. This likelihood is reflected in the options price, resulting in a higher premium.              ",
            },
            {
              q: "Can I make a profit if asset prices suddenly go down?",
              a: "One way to take advantage of falling prices could be to buy a put option, or sell a call option.",
            },
            {
              q: "Do I have to place call and put options at the same strike price?",
              a: (
                <>
                  <p>
                    No. You can place call and put options at the same strike
                    price through a strategy called a{" "}
                    <Link href="#straddle">straddle</Link>, but you can
                    potentially profit by buying a call and put at different
                    strike prices, which is known as a{" "}
                    <Link href="#strangle">strangle</Link>.
                  </p>
                  <p>
                    Straddles and strangles are just two methods of trading
                    based on volatility expectations. There are many other ways
                    traders can trade on volatility, or limit their risk to
                    volatility, through options.
                  </p>
                </>
              ),
            },
          ]}
        />

        <LearnPageTryTheseNext
          links={[
            {
              title: "What is options trading?",
              subtitle:
                "New to options trading? Learn the fundamentals with our step-by-step guide.",
              url: "/options-trading/what-is-options-trading",
            },
            {
              title: "Options greeks explained",
              subtitle:
                "Get to grips with the Greeks: the key metrics that show how sensitive options are to various market factors.",
              url: "/options-trading/understanding-options-greeks",
            },
            {
              title: "Discover our options trading product",
              subtitle:
                "Explore the features and benefits of our options trading product.",
              url: "/options-trading",
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

export default OptionsVolatility;
