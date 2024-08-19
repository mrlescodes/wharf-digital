import { VisualEditing } from '@sanity/visual-editing/next-pages-router';
import { AppProps } from 'next/app';
import { lazy, Suspense } from 'react';
import { AnimatePresence } from 'framer-motion';

import '@/styles/globals.css';

export interface SharedPageProps {
  draftMode: boolean;
  token: string;
}

const PreviewProvider = lazy(() => import('@/components/PreviewProvider'));

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
