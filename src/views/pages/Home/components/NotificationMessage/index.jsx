import { Icons } from "views/assets";

import * as S from "./styles";

export const NotificationMessage = ({ message }) => (
  <S.Container>
    <S.ImageNotification src={Icons.Notification} alt="Imagem de notificação" />
    <S.Message>{message}</S.Message>
  </S.Container>
);
