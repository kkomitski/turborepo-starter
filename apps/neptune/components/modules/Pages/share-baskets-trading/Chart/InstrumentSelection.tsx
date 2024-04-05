import React, { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ShareBasketListing } from "./types";

type InstrumentSelectionProps = {
  chartLoading: boolean;
  selectedShareBasket: ShareBasketListing;
  shareBasketsList: Array<ShareBasketListing>;
  updateSelectedShareBasket: Function;
};

const InstrumentSelection = ({
  chartLoading,
  selectedShareBasket,
  shareBasketsList,
  updateSelectedShareBasket,
}: InstrumentSelectionProps) => {
  const [dropDownisOpen, setDropDownisOpen] = useState(false);

  return (
    <div className="mb-10 flex flex-col xl:mb-4 xl:flex-row xl:items-center xl:justify-between">
      <span className="mb-4 text-xl font-semibold xl:mb-0">
        Pick your Share basket:
      </span>
      <DropdownMenu onOpenChange={(open) => setDropDownisOpen(open)}>
        <DropdownMenuTrigger
          disabled={chartLoading}
          className="flex min-w-[206px] items-center justify-between gap-x-2 rounded-lg bg-navy-100 px-3.5 py-3 text-white drop-shadow-lg disabled:cursor-not-allowed"
        >
          <span>{selectedShareBasket.name}</span>
          <svg
            className={dropDownisOpen ? "rotate-180" : ""}
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.5837 6.08691L7.50033 10.1702L3.41699 6.08691"
              stroke="white"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="max-h-[250px] overflow-y-auto bg-white">
          <DropdownMenuSeparator />
          {shareBasketsList.map((shareBasket) => (
            <DropdownMenuItem
              onClick={(e) => updateSelectedShareBasket(shareBasket)}
              className="cursor-pointer hover:bg-white-95"
              key={shareBasket.apiCode}
            >
              {shareBasket.name}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default InstrumentSelection;
