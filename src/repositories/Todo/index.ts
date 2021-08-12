import { default as dayjs } from "dayjs";
import type { Todo } from "~/@types/Todo";

const dateFormat = "YYYY/MM/DD HH:mm:ss";

type State = Todo[];

export let state: State = [
  {
    id: 1,
    title: "テストタイトル",
    content: "ここに内容が表示されます。",
    createAt: dayjs().subtract(2, "month").format(dateFormat),
    updateAt: dayjs().subtract(1, "month").format(dateFormat),
  },
  {
    id: 2,
    title: "資料の作成",
    content: "12/20までに、打ち合わせ用の資料を作成する。",
    createAt: dayjs().subtract(2, "day").format(dateFormat),
    updateAt: dayjs().subtract(1, "day").format(dateFormat),
  },
  {
    id: 3,
    title: "新規追加です",
    content: "じゅげむ　じゅげむ",
    createAt: dayjs().subtract(2, "hour").format(dateFormat),
    updateAt: dayjs().subtract(1, "hour").format(dateFormat),
  },
];

export const getTodoList = (): Todo[] => {
  return state;
};

export const findTodo = (id: string): Todo | undefined => {
  return state.find((todo: Todo): boolean => {
    return String(todo.id) === id;
  });
};

export const addTodo = (params: Omit<Todo, "id" | "createAt" | "updateAt">): void => {
  const lastTodo = state.slice(-1)[0];
  console.log(params);
  state = [
    ...state,
    {
      id: lastTodo == null ? 0 : lastTodo.id + 1,
      ...params,
      createAt: dayjs().format(dateFormat),
      updateAt: dayjs().format(dateFormat),
    },
  ];
};

export const updateTodo = (params: Omit<Todo, "createAt" | "updateAt">): void => {
  state = state.map<Todo>((todo: Todo): Todo => {
    if (todo.id !== params.id) {
      return todo;
    }
    return {
      ...todo,
      ...params,
      updateAt: dayjs().format(dateFormat),
    };
  });
};

export const deleteTodo = (id: string): void => {
  state = state.filter((todo: Todo): boolean => {
    return String(todo.id) !== id;
  });
};
