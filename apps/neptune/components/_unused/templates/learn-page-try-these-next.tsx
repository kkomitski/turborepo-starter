import React from "react";

const LearnPageTryTheseNext = ({
  links,
}: {
  links: { title: string; subtitle: string; url: string }[];
}) => {
  return (
    <div className="mt-12 space-y-6">
      <p className="headline-md mb-8">Try these next</p>
      {links.map((link: any, index: number) => {
        return (
          <div key={index}>
            <a
              href={link.url}
              className="mb-0 flex items-center gap-x-2 text-xl font-semibold no-underline "
            >
              <span>{link.title}</span>
              <svg
                className="stroke-azure-100"
                width="16"
                height="17"
                viewBox="0 0 16 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.33333 3.8335L14 8.50016M14 8.50016L9.33333 13.1668M14 8.50016L2 8.50016"
                  stroke="inherit"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </a>
            <p className="text-base">{link.subtitle}</p>
          </div>
        );
      })}
    </div>
  );
};

export default LearnPageTryTheseNext;
