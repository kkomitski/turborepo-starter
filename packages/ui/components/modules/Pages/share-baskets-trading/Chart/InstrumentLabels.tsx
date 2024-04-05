import { ShareBasketListing } from "./types";
import { Skeleton } from "@/components/ui/skeleton";

type InstrumentLabelsProps = {
  selectedShareBasket: ShareBasketListing;
  pricePerValueLoading: Boolean;
  period: String;
};

const InstrumentLabels = ({ selectedShareBasket, pricePerValueLoading, period }: InstrumentLabelsProps) => {
  return (
    <div className="mb-10 flex flex-col gap-y-2 lg:flex-row lg:gap-x-6 lg:gap-y-0">
      <div className="flex-col">
        <div className="flex items-center gap-x-2">
          <div className="h-3 w-3 rounded-full bg-[#fd8ca5]"></div>
          <span>{selectedShareBasket.name}</span>
        </div>
        <div className="flex min-h-[24px] items-center gap-x-1 text-navy-20 lg:ml-auto lg:justify-end lg:text-right">
          {pricePerValueLoading ? (
            <Skeleton className="h-5 w-24 rounded-full bg-white-90"></Skeleton>
          ) : (
            <>
              <span>{selectedShareBasket?.mainPricePerValue}%</span>
              <span className="text-xs">({period})</span>
            </>
          )}
        </div>
      </div>
      <div className="flex flex-col">
        <div className="flex items-center gap-x-2">
          <div className="h-3 w-3 rounded-full bg-azure-70"></div>
          <span>{selectedShareBasket.comparisonName}</span>
        </div>
        <div className="flex min-h-[24px] items-center gap-x-1 text-navy-20 lg:ml-auto lg:justify-end lg:text-right">
          {pricePerValueLoading ? (
            <Skeleton className="h-5 w-24 rounded-full bg-white-90"></Skeleton>
          ) : (
            <>
              <span>{selectedShareBasket?.comparisonPricePerValue}%</span>
              <span className="text-xs">({period})</span>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default InstrumentLabels;
