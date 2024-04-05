import { awsImage } from "@/helpers/constants";
import Image from "next/image";
type Props = {};

const HowWeBuildShareBaskets = (props: Props) => {
  return (
    <section id="howWeBuild" className="Module relative scroll-mt-24 bg-navy-100">
      <div className="main-xl-container relative text-white lg:px-20">
        <h2 className="headline-lg mb-10 text-center text-white">How we build our share baskets</h2>
        <div className="grid gap-y-14 py-6 md:grid-cols-2 md:gap-16 lg:grid-cols-3">
          <div className="">
            <div className="mb-6 border-b border-b-white px-6">
              <Image
                className="h-auto w-full"
                width={569}
                height={358}
                src={awsImage("share-baskets-trading_step-1.png")}
                alt=""
              />
            </div>
            <div>
              <p className="mb-2 text-xs uppercase">Step 1</p>
              <h3 className="mb-2 text-[32px]">Trend identification</h3>
              <p className="text-base">
                Firstly, our analysts use their expertise and hours of market research to spot existing and
                emerging trends that are driving the economy, such as AI or driverless cars.
              </p>
            </div>
          </div>
          <div className="">
            <div className="mb-6 border-b border-b-white px-6">
              <Image
                width={569}
                height={358}
                className="h-auto w-full"
                src={awsImage("share-baskets-trading_step-2.png")}
                alt=""
              />
            </div>

            <p className="mb-2 text-xs uppercase">Step 2</p>
            <h3 className="mb-2 text-[32px]">Impact analysis</h3>
            <p className="text-base">
              Then, they examine the data to determine the companies they believe are best positioned to
              benefit from these trends, varying their weighting in the index based on their exposure.
            </p>
          </div>
          <div className="">
            <div className="mb-6 border-b border-b-white px-6">
              <Image
                width={569}
                height={358}
                className="h-auto w-full"
                src={awsImage("share-baskets-trading_step-3.png")}
                alt=""
              />
            </div>

            <p className="mb-2 text-xs uppercase">Step 3</p>
            <h3 className="mb-2 text-[32px]">Basket formation</h3>
            <p className="text-base">
              Finally, we group the top companies into baskets, which operate in a similar way to an index
              such as the UK 100, giving you a broad exposure to a theme.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeBuildShareBaskets;
