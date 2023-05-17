import { styled } from "styled-components";

export const Header = styled.div`
  padding: 16px;
  width: 100%;
  display: flex;
  gap: 10px;
`;

export const ImageLetter = styled.img`
  width: 24px;
  height: 24px;
`;

export const Title = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 150%;
  letter-spacing: 0.15px;
  color: ${({ theme: { colors } }) => colors.black_1};
`;
