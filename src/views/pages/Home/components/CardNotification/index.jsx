import { Icons } from "views/assets";
import * as S from "./styles";
import { dateFormatter } from "infrastructure/utils/dateFormatter";

export const CardNotification = ({
  entityId,
  title,
  createdAt,
  describe,
  handleDeleteNotification,
  handleReadNotification,
}) => {
  return (
    <S.Container>
      <S.Content>
        <S.Header>
          <S.ImageLetter src={Icons.Letter} alt="Imagem de carta" />
          <S.TitleContainer>
            <S.Title>Proz | {title}</S.Title>
            <S.SubTitle>{dateFormatter(createdAt, "dd/MM/yyyy - HH:mm")}</S.SubTitle>
          </S.TitleContainer>
          <S.Close onClick={() => handleDeleteNotification(entityId)}>
            X
          </S.Close>
        </S.Header>

        <S.Describe>{describe}</S.Describe>
      </S.Content>

      <S.Divider />

      <S.Button
        onClick={() => handleReadNotification(entityId)}
        variant="outline"
      >
        LER MENSAGEM
      </S.Button>
    </S.Container>
  );
};
