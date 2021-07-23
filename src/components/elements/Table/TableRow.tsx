import { memo } from "react";
import classes from "./TableRow.module.css";

type Props = {
  children: React.ReactNode | React.ReactNodeArray;
};

export const TableRow: React.VFC<Props> = memo(({ children }): JSX.Element => {
  return <tr className={classes["table__row"]}>{children}</tr>;
});
