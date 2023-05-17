import { Icons } from "views/assets";

import { useHeader } from "./useHeader";

import * as S from "./styles";

export const Header = () => {
  const { user, handleNotification } = useHeader();

  return (
    <S.HeaderContainer>
      <S.Menu>
        <S.ImageMenu src={Icons.Menu} alt="Imagem do menu" />
        <S.ImageLogo src={Icons.Logo} alt="Imagem da logo" />
      </S.Menu>

      <S.Profile>
        <S.Notification onClick={() => handleNotification()}>
          <S.ImageNotification
            src={Icons.NotificationOutline}
            alt="Imagem de notificação"
          />
          <S.Status />
        </S.Notification>

        <S.ImageProfile src={Icons.Avatar} alt="Imagem do perfil" />

        <S.ProfileAbout>
          <S.Name>{user.name}</S.Name>
          <S.Profession>{user.profession}</S.Profession>
        </S.ProfileAbout>
      </S.Profile>
    </S.HeaderContainer>
  );
};
