import { getPrivacyPolicy } from "@/cms/privacy";
import { notFound } from "next/navigation";
import { toTwoDigits } from "@/lib/utils";
import { JSONLD, StrapiBlocksRenderer } from "@/components/helpers";
import { createMetadata } from "@/lib/seo";

export async function generateMetadata() {
  const [page] = await getPrivacyPolicy();
  return createMetadata((page?.data as any)?.seo);
}

export default async function page() {
  const [page, err] = await getPrivacyPolicy();

  if (err || !page.data?.item) return notFound();

  return (
    <div className="container pt-[92px] lg:pt-[230px] lg:pb-[40px] space-y-[40px] lg:space-y-[82px]">
      {page?.data?.item?.map((item, i) => {
        if (i === 0)
          return (
            <header>
              <h1 className="heading-1 font-medium text-primary">
                {item.header}
              </h1>
              <div className="mt-4 lg:mt-8">
                <StrapiBlocksRenderer key={i} content={item.content} />
              </div>
            </header>
          );

        return (
          <section>
            <span className="sub-header text-[14px] lg:text-[20px]">
              {toTwoDigits(i)}
            </span>
            <h2 className="heading-1 font-medium text-primary mt-3 lg:mt-4">
              {item.header}
            </h2>
            <div className="mt-3 lg:mt-6">
              <StrapiBlocksRenderer key={i} content={item.content} />
            </div>
          </section>
        );
      })}

      <JSONLD structuredData={(page.data as any)?.seo?.structuredData} />
    </div>
  );
}
