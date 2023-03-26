import { Head, Html, Main, NextScript } from "next/document";

const Document = () => (
  <Html lang="en">
    <Head>
      <link
        href="http://fonts.cdnfonts.com/css/tiresias-infofont"
        rel="stylesheet"
      />
    </Head>
    <body className="bg-white text-black">
      <Main />
      <NextScript />
    </body>
  </Html>
);
export default Document;
