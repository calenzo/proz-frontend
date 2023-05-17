import { Header } from "views/components";

import * as S from "./styles";

export const StructurePage = ({ children, ...restProps }) => (
  <S.Container>
    <Header />

    <S.Page {...restProps}>{children}</S.Page>
  </S.Container>
);
