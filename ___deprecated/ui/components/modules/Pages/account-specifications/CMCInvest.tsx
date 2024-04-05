import ListItemTick from "@/components/elements/ListItemTick";
import Lines from "@/components/global/Misc/Lines";
import ExternalLinkSVG from "@/components/svg/ExternalLinkSVG";
import Link from "next/link";
type Props = {};

const CMCInvest = (props: Props) => {
  return (
    <section className="relative bg-white-95">
      <Lines left />
      <div className="main-xl-container py-9 lg:py-20">
        <div className="flex flex-col gap-y-16 lg:flex-row lg:justify-between lg:gap-x-20">
          <div className="lg:w-5/12">
            <div className="-ml-6 lg:-mr-6">
              <div className="mb-6 border-l-8 border-l-invest-300 pl-6">
                <small className="mb-6 block uppercase">Your Investing journey starts here</small>
                <svg
                  className="mb-4"
                  width="201"
                  height="27"
                  viewBox="0 0 201 27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_1559_11024)">
                    <path
                      d="M27.8338 25.7639C28.2029 25.7639 28.5569 25.6199 28.8178 25.3634C29.0788 25.1071 29.2254 24.7593 29.2254 24.3966V10.2067V8.01892C29.2254 5.8824 28.133 4.85687 26.0943 4.20737C25.2872 3.96124 24.5183 3.76297 23.7739 3.60231V25.7639H27.8338ZM35.8703 25.7639C36.2394 25.7639 36.5933 25.6199 36.8543 25.3634C37.1152 25.1071 37.2619 24.7593 37.2619 24.3966V10.2067V8.01892C37.2619 5.8824 36.173 4.85687 34.1308 4.20737C33.355 3.96124 32.5756 3.76297 31.8311 3.60231V25.7639H35.8703ZM45.3435 24.3966V1.23335C44.599 1.3906 43.8302 1.57519 43.0266 1.83499C40.9878 2.48791 39.8954 3.51343 39.8954 5.64995V25.7639H43.9311C44.3017 25.7639 44.6575 25.6204 44.9213 25.3645C45.1849 25.1086 45.3355 24.7608 45.34 24.3966H45.3435ZM68.1726 19.9526L66.3182 20.4893C63.9247 21.1456 61.9765 21.6071 60.491 21.6071C56.1458 21.6071 53.9296 19.0263 53.9296 13.6457C53.9296 8.26504 56.1353 5.6226 60.491 5.6226C61.987 5.6226 63.9351 6.11485 66.3322 6.73359L68.1864 7.27369V2.69985L67.0105 2.35801C64.3178 1.61962 62.0217 1.17523 59.9866 1.17523C53.1503 1.17523 48.4884 5.44484 48.4884 13.6286C48.4884 22.1233 53.1503 26.0819 59.9866 26.0819C62.0217 26.0819 64.3318 25.5931 67.0002 24.8409L68.1761 24.4992L68.1726 19.9526ZM19.9887 19.9526L18.138 20.4791C15.7409 21.1456 13.7927 21.6071 12.2967 21.6071C7.95844 21.6071 5.73536 19.0092 5.73536 13.6286C5.73536 8.24794 7.95844 5.6226 12.2967 5.6226C13.7927 5.6226 15.7409 6.11485 18.138 6.73359L19.9922 7.27369V2.69985L18.8163 2.35801C16.1479 1.61962 13.8379 1.17523 11.8027 1.17523C4.96652 1.17523 0.304688 5.44484 0.304688 13.6286C0.304688 22.1233 4.96652 26.0819 11.8027 26.0819C13.8379 26.0819 16.1479 25.5931 18.8163 24.8409L19.9922 24.4992L19.9887 19.9526Z"
                      fill="#00573F"
                    />
                    <path
                      d="M82.2556 1.17523H80.8223V26.0819H85.5363V5.54397L82.2556 1.17523Z"
                      fill="#00573F"
                    />
                    <path
                      d="M109.756 1.17523H108.351V18.0144L95.7465 1.17523H91.7109V26.0819H96.4248V9.24271L109.029 26.0819H113.027V5.5303L109.756 1.17523Z"
                      fill="#00573F"
                    />
                    <path
                      d="M136.38 1.17523H134.947L127.985 20.0142L121.059 1.17523H116.24L125.7 26.0819H130.305L138.631 4.16977L136.38 1.17523Z"
                      fill="#00573F"
                    />
                    <path
                      d="M147.657 15.5609H157.047V14.3542L154.922 11.5238H147.657V5.28172H159.082V1.21039H142.979V26.0828H159.51V22.0149H147.657V15.5609Z"
                      fill="#00573F"
                    />
                    <path
                      d="M198.512 1.21039H181.434V5.3501H188.715V26.0828H193.429V5.3501H200.714V4.13997L198.512 1.21039Z"
                      fill="#00573F"
                    />
                    <path
                      d="M172.327 11.3821C169.363 10.1925 167.899 9.38579 167.899 7.73469C167.899 5.94685 169.638 4.99995 172.003 4.99995C174.266 5.03807 176.465 5.73396 178.325 6.99973V2.40195C176.342 1.29596 174.096 0.727342 171.815 0.754271C166.534 0.754271 163.034 3.66676 163.034 7.93296C163.034 12.1991 166.615 13.8024 169.728 15.0672C172.904 16.3663 174.762 17.2071 174.762 19.0668C174.762 21.0666 172.835 22.2596 170.264 22.2596C167.55 22.2596 164.872 21.0324 163.014 19.453V20.9435L166.816 26.0062C168.036 26.3124 169.29 26.4675 170.549 26.4676C176.084 26.4676 179.762 23.4526 179.762 18.9266C179.762 14.4007 175.97 12.8213 172.327 11.3821Z"
                      fill="#00573F"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1559_11024">
                      <rect width="201" height="27" fill="white" />
                    </clipPath>
                  </defs>
                </svg>

                <p className="text-2xl">Take the next step in investing long term</p>
              </div>
              <div className="pl-9">
                <p>
                  Join today and start investing in over 1,300 US and UK shares, and 300+ ETFs and Investment
                  Trusts, with real-time pricing and 0% commission. Upgrade to our Plus plan and discover more
                  benefits like our flexible stocks & shares ISA and USD wallet. {""}
                  <a target="_blank" href="https://www.cmcinvest.com/en-gb/terms-and-conditions">
                    T&Cs apply
                  </a>
                </p>
                <p className="mb-4 block uppercase">CAPITAL AT RISK.</p>
                <Link
                  className="btn btn-invest btn-with-icon stroke-navy-100"
                  target="_blank"
                  href="https://www.cmcinvest.com/en-gb/"
                >
                  <span>Discover CMC Invest</span>
                  <ExternalLinkSVG />
                </Link>
              </div>
            </div>
          </div>
          <div className="lg:w-5/12">
            <div className="-ml-6 lg:-mr-6">
              <div className="mb-6 border-l-8 border-l-navy-100 pl-6">
                <p className="mb-3 text-[32px]">Corporate account</p>
                <p className="text-2xl">
                  Our corporate account offers access to a CFD trading account for your business.
                </p>
              </div>
              <div className="pl-9 text-xl">
                <ul className="mb-8">
                  <ListItemTick>12,000 instruments</ListItemTick>
                  <ListItemTick>Trade with leverage</ListItemTick>
                  <ListItemTick>CMC web platform, iOS and Android app</ListItemTick>
                  <ListItemTick>MT4 platform available</ListItemTick>
                  <ListItemTick>24/5 customer support</ListItemTick>
                </ul>
                <a
                  data-iframe-params="?jid=gb1&iaid=null&lsrc=1"
                  data-url="/en-gb/onboarding"
                  data-function="live"
                  data-label="Create Account"
                  className="js-modal btn btn-primary-outline btn-with-icon stroke-navy-100 uppercase"
                  href="https://signup.cmcmarkets.com/#/emailRegistration?jid=gb1&iaid=null&lsrc=1"
                >
                  <span>Open a corporate account</span>
                  <ExternalLinkSVG />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CMCInvest;
