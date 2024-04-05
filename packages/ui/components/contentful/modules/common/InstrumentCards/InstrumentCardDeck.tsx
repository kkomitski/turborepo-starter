"use client";

import React, { useEffect, useState, useRef, RefObject } from "react";
import InstrumentCard from "./InstrumentCard";
import constants, { getApiKey, getAssetsUrl } from "@/helpers/constants";
import { numberFormatter } from "@/helpers/utils";
import { isPositive } from "@/helpers/instruments";
import Loading from "./Loading";

export interface InstrumentData {
  apiCode: string;
  imgName?: string;
  data?: {
    instrument: {
      abbreviation: string;
      name: string;
    };
    price: {
      movement_percentage?: number | null;
    };
  };
}

const InstrumentCardDeck = (props: any) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const apiKey = getApiKey();

  const instrumentsToLoad = props.instruments;

  const movementPercentage = (value?: number | null) => {
    if (value === 0) {
      return "0%";
    }
    return value ? numberFormatter.doubleDecimal.format(value) + "%" : "-";
  };

  const [instrumentData, setInstrumentData] = useState<InstrumentData[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const instrumentDataToSet: InstrumentData[] = [];
      const fetchPromises = instrumentsToLoad.map(async (instrument: any) => {
        try {
          const response = await fetch(
            `${constants.endpoints.instruments.getEverything}${instrument.apiCode}?key=${apiKey}`
          );
          const data = await response.json();
          instrumentDataToSet.push({
            data: data,
            imgName: instrument.imgName,
            apiCode: instrument.apiCode,
          });
        } catch (error) {
          console.error(error);
        }
      });

      await Promise.all(fetchPromises);

      setInstrumentData(instrumentDataToSet);
      setIsLoading(false);
    };

    if (containerRef.current) {
      const observerCallback: IntersectionObserverCallback = (
        entries,
        observer
      ) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            fetchData();
            observer.unobserve(entry.target);
          }
        });
      };

      const observerOptions: IntersectionObserverInit = {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      };

      const observer = new IntersectionObserver(
        observerCallback,
        observerOptions
      );
      observer.observe(containerRef.current);

      return () => {
        observer.disconnect();
      };
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [containerRef]);

  if (isLoading) {
    return (
      <div ref={containerRef}>
        <Loading />
      </div>
    );
  }

  return (
    <>
      <div className="grid gap-6 md:grid-cols-2">
        {instrumentData &&
          instrumentData.length > 0 &&
          instrumentData.map((instrument) => (
            <div key={instrument.apiCode}>
              <InstrumentCard
                instrument={instrument}
                instrumentImgUrl={instrument.imgName}
                isPositive={isPositive}
                movementPercentage={movementPercentage}
              />
            </div>
          ))}
      </div>
    </>
  );
};

export default InstrumentCardDeck;
