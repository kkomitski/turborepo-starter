import { documentToReactComponents } from "uicontentful/rich-text-react-renderer";

export function nBanners({ content }) {
  return (
    <div>
      <div>{content.fields.bigHeader}</div>
      <div>{content.fields.mediumHeader}</div>
      <div className="rich-text">
        {documentToReactComponents(content.fields.description)}
      </div>
      <a href={content.fields.linkUrl}>{content.fields.linkName}</a>
      <br />
      <hr />
    </div>
  );
}
