import { memo } from "react";
import classes from "./SectionBody.module.css";

type Props = {
  children: React.ReactNode | React.ReactNodeArray;
};

export const SectionBody: React.VFC<Props> = memo(({ children }): JSX.Element => {
  return <div className={classes["section__body"]}>{children}</div>;
});
