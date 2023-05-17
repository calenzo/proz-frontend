import { styled } from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: unset;
  min-height: 100%;
  background-color: ${({ background }) => background || "#00000080"};
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

export const Children = styled.div`
  background-color: ${({ theme: { colors } }) => colors.white_1};
  width: ${({ width }) => width || "100%"};
  height: ${({ height }) => height || "100%"};
  box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.2),
    0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12);
  border-radius: 8px;
  padding: 30px;
`;
