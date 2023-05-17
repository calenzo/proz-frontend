import { styled } from "styled-components";

import { Button as ButtonComponent } from "views/components";

export const Container = styled.div`
  width: 100%;

  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px rgba(0, 0, 0, 0.14), 0px 1px 10px rgba(0, 0, 0, 0.12);
  border-radius: 8px;
`;

export const Content = styled.div`
  padding: 15px;

  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const Header = styled.div`
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
`;

export const Describe = styled(Title)`
  font-size: 14px;
  line-height: 143%;
  opacity: 0.9;
`;

export const Divider = styled.div`
  width: 100%;
  height: 1px;
  opacity: 0.1;
  background-color: ${({ theme: { colors } }) => colors.black_1};
  margin-bottom: 40px;
`;

export const Button = styled(ButtonComponent)`
  margin: 24px auto;
`;
