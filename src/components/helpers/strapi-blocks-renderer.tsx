"use client";
import {
  type BlocksContent,
  BlocksRenderer,
} from "@strapi/blocks-react-renderer";

type Props = {
  content: BlocksContent;
};

export function StrapiBlocksRenderer({ content }: Props) {
  return (
    <BlocksRenderer
      content={content}
      blocks={{
        paragraph: ({ children }) => (
          <p className="text-[#1E1E1E] font-medium heading-4 leading-[1.3] my-3 lg:my-5">
            {children}
          </p>
        ),
        list: ({ children }) => (
          <ul className="list-disc ml-4 lg:ml-6 text-[#1E1E1E] font-medium heading-4 leading-[1.3] space-y-1">
            {children}
          </ul>
        ),
        heading: ({ children, level }) => {
          switch (level) {
            case 1:
              return (
                <h1 className="heading-1 text-primary font-medium my-3 lg:my-4">
                  {children}
                </h1>
              );
            case 2:
              return (
                <h2 className="heading-2 text-primary font-medium my-3 lg:my-4">
                  {children}
                </h2>
              );
            case 3:
              return (
                <h3 className="heading-3 text-primary font-medium my-3 lg:my-4">
                  {children}
                </h3>
              );
            case 4:
              return (
                <h4 className="heading-4 text-primary font-medium my-3 lg:my-4">
                  {children}
                </h4>
              );
            case 5:
              return (
                <h5 className="heading-5 text-primary font-medium my-3 lg:my-4">
                  {children}
                </h5>
              );
            case 6:
              return (
                <h6 className="heading-6 text-primary font-medium my-3 lg:my-4">
                  {children}
                </h6>
              );
            default:
              return <span>{children}</span>;
          }
        },
      }}
    />
  );
}
