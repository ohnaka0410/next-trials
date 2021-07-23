import { memo, useCallback } from "react";
import type { Todo } from "~/@types/Todo";
import { TableRow, TableDataCell } from "~/components/elements/Table";
import classes from "./TodoTableRow.module.css";
import { Button } from "~/components/elements/Button";
import { default as clsx } from "clsx";

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
      <TableDataCell className={classes["table__data--no"]}>{todo.id}</TableDataCell>
      <TableDataCell className={classes["table__data--title"]}>{todo.title}</TableDataCell>
      <TableDataCell className={classes["table__data--content"]}>{todo.content}</TableDataCell>
      <TableDataCell className={classes["table__data--creat-at,"]}>{todo.createAt}</TableDataCell>
      <TableDataCell className={classes["table__data--updat-at"]}>{todo.updateAt}</TableDataCell>
      <TableDataCell className={classes["table__data--action"]}>
        <Button className={clsx([classes["button"], classes["button--edit"]])} onClick={handleEdit}>
          編集
        </Button>
        <Button className={clsx([classes["button"], classes["button--delete"]])} onClick={handleDelete}>
          削除
        </Button>
      </TableDataCell>
    </TableRow>
  );
});
