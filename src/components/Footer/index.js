import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${props => props.theme.primary};
  border-radius:15px 15px 0px 0px;
  height: 80px;
  box-shadow: 0px 0px 20px 5px #a8fce0;
  @media screen and (max-height: 500px) {
    height: 50px;
  }
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
  color: ${props => props.theme.secondary};
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