import { Accordion } from "../complex/Accordion";

// Questions are passed as an array of objects
const faqs = [
  {
    title: "How to start trading international shares with CMC?",
    text: "With CMC Markets Invest, access to international and domestic shares are available under one single account. All new and existing CMC Markets Invest accounts which have a linked cash account have international shares by default and can be traded on both our desktop platforms and mobile apps. If you don't have a share trading account with us, all you need to do is sign up with us.",
  },
  {
    title: "How do I place an international shares order?",
    text: "Placing an international shares order is much like placing one for domestic shares. To place an international shares order, open an order ticket, enter the stock code, select either Buy or Sell and fill in the required information like number of stocks, additional conditions for execution etc. For further assistance you can contact our Client Services support team online through live chat.",
  },
  {
    title: "Is CMC Invest regulated by ASIC?",
    text: "As an ASIC-regulated broker we adhere to the Australian Client Money Rules and the regulations. By holding retail client funds in trust or segregated client bank accounts, entirely separate from CMC Markets' own money, we meet and exceed the requirements of the Australian Client Money Rules and regulations.",
  },
  {
    title: "Can I transfer in my share certificates?",
    text: "All share certificates will need to be dematerialised (where physical records are replaced with a paperless computerised system) prior to being transferred in. We cannot accept share certificates.",
  },
];

export default function AccordionFAQs() {
  return (
    <section className="overflow-hidden py-12 md:py-20">
      <div className="mx-auto w-[900px] max-w-full px-4 md:px-8">
        {/* The use of Accordion component by passing data object */}
        <Accordion data={faqs} />
      </div>
    </section>
  );
}
