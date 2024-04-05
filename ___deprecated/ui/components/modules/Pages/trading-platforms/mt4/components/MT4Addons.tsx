import React, { ReactNode, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";
import RightArrowSVG from "@/components/svg/RightArrowSVG";
import Link from "next/link";
import { slugify } from "@/helpers/utils";
import { X } from "lucide-react";
import LazyYoutube from "@/components/LazyYoutube";
import { awsImage } from "@/helpers/constants";

const MT4Addons = () => {
  type Addons = {
    name: string;
    defaultItem: string;
    items: {
      title: string;
      description: string | ReactNode;
      link?: string;
      image: string;
      video?: string;
      videoType?: "default" | "youtube";
    }[];
  };

  const addons: Array<Addons> = [
    {
      name: "Manage risk",
      defaultItem: "Mini terminal",
      items: [
        {
          title: "Mini terminal",
          description:
            "Use trendlines to calculate your stop-loss and take-profit orders, and automatically calculate stop-losses as a percentage of account value.",
          link: "https://assets.cmcmarkets.com/pdfs/MiniTerminal.pdf",
          image: awsImage("mt4-addons_mini-terminal.png"),
          video: "https://videos.fxbluelabs.com/stream?mini-terminal",
        },
        {
          title: "Trade terminal",
          description:
            "Access quote panels with enhanced order ticket functionality. Set up alerts based on your account activity and more.",
          link: "https://assets.cmcmarkets.com/pdfs/TradeTerminal.pdf",
          image: awsImage("mt4-addons_trade-terminal.png"),
          video: "https://videos.fxbluelabs.com/stream?trade-terminal",
        },
        {
          title: "Alarm manager",
          description:
            "Keep up-to-date with price movements, account and trade activity and more. Receive alerts via email, SMS, X and in-platform.",
          image: awsImage("mt4-addons_alarm-manager.png"),
          video: "https://videos.fxbluelabs.com/stream?alarm-manager",
        },
        {
          title: "Correlation matrix",
          description:
            "Create a grid of instruments and easily view correlations between them.",
          link: "https://assets.cmcmarkets.com/pdfs/CorrelationMatrix.pdf",
          image: awsImage("mt4-addons_correlation-matrix.png"),
          video: "https://videos.fxbluelabs.com/stream?correlation-matrix",
        },
      ],
    },
    {
      name: "Advanced tools",
      defaultItem: "Stealth orders",
      items: [
        {
          title: "Stealth orders",
          description:
            "Ensures that your trades are anonymous and cannot be assigned to a specific strategy.",
          link: "https://assets.cmcmarkets.com/pdfs/StealthOrders.pdf",
          image: awsImage("mt4-addons_stealth-orders.png"),
          video: "https://videos.fxbluelabs.com/stream?stealth-orders",
        },
        {
          title: "Tick chart trader",
          description:
            "Place ultra-fast trades with one click, using the speed-optimised order ticket and keyboard shortcuts for entry and exit.",
          link: "https://assets.cmcmarkets.com/pdfs/TickChartTrader.pdf",
          image: awsImage("mt4-addons_tick-chart-trader.png"),
          video: "https://videos.fxbluelabs.com/stream?tick-chart-trader",
        },
        {
          title: "Autochartist",
          description:
            "Autochartist's pattern recognition software continuously scans the market, highlighting thousands of trade ideas each month.",
          link: "/trading-platform/mt4/autochartist",
          image: awsImage("mt4-addons_autochartist.png"),
          video: "C9R2ALBWqtM",
          videoType: "youtube",
        },
        {
          title: "Correlation trader",
          description:
            "Track the real-time correlation between two instruments, to minimise the correlation between your open positions and avoid trading the same price action twice over.",
          link: "/cfds",
          image: awsImage("mt4-addons_correlation-trader.png"),
          video: "https://videos.fxbluelabs.com/stream?correlation-trader",
        },
      ],
    },
    {
      name: "More add-ons",
      defaultItem: "Beeks VPS",
      items: [
        {
          title: "Beeks VPS",
          description: (
            <>
              <p className="pb-10">
                Access ultra-low latency and minimise system downtime with our
                virtual private server, which enables traders to run EAs and
                automated algorithmic strategies on a virtual machine, 24/7.
              </p>
              <p className="pb-8">
                To request access, email our client support team at {""}
                <a href="mailto:clientmanagement@cmcmarkets.co.uk">
                  clientmanagement@cmcmarkets.co.uk
                </a>{" "}
                {""}
                after you have opened a CMC Markets MT4 account.
              </p>
            </>
          ),
          image: awsImage("mt4-addons_cmc-vps.png"),
        },
        {
          title: "Sentiment trader",
          description:
            "Identify buy and sell sentiment from traders across a range of brokers.",
          link: "https://assets.cmcmarkets.com/pdfs/SentimentTrader.pdf",
          image: awsImage("mt4-addons_sentiment-trader.png"),
          video: "https://videos.fxbluelabs.com/stream?sentiment-trader",
        },
        {
          title: "Session map",
          description:
            "View your current local time in relation to live trading sessions, showing the core trading hours when institutional dealers are most active in Sydney, Tokyo, London and New York.",
          link: "https://assets.cmcmarkets.com/pdfs/SessionMap.pdf",
          image: awsImage("mt4-addons_session-map.png"),
          video: "https://videos.fxbluelabs.com/stream?session-map",
        },
        {
          title: "CMC connect",
          description:
            "Fund your trading account directly from the MT4 terminal, and access a dashboard with access to high-impact economic news releases.",
          image: awsImage("mt4_addons-cmc-connect-thumbnail.png"),
        },
        {
          title: "Excel RTD plugin",
          description:
            "Pull real time account data and price data into Excel from MT4.",
          image: awsImage("mt4-addons_excel-rtd-plugin.png"),
          video: "https://videos.fxbluelabs.com/stream?excel-rtd",
        },
      ],
    },
  ];

  const [activeTab, setActiveTab] = useState("Manage risk");
  return (
    <div className="tab-group mb-6 rounded-3xl bg-white-95 px-4 py-6 lg:p-10">
      <h3 className="mb-10 text-[32px]">Access free premium EAs</h3>
      <Select value={activeTab} onValueChange={(field) => setActiveTab(field)}>
        <SelectTrigger className="mb-5 flex w-full lg:hidden">
          <SelectValue placeholder="Select market" />
        </SelectTrigger>
        <SelectContent>
          {addons.map((addon) => (
            <SelectItem key={addon.name} value={addon.name}>
              {addon.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Tabs value={activeTab}>
        <TabsList className="mb-6 hidden gap-x-2 bg-transparent lg:inline-flex">
          {addons.map((addon) => (
            <TabsTrigger
              key={addon.name}
              value={addon.name}
              onClick={() => setActiveTab(addon.name)}
            >
              {addon.name}
            </TabsTrigger>
          ))}
        </TabsList>
        {addons.map((addon) => (
          <TabsContent key={addon.name} className="w-full" value={addon.name}>
            <Accordion
              className="space-y-2"
              type="single"
              collapsible
              defaultValue={slugify(addon.defaultItem)}
            >
              {addon.items.map((item) => (
                <AccordionItem
                  className="accordion-group rounded-lg bg-white shadow"
                  key={item.title}
                  value={slugify(item.title)}
                >
                  <AccordionTrigger className="cursor-pointer px-4 py-3 pr-3.5 text-xl font-semibold hover:no-underline">
                    <span className="hover:no-underline">{item.title}</span>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="accordion-content">
                      <div className="flex flex-col justify-between px-4 pb-4 pt-4 lg:flex-row">
                        <div className="lg:w-4/12">
                          <div className="mb-10 text-base">
                            {item.description}
                          </div>
                          {item.link && (
                            <Link
                              target="_blank"
                              rel="noopener noreferrer"
                              className="btn btn-primary-outline btn-with-icon mb-10 font-semibold lg:mb-0"
                              href={item.link}
                            >
                              <span>Learn more</span>
                              <RightArrowSVG />
                            </Link>
                          )}
                        </div>
                        <div className="lg:w-6/12">
                          {item.video ? (
                            <Dialog>
                              <DialogTrigger
                                asChild
                                className="ml-auto block cursor-pointer"
                              >
                                <Image
                                  className="ml-auto w-full rounded lg:max-w-[574px]"
                                  width="574"
                                  height="349"
                                  src={item.image}
                                  alt={`${item.title} video`}
                                />
                              </DialogTrigger>
                              <DialogContent className="w-full max-w-3xl border-none bg-transparent shadow-none">
                                <DialogClose
                                  className="
absolute -top-8 right-6 ml-auto flex h-12 w-12 items-center justify-center rounded-full border border-solid text-white transition-colors hover:bg-white/20 md:mb-0"
                                >
                                  <X className="h-4 w-4" />
                                </DialogClose>
                                {item?.videoType === "youtube" ? (
                                  <LazyYoutube
                                    videoId={item.video}
                                    height={480}
                                    autoPlay={true}
                                  />
                                ) : (
                                  <video
                                    className="aspect-video"
                                    width={720}
                                    height={480}
                                    controls
                                    autoPlay
                                  >
                                    <source
                                      type="video/mp4"
                                      src={item.video}
                                    ></source>
                                  </video>
                                )}
                              </DialogContent>
                            </Dialog>
                          ) : (
                            <Image
                              className="ml-auto w-full rounded lg:max-w-[574px]"
                              width="574"
                              height="349"
                              src={item.image}
                              alt={`${item.title} video`}
                            />
                          )}
                        </div>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

export default MT4Addons;
