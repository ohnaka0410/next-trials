import { memo } from "react";
import classes from "./TableBody.module.css";

type Props = {
  children: React.ReactNode | React.ReactNodeArray;
};

export const TableBody: React.VFC<Props> = memo(({ children }): JSX.Element => {
  return <tbody className={classes["table__body"]}>{children}</tbody>;
});
