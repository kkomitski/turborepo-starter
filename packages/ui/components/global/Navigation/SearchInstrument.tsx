import Link from "next/link";
const SearchInstrument = () => {
  return (
    <Link
      className="ml-6 hidden flex-col gap-x-2 rounded-full bg-azure-20 p-2 text-xs font-semibold tracking-[0.16px] no-underline md:z-50 md:flex-row lg:flex xl:px-4 xl:py-2"
      href="/markets"
    >
      <span className="hidden xl:inline">Search instruments</span>
      <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M12.2812 12.25L8.78125 8.75M9.94792 5.83333C9.94792 8.0885 8.11975 9.91667 5.86458 9.91667C3.60942 9.91667 1.78125 8.0885 1.78125 5.83333C1.78125 3.57817 3.60942 1.75 5.86458 1.75C8.11975 1.75 9.94792 3.57817 9.94792 5.83333Z"
          stroke="#101626"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </Link>
  );
};

export default SearchInstrument;
