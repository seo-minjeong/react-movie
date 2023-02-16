import styled from "styled-components";
import { Link } from "react-router-dom";

// img
import logo from "../img/logo.png";

function Header() {
  return (
    <>
      <HeaderWrap>
        <Link to={`/`}>
          <Logo>
            <img src={logo} alt="로고" />
          </Logo>
        </Link>
      </HeaderWrap>
    </>
  );
}

const HeaderWrap = styled.header`
  margin-top: 50px;
`;
const Logo = styled.h1`
  display: flex;
  width: 100%;
  height: 50px;
  justify-content: center;

  & img {
    object-fit: contain;
  }
`;

export default Header;
