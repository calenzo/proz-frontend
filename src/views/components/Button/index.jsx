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
    size={size}
    variant={variant}
    onClick={onClick}
    disabled={disabled}
    {...restProps}
  >
    {children}
  </S.Container>
);
