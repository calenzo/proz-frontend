import { Icons } from "views/assets";

import * as S from "./styles";

export const EmptyNotifications = () => (
  <S.Header data-testid="empty-notifications">
    <S.ImageLetter src={Icons.Letter} alt="Imagem de carta" />
    <S.Title>Não há nenhuma nova notificação</S.Title>
  </S.Header>
);
