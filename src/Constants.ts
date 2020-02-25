export type ContentType = "text/plain" | "text/html";

export const ContentTypeTextPlain: ContentType = "text/plain";
export const ContentTypeTextHtml: ContentType = "text/html";

export const SplitterMaxLines = 4;
export const DefaultMaxLinesCount = 4000;
export const DefaultNodeLimit = 4000;

export const QuoteIds = ["OLK_SRC_BODY_SECTION"];

export const CheckpointPrefix = "#!%!";
export const CheckpointSuffix = "!%!#";

export const BlockTags = ["blockquote", "div", "p", "ul", "li", "h1", "h2", "h3"];
export const HardbreakTags = ["br", "hr", "tr"];

export enum NodeTypes {
  ELEMENT_NODE = 1,
  TEXT_NODE = 3,
  DOCUMENT_NODE = 9
}
