import type { Todo } from "~/@types/Todo";

export const getTodoList = async (): Promise<Todo[]> => {
  const result = await fetch("/api/todo-list", {
    method: "GET",
  });
  return await result.json();
};

export const findTodo = async (id: string): Promise<Todo | undefined> => {
  const result = await fetch(`/api/todo/${id}`, {
    method: "GET",
  });
  return await result.json();
};

export const addTodo = async (params: Omit<Todo, "id" | "createAt" | "updateAt">): Promise<void> => {
  const { title, content } = params;
  await fetch(`/api/todo`, {
    method: "POST",
    body: JSON.stringify({
      title,
      content,
    }),
  });
};

export const updateTodo = async (params: Omit<Todo, "createAt" | "updateAt">): Promise<void> => {
  const { id, title, content } = params;
  await fetch(`/api/todo/${id}`, {
    method: "PUT",
    body: JSON.stringify({
      title,
      content,
    }),
  });
};

export const deleteTodo = async (id: string): Promise<void> => {
  await fetch(`/api/todo/${id}`, {
    method: "DELETE",
  });
};
