import { validatePreviewUrl } from "@sanity/preview-url-secret";
import type { NextApiRequest, NextApiResponse } from "next";

import { env } from "@/env";
import { getClient } from "@/data/sanity/client";

const client = getClient(env.SANITY_API_READ_TOKEN);

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse<string | void>
) {
  if (!req.url) {
    throw new Error("Missing url");
  }

  const { isValid, redirectTo = "/" } = await validatePreviewUrl(
    client,
    req.url
  );

  if (!isValid) {
    return res.status(401).send("Invalid secret");
  }

  // Enable Draft Mode by setting the cookies
  res.setDraftMode({ enable: true });
  res.writeHead(307, { Location: redirectTo });
  res.end();
}
