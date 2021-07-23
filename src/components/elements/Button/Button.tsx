/** @jsxImportSource @emotion/react */
import { memo } from "react";
import { classes } from "./Button.style";
import type { SerializedStyles } from "@emotion/serialize";

type Props = {
  css?: SerializedStyles;
  children: React.ReactNode | React.ReactNodeArray;
  onClick?: () => void | Promise<void>;
  type?: "button" | "submit";
  disabled?: boolean;
};

export const Button: React.VFC<Props> = memo(({ css, children, onClick, type, disabled }): JSX.Element => {
  return (
    <button css={[classes["button"], css]} type={type} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
});
