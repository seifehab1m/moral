import Script from "next/script";

type Props = {
  structuredData: Record<any, any> | null;
};

export function JSONLD({ structuredData }: Props) {
  if (!structuredData) return null;

  return (
    <Script
      id="schema"
      type="application/ld+json"
      strategy="beforeInteractive"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
