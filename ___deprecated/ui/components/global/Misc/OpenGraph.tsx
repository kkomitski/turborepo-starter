type Props = {
  imageURL?: string;
  title?: string;
  description?: string;
};

const OpenGraph = ({ imageURL, title, description }: Props) => {
  return (
    <>
      <meta property="og:url" content="https://www.cmcmarkets.com/en-gb" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageURL} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:domain" content="cmcmarkets.com" />
      <meta property="twitter:url" content="https://www.cmcmarkets.com/en-gb" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content="" />
      <meta name="twitter:image" content={imageURL} />
    </>
  );
};

export default OpenGraph;
