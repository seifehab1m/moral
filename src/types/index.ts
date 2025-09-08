export type CMSStrapiImage = {
  id?: number;
  documentId?: string;
  name?: string;
  alternativeText?: string;
  caption?: string;
  width?: number;
  height?: number;
  formats?: any;
  hash?: string;
  ext?: string;
  mime?: string;
  /** @format float */
  size?: number;
  url?: string;
  previewUrl?: string;
  provider?: string;
  provider_metadata?: any;
  related?: {
    id?: number;
    documentId?: string;
  }[];
  folder?: {
    id?: number;
    documentId?: string;
  };
  folderPath?: string;
  /** @format date-time */
  createdAt?: string;
  /** @format date-time */
  updatedAt?: string;
  /** @format date-time */
  publishedAt?: string;
  createdBy?: {
    id?: number;
    documentId?: string;
  };
  updatedBy?: {
    id?: number;
    documentId?: string;
  };
  locale?: string;
  localizations?: {
    id?: number;
    documentId?: string;
  }[];
};

export type JSONRichText = Array<{
  type: "paragraph" | string;
  children: Array<{
    type: "text" | string;
    text: string;
  }>;
}>;
