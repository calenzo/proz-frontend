import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
`;

export const ImageNotification = styled.img`
  width: 64px;
  height: 64px;
`;

export const Message = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  letter-spacing: 0.15px;
  opacity: 0.5;
  color: ${({ theme: { colors } }) => colors.black_1};
`;
