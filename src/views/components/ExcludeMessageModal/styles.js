import { styled } from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 496px;
  height: 100%;
  max-height: 272px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;

export const Warning = styled.img`
  width: 64px;
  height: 64px;
`;

export const Title = styled.p`
  font-style: italic;
  font-weight: 500;
  font-size: 24px;
  line-height: 160%;
  letter-spacing: 0.15px;
`;

export const SubTitle = styled(Title)`
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 150%;
  opacity: 0.5;
`;

export const WrapperButtons = styled.div`
  display: flex;
  gap: 20px;
  margin: 10px 0;
`;
