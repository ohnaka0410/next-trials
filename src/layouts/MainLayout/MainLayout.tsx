import { memo } from "react";
import classes from "./MainLayout.module.css";

type Props = {
  children: React.ReactNode | React.ReactNodeArray;
};

export const MainLayout: React.VFC<Props> = memo(({ children }): JSX.Element => {
  return (
    <div className={classes["container"]}>
      <header className={classes["header"]}>
        <h1 className={classes["header__title"]}>ToDoリスト</h1>
      </header>
      <main className={classes["content"]}>{children}</main>
    </div>
  );
});
