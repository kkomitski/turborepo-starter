import OnboardingButton from "@/components/elements/OnboardingButton";
import ReadyToGetStarted from "@/components/modules/Common/ReadyToGetStarted";
import LearnPageContent from "@/components/templates/learn-page-content";
import LearnPageHeader from "@/components/templates/learn-page.header";
import constants, { awsImage } from "@/helpers/constants";
import Image from "next/image";
import React from "react";
import LearnPageTryTheseNext from "../../components/templates/learn-page-try-these-next";
import Link from "next/link";
import LearnPageFAQ from "@/components/templates/learn-page-faq";
import Footnotes from "@/components/modules/Common/Footnotes";
import Head from "next/head";

const BenefitsOfOptionsTrading = () => {
  return (
    <>
      <Head>
        <title>Benefits of Options Trading | CMC Markets</title>
      </Head>

      <LearnPageHeader
        title="Benefits of options trading"
        tags={["Trading strategies"]}
        author="michaelHewson"
      >
        <p>
          Options trading is known for its relatively complex nature and the
          diverse strategies it presents. Whether you&apos;re looking to hedge
          an existing investment or trade on market volatility, options can
          offer traders numerous potential trading opportunities.
          <br />
          <br />
          Read on to find out about some of the key advantages of trading
          options, and view four popular options strategies. We also discuss how
          you can manage your risk, using options as a hedging tool, and the
          risks and challenges of trading options.
        </p>
      </LearnPageHeader>

      <LearnPageContent>
        <section>
          <h2 className="pb-5 text-3xl">Advantages of options</h2>
          <p>
            Historically, options have been used in various cultures to secure
            the price of goods or commodities for future delivery. Key potential
            advantages of options trading include:
          </p>
          <ul className="list-disc pb-10 pl-8">
            <li>
              <strong className="font-bold">Variety of strategies</strong>:
              whatever your trading style, options provide a range of strategies
              to cater to different risk profiles and market outlooks.
            </li>
            <li>
              <strong className="font-bold">Risk mitigation</strong>: know your
              potential loss upfront – the maximum loss for buying a call or put
              option is limited to the premium paid.
            </li>
            <li>
              <strong className="font-bold">Use of leverage</strong>: trading
              options with leverage enables traders to gain greater exposure to
              an instrument by putting up a pre-determined percentage of the
              full value of the trade, known as the margin requirement.
              Leveraged trading amplifies both gains, and losses. When going
              long on options with us, you would put up the full premium as
              margin for the trade.
            </li>
            <li>
              <strong className="font-bold">Speculate</strong>: options enable
              traders to profit from a range of price movements in the
              underlying asset, whether rising, falling, or remaining flat.
            </li>
            <li>
              <strong className="font-bold">Hedging</strong>: by trading on
              options, investors can protect their underlying stock portfolio
              investment from adverse price movements through hedging.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="pb-5 text-3xl">Variety of strategies</h2>
          <p>
            Options trading offers a range of strategies. We look at four
            popular options trading strategies, shedding light on how they work
            and their potential benefits.
          </p>

          <p className="font-bold">Cash-secured puts</p>
          <Image
            height={0}
            width={0}
            sizes="100vw"
            alt="cash secured put example"
            className="mx-auto mt-10 w-full pb-10 md:min-h-[400px] md:w-auto"
            src={awsImage("cash-secured-put-example-2.png")}
          />
          <p className="pb-10">
            Cash-secured puts involves selling a put option while simultaneously
            setting aside the funds to purchase the asset if it drops below the
            option’s strike price.
            <br /> <br /> If the underlying asset price stays above the strike
            price, the put option will expire worthless, and you will keep the
            premium paid to open the position. If the underlying asset price
            falls below the strike price, you will be obligated to buy the asset
            at the strike price, but keep the premium.
            <br /> <br /> For cash-settled options, you receive a cash
            settlement based on the difference between the strike price and the
            underlying asset price, instead of delivery of the underlying asset.
            <br /> <br /> This is a way to take advantage of market stability,
            or to potentially buy a stock at a lower price, while also keeping
            the premium paid.
          </p>

          <p className="font-bold">Covered calls</p>
          <Image
            height={0}
            width={0}
            sizes="100vw"
            alt="cash secured put example"
            className="mx-auto mt-10 w-full pb-10 md:min-h-[400px] md:w-auto"
            src={awsImage("covered-call-example-2.png")}
          />
          <p className="pb-10">
            Covered calls are a strategy where you hold a long position in a
            stock and sell (write) call options on that stock. You earn a
            premium from selling the call, but the potential profit is capped if
            the stock rises beyond the call&apos;s strike price.
            <br /> <br /> This strategy provides an income stream on top of any
            dividends or gains from the stock, but limits the upside potential.
          </p>

          <p className="font-bold">Short strangle</p>
          <Image
            height={0}
            width={0}
            sizes="100vw"
            alt="short strangle example"
            className="mx-auto mt-10 w-full pb-10 md:min-h-[400px] md:w-auto"
            src={awsImage("short-strangle-example.png")}
          />
          <p className="pb-10">
            Short strangle involves selling an out-of-the-money call and an
            out-of-the-money put on the same stock with the same expiration
            date.
            <br /> <br />
            When you sell an option, you receive a premium from the buyer. In a
            short strangle, you collect premiums from both the call and the put
            options you sell. The total income you receive from selling these
            options is known the &quot;premiums collected.&quot;
            <br /> <br />
            The maximum profit in this strategy is limited to the premiums
            collected, because once you&apos;ve sold the options, the most you
            can gain is the income from the premiums. There&apos;s no other
            source of profit in this position.
            <br /> <br />
            This maximum profit is realised if the stock price stays between the
            strike prices of the call and put options until expiration. In this
            scenario, both options expire worthless, and you get to keep the
            entire premium as profit. Losses can occur if the stock moves
            significantly in either direction.
            <br /> <br />
            You can profit in a neutral market if the stock stays between the
            two strike prices. It&apos;s a strategy aimed at generating income
            in range-bound markets.
          </p>

          <p className="font-bold">Long straddle</p>
          <Image
            height={0}
            width={0}
            sizes="100vw"
            alt="short strangle example"
            className="mx-auto mt-10 w-full pb-10 md:min-h-[400px] md:w-auto"
            src={awsImage("long-straddle-exmaple-2.png")}
          />
          <p className="pb-10">
            Long straddle is where you buy both a call and a put option on the
            same stock with the same strike price and expiration date. You
            profit if the stock moves significantly in either direction. The
            maximum loss is limited to the combined premiums paid for the
            options.
            <br /> <br /> This strategy allows traders to profit from big price
            swings, whether upwards or downwards. It&apos;s a bet on volatility
            rather than a specific price direction.
            <br /> <br /> These are just a handful of strategies available in
            options trading. Each have their own nuances, based on specific
            market conditions and trader objectives. As with all trading
            methods, it&apos;s crucial to understand each strategy fully and
            consider your risk tolerance.
          </p>
        </section>

        {/* HERE */}
        <section>
          <h2 className="pb-5 text-3xl">Managing your risk</h2>
          <p className="pb-10">
            Options are used by some traders as a means of mitigating risk.
            <br /> <br />
            <strong className="font-bold">Defined risk</strong>: when you buy an
            option your potential loss is capped at the premium you paid,
            although it’s worth noting that you could lose more or less than the
            premium paid if, for example, you’re trading in different currency
            to your account currency, due to FX price fluctuations, in addition
            to a currency conversion fee. However, the option will expire
            worthless if the market doesn’t move enough to be in-the-money, so
            if you have multiple option positions which aren’t in-the-money,
            your overall losses will accumulate.
            <br /> <br />
            <strong className="font-bold">Flexibility</strong>: options allow
            you to make money whether the market is going up, down, or staying
            flat. This presents more potential opportunities to profit and
            diversify.
            <br /> <br />
            <strong className="font-bold">Hedging</strong>: by trading on
            options strategically, you can protect your wider investments from
            adverse market movements. Learn more about hedging below.
          </p>
        </section>

        <section>
          <h2 className="pb-5 text-3xl">Hedging</h2>
          <p>
            A long put option can be used as a type of insurance against a drop
            in the price of an asset you already hold a position in. Using
            options to hedge can reduce short-term risk and limit any losses.
            <br /> <br /> You may be able to buy a put option directly on the
            asset you hold, or on an index which is closely correlated to your
            portfolio, known as a proxy hedge. The goal is to offset any losses
            that may occur in your portfolio if there are adverse movements in
            the underlying market.
          </p>
          <h3 className="pb-5 text-2xl">Example of options hedging</h3>
          <p className="pb-10">
            Your investment portfolio includes an investment that tracks the S&P
            500, which is currently valued at $4,000. After a news announcement,
            you identify the risk of a potential market downturn that could
            negatively impact the value of your portfolio.
            <br /> <br />
            You decide to mitigate the risk by purchasing a European-style
            cash-settled put option on the S&P 500 index. The strike price of
            the put option is set at 3,900 points, with an expiry date three
            months from now.
            <br /> <br /> The contract stipulates that if the S&P 500 index
            falls below 3,900 points by the expiry date, it will automatically
            exercise your right to receive a cash settlement for the difference
            between the strike price and underlying asset price of the S&P 500.
            This mechanism ensures that if the S&P 500 remains above 3,900
            points, the option will automatically expire worthless, resulting in
            a loss limited to the premium paid.
            <br /> <br />
            If the S&P 500 falls below the strike price of 3,900 points, the
            contract will be exercised on the expiry date, and you will receive
            a cash payment corresponding to the difference. This payout will
            help offset any decline in the value of your investment portfolio
            tied to the index&apos;s performance.
            <br /> <br /> This put options trade means that you’ve protected
            your portfolio against the adverse effects of a declining market,
            ensuring a measure of stability and risk mitigation.
            <br /> <br />
            Options differ from a standard stop-loss order, which is triggered
            automatically at a predetermined price level, though the execution
            price can differ from the trigger level in volatile markets. Options
            provide the flexibility to exit the trade based on market conditions
            up until the expiry of the contract, offering a strategic advantage
            in managing market exposure.
          </p>
        </section>

        <section>
          <h2 className="pb-5 text-3xl">
            Risks and challenges of options trading
          </h2>
          <p>
            Trading options is based on backing an asset to move in a particular
            direction, and within a specific timescale.
            <br /> <br /> Particularly with long options, if the underlying
            asset doesn’t perform as hoped in the stipulated timeframe, and the
            trader lets the contract expire, the premium cost is lost. The
            individual loss may not be significant, but if the same thing keeps
            happening, the losses can accumulate.
            <br /> <br />
            There is also a risk of external factors affecting an option’s
            value, including volatility, which will affect both long and short
            options. Higher volatility increases the value of long call and put
            options, as it raises the likelihood of substantial price movements,
            making these options more valuable due to their greater potential
            for profitability.
            <br /> <br />
            Conversely, for short call and put options, high volatility
            heightens the risk, as it increases the chances of significant price
            swings in the underlying asset, making it more likely the options
            will be exercised against the seller, potentially leading to a loss.
            <br /> <br /> On the other hand, lower volatility decreases the
            value of long options, as the expected price movement of the
            underlying asset is less dramatic. However, it benefits short
            options by reducing the risk of the option being exercised,
            ultimately favouring the seller&apos;s strategy of options expiring
            worthless.
          </p>
        </section>

        <LearnPageFAQ
          faqs={[
            {
              q: "Do I have to exercise my option?",
              a: "Cash-settled options will automatically be exercised at expiration if it’s in the money, generating a positive outcome for the buyer.  ",
            },
            {
              q: "What happens if I don’t exercise my option? ",
              a: "If an option expires out-of-the-money, it won’t be exercised. The buyer’s maximum loss is limited to the premium paid for the contract. If an option expires in the money, it will be automatically exercised.",
            },
          ]}
        />

        <LearnPageTryTheseNext
          links={[
            {
              title: "Discover our options trading product",
              subtitle:
                "Explore the features and benefits of our options trading product.",
              url: "/en-gb/options-trading",
            },
            {
              title: "What is options trading?",
              subtitle:
                "New to options trading? Learn the fundamentals with our step-by-step guide.",
              url: "/en-gb/options-trading/what-is-options-trading",
            },
            {
              title: "Trading options on our platform",
              subtitle:
                "Discover how our platform makes trading options straightforward and efficient for every trader.",
              url: "/en-gb/options-trading/trading-options-on-cmc-platform",
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

      <Footnotes
        footnotesList={[<>{constants.DIDS.UK_PLATFORM_AWARDS_FOOTNOTE}</>]}
      />
    </>
  );
};

export default BenefitsOfOptionsTrading;
