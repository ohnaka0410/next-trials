import type { NextApiRequest, NextApiResponse } from "next/";
import { getTodoList } from "~/repositories";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case "GET":
      res.status(200).json(getTodoList());
      break;
  }
}
