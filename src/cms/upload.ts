import { strapi } from ".";

type UploadResponse = Array<{
  id: number;
  documentId: string;
  name: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
}>;

export function uploadToStrapi(files: File[]) {
  const formData = new FormData();

  files.forEach((file) => formData.append("files", file));

  return strapi<UploadResponse>({
    path: "/upload",
    init: {
      method: "POST",
      body: formData,
    },
  });
}
