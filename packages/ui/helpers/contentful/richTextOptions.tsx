import EmailIconSVG from "ui/components/svg/EmailIconSVG";
import PhoneIconSVG from "ui/components/svg/PhoneIconSVG";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { MARKS, INLINES, BLOCKS } from "@contentful/rich-text-types";
import cloneDeep from "lodash/cloneDeep";
import Image from "next/image";
import { awsImage } from "../constants";

/**
 * Wrapper for documentToReactComponents.
 * NOTES:  We use this wrapper to add additional options to the rich text renderer.
 * By default, <p> tags are not enabled in the rich text renderer. Enable <p> tags by setting the type to "content".
 * @param content
 * @param options
 * @returns
 */
export const documentToReactComponentsWrapper = (
  content: any,
  options?: {
    type?: "default" | "heading" | "content";
    marks?: object;
    blocks?: object;
    inlines?: object;
    nodes?: object;
  }
) => {
  // Clone the default rich text options (we use JSON to deep copy the object.)
  let richTextOptions = cloneDeep(defaultRichTextOptions);

  if (options !== undefined) {
    switch (options.type) {
      case "heading": // Change <p> tags to <span> so that headings are semantically correct
        richTextOptions.renderNode = {
          ...richTextOptions.renderNode,
          ...renderBlocksForHeadings(),
        };
        break;
      case "content": // Enable paragraph tags
        richTextOptions.renderNode = {
          ...richTextOptions.renderNode,
          ...enableParagraphTags(),
        };
        break;
      default:
        break;
    }

    // Merge the marks options
    if (options.marks) {
      richTextOptions.renderMark = {
        ...richTextOptions.renderMark,
        ...options.marks,
      };
    }

    // Merge the nodes options (e.g. h2,h3,p)
    if (options.nodes) {
      richTextOptions.renderNode = {
        ...richTextOptions.renderNode,
        ...options.nodes,
      };
    }
  }

  return documentToReactComponents(content, richTextOptions);
};

/**
 * Render marks (e.g. bold, italic, etc.)
 * @returns
 */
export const renderMarks = () => {
  return {
    [MARKS.BOLD]: (text: any) => (
      <strong className="font-semibold">{text}</strong>
    ),
  };
};

/**
 * Change <p> tags to <span> so that headings are semantically correct
 * We have to do this as we use rich text editor for headings so <sup> works
 * @returns
 */
export const renderBlocksForHeadings = () => {
  return {
    [BLOCKS.PARAGRAPH]: (node: any, children: any) => <span>{children}</span>,
  };
};

export const enableParagraphTags = () => {
  return {
    [BLOCKS.PARAGRAPH]: (node: any, children: any) => <p>{children}</p>,
  };
};

// Render text nodes
export const renderText = (text: any) => {
  return text
    .split("\n")
    .flatMap((textSegment: any, i: number) => [
      i > 0 ? <br key={`br-${i}`} /> : null,
      textSegment,
    ]);
};

// Render inline embedded entries
export const inlineEmbeddedEntries = (node: any) => {
  const contentType = node.data.target.sys.contentType.sys.id;

  if (contentType === "nText") {
    return renderEmbeddedInlineTextContent(node.data.target);
  }
  if (contentType === "nCard") {
    return renderEmbeddedCardContent(node.data.target);
  }
};

const renderEmbeddedCardContent = (nodeData: any) => {
  const cardType = nodeData.fields.type;

  switch (cardType) {
    case "Awards Card":
      return (
        <div className="mb-10 flex items-center gap-x-2">
          <div className="flex items-center gap-x-2 pt-2">
            <Image
              className="h-auto w-11 lg:w-auto"
              src={nodeData.fields.image.fields.file.url}
              alt=""
              width={nodeData.fields.image.fields.file.details.image.width}
              height={nodeData.fields.image.fields.file.details.image.height}
            />
            <div>
              {nodeData.fields.subHeader && (
                <p className="mb-1 text-xs uppercase">
                  {documentToReactComponentsWrapper(nodeData.fields.subHeader, {
                    type: "heading",
                  })}
                </p>
              )}
              {nodeData.fields.header && (
                <p className="mb-0 text-base font-semibold leading-snug">
                  {documentToReactComponentsWrapper(nodeData.fields.header, {
                    type: "heading",
                  })}
                </p>
              )}
              {nodeData.fields.description && (
                <p className="text-sm leading-tight">
                  {documentToReactComponentsWrapper(
                    nodeData.fields.description,
                    {
                      type: "heading",
                    }
                  )}
                </p>
              )}
            </div>
          </div>
        </div>
      );

    default:
      console.error(`Unsupported card type: ${cardType}`);
      return <div>Unsupported content type</div>;
  }
};

/**
 * Render nText content
 * @param nodeData
 * @returns
 */
const renderEmbeddedInlineTextContent = (nodeData: any) => {
  const textType = nodeData.fields.type;
  const contentValue = nodeData.fields.text.content[0].content[0].value;

  switch (textType) {
    case "Email":
      return (
        <span className="flex items-center gap-x-2 text-base">
          <EmailIconSVG className="h-6 w-6 flex-shrink-0 stroke-navy-100" />
          <a href={`mailto:${contentValue}`}>{contentValue}</a>
        </span>
      );

    case "Phone":
      return (
        <span className="flex items-center gap-x-2 text-base">
          <PhoneIconSVG className="h-6 w-6 flex-shrink-0 stroke-navy-100" />
          <span>{contentValue}</span>
        </span>
      );

    default:
      console.error(`Unsupported text type: ${textType}`);
      return <div>Unsupported content type</div>;
  }
};

export const defaultRichTextOptions = {
  renderMark: renderMarks(),
  renderText: (text: any) => renderText(text),
  renderNode: {
    [INLINES.EMBEDDED_ENTRY]: (node: any) => inlineEmbeddedEntries(node),
    [BLOCKS.PARAGRAPH]: (node: any, children: any) => <>{children}</>,
  },
};
