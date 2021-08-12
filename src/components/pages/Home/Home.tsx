import Head from "next/head";
import { useRouter } from "next/router";
import { memo, useCallback, useEffect, useState } from "react";
import { Todo } from "~/@types/Todo";
import { Section, SectionBody, SectionFooter, SectionFooterButton, SectionHeader } from "~/components/elements/Section";
import { MainLayout } from "~/layouts/MainLayout";
import { deleteTodo, getTodoList } from "~/requests/Todo";
import { TodoTable } from "./TodoTable";

type Props = {};

export const Home: React.VFC<Props> = memo((): JSX.Element => {
  const router = useRouter();

  const [todoList, setTodoList] = useState<Todo[] | undefined>(undefined);

  useEffect(() => {
    const func = async (): Promise<void> => {
      const result = await getTodoList();
      setTodoList(result);
    };
    func();
  }, []);

  const onAdd = useCallback((): void | Promise<void> => {
    router.push("/create");
  }, [router]);

  const onEdit = useCallback(
    (id: number): void | Promise<void> => {
      router.push(`/edit/${id}`);
    },
    [router]
  );

  const onDelete = useCallback(async (id: number): Promise<void> => {
    await deleteTodo(String(id));
    const result = await getTodoList();
    setTodoList(result);
  }, []);

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
