import * as S from "./styles";

export const Button = ({
  children,
  size = "medium",
  variant = "default",
  onClick,
  disabled,
  ...restProps
}) => (
  <S.Container
    data-testid="button"
    size={size}
    variant={variant}
    onClick={(event) => {
      if (typeof onClick !== "function" || disabled) return;

      onClick(event);
    }}
    disabled={disabled}
    {...restProps}
  >
    {children}
  </S.Container>
);
