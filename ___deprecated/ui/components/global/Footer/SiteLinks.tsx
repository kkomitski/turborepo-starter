/* eslint-disable @next/next/no-html-link-for-pages */
import Link from "next/link";
const SiteLinks = () => {
  return (
    <div className="mb-12 flex gap-x-6 text-xs">
      <Link className="uppercase no-underline" href="/">
        PERSONAL
      </Link>
      <a target="_blank" className="uppercase text-navy-20 no-underline" href="/en-gb/connect">
        INSTITUTIONAL
      </a>
      <a target="_blank" className="uppercase text-navy-20 no-underline" href="/group">
        GROUP
      </a>
      <a target="_blank" className="uppercase text-navy-20 no-underline" href="/en-gb/pro">
        PRO
      </a>
    </div>
  );
};

export default SiteLinks;
