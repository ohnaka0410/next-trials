/** @jsxImportSource @emotion/react */
import { memo, useCallback } from "react";
import type { Todo } from "~/@types/Todo";
import { TableRow, TableDataCell } from "~/components/elements/Table";
import { Button } from "~/components/elements/Button";
import { classes } from "./TodoTableRow.style";

type Props = {
  todo: Todo;
  onEdit: (id: number) => void | Promise<void>;
  onDelete: (id: number) => void | Promise<void>;
};

export const TodoTableRow: React.VFC<Props> = memo(({ todo, onEdit, onDelete }): JSX.Element => {
  const handleEdit = useCallback(() => {
    onEdit(todo.id);
  }, [onEdit, todo.id]);

  const handleDelete = useCallback(() => {
    onDelete(todo.id);
  }, [onDelete, todo.id]);

  return (
    <TableRow>
      <TableDataCell css={classes["table__data--no"]}>{todo.id}</TableDataCell>
      <TableDataCell css={classes["table__data--title"]}>{todo.title}</TableDataCell>
      <TableDataCell css={classes["table__data--content"]}>{todo.content}</TableDataCell>
      <TableDataCell css={classes["table__data--creat-at"]}>{todo.createAt}</TableDataCell>
      <TableDataCell css={classes["table__data--updat-at"]}>{todo.updateAt}</TableDataCell>
      <TableDataCell css={classes["table__data--action"]}>
        <Button css={[classes["button"], classes["button--edit"]]} onClick={handleEdit}>
          編集
        </Button>
        <Button css={[classes["button"], classes["button--delete"]]} onClick={handleDelete}>
          削除
        </Button>
      </TableDataCell>
    </TableRow>
  );
});
