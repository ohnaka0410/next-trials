import { default as clsx } from "clsx";
import { memo } from "react";
import { classes } from "./Button.style";

type Props = {
  className?: string;
  children: React.ReactNode | React.ReactNodeArray;
  onClick?: () => void | Promise<void>;
  type?: "button" | "submit";
  disabled?: boolean;
};

export const Button: React.VFC<Props> = memo(({ children, className, onClick, type, disabled }): JSX.Element => {
  return (
    <button className={clsx([classes["button"], className])} type={type} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
});
