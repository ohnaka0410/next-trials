import { default as clsx } from "clsx";
import { memo } from "react";
import classes from "./TableHeaderCell.module.css";

type Props = {
  className?: string;
  children: React.ReactNode | React.ReactNodeArray;
};

export const TableHeaderCell: React.VFC<Props> = memo(({ children, className }): JSX.Element => {
  return <th className={clsx([classes["table__header-cell"], className])}>{children}</th>;
});
