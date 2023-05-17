import { styled } from "styled-components";

export const Header = styled.div`
  width: 100%;
  display: flex;
  gap: 10px;
`;

export const ImageLetter = styled.img`
  width: 24px;
  height: 24px;
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 150%;
  letter-spacing: 0.15px;
  color: ${({ theme: { colors } }) => colors.black_1};
`;

export const SubTitle = styled(Title)`
  font-weight: 400;
  opacity: 0.5;
`;

export const Close = styled.p`
  min-width: 15px;
  min-height: 15px;
  color: ${({ theme: { colors } }) => colors.purple_1};
  cursor: pointer;
  margin: 0 0 0 auto;
`;
