import { memo } from "react";
import classes from "./TableHead.module.css";

type Props = {
  children: React.ReactNode | React.ReactNodeArray;
};

export const TableHead: React.VFC<Props> = memo(({ children }): JSX.Element => {
  return <tbody className={classes["table__head"]}>{children}</tbody>;
});
