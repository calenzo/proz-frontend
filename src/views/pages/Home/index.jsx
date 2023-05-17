import { NotificationMessage } from "./components";

import * as S from "./styles";

export const Home = () => (
  <S.Container>
    <S.Title>Notificações</S.Title>

    <S.Divider />

        <AlarmMessage message="Você não possui notificações recentes." />
  </S.Container>
);
