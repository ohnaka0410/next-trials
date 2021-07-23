/** @jsxImportSource @emotion/react */
import { memo } from "react";
import { classes } from "./MainLayout.style";

type Props = {
  children: React.ReactNode | React.ReactNodeArray;
};

export const MainLayout: React.VFC<Props> = memo(({ children }): JSX.Element => {
  return (
    <div css={classes["container"]}>
      <header css={classes["header"]}>
        <h1 css={classes["header__title"]}>ToDoリスト</h1>
      </header>
      <main css={classes["content"]}>{children}</main>
    </div>
  );
});
