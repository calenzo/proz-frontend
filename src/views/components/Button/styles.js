import { css, styled } from "styled-components";

const variants = {
  default: css`
    border: none;
    background-color: ${({ theme: { colors } }) => colors.red_1};
    color: ${({ theme: { colors } }) => colors.white_1};

    ${({ disabled }) =>
      disabled &&
      css`
        border: none;
        background-color: ${({ theme: { colors } }) => colors.gray_1};
        color: ${({ theme: { colors } }) => colors.white_1};
      `}
  `,
  outline: css`
    border: 1px solid ${({ theme: { colors } }) => colors.purple_1};
    background-color: transparent;
    color: ${({ theme: { colors } }) => colors.purple_1};

    ${({ disabled }) =>
      disabled &&
      css`
        border: 1px solid ${({ theme: { colors } }) => colors.gray_1};
        background-color: transparent;
        color: ${({ theme: { colors } }) => colors.gray_1};
      `}
  `,
};

const sizes = {
  medium: css`
    width: 212px;
    height: 42px;
  `,
};

export const Container = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  border-radius: 4px;
  cursor: pointer;

  ${({ disabled }) =>
    disabled &&
    css`
      cursor: not-allowed;
    `}

  ${({ variant }) => variants[variant || "default"] || variants.default}
  ${({ size }) => sizes[size || "medium"]}
`;
