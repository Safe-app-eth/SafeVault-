import type { NextApiRequest, NextApiResponse } from "next";
import { loadSafeConfigs } from "@/utils/loadSafes";
import { saveSafesToDB } from "@/lib/db";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const safes = loadSafeConfigs();
  await saveSafesToDB(safes); // implement this in your DB service
  res.status(200).json({ status: "imported", count: safes.length });
}
