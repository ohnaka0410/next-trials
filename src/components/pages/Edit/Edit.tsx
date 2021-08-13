import Head from "next/head";
import { useRouter } from "next/router";
import { memo, useCallback, useEffect, useState } from "react";
import type { TodoInputValue } from "~/components/blocks/TodoInput";
import { TodoInput } from "~/components/blocks/TodoInput";
import { Section, SectionBody, SectionFooter, SectionFooterButton, SectionHeader } from "~/components/elements/Section";
import { useTodoQuery, useUpdateTodoMutation } from "~/hooks";
import { MainLayout } from "~/layouts/MainLayout";

type Props = {};

export const Edit: React.VFC<Props> = memo((): JSX.Element => {
  const router = useRouter();
  const { id } = router.query;

  const { data: todo } = useTodoQuery(Array.isArray(id) || id == null ? undefined : id);

  useEffect(() => {
    if (todo == null) {
      return;
    }

    setValue({
      title: todo.title,
      content: todo.content,
    });
  }, [todo]);

  const [value, setValue] = useState<TodoInputValue>({
    title: "",
    content: "",
  });

  const handleValueChange = useCallback((handler: (prevValue: TodoInputValue) => TodoInputValue): void => {
    setValue((prev: TodoInputValue): TodoInputValue => {
      return handler(prev);
    });
  }, []);

  const { mutateAsync: updateTodo } = useUpdateTodoMutation();

  const handleSubmit = useCallback(
    async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
      event.preventDefault();
      if (todo == null) {
        return;
      }
      await updateTodo({
        id: todo.id,
        ...value,
      });
      router.push("/");
    },
    [updateTodo, router, todo, value]
  );

  return (
    <>
      <Head>
        <title>編集画面 | ToDoリスト</title>
      </Head>
      <MainLayout>
        <form onSubmit={handleSubmit}>
          <Section>
            <SectionHeader>編集画面</SectionHeader>
            <SectionBody>
              <TodoInput value={value} onChange={handleValueChange} />
            </SectionBody>
            <SectionFooter>
              <SectionFooterButton disabled={todo == null}>保存</SectionFooterButton>
            </SectionFooter>
          </Section>
        </form>
      </MainLayout>
    </>
  );
});
