import { memo } from "react";
import classes from "./Table.module.css";

type Props = {
  children: React.ReactNode | React.ReactNodeArray;
};

export const Table: React.VFC<Props> = memo(({ children }): JSX.Element => {
  return <table className={classes["table"]}>{children}</table>;
});
