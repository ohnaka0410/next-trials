import { memo } from "react";
import classes from "./SectionFooter.module.css";

type Props = {
  children: React.ReactNode | React.ReactNodeArray;
};

export const SectionFooter: React.VFC<Props> = memo(({ children }): JSX.Element => {
  return <div className={classes["section__footer"]}>{children}</div>;
});
