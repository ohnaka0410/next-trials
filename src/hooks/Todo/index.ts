import useSWR, { mutate } from "swr";
import type { SWRConfiguration, SWRResponse } from "swr";
import type { Todo } from "~/@types/Todo";
import { getTodoList, findTodo, addTodo, updateTodo, deleteTodo } from "~/requests";

const queryKey = "todo";

export const useTodoListQuery = (options?: SWRConfiguration<Todo[], Error>): SWRResponse<Todo[], Error> => {
  return useSWR<Todo[], Error>(
    [queryKey],
    async (): Promise<Todo[]> => {
      return await getTodoList();
    },
    options
  );
};

export const useTodoQuery = (
  id: string | undefined,
  options?: SWRConfiguration<Todo | undefined, Error>
): SWRResponse<Todo | undefined, Error> => {
  return useSWR<Todo | undefined, Error>(
    [queryKey, id],
    async (): Promise<Todo | undefined> => {
      if (id == null) {
        return undefined;
      }
      return await findTodo(id);
    },
    options
  );
};

export type AddTodoMutationParams = Omit<Todo, "id" | "createAt" | "updateAt">;

export const useAddTodoMutation = () => {
  const mutateAsync = async (params: AddTodoMutationParams): Promise<void> => {
    await addTodo(params);
    await mutate([queryKey]);
  };
  return { mutateAsync };
};

export type UpdateTodoMutationParams = Omit<Todo, "createAt" | "updateAt">;

export const useUpdateTodoMutation = () => {
  const mutateAsync = async (params: UpdateTodoMutationParams): Promise<void> => {
    await updateTodo(params);
    await mutate([queryKey]);
  };
  return { mutateAsync };
};

export const useDeleteTodoMutation = () => {
  const mutateAsync = async (id: string): Promise<void> => {
    await deleteTodo(id);
    await mutate([queryKey]);
  };
  return { mutateAsync };
};
