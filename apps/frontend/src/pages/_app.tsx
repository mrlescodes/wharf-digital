import { VisualEditing } from "@sanity/visual-editing/next-pages-router";
import { AppProps } from "next/app";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import { AnimatePresence } from "framer-motion";

import { SharedPageProps } from "@/types";
import "@/styles/globals.css";

const PreviewProvider = dynamic(() =>
  import("@/components/PreviewProvider").then((mod) => mod.PreviewProvider)
);

export default function App({
  Component,
  pageProps,
  router,
}: AppProps<SharedPageProps>) {
  const { draftMode, token } = pageProps;

  if (draftMode) {
    return (
      <PreviewProvider token={token}>
        <Component {...pageProps} />
        <Suspense>
          <VisualEditing />
        </Suspense>
      </PreviewProvider>
    );
  }

  return (
    <AnimatePresence mode="wait">
      <Component key={router.route} {...pageProps} />
    </AnimatePresence>
  );
}
