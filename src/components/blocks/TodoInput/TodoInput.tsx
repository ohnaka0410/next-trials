import React, { memo, useCallback } from "react";
import type { Todo } from "~/@types/Todo";
import classes from "./TodoInput.module.css";

export type TodoInputValue = Omit<Todo, "id" | "createAt" | "updateAt">;

type Props = {
  value: TodoInputValue;
  onChange: (handler: (prevValue: TodoInputValue) => TodoInputValue) => void;
};

export const TodoInput: React.VFC<Props> = memo(({ value, onChange }): JSX.Element => {
  const handleTitleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      onChange((prevValue: TodoInputValue): TodoInputValue => {
        return {
          ...prevValue,
          title: event.target.value,
        };
      });
    },
    [onChange]
  );

  const handleContentChange = useCallback(
    (event: React.ChangeEvent<HTMLTextAreaElement>) => {
      onChange((prevValue: TodoInputValue): TodoInputValue => {
        return {
          ...prevValue,
          content: event.target.value,
        };
      });
    },
    [onChange]
  );

  return (
    <div className={classes["form"]}>
      <dl className={classes["form__row"]}>
        <dt className={classes["form__title"]}>
          <label htmlFor="title" className={classes["form__label"]}>
            タイトル
          </label>
        </dt>
        <dd className={classes["form__data"]}>
          <input
            type="text"
            className={classes["form__input"]}
            placeholder="ToDoの概要"
            id="title"
            required
            value={value.title}
            onChange={handleTitleChange}
          />
        </dd>
      </dl>
      <dl className={classes["form__row"]}>
        <dt className={classes["form__title"]}>
          <label htmlFor="content" className={classes["form__label"]}>
            内容
          </label>
        </dt>
        <dd className={classes["form__data"]}>
          <textarea
            placeholder="ToDoの詳細な内容"
            className={classes["form__textarea"]}
            id="content"
            required
            value={value.content}
            onChange={handleContentChange}
          />
        </dd>
      </dl>
    </div>
  );
});
