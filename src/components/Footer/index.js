import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #36c997;
  border-radius:15px 15px 0px 0px;
  height: 80px;
  min-height: 60px;
  box-shadow: 5px -5px 10px 0px #a8fce0;
`;

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 15px 30px;
  display: flex;
  flex-direction: row;
`;

const Item = styled.li`
  margin: 10px;
`;

const Link = styled.a`
  color: white;
  font-size: large;
  text-decoration: none;
  :hover {
    font-weight: 600;
  }
`;

export default function Footer() {
  return (
    <>
      <FooterContainer>
        <List>
          <Item><Link href="#">Home</Link></Item>
          <Item><Link href="#">About</Link></Item>
          <Item><Link href="#">Contact</Link></Item>
        </List>
      </FooterContainer>
    </>
  )
}