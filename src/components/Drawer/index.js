import React from 'react';
import styled from 'styled-components';

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
`;

const Link = styled.a`
  color: ${props => props.theme.secondary};
  font-size: x-large;
  text-decoration: none;
`;


export default function Drawer({ open, toggleOpen, setLogin }) {

  return (
    <>
      <DrawerContainer open={open} >
        <List>
          <Item><Link href="#">Home</Link></Item>
          <Item><Link href="#">About</Link></Item>
          <Item><Link href="#">Contact</Link></Item>
          <Item><Link href="#" onClick={() => { setLogin(false); toggleOpen(); }}>Sign up</Link></Item>
        </List>
      </DrawerContainer>
      <Backdrop open={open} onClick={toggleOpen} />
    </>
  );
}