import { TID } from "@/helpers/types/general";
import Image from "next/image";
import React, { ReactNode } from "react";

const OurValues = ({
  title,
  description,
  values,
}: {
  title: string | ReactNode;
  description: string | ReactNode;
  values: Array<TID>;
}) => {
  return (
    <section>
      <div className="main-xl-container">
        <div className="mb-10 lg:mb-20 lg:w-4/12">
          <h2 className="headline-lg relative -ml-6 mb-6 max-w-lg border-l-8 border-black pl-4">
            {title}
          </h2>
          <p className="text-xl">{description}</p>
        </div>
        <div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {values.map((value: TID, index: number) => (
              <div key={index}>
                <div className="flex h-full flex-col rounded-lg bg-white-95  p-4 shadow-lg">
                  <Image
                    width={48}
                    height={48}
                    src={value.image}
                    alt={typeof value.title === "string" ? value.title : ""}
                    className="mb-2"
                  />
                  <h3 className="mb-2 text-xl font-semibold">{value.title}</h3>
                  <p>{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurValues;
