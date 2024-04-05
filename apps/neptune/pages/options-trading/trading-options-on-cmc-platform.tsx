import OnboardingButton from "@/components/elements/OnboardingButton";
import ReadyToGetStarted from "@/components/modules/Common/ReadyToGetStarted";
import LearnPageContent from "@/components/templates/learn-page-content";
import LearnPageHeader from "@/components/templates/learn-page.header";
import { awsImage } from "@/helpers/constants";
import Image from "next/image";
import React from "react";
import LearnPageTryTheseNext from "../../components/templates/learn-page-try-these-next";
import Link from "next/link";
import Head from "next/head";

const TradingOptionsOnCMCPlatform = () => {
  return (
    <>
      <Head>
        <title>Trading Options on Our Platform | CMC Markets</title>
      </Head>

      <LearnPageHeader
        title="How do I trade options with CMC?"
        tags={["Trading strategies"]}
        author="michaelHewson"
      >
        <p>
          You can trade over-the-counter (OTC) options with us from a CFD
          trading account. In this article, we’ll help you get familiar with our
          web-based trading platform and steps you need to take to get started.
          <br /> <br /> Learn how to locate options on our platform, and view a
          list of the available options contracts with the options chain. We
          also show you how to open an order ticket, and the range of order
          types you can choose from. Finally, see where you can view your open
          options positions.
        </p>
      </LearnPageHeader>

      <LearnPageContent>
        <section>
          <h2 className="pb-5 text-3xl">Where can I find options?</h2>
          <p>
            Once you’ve opened a CFD trading account with us, head to our
            trading platform or app and navigate to the ‘Products’ tab. Here
            you’ll find options, alongside indices, forex, shares and so on, as
            shown below.
          </p>

          <Image
            height={0}
            width={0}
            sizes="100vw"
            alt="finding options"
            className="mx-auto w-full pb-10 lg:min-h-[300px] lg:w-auto"
            src={awsImage("finding-options-v3.png")}
          />
          <p>
            When you select ‘Options’, you’ll see a list of all underlying
            instruments available. We offer options based on the following
            underlying indices:
          </p>

          <ul className="list-disc pb-5 pl-8 pt-3">
            <li>S&P 500 </li>
            <li>Nasdaq 100</li>
            <li>FTSE 100</li>
            <li>Euro Stoxx 50</li>
            <li>DAX 40</li>
            <li>CAC 40</li>
          </ul>
        </section>

        <section>
          <h2 className="pb-5 text-3xl">The options chain</h2>
          <p>
            The options chain is a list of all the available option contracts
            for a given underlying asset.
            <br /> <br />
            To open the options chain, select the options product you’re
            interested in. A window will open showing you the prices of calls
            and puts for your chosen underlying asset on a certain expiry date,
            across a range of strike prices, as in the example below.
          </p>

          <Image
            height={0}
            width={0}
            sizes="100vw"
            alt="options chain example"
            className="mx-auto w-full pb-10 md:min-h-[600px] md:w-auto"
            src={awsImage("option-chain-example-v3.png")}
          />

          <p className="pb-10">
            The name of the underlying asset is displayed in the top-left corner
            of the window – in this example, we’re looking at the Germany 40 -
            Cash.
            <br /> <br /> The current underlying price is centred on the blue
            line – in the example above, it’s 16,914.72. As you move down the
            window, the strike price of the options increases.
            <br /> <br /> In-the-money (ITM) calls and out-of-the-money (OTM)
            puts can be found above the blue line, whereas OTM calls and ITM
            puts are below the blue line.
            <br /> <br /> At the top of the window, you can switch between the
            available expiration dates for this underlying asset. On the left
            and right side of the window, the ‘IV’ columns indicate the current
            bid and ask implied volatility for each contract.
          </p>
        </section>

        <section>
          <h2 className="pb-5 text-3xl">How do I open an order ticket?</h2>
          <p>
            To open an order ticket, choose a price under ‘Buy’ or ‘Sell’ for
            either a call or put option at the strike of your choice. This will
            open an order ticket window, like the one shown below.
          </p>

          <Image
            height={0}
            width={0}
            sizes="100vw"
            alt="options chain example"
            className="mx-auto mt-10 w-full pb-10 md:min-h-[600px] md:w-auto"
            src={awsImage("options-trade-order-ticket-v4.jpg")}
          />

          <p className="pb-10">
            Before placing your order, you need to select your trade size under
            ‘Contracts’. As we offer fractional options, this number can be as
            low as 0.01. This corresponds to the number of contracts you are
            buying or selling. Larger trades require more margin and carry more
            risk, as profits and losses are magnified by the number of
            contracts.
            <br /> <br />
            There are other settings that you can customise here, too, such as
            changing the expiry date, order type, option type and strike price.
            You can also view the estimated margin, an explanation of the
            cost/spread, and the key information document. Plus, you can view
            information on the Greeks’ metrics, which measure the factors that
            influence the price of an options contract and give you insights
            about the risks.
            <br /> <br />
            It&apos;s important to note that the implied volatility and Greeks
            on our platform are estimates and are merely indicative. Although we
            update these readings regularly, we don’t guarantee their accuracy.
            <br /> <br />
            You can find more information on the options contract in the product
            overview, by selecting the three lines in the top-left of the order
            ticket and choosing ‘Product Overview’ from the list, or by
            selecting an options contract in the options chain.
            <br /> <br />
            An order for an over-the-counter (OTC) options contract is always
            ‘immediate or cancel’ (IOC). This means that the order will either
            be filled immediately (either fully or partially) or cancelled. If a
            partial fill occurs, then a partial cancellation of the unfilled
            portion of the order will occur.
            <br /> <br />
            Expanding the order book will show how many units are available at
            each price level.
          </p>
        </section>

        <section>
          <h2 className="pb-5 text-3xl">What order types are available?</h2>
          <p>
            There are two types of orders you can place through the platform –
            limit IOC orders and protected market IOC orders. The latter is
            shown in the example below.
          </p>

          <Image
            height={0}
            width={0}
            sizes="100vw"
            alt="options chain example"
            className="mx-auto mt-10 w-full pb-10 md:min-h-[500px] md:w-auto"
            src={awsImage("order-type-example-v2.png")}
          />

          <div className="pb-5">
            <strong className="font-bold">Limit IOC orders</strong>: this is a
            type of limit order that requires immediate execution, either
            partially or entirely. If the order cannot be filled entirely at
            either the specified price or a better one, the remaining unfilled
            portion of the order is automatically cancelled.
            <br /> <br />
            <strong className="font-bold">Protected market IOC orders</strong>:
            this is a market order with a minimum or maximum price set by us.
            The purpose is to give protection against{" "}
            <a href="https://www.cmcmarkets.com/en-gb/trading-guides/slippage-in-trading">
              slippage
            </a>
            . These orders work just like a limit IOC order once the order is
            submitted, with the upper or lower price as the limit.
            <br /> <br /> As mentioned above, your order may not always be
            filled at the best buy and sell prices available. To offset this
            effect, limit orders are a good way to ensure that your order gets
            placed at a price you’re happy with. When the order book shifts, a
            limit order can help prevent your trade from getting executed at an
            unfavourable price, as explained in the example below.
            <br /> <br />
          </div>

          <h3 className="pb-5 text-2xl">Limit IOC order example</h3>
          <p className="pb-5">
            The hypothetical order book below shows a sell price of £9.80 and a
            buy price of £11.20. The expanded order book shows prices at various
            sell and buy sizes:
          </p>
          <table className="comp-table comp-static-table w-full pb-10 text-left">
            <thead className="text-left">
              <tr>
                <th
                  style={{
                    background: "rgb(242 242 242 / var(--tw-bg-opacity))",
                  }}
                >
                  Sell size
                </th>
                <th>Sell</th>
                <th>Buy</th>
                <th>Buy size</th>
              </tr>
            </thead>
            <tbody className="text-left">
              <tr>
                <td>100</td>
                <td>£9.80</td>
                <td>£11.20</td>
                <td>100</td>
              </tr>
              <tr>
                <td>500</td>
                <td>£7.90</td>
                <td>£12.70</td>
                <td>500</td>
              </tr>
              <tr>
                <td>1,000</td>
                <td>£4.80</td>
                <td>£18.10</td>
                <td>1,000</td>
              </tr>
            </tbody>
          </table>
          <p className="pb-5">
            Let’s imagine you were to place a limit IOC order to buy 1,000
            contracts with a limit price of £19.
            <br /> <br />
            Then, just as you place the order, the order book shifts slightly.
            At the precise moment we receive your order, the order book looks
            like this:
          </p>
          <table className="comp-table comp-static-table w-full pb-10 text-left">
            <thead className="text-left">
              <tr>
                <th
                  style={{
                    background: "rgb(242 242 242 / var(--tw-bg-opacity))",
                  }}
                >
                  Sell size
                </th>
                <th>Sell</th>
                <th>Buy</th>
                <th>Buy size</th>
              </tr>
            </thead>
            <tbody className="text-left">
              <tr>
                <td>100</td>
                <td>£11.80</td>
                <td>£12.90</td>
                <td>100</td>
              </tr>
              <tr>
                <td>500</td>
                <td>£9.90</td>
                <td>£15.40</td>
                <td>500</td>
              </tr>
              <tr>
                <td>1,000</td>
                <td>£6.80</td>
                <td>£20.10</td>
                <td>1,000</td>
              </tr>
            </tbody>
          </table>
          <p className="pb-5">
            In this scenario, you would get a fill of 600 contracts bought at an
            average of £14.98 per contract (100 at £12.90 and 500 at £15.40 [
            (100 * 12.90 + 500 * 15.40)/600= 14.98).
            <br /> <br />
            Since you set a limit of £19, the remaining, unfilled portion of
            your order – 400 contracts – would be cancelled, rather than be
            executed at the price of £20.10 per unit.
          </p>

          <h3 className="pb-5 text-2xl">Protected market IOC order example</h3>
          <p className="pb-5">
            Now let’s look at a protected market IOC order. The intent of the
            “protected” aspect of the order is that it limits the level of
            slippage you may be subject to. As in the previous example, for 100
            units the sell price is £9.80 and the buy price is £11.20. The
            minimum price is £4.80 and the maximum is £18.10. The expanded order
            book looks as follows:
          </p>
          <table className="comp-table comp-static-table w-full pb-10 text-left">
            <thead className="text-left">
              <tr>
                <th
                  style={{
                    background: "rgb(242 242 242 / var(--tw-bg-opacity))",
                  }}
                >
                  Sell size
                </th>
                <th>Sell</th>
                <th>Buy</th>
                <th>Buy size</th>
              </tr>
            </thead>
            <tbody className="text-left">
              <tr>
                <td>100</td>
                <td>£9.80</td>
                <td>£11.20</td>
                <td>100</td>
              </tr>
              <tr>
                <td>500</td>
                <td>£7.90</td>
                <td>£12.70</td>
                <td>500</td>
              </tr>
              <tr>
                <td>1,000</td>
                <td>£4.80</td>
                <td>£18.10</td>
                <td>1,000</td>
              </tr>
            </tbody>
          </table>
          <p>
            You place an order to buy 1,000 contracts, but by the time your
            order is submitted, the order book changes and looks as follows:
          </p>
          <table className="comp-table comp-static-table w-full pb-10 text-left">
            <thead className="text-left">
              <tr>
                <th
                  style={{
                    background: "rgb(242 242 242 / var(--tw-bg-opacity))",
                  }}
                >
                  Sell size
                </th>
                <th>Sell</th>
                <th>Buy</th>
                <th>Buy size</th>
              </tr>
            </thead>
            <tbody className="text-left">
              <tr>
                <td>100</td>
                <td>£11.80</td>
                <td>£12.90</td>
                <td>100</td>
              </tr>
              <tr>
                <td>500</td>
                <td>£9.90</td>
                <td>£15.40</td>
                <td>500</td>
              </tr>
              <tr>
                <td>1,000</td>
                <td>£6.80</td>
                <td>£20.10</td>
                <td>1,000</td>
              </tr>
            </tbody>
          </table>

          <p className="pb-10">
            The price set by the platform and detailed on the order ticket will
            be the maximum price at which any portion of the protected market
            IOC order will be executed. Once the order is submitted and accepted
            by the platform, it will work like a limit IOC order, with the
            maximum price as the limit price – here it&apos;s £18.10.
            <br /> <br />
            As a result, your order would only be filled with the contracts
            available under this maximum price, which is 500 contracts at £15.40
            and 100 contracts at £12.90. This means you would buy 600 contracts
            at an average price of £14.98 per contract, and the unfilled portion
            of 400 contracts would be cancelled.
          </p>
        </section>

        <section>
          <h2 className="pb-5 text-3xl">Where can I view my open positions?</h2>
          <p className="pb-5">
            After placing your order, you will receive an order confirmation
            like the one shown below.
          </p>
          <Image
            height={0}
            width={0}
            sizes="100vw"
            alt="order conformation"
            className="mx-auto w-full pb-10 md:min-h-[600px] md:w-auto"
            src={awsImage("options-order-conformation-v3.png")}
          />
          <p>
            Your open position(s) can then be viewed on the platform under
            ‘Options Positions’, as shown below. Here, you can monitor the live
            profit and loss (P&L) of all your open positions. You can close a
            position by selecting the red cross next to the corresponding
            position.{" "}
          </p>
          <Image
            height={0}
            width={0}
            sizes="100vw"
            alt="open position"
            className="mx-auto w-full pb-10 md:min-h-[250px] md:w-auto"
            src={awsImage("options-open-position-example-v3.png")}
          />
          <ul className="list-disc pb-5 pl-8 pt-3">
            <li>
              <strong className="font-bold">A</strong> - Expand position to show
              an order breakdown if you have multiple orders on the same
              contract
            </li>
            <li>
              <strong className="font-bold">B</strong> - Instrument name
            </li>
            <li>
              <strong className="font-bold">C</strong> - Expiration date
            </li>
            <li>
              <strong className="font-bold">D</strong> - Strike price
            </li>
            <li>
              <strong className="font-bold">E</strong> - Long/short position
              indicator
            </li>
            <li>
              <strong className="font-bold">F</strong> - Option type (put/call)
            </li>
            <li>
              <strong className="font-bold">G</strong> - Number of contracts
            </li>
            <li>
              <strong className="font-bold">H</strong> - The average entry price
              of your aggregate position for this specific instrument
            </li>
            <li>
              <strong className="font-bold">I</strong> - Premium amount
            </li>
            <li>
              <strong className="font-bold">J</strong> - Margin of position
            </li>
            <li>
              <strong className="font-bold">K</strong> - Total P&L
            </li>
            <li>
              <strong className="font-bold">L</strong> - Open an order ticket to
              sell
            </li>
            <li>
              <strong className="font-bold">M</strong> - Open an order ticket to
              buy
            </li>
            <li>
              <strong className="font-bold">N</strong> - Close position
            </li>
          </ul>
          <p>
            <span className="font-bold">
              How to start trading options with us
            </span>
            <span>:</span>
          </p>
          <ol className="pb-5 pl-8 pt-3">
            <li>
              1. Open a CFD trading account, or use your existing CFD trading
              account
            </li>
            <li>2. Take and pass our options suitability test</li>
          </ol>
        </section>

        <LearnPageTryTheseNext
          links={[
            {
              title: "Discover our options trading product",
              subtitle: "Find out more about options trading with us.",
              url: "/en-gb/options-trading",
            },
            {
              title: "What is options trading?",
              subtitle:
                "New to options trading? Learn the fundamentals with our step-by-step guide. ",
              url: "/en-gb/options-trading/what-is-options-trading",
            },
            {
              title: "Advantages of options trading?",
              subtitle:
                "Explore the benefits of options trading and find out if it’s the right fit for you.",
              url: "/en-gb/options-trading/benefits-of-options-trading",
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

export default TradingOptionsOnCMCPlatform;
