/**
 * Data Types
 */
export type SanityLinkExternal = {
  _key: string;
  _type: "linkExternal";
  label: string | null;
  url: string | null;
  newWindow: boolean | null;
};

export type SanityLinkInternal = {
  _key: string;
  _type: "linkInternal";
  label: string | null;
  slug: string | null;
  documentType: "page" | null;
};

export type SanityLinkType = SanityLinkExternal | SanityLinkInternal;

export type PortableTextBlock = Array<{
  children?: Array<{
    marks?: Array<string>;
    text?: string;
    _type: "span";
    _key: string;
  }>;
  style?: "normal" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "blockquote";
  listItem?: "bullet" | "number";
  markDefs?: Array<{
    href?: string;
    _type: "link";
    _key: string;
  }>;
  level?: number;
  _type: "block";
  _key: string;
}>;

/**
 * Component Types
 */
export interface SharedPageProps {
  draftMode: boolean;
  token: string;
}
