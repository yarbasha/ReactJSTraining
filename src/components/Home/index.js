import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding: 5px;
`;
const ScrollContainer = styled.div`
  flex: 1 0 0;
  padding-left: 5%;
  padding-right: 5%;
  overflow: auto;
  ::-webkit-scrollbar {
    width: 12px;
  }
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0,0,0,0.3); 
    border-radius: 10px;
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    box-shadow: inset 0 0 10px ${props => props.theme.primary};
  }
`;

const H1 = styled.h1`
  color: ${({ theme }) => theme.primary};
  font-size: xxx-large;
  text-align: center;
  margin: 10px 0px;
  @media screen and (max-height: 580px) {
    font-size: x-large;
  }
`;

const ImagesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex: 1 0 175px;
  justify-content: center;
  align-items: center;
  margin: auto;
`;

const Image = styled.img`
  width: 150px;
  height: 150px;
  border: solid 2px ${({ theme }) => theme.primary};
  border-radius: 10px;
  margin: 10px;
  box-shadow: 0px 0px 8px 0px ${({ theme }) => theme.primary};
  @media screen and (max-width: 580px) {
    width: 100px;
    height: 100px;
  }
  @media screen and (max-height: 580px) {
    width: 100px;
    height: 100px;
  }
`;

const P = styled.p`
  color: ${({ theme }) => theme.primary};
  font-size: large;
  text-align: center;
`;

export default function Home() {
  return (
    <Container>
      <ScrollContainer>
        <H1>Welcome to our Site</H1>
        <P>God has created the most beautiful things to make the earth beautiful and blessed. The mountain, the sky,
        the sea all are the best creation of god which he gifted to the nature. Just like that flower is also a beautiful creation of god.
        </P>
        <P>We need flowers in our day today life for different reason like to make our garden beautiful to decorate our home for any
        special occasion like marriage, birthday or any other party. Flower is also a way to express our feelings.
        </P>
        <ImagesContainer>
          <Image src={require('../../images/i1.jpg')} />
          <Image src={require('../../images/i2.jpg')} />
          <Image src={require('../../images/i3.jpg')} />
          <Image src={require('../../images/i4.webp')} />
          <Image src={require('../../images/i5.webp')} />
        </ImagesContainer>
      </ScrollContainer>
    </Container>
  );
}