import { TableGenerator } from "../complex/TableGenerator";
import Sparkline from "../elements/Sparkline";

export default function TableGeneratorStaticExample() {
  const tableDataCols = [
    { label: "Halving", sortable: false },
    { label: "Date", sortable: false },
    { label: "Block", sortable: true, thousandsSeparator: true },
    { label: "Block reward", sortable: true },
    { label: "Mined in period", sortable: true, thousandsSeparator: true },
    { label: "% mined", sortable: true, decimalPlaces: 2, suffix: "%" },
  ];

  const tableData = [
    ["BTC launch", "3 January 2009", 0, 50, 1050000, 50],
    ["Halving 1", "28 November 2012", 210000, 25, 5250000, 75],
    ["Halving 2", "9 July 2016", 420000, 12.5, 2625000, 87.5],
    ["Halving 3", "11 May 2020", 630000, 6.25, 1312500, 93.75],
    {
      value: ["Halving 4", "Expected 2024", 840000, 3.125, 656250, 96.875],
      highlight: true,
    },
    ["Halving 5", "Expected 2028", 1050000, 1.5625, 328125, 98.4375],
    ["Halving 6", "Expected 2032", 1260000, 0.78125, 164062.5, 99.21875],
  ];

  return (
    <section className="overflow-hidden py-12 md:py-20">
      <div className="mx-auto w-[1280px] max-w-full px-4 md:px-8">
        <p className="mb-2">Try at mobile size!</p>
        <TableGenerator
          data={tableData}
          dataCols={tableDataCols}
          minTableWidth={800}
          fixed={true}
          paging={{ show: 5, increase: 5 }}
        />
      </div>
    </section>
  );
}
