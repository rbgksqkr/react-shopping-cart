import styled from "@emotion/styled";

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #2ac1bc;
  color: #fff;
  padding: 10px 15%;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.3);
`;

export const LogoContainer = styled.div`
  display: inline-block;
  transform: translateY(5px);
`;

export const HomeTitle = styled.h1`
  display: inline-block;
  font-size: 40px;
  font-weight: 900;
  line-height: 58px;
  letter-spacing: 0em;
  margin: 0;
  padding: 0;
  margin-left: 6px;
`;

export const NavContainer = styled.nav`
  display: flex;
  gap: 43px;
  font-family: Noto Sans KR;
  font-size: 24px;
  font-weight: 500;
  line-height: 12px;
  text-align: center;
`;
