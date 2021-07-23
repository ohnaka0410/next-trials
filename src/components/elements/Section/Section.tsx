import { memo } from "react";
import classes from "./Section.module.css";

type Props = {
  children: React.ReactNode | React.ReactNodeArray;
};

export const Section: React.VFC<Props> = memo(({ children }): JSX.Element => {
  return <section className={classes["section"]}>{children}</section>;
});
