import type { NextApiRequest, NextApiResponse } from "next/";
import { addTodo } from "~/repositories";

export default function handler(req: NextApiRequest, res: NextApiResponse): void {
  switch (req.method) {
    case "POST":
      const { title, content }: { title: string; content: string } = JSON.parse(req.body);
      addTodo({
        title,
        content,
      });
      res.status(204).send(undefined);
      break;
  }
}
