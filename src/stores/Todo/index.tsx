import { default as dayjs } from "dayjs";
import { createContext, useContext, useReducer } from "react";
import type { Todo } from "~/@types/Todo";

const dateFormat = "YYYY/MM/DD HH:mm:ss";

type State = Todo[];

const initialState: State = [
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

type Action =
  | {
      type: "ADD";
      payload: Omit<Todo, "id" | "createAt" | "updateAt">;
    }
  | {
      type: "UPDATE";
      payload: Omit<Todo, "createAt" | "updateAt">;
    }
  | {
      type: "DELETE";
      payload: number; // ID
    };

type Reducer = React.Reducer<State, Action>;

type Dispatch = React.Dispatch<Action>;

const reducer: Reducer = (prevState: State, action: Action): State => {
  switch (action.type) {
    case "ADD":
      const lastTodo = prevState.slice(-1)[0];
      return [
        ...prevState,
        {
          id: lastTodo == null ? 0 : lastTodo.id + 1,
          ...action.payload,
          createAt: dayjs().format(dateFormat),
          updateAt: dayjs().format(dateFormat),
        },
      ];
    case "UPDATE":
      return prevState.map<Todo>((todo: Todo): Todo => {
        if (todo.id !== action.payload.id) {
          return todo;
        }
        return {
          ...todo,
          ...action.payload,
          updateAt: dayjs().format(dateFormat),
        };
      });
    case "DELETE":
      return prevState.filter((todo: Todo): boolean => {
        return todo.id !== action.payload;
      });
  }
};

type Context = {
  state: State;
  dispatch: Dispatch;
};

const initialContext = {
  state: initialState,
  dispatch: (_action: Action): void => {},
};

const TodoContext: React.Context<Context> = createContext<Context>(initialContext);

type Props = {
  children: React.ReactNode | React.ReactNodeArray;
};

export const TodoProvider: React.VFC<Props> = ({ children }) => {
  const [state, dispatch]: [State, Dispatch] = useReducer<Reducer>(reducer, initialContext.state);
  return <TodoContext.Provider value={{ state, dispatch }}>{children}</TodoContext.Provider>;
};

export const useTodoState = (): State => {
  const { state } = useContext(TodoContext);
  return state;
};

export const useTodoDispatch = (): Dispatch => {
  const { dispatch } = useContext(TodoContext);
  return dispatch;
};