import { TID } from "@/helpers/types/general";
import Image from "next/image";
const CompanyStats = ({ stats }: { stats: TID[] }) => {
  return (
    <section className="bg-navy-100 text-white">
      <div className="main-xl-container py-16 lg:py-20">
        <div className="grid gap-4 md:grid-cols-2 2xl:grid-cols-4">
          {stats.map((stat: TID, index: number) => (
            <div className="p-6" key={index}>
              <div className="relative ml-5">
                <div className="relative z-10">
                  <p className="mb-3 text-[68px] leading-none">{stat.title}</p>
                  <p className="-ml-5 text-[32px] leading-snug">{stat.description}</p>
                </div>
                <Image
                  src={stat.image}
                  className="absolute -left-5 -top-2 h-auto w-auto"
                  width={76}
                  height={72}
                  alt=""
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompanyStats;
