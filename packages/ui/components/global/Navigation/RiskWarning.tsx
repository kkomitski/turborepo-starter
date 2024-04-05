import constants from "@/helpers/constants";
const RiskWarning = () => {
  return (
    <div className="risk-warning relative z-30 bg-black px-2 py-2 text-center text-[11px] leading-3 tracking-wide text-white-85 md:text-base lg:px-4">
      <span>
        Spread bets and CFDs are complex instruments and come with a high risk of losing money rapidly due to
        leverage.
      </span>{" "}
      <span className="font-semibold">
        {constants.DIDS.LOSS_PERCENTAGE} of retail investor accounts lose money when spread betting and/or
        trading CFDs with this provider.
      </span>{" "}
      {""}
      <span>
        You should consider whether you understand how spread bets, CFDs, OTC options or any of our other
        products work and whether you can afford to take the high risk of losing your money.
      </span>
    </div>
  );
};

export default RiskWarning;
