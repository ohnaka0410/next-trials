import Head from "next/head";
import { useRouter } from "next/router";
import { memo, useCallback, useState } from "react";
import type { TodoInputValue } from "~/components/blocks/TodoInput";
import { TodoInput } from "~/components/blocks/TodoInput";
import { Section, SectionBody, SectionFooter, SectionFooterButton, SectionHeader } from "~/components/elements/Section";
import { MainLayout } from "~/layouts/MainLayout";
import { useAddTodoMutation } from "~/hooks";

type Props = {};

export const Create: React.VFC<Props> = memo((): JSX.Element => {
  const router = useRouter();

  const [value, setValue] = useState<TodoInputValue>({
    title: "",
    content: "",
  });

  const handleValueChange = useCallback((handler: (prevValue: TodoInputValue) => TodoInputValue): void => {
    setValue((prev: TodoInputValue): TodoInputValue => {
      return handler(prev);
    });
  }, []);

  const { mutateAsync: addTodo } = useAddTodoMutation();

  const handleSubmit = useCallback(
    async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
      event.preventDefault();
      await addTodo({
        ...value,
      });
      router.push("/");
    },
    [addTodo, router, value]
  );

  return (
    <>
      <Head>
        <title>追加画面 | ToDoリスト</title>
      </Head>
      <MainLayout>
        <form onSubmit={handleSubmit}>
          <Section>
            <SectionHeader>追加画面</SectionHeader>
            <SectionBody>
              <TodoInput value={value} onChange={handleValueChange} />
            </SectionBody>
            <SectionFooter>
              <SectionFooterButton>保存</SectionFooterButton>
            </SectionFooter>
          </Section>
        </form>
      </MainLayout>
    </>
  );
});
