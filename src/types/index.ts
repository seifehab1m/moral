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

export type MIMEType =
  | "image/*"
  | "audio/*"
  | "video/*"
  | "application/json"
  | "application/pdf"
  | "application/zip"
  | "application/xml"
  | "application/javascript"
  | "application/x-www-form-urlencoded"
  | "application/msword"
  | "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
  | "application/vnd.ms-excel"
  | "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
  | "application/vnd.ms-powerpoint"
  | "application/vnd.openxmlformats-officedocument.presentationml.presentation"
  | "text/plain"
  | "text/html"
  | "text/css"
  | "text/csv"
  | "image/png"
  | "image/jpeg"
  | "image/webp"
  | "image/gif"
  | "image/svg+xml"
  | "audio/mpeg"
  | "audio/wav"
  | "video/mp4"
  | "video/webm"
  | "video/ogg"
  | "multipart/form-data";
