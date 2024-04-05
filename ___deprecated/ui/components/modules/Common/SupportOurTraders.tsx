import constants from "@/helpers/constants";
type SupportOurTradersProps = {
  type: "sb" | "cfd";
};

const SupportOurTraders = ({ type }: SupportOurTradersProps) => {
  return (
    <section className="Module relative bg-navy-100 text-white">
      <div className="main-xl-container relative">
        <h2 className="headline-lg relative mb-12 text-center">How we support our traders</h2>
        <div className="grid gap-x-8 gap-y-16 md:grid-cols-3 lg:gap-x-16">
          <div>
            <div className="mb-6 border-b border-white pb-6">
              <svg
                className="mx-auto"
                width="161"
                height="161"
                viewBox="0 0 161 161"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect x="27.167" y="74.1387" width="106.667" height="66.1992" rx="14" fill="#325FFF" />
                <path
                  d="M80.5003 100.338V113.671M40.5003 140.338H120.5C127.864 140.338 133.834 134.368 133.834 127.005V87.0046C133.834 79.6408 127.864 73.6712 120.5 73.6712H40.5003C33.1365 73.6712 27.167 79.6408 27.167 87.0046V127.005C27.167 134.368 33.1365 140.338 40.5003 140.338ZM107.167 73.6712V47.0046C107.167 32.277 95.2279 20.3379 80.5003 20.3379C65.7727 20.3379 53.8337 32.277 53.8337 47.0046V73.6712H107.167Z"
                  stroke="white"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div>
              <h3 className="mb-2 text-[32px]">Build trust</h3>
              <p>
                With {constants.DIDS.YEARS_ACTIVE} years&apos; industry experience, we&apos;re constantly
                evolving. We&apos;re regulated by the Financial Conduct Authority (FCA), ensuring adherence to
                the highest standards of financial practice. Under the FSCS scheme, your eligible deposits are
                protected up to £85,000 in the unlikely event that our business went into liquidation.
              </p>
            </div>
          </div>
          <div>
            <div className="mb-6 border-b border-white pb-6">
              <svg
                className="mx-auto"
                width="161"
                height="161"
                viewBox="0 0 161 161"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20.5 41.0039C20.5 33.2719 26.768 27.0039 34.5 27.0039H99.3027C107.035 27.0039 113.303 33.2719 113.303 41.0039V79.2031C113.303 86.9351 107.035 93.2031 99.3027 93.2031H74.0421L47.5124 119.999V93.2031H34.5C26.768 93.2031 20.5 86.9351 20.5 79.2031V41.0039Z"
                  fill="#325FFF"
                />
                <path
                  d="M113.833 53.6706H127.167C134.53 53.6706 140.5 59.6401 140.5 67.0039V107.004C140.5 114.368 134.53 120.337 127.167 120.337H113.833V147.004L87.1667 120.337H60.5C56.8181 120.337 53.4848 118.845 51.0719 116.432M51.0719 116.432L73.8333 93.6706H100.5C107.864 93.6706 113.833 87.701 113.833 80.3372V40.3372C113.833 32.9734 107.864 27.0039 100.5 27.0039H33.8333C26.4695 27.0039 20.5 32.9734 20.5 40.3372V80.3372C20.5 87.701 26.4695 93.6706 33.8333 93.6706H47.1667V120.337L51.0719 116.432Z"
                  stroke="white"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div>
              <h3 className="mb-2 text-[32px]">Contact us 24/5</h3>
              <p>
                You can contact our Client Management team whenever the markets are open, from Sunday night
                through to Friday night – <a href="mailto:clientmanagement@cmcmarkets.co.uk">email us</a> or
                call <a href="tel:+44%20(0)20%207170%208200">+44 (0)20 7170 8200</a>.
              </p>
            </div>
          </div>
          <div>
            <div className="mb-6 border-b border-white pb-6">
              <svg
                className="mx-auto"
                width="161"
                height="161"
                viewBox="0 0 161 161"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M39.2974 71.0215L80.6446 93.3982L121.749 71.0215L126.37 90.2363V113.342L103.021 119.666L80.6446 134.016L58.2685 119.666L34.6309 113.342V90.2363L39.2974 71.0215Z"
                  fill="#325FFF"
                />
                <path
                  d="M80.5 93.6706L140.5 60.3372L80.5 27.0039L20.5 60.3372L80.5 93.6706ZM80.5 93.6706L121.561 70.859C125.178 79.9812 127.167 89.9268 127.167 100.337C127.167 105.012 126.766 109.594 125.996 114.05C108.595 115.742 92.8269 123.008 80.5 134.041C68.1731 123.008 52.4047 115.742 35.0041 114.05C34.2344 109.594 33.8333 105.012 33.8333 100.336C33.8333 89.9265 35.8216 79.981 39.4392 70.8589L80.5 93.6706ZM53.8333 133.67V83.6706L80.5 68.8558"
                  stroke="white"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div>
              <h3 className="mb-2 text-[32px]">Educational content</h3>
              <p>
                Our learn library contains a range of free educational resources on everything from the stock
                markets to {type === "sb" ? "spread betting" : "CFD trading"}. We want to help traders
                understand the wider world of trading.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportOurTraders;
