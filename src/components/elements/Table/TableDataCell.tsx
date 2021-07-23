import { default as clsx } from "clsx";
import { memo } from "react";
import classes from "./TableDataCell.module.css";

type Props = {
  className?: string;
  children: React.ReactNode | React.ReactNodeArray;
};

export const TableDataCell: React.VFC<Props> = memo(({ children, className }): JSX.Element => {
  return <td className={clsx([classes["table__data-cell"], className])}>{children}</td>;
});
