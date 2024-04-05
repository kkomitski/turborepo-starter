import Utils from "@/lib/apac/utils";

export default async function processInstrument(data, feed, stockCode, attr) {
  const d = data;
  let r;
  if (feed == "general") {
    switch (attr) {
      case "buy":
        r = Number(d?.buy);
        break;
      case "sell":
        r = Number(d?.sell);
        break;
      case "min-spread":
        r = Number(d?.minimumSpread);
        break;
      case "country":
        r = d?.country;
        break;
      case "commission":
        r = Number(d?.commission?.commission);
        break;
      case "min-commission":
        r = Number(d?.commission?.minimumCommission);
        break;
      case "margin-rate":
        r = Number(d?.marginRate?.[0]?.rate * 100);
        break;
      case "holdingcost-buy":
        r = Number(d?.lastHoldingRate?.yearlyPercentageBuy);
        break;
      case "holdingcost-sell":
        r = Number(d?.lastHoldingRate?.yearlyPercentageSell);
        break;
    }
  } else if (feed == "price_change") {
    switch (attr) {
      case "day":
      case "1day":
        r = Number(d?.[stockCode]?.["1day"]?.movement);
        break;
      case "week":
      case "1week":
        r = Number(d?.[stockCode]?.["1week"]?.movement);
        break;
      case "month":
      case "1month":
        r = Number(d?.[stockCode]?.["1month"]?.movement);
        break;
      case "3months":
        r = Number(d?.[stockCode]?.["3months"]?.movement);
        break;
      case "6months":
        r = Number(d?.[stockCode]?.["6months"]?.movement);
        break;
      case "year":
      case "1year":
        r = Number(d?.[stockCode]?.["year"]?.movement);
        break;
    }
  } else if (feed == "everything") {
    switch (attr) {
      case "instrument":
        r = d?.instrument.name;
        break;
      case "buy":
        r = Number(d?.price?.buy);
        break;
      case "sell":
        r = Number(d?.price?.sell);
        break;
      case "instrument-url":
        r = d?.instrument.url;
        break;
      case "price-change-day":
        r = Number(d?.prices?.[0]?.c) - Number(d?.price?.buy);
        break;
      case "price":
        r = (Number(d?.price?.buy) + Number(d?.price?.sell)) / 2;
        break;
      case "sentiment":
        r = "not implemented";
        break;
      case "trend":
        r = "not implemented";
        break;
    }
  }

  return typeof r == "number" && isNaN(r) ? "-" : r;
}
