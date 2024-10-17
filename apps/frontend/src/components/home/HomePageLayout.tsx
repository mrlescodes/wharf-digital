import { SettingsQueryResult } from "@/data/sanity/sanity.types";

type HomePageLayoutProps = {
  settings: SettingsQueryResult;
};

export const HomePageLayout = (props: HomePageLayoutProps) => {
  const { settings } = props;

  return <h1>Home Page Layout</h1>;
};
