import React from "react";

const StickyNavOffer = () => {
  return (
    <div className="sticky-offer relative hidden w-full bg-white-90 py-2 text-center">
    <p className="space-x-4 text-xs">
      <a
        className="no-underline"
        target="_blank"
        href="https://www.cmcmarkets.com/en-gb/alpha"
      >
        <span className="font-semibold text-azure-100">
          Earn up to 3% interest with CMC Alpha
        </span>
      </a>
      <a
        className="text-black"
        href="https://assets.cmcmarkets.com/pdfs/interest_scheme_terms_and_conditions.pdf"
      >
        T&Cs apply
      </a>
    </p>
  </div>
  );
};

export default StickyNavOffer;
