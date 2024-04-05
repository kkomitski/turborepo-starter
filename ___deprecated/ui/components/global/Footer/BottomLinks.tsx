/* eslint-disable @next/next/no-html-link-for-pages */
import Link from "next/link";
const BottomLinks = () => {
  return (
    <div className="flex flex-col justify-between py-4 text-xs md:flex-row">
      <div className="flex flex-col gap-2 border-b border-b-navy-70 pb-8 md:flex-row md:border-none md:pb-0">
        <a className="no-underline" href="/en-gb/regulations">
          Regulations
        </a>
        <a className="no-underline" href="/en-gb/legal-documents">
          Legal documents
        </a>
        <a className="no-underline" href="/en-gb/important-information">
          Important information
        </a>
        <a className="no-underline" href="/en-gb/fraud-awareness">
          Fraud awareness
        </a>
        <a className="no-underline" href="/en-gb/privacy">
          Privacy
        </a>
        <a className="no-underline" href="/en-gb/cookies">
          Cookies
        </a>
        <a className="no-underline" href="/en-gb/public-relations">
          Public relations
        </a>
        <a className="no-underline" href="https://www.cmcmarkets.com/group/careers" target="_blank">
          Careers
        </a>
        <a className="no-underline" href="/en-gb/contact-us">
          Contact us
        </a>
      </div>
      <div className="pt-4 md:pt-0">© {new Date().getFullYear()} CMC Markets</div>
    </div>
  );
};

export default BottomLinks;
