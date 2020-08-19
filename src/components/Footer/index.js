import React from 'react';
import styled from 'styled-components';
import { Link } from '../../elements';

const FooterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.primary};
  border-radius:15px 15px 0px 0px;
  height: 80px;
  box-shadow: 0px 0px 20px 5px ${props => props.theme.primary};
  @media screen and (max-height: 500px) {
    height: 50px;
  }
`;

const List = styled.ul`
  list-style: none;
  margin: 0;
  display: flex;
  flex-direction: row;
`;

const Item = styled.li`
  margin: 10px;
`;

export default function Footer() {
  return (
    <>
      <FooterContainer>
        <List>
          <Item><Link to="/">Home</Link></Item>
          <Item><Link to="/about">About</Link></Item>
          <Item><Link to="/chat">Chat</Link></Item>
        </List>
      </FooterContainer>
    </>
  )
}