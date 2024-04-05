import { FooterLinks } from "../Footer";
import Link from "next/link";

const DesktopLinks = ({ footerLinks }: { footerLinks: FooterLinks }) => {
  return (
    <div className="grid gap-x-4 md:grid-cols-10">
      {footerLinks.map((footerLink, index) => (
        <div
          className=" flex flex-col border-t border-b-transparent border-t-navy-70 pb-6 pt-4 md:col-span-2 md:pb-12"
          key={index}
        >
          <div className=" flex items-center justify-between py-0 uppercase no-underline md:mb-4">
            <p className="mb-0 no-underline">{footerLink.header}</p>
          </div>
          <div className="">
            <div className="flex flex-col text-base">
              {footerLink.pages.map((page, index) => (
                <React.Fragment key={index}>
                  {page.linkType === "nextLink" ? (
                    <Link data-next-link className="no-underline first:pt-4 md:first:pt-0" href={page.url}>
                      {page.pageName}
                    </Link>
                  ) : (
                    <a className="no-underline first:pt-4 md:first:pt-0" href={page.url}>
                      {page.pageName}
                    </a>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DesktopLinks;
