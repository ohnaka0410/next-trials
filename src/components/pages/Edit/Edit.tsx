import Head from "next/head";
import { useRouter } from "next/router";
import { memo, useCallback, useEffect, useState } from "react";
import type { Todo } from "~/@types/Todo";
import type { TodoInputValue } from "~/components/blocks/TodoInput";
import { TodoInput } from "~/components/blocks/TodoInput";
import { Section, SectionBody, SectionFooter, SectionFooterButton, SectionHeader } from "~/components/elements/Section";
import { MainLayout } from "~/layouts/MainLayout";
import { findTodo, updateTodo } from "~/requests/Todo";

type Props = {};

export const Edit: React.VFC<Props> = memo((): JSX.Element => {
  const router = useRouter();
  const { id } = router.query;
  const [todo, setTodo] = useState<Todo | undefined>(undefined);

  useEffect(() => {
    const func = async (): Promise<void> => {
      if (Array.isArray(id) || id == null) {
        setTodo(undefined);
        return;
      }

      const todo = await findTodo(id);

      if (todo == null) {
        setTodo(undefined);
        return;
      }
      setTodo(todo);
    };
    func();
  }, [id]);

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
    [router, todo, value]
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
