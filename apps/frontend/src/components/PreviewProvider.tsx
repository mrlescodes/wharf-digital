import { LiveQueryProvider } from "next-sanity/preview";
import { useMemo } from "react";

import { getClient } from "@/data/sanity/client";

type PreviewProviderProps = {
  children: React.ReactNode;
  token: string;
};

export const PreviewProvider = (props: PreviewProviderProps) => {
  const { children, token } = props;

  const client = useMemo(() => getClient(token), [token]);

  return <LiveQueryProvider client={client}>{children}</LiveQueryProvider>;
};
