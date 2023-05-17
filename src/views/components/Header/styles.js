import { styled } from "styled-components";

export const HeaderContainer = styled.div`
  background-color: ${({ theme: { colors } }) => colors.purple_1};
  width: 100%;
  height: 64px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
`;

export const Menu = styled.div`
  display: flex;
  gap: 10px;
`;

export const ImageMenu = styled.img`
  width: 24px;
  height: 24px;
`;

export const ImageLogo = styled.img`
  width: 108px;
  height: 32px;
`;

export const Profile = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
`;

export const Notification = styled.div`
  display: flex;
`;

export const ImageNotification = styled.img`
  width: 20px;
  height: 20px;
`;

export const Status = styled.div`
  background-color: #4caf50;
  width: 8px;
  height: 8px;
  border-radius: 8px;
  margin: 0 0 12px 0;
`;

export const ImageProfile = styled.img`
  width: 40px;
  height: 40px;
`;

export const ProfileAbout = styled.div`
  min-width: 150px;
`;

export const Name = styled.p`
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  letter-spacing: 0.15px;
  color: ${({ theme: { colors } }) => colors.white_1};
`;

export const Profession = styled(Name)`
  font-weight: 700;
  font-size: 14px;
  color: ${({ theme: { colors } }) => colors.gray_1};
`;
