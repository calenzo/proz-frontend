import { HeaderNotification } from "views/components";

import * as S from "./styles";

export const CardNotification = ({
  entityId,
  title,
  createdAt,
  describe,
  handleOpenExcludeNotification = () => {},
  handleOpenNotificationModal = () => {},
  handleExit = false,
  hasActionRead = false,
  hasActionExclude = false,
  hasBoxShadow = false,
  isRead = "invalid",
}) => (
  <S.Container hasBoxShadow={hasBoxShadow} isRead={isRead}>
    <S.Content>
      <HeaderNotification
        title={title}
        createdAt={createdAt}
        handleOpenExcludeNotification={() =>
          handleOpenExcludeNotification(entityId)
        }
      />

      <S.Describe>{describe}</S.Describe>
    </S.Content>

    <S.Divider />

    {hasActionRead && (
      <S.Button
        onClick={() =>
          handleOpenNotificationModal({
            entityId,
            title,
            createdAt,
            describe,
            isRead,
          })
        }
        variant="outline"
      >
        LER MENSAGEM
      </S.Button>
    )}
    {typeof handleExit === "function" && (
      <S.Button onClick={handleExit} variant="outline">
        Voltar
      </S.Button>
    )}
  </S.Container>
);
