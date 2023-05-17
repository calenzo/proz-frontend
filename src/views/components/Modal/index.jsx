import * as S from "./styles";

export const Modal = ({
  isOpen = true,
  onClose = () => {},
  children,
  width,
  height,
  padding,
  ...restProps
}) => {
  if (!isOpen) return null;

  return (
    <S.Container data-testid="modal" onClick={onClose} isOpen={isOpen}>
      <S.Children
        onClick={(event) => event.stopPropagation()}
        width={width}
        height={height}
        padding={padding}
        {...restProps}
      >
        {children}
      </S.Children>
    </S.Container>
  );
};
