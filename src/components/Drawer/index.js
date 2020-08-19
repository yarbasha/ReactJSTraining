import React from 'react';
import styled from 'styled-components';
import { Link } from '../../elements'


const DrawerContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 75%;
  height: 100%;
  z-index: 200;
  transform: ${props => props.open ? "translateX(0)" : "translateX(-100%)"};
  transition: transform linear 700ms;
  background-color: ${props => props.theme.primary}dd;
  @media screen and (min-width: 580px) {
    display: none;
  }
`;

const Backdrop = styled(DrawerContainer)`
  width: 100%;
  z-index: ${props => props.open ? "100" : "-100"};
  background-color: #000;
  opacity: ${props => props.open ? "0.35" : "0"};
  transform: translateX(0);
  transition: ${props => props.open ? "opacity linear 700ms" : "opacity linear 700ms, z-index linear 0ms 700ms"};
`;

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 15px 30px;
`;

const Item = styled.li`
  margin: 10px;
  border-bottom: solid 1px ${({ theme }) => theme.secondary};
  padding: 10px;
`;

export default function Drawer({ open, toggleOpen }) {

  return (
    <>
      <DrawerContainer open={open} >
        <List>
          <Item><Link to="/" onClick={toggleOpen}>Home</Link></Item>
          <Item><Link to="/about" onClick={toggleOpen}>About</Link></Item>
          <Item><Link to="/chat" onClick={toggleOpen}>Chat</Link></Item>
        </List>
      </DrawerContainer>
      <Backdrop open={open} onClick={toggleOpen} />
    </>
  );
}