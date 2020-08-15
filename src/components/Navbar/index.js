import React from 'react';
import styled from 'styled-components';

const NavbarContainer = styled.div`
  display: flex;
  background: #36c997;
  border-radius:0px 0px 15px 15px;
  height: 80px;
  min-height: 60px;
  box-shadow: 5px 5px 10px 0px #36c997;
`;

const Link = styled.a`
  color: #fff;
  margin: 0 10px;
  text-decoration: none;
  font-size: large;
  :hover {
    font-weight: bold;
  }
`;

const Brand = styled(Link)`
  font-size: x-large;
  font-weight: bold;
  align-self: center;
  :hover {
    font-weight: 900;
  }
`;

const Left = styled.div`
  flex-grow: 1;
  align-self: center;
  @media (max-width: 580px) { 
    display: none;
  }
`;

const Right = styled.div`
  align-self: center;
  margin-right: 20px;
  margin-left: auto;
`;


export default function Navbar({ toggleOpen, setLogin, login, setTranslate }) {

  return (
    <NavbarContainer>
      <Brand href="#" onClick={toggleOpen}>Business Hub</Brand>
      <Left>
        <Link href="/">Home</Link>
        <Link href="/">About</Link>
        <Link href="/">Contact</Link>
      </Left>
      <Right>
        {login ? <Link href="#" onClick={() => { setLogin(false); setTranslate(true); }}>Sign up</Link> :
          <Link href="#" onClick={() => { setLogin(true); setTranslate(true); }}>Log in</Link>
        }
      </Right>
    </NavbarContainer >
  )
}