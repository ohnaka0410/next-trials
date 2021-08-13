import Head from "next/head";
import { useRouter } from "next/router";
import { memo, useCallback } from "react";
import { Section, SectionBody, SectionFooter, SectionFooterButton, SectionHeader } from "~/components/elements/Section";
import { MainLayout } from "~/layouts/MainLayout";
import { TodoTable } from "./TodoTable";
import { useDeleteTodoMutation, useTodoListQuery } from "~/hooks";

type Props = {};

export const Home: React.VFC<Props> = memo((): JSX.Element => {
  const router = useRouter();

  const { data: todoList } = useTodoListQuery();

  const onAdd = useCallback((): void | Promise<void> => {
    router.push("/create");
  }, [router]);

  const onEdit = useCallback(
    (id: number): void | Promise<void> => {
      router.push(`/edit/${id}`);
    },
    [router]
  );

  const { mutateAsync: deleteTodo } = useDeleteTodoMutation();

  const onDelete = useCallback(
    async (id: number): Promise<void> => {
      await deleteTodo(String(id));
    },
    [deleteTodo]
  );

  return (
    <>
      <Head>
        <title>一覧画面 | ToDoリスト</title>
      </Head>
      <MainLayout>
        <Section>
          <SectionHeader>一覧画面</SectionHeader>
          <SectionBody>{todoList != null ? <TodoTable {...{ todoList, onEdit, onDelete }} /> : <></>}</SectionBody>
          <SectionFooter>
            <SectionFooterButton onClick={onAdd}>追加</SectionFooterButton>
          </SectionFooter>
        </Section>
      </MainLayout>
    </>
  );
});
