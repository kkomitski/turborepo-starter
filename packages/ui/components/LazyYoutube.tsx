import React, { useState, useEffect, useRef } from "react";

type LazyYoutubeProps = {
  videoId: string;
  videoSeriesId?: string;
  width?: number | string;
  height?: number | string;
  autoPlay?: boolean;
  params?: string;
};

const LazyYoutube = ({
  videoId,
  videoSeriesId = undefined,
  width = "100%",
  height = "auto",
  autoPlay = false,
  params = undefined,
}: LazyYoutubeProps) => {
  const [load, setLoad] = useState(false);
  const videoRef = useRef<HTMLDivElement>(null);

  const autoPlayParam = autoPlay ? "autoplay=1" : "autoplay=0";

  const youtubeUrl =
    videoSeriesId === undefined
      ? `https://www.youtube-nocookie.com/embed/${videoId}?${autoPlayParam}${
          params ? "&" + params : ""
        }`
      : `https://www.youtube-nocookie.com/embed/videoseries?${autoPlayParam}&si=${videoId}&list=${videoSeriesId}${
          params ? "&" + params : ""
        }`;

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setLoad(true);
        observer.disconnect();
      }
    });

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  return (
    <div ref={videoRef}>
      {load ? (
        <iframe
          className="aspect-video w-full"
          width={width}
          height={height}
          src={`${youtubeUrl}`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
          allowFullScreen
        ></iframe>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default LazyYoutube;
