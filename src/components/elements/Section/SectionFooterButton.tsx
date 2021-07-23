import { memo } from "react";
import { Button } from "~/components/elements/Button";
import classes from "./SectionFooterButton.module.css";

type Props = {
  children: React.ReactNode | React.ReactNodeArray;
  onClick?: () => void | Promise<void>;
  disabled?: boolean;
};

export const SectionFooterButton: React.VFC<Props> = memo(({ children, onClick, disabled }): JSX.Element => {
  return (
    <Button className={classes["button"]} onClick={onClick} type="submit" disabled={disabled}>
      {children}
    </Button>
  );
});
