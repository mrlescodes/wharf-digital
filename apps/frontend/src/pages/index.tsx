import type { InferGetStaticPropsType, GetStaticProps } from "next";

import { env } from "@/env";
import { SharedPageProps } from "@/types";
import { getClient } from "@/data/sanity/client";
import { SettingsQueryResult } from "@/data/sanity/sanity.types";
import { getSettings } from "@/data/sanity/queries";
import { HomePageLayout } from "@/components/home/HomePageLayout";

interface HomePageProps extends SharedPageProps {
  settings: SettingsQueryResult;
}

export default function HomePage(
  props: InferGetStaticPropsType<typeof getStaticProps>
) {
  const { settings } = props;

  return <HomePageLayout settings={settings} />;
}

export const getStaticProps = (async (context) => {
  const { draftMode = false } = context;

  const client = getClient(draftMode ? env.SANITY_API_READ_TOKEN : undefined);

  const [settings] = await Promise.all([getSettings(client)]);

  if (!settings) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      settings,
      draftMode,
      token: draftMode ? env.SANITY_API_READ_TOKEN : "",
    },
  };
}) satisfies GetStaticProps<HomePageProps>;
