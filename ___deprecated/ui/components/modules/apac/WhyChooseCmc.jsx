import StripCard from "../elements/StripCard";

export default function WhyChooseCmc() {
  const items = [
    {
      heading: <>Placeholder Title</>,
      text: (
        <>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla mollis
          mi sem.
        </>
      ),
    },
    {
      heading: <>Placeholder Title</>,
      text: (
        <>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla mollis
          mi sem. Orci varius natoque penatibus et magnis dis parturient montes,
          nascetur ridiculus mus. Mauris lacus sapien, tincidunt eget elementum
          eu, vehicula ac urna.
        </>
      ),
    },
    {
      heading: (
        <>
          Placeholder Title
          <br />
          Placholder
        </>
      ),
      text: (
        <>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla mollis
          mi sem. Orci varius natoque penatibus et magnis dis parturient montes,
          nascetur ridiculus mus. Mauris lacus sapien, tincidunt eget elementum
          eu, vehicula ac urna.
        </>
      ),
    },
    {
      heading: <>Placeholder Title</>,
      text: (
        <>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla mollis
          mi sem. Orci varius natoque penatibus et magnis dis parturient montes,
          nascetur ridiculus mus. Mauris lacus sapien, tincidunt eget elementum
          eu, vehicula ac urna.
        </>
      ),
    },
  ];

  return (
    <section className="overflow-hidden py-12 md:py-20">
      <div className="mx-auto w-[1280px] max-w-full px-4 md:px-8">
        <div className="pb-12">
          <span className="mb-4 block text-3xl md:text-5xl">
            Why choose CMC?
          </span>
          <span className="block">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
            congue feugiat imperdiet. Pellentesque habitant morbi tristique
            senectus et netus et malesuada fames ac turpis egestas. Ut sit amet
            euismod tortor, ac efficitur lacus. Mauris ut lobortis elit. Quisque
            facilisis libero eu nisi consectetur suscipit.
          </span>
        </div>

        <div className="-mr-6 flex flex-wrap">
          {items.map((item, i) => (
            <StripCard heading={item.heading} key={i}>
              {item.text}
            </StripCard>
          ))}
        </div>
      </div>
    </section>
  );
}
