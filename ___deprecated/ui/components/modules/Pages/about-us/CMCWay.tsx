import Image from "next/image";
import React, { ReactNode } from "react";
import { TID } from "@/helpers/types/general";

const CMCWay = ({ title, data }: { title: string; data: TID[] }) => {
  return (
    <section className="bg-navy-100">
      <div className="main-xl-container">
        <h2 className="headline-lg relative mb-20 -ml-6 max-w-lg border-l-8 border-white pl-4 text-white">
          {title}
        </h2>
        <div className="grid gap-y-32 gap-x-16 md:grid-cols-3">
          {data.map((item: TID, index: number) => (
            <div key={index} className="flex flex-col gap-y-8">
              <Image
                src={item.image}
                alt={typeof title === "string" ? title : ""}
                width={246}
                height={230}
                quality={100}
              />
              <h3 className="text-[32px] leading-10 text-white">
                {item.title}
              </h3>
              <p className="text-white">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CMCWay;
