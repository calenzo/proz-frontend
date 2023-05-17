import { Icons } from "views/assets";

import * as S from "./styles";

export const AlarmMessage = ({ message }) => (
  <S.Container>
    <S.ImageAlarm src={Icons.Notification} alt="Imagem de notificação" />
    <S.Message>{message}</S.Message>
  </S.Container>
);
