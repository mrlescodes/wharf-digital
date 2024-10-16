import { LiveQueryProvider } from 'next-sanity/preview';
import { useMemo } from 'react';

import { getClient } from '@/lib/sanity/client';

type PreviewProviderProps = {
  children: React.ReactNode;
  token: string;
};

export default function PreviewProvider(props: PreviewProviderProps) {
  const { children, token } = props;

  const client = useMemo(() => getClient(token), [token]);

  return <LiveQueryProvider client={client}>{children}</LiveQueryProvider>;
}
