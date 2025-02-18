import Meta from "components/Meta";
import { PageMeta, Settings } from "lib/sanity.queries";
import Head from "next/head";
import { useRouter } from "next/router";

export interface PageHeadProps {
  settings: Settings;
  pageMeta?: PageMeta;
}

const canonicalDomain = "www.journeyscontinue.com.au";

const PageHead = ({ settings, pageMeta }: PageHeadProps) => {
  const {
    title: mainTitle = "Title",
    description: mainDescription = "Description",
  } = settings;
  const { title: pageTitle, description: pageDescription } = pageMeta ?? {};
  const router = useRouter();
  const canonicalUrl = `https://${canonicalDomain}${
    router.asPath !== "/" ? router.asPath : ""
  }`;

  return (
    <Head>
      <title>{pageTitle ? `${pageTitle} | ${mainTitle}` : mainTitle}</title>
      <Meta />
      <meta
        content={pageDescription ?? mainDescription}
        key="description"
        name="description"
      />
      <meta content="Kenneth King" name="author" />
      <link href={canonicalUrl} rel="canonical" />
    </Head>
  );
};
export default PageHead;
