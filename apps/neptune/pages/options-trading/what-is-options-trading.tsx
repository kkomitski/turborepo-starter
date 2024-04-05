import OnboardingButton from "@/components/elements/OnboardingButton";
import ReadyToGetStarted from "@/components/modules/Common/ReadyToGetStarted";
import LearnPageContent from "@/components/templates/learn-page-content";
import LearnPageHeader from "@/components/templates/learn-page.header";
import { awsImage } from "@/helpers/constants";
import Image from "next/image";
import React from "react";
import LearnPageFAQ from "../../components/templates/learn-page-faq";
import LearnPageTryTheseNext from "../../components/templates/learn-page-try-these-next";
import Head from "next/head";
import Link from "next/link";
import Button from "@/components/elements/Button";

const WhatIsOptionTrading = () => {
  return (
    <>
      <Head>
        <title>What is options trading? | CMC Markets</title>
      </Head>

      <LearnPageHeader
        title="What is options trading – and how are they traded?"
        tags={["Trading strategies"]}
        author="michaelHewson"
      >
        <p className="pb-10">
          Find out what options are and learn how you can get started with
          options trading.
        </p>

        <h2 className="text-3xl">What are options?</h2>
        <br />
        <p>
          An option is a type of derivative contract on an underlying asset,
          such as a share, commodity or index. An options contract gives the
          buyer of the contract (also known as the holder) the right, but not
          the obligation, to buy or sell an underlying asset at a set price
          (also known as the strike), at a specific future date and time (known
          as the expiration date).
          <br /> <br />
          Alternatively, buyers can receive a cash payment based on the
          difference between the settlement price and strike price where the
          option is cash settled. Options available on our platform are over the
          counter (OTC) options and are cash settled.
        </p>
      </LearnPageHeader>

      <LearnPageContent>
        <section>
          {/* ## Call and put options */}
          <h2 className="pb-5 text-3xl">Call and put options</h2>
          <p className="pb-5">
            There are two main types of options contracts: calls and puts.
            Buying a call gives you the right to buy an underlying asset at a
            predetermined price when entering the options trade; the buyer of
            the call ideally wants the price of the underlying asset to be
            higher than the strike on the expiry date.
            <br /> <br />
            Buying a put gives you the right to sell an underlying asset at a
            strike price determined when entering the options trade; the buyer
            of the put ideally wants the price of the underlying asset to be
            lower than the strike on the expiry date.
          </p>
          {/* ### Call options explained */}
          <h3 className="pb-5 text-2xl">Call options explained</h3>
          <div id="straddle" className="absolute -mt-[250px]" />
          <p className="pb-5">
            A call option provides the holder (buyer) with a right (but not an
            obligation) to buy an underlying asset at the strike price. For
            cash-settled options, buyers receive a cash payment if the
            underlying price is above the strike price, at a specified
            expiration date and time.
            <br /> <br />
            If you’re the writer (seller) of a call option, you have the
            obligation to sell an underlying asset. For cash-settled options,
            writers make a cash payment if the holder/buyer exercises the
            option. Cash-settled options are exercised automatically when in the
            money.
          </p>
          {/* #### Long call option example */}
          <h4 className="pb-5 text-lg font-bold">Long call option example</h4>
          <div id="straddle" className="absolute -mt-[250px]" />
          <p className="pb-5">
            Imagine that a trader expects the FTSE 100 index to rise over the
            coming month. The trader buys a call option at a strike price (the
            pre-agreed price at which an options buyer will settle the contract)
            of 7,500 points, expiring in one month.
            <br /> <br />
            The options we offer on the underlying indices have a multiplier of
            1. This means that 1 option contract refers to 1 unit of the
            underlying index. The premium for this option is £60.
            <br /> <br />
            One month later when the option expires, the FTSE 100 has risen to
            7,650 points. This means that the trade is ‘in the money&apos;, by
            £150 (7,650-7,500), and is therefore favourable to the trader.
            <br /> <br />
            In this scenario, the trader has generated a net profit of £90 after
            the cost of the premium (£60) is subtracted from the in-the-money
            value (£150).
            <br /> <br />
            However, if after one month the index settles at the same level as
            the strike price of 7,500 points, this is known as being ‘at the
            money’, where the strike price and the underlying asset’s current
            price are the same. In this scenario, the option would not be
            exercised, and the trader would therefore lose the premium of £60.
            <br /> <br />
            If the underlying asset price is below the level of the strike
            price, it’s ‘out of the money’, which is when the current price of
            the underlying asset is unfavourable for the buyer. The option would
            not be exercised, and the trader would lose the premium of £60.
          </p>
          <Image
            height={0}
            width={0}
            sizes="100vw"
            alt="long call"
            className="mx-auto h-[400px] w-auto pb-10"
            src={awsImage("long-call-example.png")}
          />
          {/* #### Short call example */}
          <h4 className="pb-5 text-lg font-bold">Short call example</h4>
          <p className="pb-5">
            Let’s assume that a trader expects the FTSE 100 index to remain
            stable, or slightly decline, over the coming month. The trader sells
            a call option with a strike price at 7,400 points, expiring in one
            month. The trader receives a premium of £50 for the sale of the
            option.
            <br /> <br />
            One month later when the option expires, the FTSE 100 settles at
            7,350 points. In this case, the option buyer will not exercise the
            contract, meaning the trader, who sold the contract, gets to keep
            the premium of £50 as profit.
            <br /> <br />
            However, if the FTSE 100 settles at expiration above 7,400 points,
            then the buyer will exercise the contract. If the price is
            significantly above this level, then the seller can incur large
            losses. For example, if the FTSE settles at 7,500 points the
            contract will be exercised and the trader (the seller of the
            contract) will make a loss of £50.
          </p>
          <Image
            height={0}
            width={0}
            sizes="100vw"
            alt="long call"
            className="mx-auto h-[400px] w-auto pb-10"
            src={awsImage("short-call-example.png")}
          />
          {/* ### Put options explained */}
          <h3 className="pb-5 text-2xl">Put options explained</h3>
          <p className="pb-5">
            A put option provides the holder (buyer) with a right (but not an
            obligation) to sell an underlying asset at the strike price. For
            cash-settled options, buyers receive a cash payment if the
            underlying price is below the strike price, at a specified
            expiration date and expiration time.
            <br /> <br />
            If you’re the writer (seller) of a put option, you have the
            obligation to buy an underlying asset, or where an option is
            cash-settled, make a cash payment if the holder exercises the
            option.
          </p>
          {/* #### LONG PUT */}
          <h4 className="pb-5 text-lg font-bold">Long put option example</h4>
          <div id="straddle" className="absolute -mt-[250px]" />
          <p className="pb-5">
            In this example, a trader buys a put option for the FTSE 100 with a
            strike price of 7,450 points, expiring in one month. The premium for
            this option is £40.
            <br /> <br />
            One month later when the option expires, the FTSE 100 has fallen to
            7,350 points. This means that the trade is ‘in the money’ by £100.
            The net profit – after deducting the premium of £40 – would be £60.
          </p>
          <Image
            height={0}
            width={0}
            sizes="100vw"
            alt="long call"
            className="mx-auto h-[400px] w-auto pb-10"
            src={awsImage("long-put-example.png")}
          />
          <p className="pb-5">
            However, if the trader’s assumptions were wrong and the FTSE 100
            rises to 7,550 points, the option will expire out of the money. The
            trader’s loss will be capped to the option’s premium of £40.
          </p>
          {/* #### Short put trade example */}
          <h4 className="pb-5 text-lg font-bold">Short put trade example</h4>
          <div id="straddle" className="absolute -mt-[250px]" />
          <p className="pb-5">
            Let’s assume that a trader expects the FTSE 100 index to remain
            stable, or slightly increase, over the coming month.
            <br /> <br />
            The trader sells a put option with a strike price of 7,500, expiring
            in one month. The trader receives a premium of £40 for the sale of
            the option.
            <br /> <br />
            One month later when the option expires, the settlement price is
            7,520. In this case, the option buyer will not exercise the contact,
            meaning the trader, who sold the contract, gets to keep the premium
            of £40 as profit.
            <br /> <br />
            However, if the FTSE 100 settles at expiration below 7,500, the
            buyer will exercise the contract. If the price is significantly
            below this level, then the seller can incur large losses. For
            example, if the FTSE falls to 7,400 points, the trader will suffer a
            loss of £60 (£100 - £40 [premium received]). The loss is partly
            offset by the premium received when the contract was sold.
          </p>
          <Image
            height={0}
            width={0}
            sizes="100vw"
            alt="long call"
            className="mx-auto h-[400px] w-auto pb-10"
            src={awsImage("short-put-example.png")}
          />
          {/* ### When you should trade call and puts */}
          <h3 className="pb-5 text-2xl">
            When should you trade call and puts?{" "}
          </h3>
          <table className="comp-table comp-static-table w-full pb-5 text-left">
            <thead className="text-left">
              <tr>
                <th
                  style={{
                    background: "rgb(242 242 242 / var(--tw-bg-opacity))",
                  }}
                >
                  Scenario
                </th>
                <th>Implementation</th>
              </tr>
            </thead>
            <tbody className="text-left">
              <tr>
                <td>You are expecting rising prices </td>
                <td>Long call</td>
              </tr>
              <tr>
                <td>You are expecting falling prices</td>
                <td>Long put</td>
              </tr>
              <tr>
                <td>You are expecting stable or slightly decreasing prices</td>
                <td>Short call</td>
              </tr>
              <tr>
                <td>You are expecting stable or slightly increasing prices</td>
                <td>Short put</td>
              </tr>
            </tbody>
          </table>
          <p>
            It’s worth noting that options are not an entry-level investment
            product. They’re a high-risk investment product and your losses can
            quickly add up in case of losing trades.
            <br />
          </p>
          <div className="pb-10">
            <Link href="/options-trading/trading-options-on-cmc-platform">
              Learn how options trading works with us
            </Link>
          </div>
        </section>

        <section>
          <h2 className="pb-5 text-3xl">The risks of trading options</h2>
          <p className="pb-5">
            When you trade options, you can’t attach a stop-loss order or
            take-profit order to your position as you might with a CFD trade or
            spread bet.
            <br /> <br /> However, if you buy (go long on) a call or put, your
            maximum risk is predetermined because your potential loss is limited
            to the price that you paid for the option, known as the ‘premium’.
            <br /> <br /> On the other hand, if you sell (go short on) a call or
            put, your potential loss is unlimited. Overall, you could lose all
            the funds you&apos;ve deposited in your account. For professional
            clients, losses can exceed deposits.
          </p>
          <table className="comp-table comp-static-table w-full pb-10 text-left">
            <thead className="text-left">
              <tr>
                <th
                  style={{
                    background: "rgb(242 242 242 / var(--tw-bg-opacity))",
                  }}
                ></th>
                <th>Buying a call/put</th>
                <th>Selling a call/put</th>
              </tr>
            </thead>
            <tbody className="text-left">
              <tr>
                <td>Maximum loss</td>
                <td>Limited to premium paid</td>
                <td>Unlimited</td>
              </tr>
              <tr>
                <td>Maximum profit</td>
                <td>Unlimited</td>
                <td>Limited to premium received</td>
              </tr>
            </tbody>
          </table>
          <div className="pb-10">
            Note: when you trade with us, options are denominated in the
            currency of the underlying instrument rather than your account
            currency. This mean that forex movements can impact overall profit
            or loss on a trade.{" "}
            <Link href="/options-trading/trading-options-on-cmc-platform">
              Learn more about trading options with us
            </Link>
          </div>
        </section>

        <section>
          <h2 className="pb-5 text-3xl">How do options work?</h2>
          <p className="pb-10">
            Every option contract has what’s known as an intrinsic value. The
            intrinsic value is calculated from the difference between the
            option&apos;s strike price and the underlying asset&apos;s market
            price. The more significant this difference is, the more valuable
            the option. For example, if an index price rises, a call option on
            that index would gain value.
            <br />
            <br />
            Increased volatility in the underlying asset can raise the
            option&apos;s price. When the underlying asset has greater price
            fluctuations, there&apos;s a higher chance of significant price
            moves, potentially making the option more valuable.
            <br />
            <br />
            Traders can realise profits or losses by closing their positions
            before expiration. For cash-settled options, there&apos;s no
            acquisition or disposal of a physical asset, so if the option is
            ‘in-the-money’ at expiration, the holder receives the cash
            difference.
            <br />
            <br />
            The price of a cash-settled option can be broken down into intrinsic
            value and time value (or extrinsic value). Intrinsic value for a
            call option is how much the underlying market is above the strike
            price. Time value accounts for the probability of the underlying
            moving further into the money before expiration. It’s important to
            bear in mind that an increase in volatility also raises the
            possibility of an option swinging toward being ‘out- of- the- money’
            at expiration.
            <br />
            <br />
            The two main styles of options available are American-style options
            and European-style options. American options can be exercised at any
            time before they expire, whereas European options can only be
            exercised in a set period just before their expiration date.
          </p>
        </section>

        <section>
          <h2 className="pb-5 text-3xl">Why trade options?</h2>
          <p className="pb-10">
            Options can be an effective way to hedge an existing position on an
            investment. They give you an opportunity to hedge the downside in
            volatile markets, without giving up on upside potential. Taking out
            long option positions gives you certainty over your risk, as you
            know your maximum loss for the position is limited to the premium
            paid for the contract. However, the maximum loss when selling
            options is unlimited.
            <br />
            <br />
            Even if you don’t exercise an existing option, trading them can be
            beneficial. Buyers may pay a higher premium to secure an attractive
            strike price, particularly if your call option strike price is
            currently much lower than market value. If the market value falls,
            and it’s no longer worthwhile to exercise them, you’ve made a profit
            from the premium.
          </p>
        </section>

        <section>
          <h2 className="pb-5 text-3xl">How to trade options</h2>
          <ol className="list-decimal pb-10 pl-4">
            <li className="pb-4">
              <strong className="font-bold">
                Learn key options terminology
              </strong>
              <ul className="list-disc pl-8 pt-3">
                <li>
                  Option: a contract that gives the buyer the right, but not the
                  obligation, to buy or sell an underlying asset at a specific
                  price on or before a certain date
                </li>
                <li>
                  Strike price: the price at which the underlying asset can be
                  bought or sold
                </li>
                <li>
                  Expiration date: the date and time at which the option
                  contract expires
                </li>
                <li>Premium: the price paid to purchase the option</li>
                <li>
                  Multiplier (contract size): indicates the number of units of
                  the underlying asset that one contract represents, and is
                  usually used for stock index options
                </li>
                <li>
                  In-the-money (ITM), out-of-the-money (OTM), at-the-money
                  (ATM): refers to the relationship between the option’s current
                  price and the option’s strike price
                </li>
              </ul>
            </li>
            <li className="pb-4">
              <strong className="font-bold">Understand the risks</strong>
              <ul className="list-disc pb-5 pl-8 pt-3">
                <li> Option contracts can expire worthless</li>
                <li>
                  There’s potential for significant loss, especially with
                  certain strategies
                </li>
                <li> Market conditions can be unpredictable</li>
              </ul>
              <p>
                Options Greeks are risk characteristics that measure how changes
                in certain factors, such as the underlying asset price or
                volatility, affect an option’s price. It’s important to
                understand how these factors can influence your options
                position. Understanding the Greeks can help traders effectively
                manage their portfolios and hedge against potential losses.
              </p>
            </li>
            <li className="pb-4">
              <strong className="font-bold">
                Research the market you want to trade
              </strong>
              <p className="pt-2">
                Options aren’t solely for stocks. They’re available for a
                variety of securities, including commodities, indices, and ETFs.
                It’s important to determine which market aligns with your
                trading goals and risk tolerance. By narrowing your focus, you
                can analyse specific sectors, implied volatility, price trends,
                expiration dates, and trading volumes, to make informed
                decisions.
              </p>
            </li>
            <li className="pb-4">
              <strong className="font-bold">
                Pick which options to buy or sell
              </strong>
              <p className="pt-2">
                Your prediction about an underlying &apos;asset&apos;s movement
                guides the type of option you might purchase or sell:
              </p>
              <ul className="list-disc pl-8">
                <li>
                  If you think the underlying asset price is moving up, you
                  might look to buy a call option or sell a put option
                </li>
                <li>
                  If you think the underlying asset price is stable, you could
                  choose to sell a call option or sell a put option
                </li>
                <li>
                  If you think the underlying asset price is falling, you might
                  buy a put option or sell a call option.
                </li>
              </ul>
            </li>
            <li className="pb-4">
              <strong className="font-bold">
                Predict the options strike price
              </strong>
              <p className="pt-2">
                For an option to maintain value, the underlying asset price
                should settle in-the-money by the option’s expiration. Choose a
                strike price that mirrors where you anticipate the asset will
                reside for the option&apos;s duration.
              </p>
            </li>
            <li className="pb-4">
              <strong className="font-bold">Choose a timeframe</strong>
              <p className="pt-2">
                Every option has a predefined expiration, dictating the final
                day it can be exercised. Short-term investors may look to trade
                options that have a daily or weekly expiration date, while
                longer-term investors may find an option with a monthly or
                yearly expiry more suitable.
                <br /> <br />
                The longer the time until the option expires, the more time
                there is for the underlying asset price to move in a direction
                favourable to you (as the option holder) – bear in mind that the
                opposite scenario is also possible. As a result, the option is
                priced higher by the seller.
                <br /> <br />
                Longer timeframes offer more chances for your investment
                strategy to unfold. However, be cautious of time decay, as the
                value of options diminishes as they approach expiration,
                especially if they remain out-of-the-money.
              </p>
            </li>
            <li className="pb-4">
              <strong className="font-bold">Place your options trade</strong>
              <p className="pt-2">
                When you trade options with us, you’ll need to specify:
              </p>
              <ul className="list-disc pl-8">
                <li>
                  Whether you&apos;re buying or selling a call or put option
                </li>
                <li>A strike price</li>
                <li>An expiration date</li>
                <li>
                  The number of contracts you wish to trade – the higher the
                  trade size, the greater the margin required, and therefore the
                  higher the risk
                </li>
                <li>
                  Any additional order details like limit or market orders
                </li>
              </ul>
            </li>
            <li className="pb-4">
              <strong className="font-bold">Monitor your position</strong>
              <p className="pt-2">
                Regularly track your option trade, evaluating it against the
                underlying asset&apos;s movement, time decay, and any market
                events or news that might impact its value. Adjust or exit
                positions, if necessary, based on your initial strategy and
                changing market conditions.
              </p>
            </li>
          </ol>
        </section>

        <section>
          <h2 className="pb-5 text-3xl">What makes a good options trader?</h2>
          <p>
            Here are our five top tips for anyone looking to start options
            trading.
          </p>
          <ul className="list-disc pb-10 pl-8">
            <li>
              <strong className="font-bold">
                Don’t use options trading in isolation:{" "}
              </strong>
              options is a high-risk product designed for experienced traders,
              so you should have experience of trading lower-risk types of
              investment before trading options. Options can be a very useful
              product to use in conjunction with lower-risk investments, such as
              a share portfolio, as they allow you to hedge your portfolio
              against adverse market movements.
            </li>
            <li>
              <strong className="font-bold">
                Understand and stick to your strategy:{" "}
              </strong>
              understand whether you’re hedging against losses or actively
              pursuing profits from underperforming options before making a
              purchase.
            </li>
            <li>
              <strong className="font-bold">Stick to modest trades: </strong>a
              string of losing trades in options trading can quickly turn into
              significant losses. Avoid overcommitting on each trade to ensure
              that, if it doesn’t work out in your favour, your loss is only a
              small percentage of your overall trading funds.
            </li>
            <li>
              <strong className="font-bold">
                Diversify as much as possible:{" "}
              </strong>
              As well as diversifying through alternative, lower-risk assets, it
              could also be sensible to hold a diverse range of options. If you
              solely invest in technology or NASDAQ indices, you could leave
              yourself open to losses if the tech sector doesn’t move in your
              favour. Choosing options from a range of industries and markets
              can help to balance your risk.
            </li>
          </ul>

          {/* TODO: CTA link to be added */}
          <div className="flex justify-center pb-10">
            <OnboardingButton
              className="mx-auto mb-2 md:mx-0 md:mb-0"
              variant="azure"
              account="live"
              params="jid=gb1&amp;iaid=null&amp;lsrc=1"
            >
              Start trading options
            </OnboardingButton>
          </div>

          <p>
            Before you can start trading options, you’ll need to take a short
            test to make sure you understand how options trading works and the
            risks involved.
          </p>
        </section>

        <LearnPageFAQ
          faqs={[
            {
              q: "Can I buy and trade stock options?",
              a: "Yes. Options are available on lots of securities, including stocks. We'll offer options based on the following indices initially: UK 100, US SPX 500, US NDAQ 100, Germany 40, France 40 and Euro 50, with more assets to follow.",
            },
            {
              q: "Can I buy call and put options for the same security?",
              a: "Yes, and this approach is used by traders with the aim of helping to manage losses and increase profit potential. There are a number of complex options strategies that traders can benefit from, including straddles, strangles and spread options.",
            },
            {
              q: "What are the fees associated with options trading?",
              a: (
                <>
                  The fees associated with options trading are the bid-ask
                  spread, and any currency conversion fee on realised profit and
                  losses. You can find more information about the costs in our{" "}
                  <Link href="https://www.cmcmarkets.com/en-gb/legal-documents/cfd-legal-documents">
                    Cost Disclosure Document.
                  </Link>
                </>
              ),
            },
          ]}
        />

        <LearnPageTryTheseNext
          links={[
            {
              title: "Discover our options trading product",
              subtitle:
                "Explore the features and benefits of our options trading product",
              url: "/en-gb/options-trading",
            },
            {
              title: "Options greeks explained",
              subtitle:
                "Get to grips with the Greeks: the key metrics that show how sensitive options are to various market factors.",
              url: "/en-gb/options-trading/understanding-options-greeks",
            },
            {
              title: "Options valuation explained",
              subtitle:
                "Learn the essentials of how to value options, including the impact of time, volatility, and the underlying asset.",
              url: "/en-gb/options-trading/understanding-options-valuation",
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

export default WhatIsOptionTrading;
