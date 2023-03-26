import { PortableText } from "@portabletext/react";
import clsx from "clsx";
import Layout from "components/Layout";
import PageHead from "components/PageHead";
import type { Page, Settings } from "lib/sanity.queries";
import { Container } from "react-bootstrap";

import BackgroundHeader from "./BackgroundHeader";
import ContactHeader from "./ContactHeader";
import Navigation from "./Nav";
import PortableTextRenderer from "./portableText/PortableTextRenderer";
import PrimaryFooter from "./PrimaryFooter";

export interface PageLayoutProps {
  preview?: boolean;
  loading?: boolean;
  page: Page;
  routes: any;
  settings: Settings;
}

const PageLayout = (props: PageLayoutProps) => {
  const {
    preview,
    loading,
    page: { content, metadata },
    settings,
    routes,
  } = props;

  return (
    <>
      <PageHead pageMeta={metadata} settings={settings} />

      <Layout loading={loading} preview={Boolean(preview)}>
        <ContactHeader />
        <Navigation routes={routes} settings={settings} />
        <BackgroundHeader
          settings={settings}
          title={content?.header ?? "Heading"}
        />
        <Container className={clsx("mt-3 px-3")}>
          {content?.body ? (
            <PortableText
              components={PortableTextRenderer}
              value={content.body}
            />
          ) : (
            "Body"
          )}
        </Container>
        <PrimaryFooter />
      </Layout>
    </>
  );
};
export default PageLayout;
