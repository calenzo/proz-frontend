import { Icons } from "views/assets";
import { useNotificationsService } from "infrastructure/services";

import { Modal, Button } from "..";

import * as S from "./styles";

export const ExcludeMessageModal = ({
  entityId = null,
  isOpen = true,
  onClose = () => {},
  callbackSuccess = () => {},
  ...restProps
}) => {
  const { deleteNotification } = useNotificationsService();

  const handleAction = () => {
    deleteNotification(entityId).then(() => {
      callbackSuccess();
      onClose();
    });
  };

  const isAvailableToClose = true;

  const isAvailableToSubmitAction = true;

  return (
    <Modal width="496px" height="272px" isOpen={isOpen} onClose={onClose}>
      <S.Container {...restProps}>
        <S.Warning src={Icons.Warning} alt="Imagem de aviso" />
        <S.Title>Excluir mensagem</S.Title>
        <S.SubTitle>Deseja realmente excluir mensagem?</S.SubTitle>
        <S.WrapperButtons>
          <Button
            disabled={!isAvailableToClose}
            onClick={(event) => onClose(event)}
            variant="outline"
          >
            NÃO
          </Button>
          <Button
            disabled={!isAvailableToSubmitAction}
            onClick={(event) => handleAction(event)}
          >
            SIM
          </Button>
        </S.WrapperButtons>
      </S.Container>
    </Modal>
  );
};
