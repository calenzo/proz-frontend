import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: unset;
  min-height: 100%;
  position: fixed;
  z-index: 999;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s;
`;

export const List = styled.div`
  width: 100%;
  max-width: 424px;
  background-color: ${({ theme: { colors } }) => colors.white_1};
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  z-index: 997;
  gap: 10px;
  top: 70px;
  right: 5%;
  padding: 20px;
  box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.2),
    0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12);
  border-radius: 8px;
`;

export const Divider = styled.div`
  width: 100%;
  height: 1px;
  opacity: 0.1;
  background-color: ${({ theme: { colors } }) => colors.black_1};
  margin-bottom: 40px;
`;
