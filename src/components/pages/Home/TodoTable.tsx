/** @jsxImportSource @emotion/react */
import { memo } from "react";
import type { Todo } from "~/@types/Todo";
import { TableRow, Table, TableHead, TableHeaderCell, TableBody } from "~/components/elements/Table";
import { TodoTableRow } from "./TodoTableRow";
import { classes } from "./TodoTable.style";

type Props = {
  todoList: Todo[];
  onEdit: (id: number) => void | Promise<void>;
  onDelete: (id: number) => void | Promise<void>;
};

export const TodoTable: React.VFC<Props> = memo(({ todoList, onEdit, onDelete }): JSX.Element => {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableHeaderCell css={classes["table__header--no"]}>番号</TableHeaderCell>
          <TableHeaderCell css={classes["table__header--title"]}>タイトル </TableHeaderCell>
          <TableHeaderCell css={classes["table__header--content"]}>内容</TableHeaderCell>
          <TableHeaderCell css={classes["table__header--created-at"]}>作成日</TableHeaderCell>
          <TableHeaderCell css={classes["table__header--updated-at"]}>更新日</TableHeaderCell>
          <TableHeaderCell css={classes["table__header--action"]}>操作</TableHeaderCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {todoList.map<JSX.Element>((todo: Todo): JSX.Element => {
          return <TodoTableRow key={todo.id} todo={todo} onEdit={onEdit} onDelete={onDelete} />;
        })}
      </TableBody>
    </Table>
  );
});
