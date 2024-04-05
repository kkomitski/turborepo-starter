import { awsImage } from "@/helpers/constants";
import Image from "next/image";
import Link from "next/link";
import React, { ReactNode } from "react";

type Point = {
  title: string | ReactNode;
  description: string | ReactNode;
  icon: string;
  linkText: string;
  linkUrl: string;
};

const SupportingYourStrategy = ({
  title,
  description,
  points,
}: {
  title?: string | ReactNode;
  description?: string | ReactNode;
  points: Array<Point>;
}) => {
  return (
    <section className="bg-navy-100 pt-32 md:pt-60 xl:pt-72">
      <div className="main-xl-container">
        <div className="mb-20 text-center text-white">
          <h2 className="headline-lg mb-6">
            {title ?? "Supporting your risk/reward strategy"}
          </h2>
          <p className="mx-auto max-w-4xl text-center text-xl">
            {description ?? (
              <>
                Our range of risk-management options help you stay in control,
                as you set your own limits and stay on top of the latest market
                movements.
              </>
            )}
          </p>
        </div>

        <div className="grid gap-4 text-white md:grid-cols-2 lg:grid-cols-3">
          {points.map((point, index) => (
            <div
              key={index}
              className="flex flex-col justify-between rounded-lg bg-navy-70 p-4"
            >
              <div className="mb-6">
                <Image
                  className="mb-2 h-12 w-12"
                  width={48}
                  height={48}
                  src={point.icon}
                  alt=""
                />
                <h3 className="mb-2 text-xl font-semibold">{point.title}</h3>
                <p>{point.description}</p>
              </div>
              <a
                className="btn btn-secondary btn-with-icon"
                href={point.linkUrl}
              >
                <span>{point.linkText}</span>
                <svg
                  width="16"
                  height="17"
                  viewBox="0 0 16 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.33333 4.29077L14 8.95744M14 8.95744L9.33333 13.6241M14 8.95744L2 8.95744"
                    stroke="inherit"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SupportingYourStrategy;
