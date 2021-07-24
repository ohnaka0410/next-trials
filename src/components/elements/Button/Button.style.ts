import { css } from "linaria";

export const classes = {
  button: css`
    display: block;
    text-decoration: none;
    padding: 0.5em 1em;
    border-radius: 4px;
    text-align: center;
    transition: all 0.3s ease;
    border-width: 1px;
    border-style: solid;
    color: white;
    &:hover {
      background-color: transparent;
    }
  `,
};
