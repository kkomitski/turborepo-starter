;
import { priceValue } from "@/helpers/instruments";
import { InstrumentData } from "./InstrumentCardDeck";
import Image from "next/image";

const InstrumentCard = ({
  instrument,
  instrumentImgUrl,
  isPositive,
  movementPercentage,
}: {
  instrument: InstrumentData;
  instrumentImgUrl?: string;
  isPositive: Function;
  movementPercentage: Function;
}) => {
  return (
    <div className="flex min-h-[225px] flex-col justify-between rounded-2xl bg-white p-6 drop-shadow-xl">
      <div>
        {instrument.imgName !== undefined ? (
          <Image
            loading="lazy"
            className="mb-6 h-12 w-auto rounded-full object-cover"
            src={instrument.imgName}
            alt={instrument.data?.instrument.name ?? instrument.imgName}
            width="49"
            height="49"
            unoptimized={true}
          />
        ) : null}
        <div className="mb-1 flex justify-between">
          <div className="text-xl md:text-lg 2xl:text-xl">
            {instrument?.data?.instrument.abbreviation}
          </div>
          <div className="text-xl text-navy-20 md:text-lg 2xl:text-xl">
            {priceValue(instrument?.data?.price)}
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div>
          <svg
            className={
              isPositive(instrument?.data?.price.movement_percentage)
                ? "stroke-green-700"
                : "rotate-180 stroke-red-600"
            }
            width="40"
            height="41"
            viewBox="0 0 40 41"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M31.4738 17.5224L19.8782 5.92676M19.8782 5.92676L8.28255 17.5224M19.8782 5.92676L19.8782 35.7441"
              stroke="inherit"
              strokeWidth="2.83975"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div
          className={
            "text-5xl md:text-4xl 2xl:text-5xl " +
            (isPositive(instrument?.data?.price.movement_percentage)
              ? "text-green-700"
              : "text-red-600")
          }
        >
          {movementPercentage(instrument?.data?.price.movement_percentage)}
        </div>
      </div>
    </div>
  );
};

export default InstrumentCard;
