import type { QueryObserverResult, UseQueryOptions, UseMutationOptions, UseMutationResult } from "react-query";
import { useQuery, useMutation, useQueryClient } from "react-query";
import type { Todo } from "~/@types/Todo";
import { getTodoList, findTodo, addTodo, updateTodo, deleteTodo } from "~/requests";

const queryKey = "todo";

export const useTodoListQuery = (options?: UseQueryOptions<Todo[], Error>): QueryObserverResult<Todo[], Error> => {
  return useQuery<Todo[], Error>(
    [queryKey],
    async (): Promise<Todo[]> => {
      return await getTodoList();
    },
    options
  );
};

export const useTodoQuery = (
  id: string | undefined,
  options?: UseQueryOptions<Todo | undefined, Error>
): QueryObserverResult<Todo | undefined, Error> => {
  return useQuery<Todo | undefined, Error>(
    [queryKey, { id }],
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

export const useAddTodoMutation = (
  options?: UseMutationOptions<void, unknown, AddTodoMutationParams>
): UseMutationResult<void, unknown, AddTodoMutationParams> => {
  const queryClient = useQueryClient();
  return useMutation<void, unknown, AddTodoMutationParams>(
    async (params: AddTodoMutationParams): Promise<void> => {
      await addTodo(params);
    },
    {
      onSuccess: async (_data: void, _variables: AddTodoMutationParams, _context: unknown) => {
        await queryClient.refetchQueries([queryKey]);
      },
      ...options,
    }
  );
};

export type UpdateTodoMutationParams = Omit<Todo, "createAt" | "updateAt">;

export const useUpdateTodoMutation = (
  options?: UseMutationOptions<void, unknown, UpdateTodoMutationParams>
): UseMutationResult<void, unknown, UpdateTodoMutationParams> => {
  const queryClient = useQueryClient();
  return useMutation<void, unknown, UpdateTodoMutationParams>(
    async (params: UpdateTodoMutationParams): Promise<void> => {
      await updateTodo(params);
    },
    {
      onSuccess: async (_data: void, _variables: UpdateTodoMutationParams, _context: unknown): Promise<void> => {
        await queryClient.refetchQueries([queryKey]);
      },
      ...options,
    }
  );
};

export const useDeleteTodoMutation = (
  options?: UseMutationOptions<void, unknown, string>
): UseMutationResult<void, unknown, string> => {
  const queryClient = useQueryClient();
  return useMutation<void, unknown, string>(
    async (id: string): Promise<void> => {
      await deleteTodo(id);
    },
    {
      onSuccess: async (_data: void, _variables: string, _context: unknown): Promise<void> => {
        await queryClient.refetchQueries([queryKey]);
      },
      ...options,
    }
  );
};
