import { Menu } from "@/components/menus/LegalDocumentsMenu";
import Link from "next/link";

export { LegalDocumentsLayout, DocumentItem };

function LegalDocumentsLayout({
  children,
  textStyles = "text-content-styling",
}) {
  return (
    <>
      <section className="bg-grey">
        <div className="mx-auto w-[1280px] max-w-full px-4 md:px-8">
          <div className="relative py-12 md:py-20">
            <div className="absolute top-0 left-0 h-full w-[1px] bg-black"></div>
            <div className="relative flex py-2 pl-5 md:pl-6">
              <div className="absolute left-0 top-0 h-full w-2.5 bg-black md:w-3"></div>
              <h1 className="text-3xl md:text-5xl">Legal Information</h1>
            </div>
          </div>
        </div>
      </section>
      <section className="overflow-hidden py-12 md:py-20">
        <div className="mx-auto w-[1280px] max-w-full px-4 md:px-8">
          <div className="-mx-3 flex flex-wrap md:-mx-6">
            <div className="w-full px-3 md:w-4/12 md:px-6">
              <Menu />
            </div>
            <div
              className={`w-full px-3 pt-4 md:w-8/12 md:px-6 md:pt-0 ${textStyles}`}
            >
              {children}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function DocumentItem({ item, baseLink }) {
  return (
    <li>
      <Link
        className="text-blue"
        href={`${baseLink}${item.link}`}
        rel="noopener noreferrer"
        target="_blank"
      >
        {item.label}
      </Link>
      {item?.note && (
        <>
          <br />
          {item.note}
        </>
      )}
    </li>
  );
}
