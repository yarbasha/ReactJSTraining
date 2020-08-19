import React from 'react';
import styled from 'styled-components';
import { Button } from '../../elements';

const Container = styled.div`
  background-color: ${({ theme }) => theme.primary};
  border-radius: 15px;
  color: ${({ theme }) => theme.secondary};
  padding-right: 10%;
  padding-left: 10%;
  text-align: center;
  @media (max-width: 580px) {
    padding-right: 3%;
    padding-left: 3%;
  }
`;

const H1 = styled.h1`
  font-size: xxx-large;
`;

const H2 = styled.h2`
  text-align: center;
  font-size: xx-large;
  ::after { 
    content: "";
    width: 40px;
    height: 6px;
    border-top: 1px solid ${({ theme }) => theme.secondary};
    display: inline-block;
    margin: 0 10px;
  }
  ::before { 
    content: "";
    width: 40px;
    height: 6px;
    border-top: 1px solid white;
    display: inline-block;
    margin: 0 10px;
  }
`;

const P = styled.p`
  font-size : large;
  text-align: left;
  line-height: 1.5em;
`;

const SocialButton = styled(Button)`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  font-size: xx-large;
  font-weight: bolder;
`;


export default function About() {
  return (<>
    <Container>
      <H1>About Us</H1>
      <H2>Our Story</H2>
      <P>
        Periscope was founded on the belief that live video is a powerful source of truth and connects us in an authentic way with the world around us.
        We are fascinated by the idea of discovering the world through someone else’s eyes.
        What’s it like to see through the eyes of a protester in Ukraine? Or watch the sunrise from a hot air balloon in Cappadocia?
      </P>
      <P>
        While there are many ways to discover events, movements and places,
        we realized there is no better way to experience something than through live video.
        A picture may be worth a thousand words, but live video lets us explore the world together.
      </P>
      <Container>
        <SocialButton secondary>f</SocialButton>
        <SocialButton secondary>G</SocialButton>
        <SocialButton secondary>in</SocialButton>
      </Container>
    </Container>
  </>);
}