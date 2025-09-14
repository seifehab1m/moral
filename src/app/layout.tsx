import * as Layout from "@/components/layout";
import { HeaderProvider } from "@/components/providers";
import { geistMono, geistSans, myFont } from "@/assets/fonts";
import { getGlobal } from "@/cms/global";
import { createMetadata } from "@/lib/seo";
import "./globals.css";

export async function generateMetadata() {
  const [global] = await getGlobal();
  return createMetadata(global?.data?.defaultSeo);
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [global] = await getGlobal();

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${myFont.variable} `}
      >
        <Layout.Loader />
        <HeaderProvider>
          <Layout.Header header={global?.data?.header} />
          <Layout.InitGSAP>
            {children}
            <Layout.ContactUs contact={global?.data?.contact} />
            <Layout.Footer footer={global?.data?.footer} />
          </Layout.InitGSAP>
        </HeaderProvider>
      </body>
    </html>
  );
}
