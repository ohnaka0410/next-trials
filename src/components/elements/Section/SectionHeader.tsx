import { memo } from "react";
import classes from "./SectionHeader.module.css";

type Props = {
  children: React.ReactNode | React.ReactNodeArray;
};

export const SectionHeader: React.VFC<Props> = memo(({ children }): JSX.Element => {
  return (
    <div className={classes["section__header"]}>
      <h2 className={classes["section__title"]}>{children}</h2>
    </div>
  );
});
