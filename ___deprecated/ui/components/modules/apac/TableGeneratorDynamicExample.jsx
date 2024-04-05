import { TableGenerator } from "../complex/TableGenerator";
import Sparkline from "../elements/Sparkline";

export default function TableGeneratorDynamicExample() {
  const tableDataCols = [
    { label: "Cash Instrument", sortable: true },
    { label: "Min Spread", decimalPlaces: 2, thousandsSeparator: true },
    {
      label: "Margin (%)",
      decimalPlaces: 1,
      suffix: "%",
      highlight: true,
      rounded: true,
    },
    { label: "Trend", sortable: false },
    {
      label: "Buy",
      thousandsSeparator: true,
      decimalPlaces: 2,
    },
    {
      label: "Sell",
      thousandsSeparator: true,
      decimalPlaces: 2,
    },
  ];

  const stockCodes = ["X-AALJF", "X-ABEHN", "X-AAXTH"];
  const tableData = stockCodes.map((code, i) => {
    return {
      value: [
        { stockCode: code, feed: "everything", attr: "instrument", value: "-" },
        { stockCode: code, feed: "general", attr: "min-spread", value: "-" },
        { stockCode: code, feed: "general", attr: "margin-rate", value: "-" },
        SL(code, i == 1),
        { stockCode: code, feed: "everything", attr: "buy", value: "-" },
        { stockCode: code, feed: "everything", attr: "sell", value: "-" },
      ],
      highlight: i == 1,
    };
  });

  return (
    <section className="overflow-hidden py-12 md:py-20">
      <div className="mx-auto w-[1280px] max-w-full px-4 md:px-8">
        <p className="mb-2">Try at mobile size!</p>
        <TableGenerator
          data={tableData}
          dataCols={tableDataCols}
          minTableWidth={700}
          fixed={true}
          paging={{ show: -1 }}
        />
      </div>
    </section>
  );
}

function SL(code, altColor = false) {
  return (
    <Sparkline
      width="70px"
      stockCode={code}
      dataDetail={6}
      strokeWidth={2}
      strokeColor={altColor ? "#FFFFFF" : "#000000"}
    />
  );
}
