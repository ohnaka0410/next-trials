import type { NextApiRequest, NextApiResponse } from "next/";
import { deleteTodo, findTodo, updateTodo } from "~/repositories";

export default function handler(req: NextApiRequest, res: NextApiResponse): void {
  const id = req.query["id"] as string;
  switch (req.method) {
    case "GET":
      res.status(200).json(findTodo(id));
      break;
    case "PUT":
      const { title, content }: { title: string; content: string } = JSON.parse(req.body);
      updateTodo({
        id: parseInt(id, 10),
        title,
        content,
      });
      res.status(204).send(undefined);
      break;
    case "DELETE":
      deleteTodo(id);
      res.status(204).send(undefined);
      break;
  }
}
