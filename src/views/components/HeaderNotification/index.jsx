import { Icons } from "views/assets";
import { dateFormatter } from "infrastructure/utils/dateFormatter";

import * as S from "./styles";

export const HeaderNotification = ({
  title,
  createdAt,
  handleOpenExcludeNotification = null,
}) => (
  <S.Header>
    <S.ImageLetter src={Icons.Letter} alt="Imagem de carta" />
    <S.TitleContainer>
      <S.Title>Proz | {title}</S.Title>
      <S.SubTitle>{dateFormatter(createdAt, "dd/MM/yyyy - HH:mm")}</S.SubTitle>
    </S.TitleContainer>
    {typeof handleOpenExcludeNotification === "function" && (
      <S.Close onClick={() => handleOpenExcludeNotification()}>X</S.Close>
    )}
  </S.Header>
);
