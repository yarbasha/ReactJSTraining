import React from 'react';
import styled from 'styled-components';
import { Link } from '../../elements';

const NavbarContainer = styled.div`
  display: flex;
  background: ${props => props.theme.primary};
  border-radius:0px 0px 15px 15px;
  height: 80px;
  min-height: 50px;
  box-shadow: 0px 0px 20px 5px ${props => props.theme.primary};
  @media screen and (max-height: 500px) {
    height: 50px;
  }
`;

const Brand = styled(Link)`
  font-size: x-large;
  font-weight: bold;
  align-self: center;
  :hover {
    font-weight: 900;
  }
  @media (max-width: 580px) { 
    display: none;
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

const Bars = styled.div`
  background-color: transparent;
  height: 38px;
  width: 40px;
  align-self: center;
  padding: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
  margin: 10px;
  align-items: center;
  border: solid 2px ${({ theme }) => theme.secondary};
  border-radius: 5px;
  @media (min-width: 580px) { 
    display: none;
  }
`;

const Bar = styled.div`
  background-color: ${({ theme }) => theme.secondary};
  height: 2px;
  width: 30px;
`;



export default function Navbar({ toggleOpen, setLogin, login, setTranslate }) {

  return (
    <NavbarContainer>
      <Brand to="/">Business Hub</Brand>
      <Bars onClick={toggleOpen}><Bar /><Bar /><Bar /><Bar /></Bars>
      <Left>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/chat">Chat</Link>
      </Left>
      <Right>
        {login ? <Link to="/auth" onClick={() => { setLogin(false); setTranslate(true); }}>Sign up</Link> :
          <Link to="/auth" onClick={() => { setLogin(true); setTranslate(true); }}>Log in</Link>
        }
      </Right>
    </NavbarContainer >
  )
}