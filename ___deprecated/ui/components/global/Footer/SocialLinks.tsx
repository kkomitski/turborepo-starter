import { awsImage } from "@/helpers/constants";
import Image from "next/image";
const SocialLinks = () => {
  return (
    <div className="w-full border-t border-t-navy-70 pb-8 pt-4 md:col-span-3 md:pb-0">
      <span className="mb-4 block uppercase"> Join us </span>
      <p className="flex gap-x-2">
        <a
          href="https://www.facebook.com/cmcmarkets.uk/"
          target="_blank"
          className="items-center justify-center rounded bg-navy-70 p-3"
        >
          <Image
            className="h-6 w-6"
            src={awsImage("social_facebook_outline.svg")}
            loading="lazy"
            width="24"
            height="24"
            alt=""
          />
        </a>
        <a
          href="https://www.linkedin.com/company/cmc-markets"
          target="_blank"
          className="items-center justify-center rounded bg-navy-70 p-3"
          rel="noopener noreferrer"
        >
          <Image
            className="h-6 w-6"
            src={awsImage("social_linkedin_outline.svg")}
            loading="lazy"
            width="24"
            height="24"
            alt=""
          />
        </a>
        <a
          href="https://twitter.com/CMCMarkets"
          target="_blank"
          className="items-center justify-center rounded bg-navy-70 p-3"
          rel="noopener noreferrer"
        >
          <Image
            className="h-6 w-6"
            src={awsImage("social_twitter_outline.svg")}
            loading="lazy"
            width="24"
            height="24"
            alt=""
          />
        </a>
        <a
          href="https://www.youtube.com/user/CMCMarketsPLC"
          target="_blank"
          className="items-center justify-center rounded bg-navy-70 p-3"
          rel="noopener noreferrer"
        >
          <Image
            className="h-6 w-6"
            src={awsImage("social_youtube_outline.svg")}
            loading="lazy"
            width="24"
            height="24"
            alt=""
          />
        </a>
      </p>
    </div>
  );
};

export default SocialLinks;
