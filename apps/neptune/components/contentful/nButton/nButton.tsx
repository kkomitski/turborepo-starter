import React from "react";
import ContentfulLink from "../elements/ContentfulLink";

const nButton = ({ content }: { content: any }) => {
  return (
    <ContentfulLink
      theme={content.fields.buttonTheme}
      type={content.fields.type}
      url={content.fields.linkUrl}
      size={content.fields.buttonSize}
      icon={content.fields.buttonIcon}
    >
      {content.fields.title}
    </ContentfulLink>
  );
};

export default nButton;
