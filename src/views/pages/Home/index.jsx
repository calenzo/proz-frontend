import { useHome } from "./useHome";
import { AlarmMessage, CardNotification } from "./components";

import * as S from "./styles";

export const Home = () => {
  const {
    hasNotification,
    notifications,
  } = useHome();

  return (
  <S.Container>
    <S.Title>Notificações</S.Title>

    <S.Divider />

      {!hasNotification && (
        <AlarmMessage message="Você não possui notificações recentes." />
      )}

      {hasNotification && (
        <S.Notifications>
          {notifications?.map((notification) => (
            <CardNotification
              {...notification}
            />
          ))}
        </S.Notifications>
      )}
  </S.Container>
);
};
