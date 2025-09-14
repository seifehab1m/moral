import { strapi } from ".";
import { PrivacyPolicyResponse } from "@/cms/Api";
import { safeTry } from "@/lib/safeTry";
import { type BlocksContent } from "@strapi/blocks-react-renderer";

type PrivacyResponse = Omit<PrivacyPolicyResponse, "data"> & {
  data?: {
    id?: number;
    documentId?: string;
    createdAt?: string;
    updatedAt?: string;
    publishedAt?: string;
    item?: Array<{
      id?: number;
      header: string;
      content: BlocksContent;
    }>;
  };
};

export async function getPrivacyPolicy() {
  return safeTry(() =>
    strapi<PrivacyResponse>({
      path: "/privacy-policy",
      query: { populate: "*" },
    }),
  );
}
