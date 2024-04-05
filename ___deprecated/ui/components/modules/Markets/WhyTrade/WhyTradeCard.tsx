import RightArrowSVG from "@/components/svg/RightArrowSVG";
import { cn } from "@/lib/utils-shadcn";
import Image from "next/image";
import Link from "next/link";
export type WhyTradeObj = {
  title: string | React.ReactNode;
  text: string | React.ReactNode;
  icon?:
    | {
        enabled: true;
        width: number;
        height: number;
        src: string;
        alt?: string;
        unoptimized?: boolean;
      }
    | {
        enabled: false;
      };
  button?:
    | {
        enabled: true;
        text: string;
        url: string;
      }
    | {
        enabled: false;
      };
  buttonTwo?:
    | {
        enabled: true;
        text: string;
        url: string;
      }
    | {
        enabled: false;
      };
};

const WhyTradeCard = ({ item, className }: { item: WhyTradeObj; className?: string }) => {
  return (
    <div className={cn("flex flex-col rounded-lg bg-navy-70 p-4 text-white", className)}>
      {item.icon && item.icon.enabled && (
        <Image
          className="mb-2 h-auto w-auto"
          style={{
            width: item.icon.width,
            height: item.icon.height,
          }}
          src={item.icon.src}
          width={item.icon.width}
          height={item.icon.height}
          alt={item.icon.alt || ""}
          unoptimized={item.icon.unoptimized || false}
        />
      )}

      <h3 className="mb-2 text-xl font-semibold leading-snug">{item.title}</h3>
      <p className="mb-auto">{item.text}</p>
      <div className="mt-5 flex  flex-col gap-2 3xl:flex-row">
        {item.button && item.button.enabled && (
          <Link className="btn btn-secondary btn-with-icon" href={item.button.url}>
            <span>{item.button.text}</span>
            <RightArrowSVG />
          </Link>
        )}
        {item.buttonTwo && item.buttonTwo.enabled && (
          <Link className="btn btn-secondary btn-with-icon" href={item.buttonTwo.url}>
            <span>{item.buttonTwo.text}</span>
            <RightArrowSVG />
          </Link>
        )}
      </div>
    </div>
  );
};

export default WhyTradeCard;
