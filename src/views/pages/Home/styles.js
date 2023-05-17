import { styled } from "styled-components";

import { StructurePage } from "views/components";

export const Container = styled(StructurePage)`
  width: 100%;
  padding: 0 100px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Divider = styled.div`
  width: 100%;
  height: 1px;
  opacity: 0.1;
  background-color: ${({ theme: { colors } }) => colors.black_1};
  margin-bottom: 40px;
`;

export const Title = styled.p`
  width: 100%;
  margin: 24px 0;
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 133.4%;
  color: ${({ theme: { colors } }) => colors.black_1};
`;

export const Notifications = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 24px;
`;
