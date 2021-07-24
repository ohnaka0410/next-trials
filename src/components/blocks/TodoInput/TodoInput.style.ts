import { css } from "linaria";

export const classes = {
  form: css`
    display: grid;
    gap: 10px;
  `,
  form__row: css`
    display: grid;
    grid-template-columns: 100px 1fr;
    gap: 20px;
  `,
  form__title: css``,
  form__label: css`
    padding: 0.25em 0.5em;
    display: block;
    font-weight: bold;
  `,
  form__data: css``,
  form__input: css`
    display: block;
    width: 100%;
    padding: 0.25em 0.5em;
    border-radius: 3px;
    border: 1px solid black;
  `,
  form__textarea: css`
    display: block;
    width: 100%;
    padding: 0.25em 0.5em;
    border-radius: 3px;
    border: 1px solid black;
    height: 10em;
    min-height: 10em;
  `,
};
