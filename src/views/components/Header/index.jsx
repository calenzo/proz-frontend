import { Icons } from "views/assets";

import { useHeader } from "./useHeader";
import { ListNotifications } from "./components";

import * as S from "./styles";

export const Header = () => {
  const {
    user,
    notifications,
    toggleList,
    openList,
    handleLogo,
    handleMenu,
    handleCloseListNotifications,
  } = useHeader();

  return (
    <S.HeaderContainer data-testid="header">
      <S.Menu>
        <S.ImageMenu
          src={Icons.Menu}
          alt="Imagem do menu"
          onClick={handleMenu}
        />
        <S.ImageLogo
          src={Icons.Logo}
          alt="Imagem da logo"
          onClick={handleLogo}
        />
      </S.Menu>

      <S.Profile>
        <S.Notification onClick={() => toggleList()}>
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

      {openList && (
        <ListNotifications
          notifications={notifications}
          onClose={handleCloseListNotifications}
        />
      )}
    </S.HeaderContainer>
  );
};
