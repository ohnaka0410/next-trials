import { css } from "@emotion/react";

export const classes = {
  "table__data--no": css`
    text-align: right;
  `,
  "table__data--title": css``,

  "table__data--content": css``,

  "table__data--creat-at": css``,
  "table__data--updat-at": css``,

  "table__data--action": css`
    text-align: center;
    padding-top: 0.5em;
    padding-bottom: 0.5em;
  `,

  "button--edit": css`
    background-color: green;
    border-color: green;
    &:hover {
      color: green;
    }
  `,

  "button--delete": css`
    background-color: red;
    color: white;
    border-color: red;
    $:hover {
      color: red;
    }
  `,

  button: css`
    width: 100%;
  `,
};
