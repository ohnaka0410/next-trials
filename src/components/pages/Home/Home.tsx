import Head from "next/head";
import { useRouter } from "next/router";
import { memo, useCallback } from "react";
import { Section, SectionBody, SectionFooter, SectionFooterButton, SectionHeader } from "~/components/elements/Section";
import { MainLayout } from "~/layouts/MainLayout";
import { useTodoDispatch, useTodoState } from "~/stores";
import { TodoTable } from "./TodoTable";

type Props = {};

export const Home: React.VFC<Props> = memo((): JSX.Element => {
  const todoList = useTodoState();
  const router = useRouter();
  const dispatch = useTodoDispatch();

  const onAdd = useCallback((): void | Promise<void> => {
    router.push("/create");
  }, [router]);

  const onEdit = useCallback(
    (id: number): void | Promise<void> => {
      router.push(`/edit/${id}`);
    },
    [router]
  );

  const onDelete = useCallback(
    (id: number): void | Promise<void> => {
      dispatch({
        type: "DELETE",
        payload: id,
      });
    },
    [dispatch]
  );

  return (
    <>
      <Head>
        <title>一覧画面 | ToDoリスト</title>
      </Head>
      <MainLayout>
        <Section>
          <SectionHeader>一覧画面</SectionHeader>
          <SectionBody>
            <TodoTable {...{ todoList, onEdit, onDelete }} />
          </SectionBody>
          <SectionFooter>
            <SectionFooterButton onClick={onAdd}>追加</SectionFooterButton>
          </SectionFooter>
        </Section>
      </MainLayout>
    </>
  );
});
