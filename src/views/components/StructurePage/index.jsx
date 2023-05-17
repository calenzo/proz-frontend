import { Header } from "views/components";

import * as S from "./styles";

export const StructurePage = ({ children, ...restProps }) => (
  <S.Container data-testid="structure-page">
    <Header />

    <S.Page {...restProps}>{children}</S.Page>
  </S.Container>
);
