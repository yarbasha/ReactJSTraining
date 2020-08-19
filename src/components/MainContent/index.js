import React from 'react';
import styled from 'styled-components';
import { SwitchTransition, CSSTransition } from 'react-transition-group';
import { Button, Input } from "../../elements";

const Content = styled.div`
  flex: 0.65;
  transform: ${props => props.login ? "translateX(0)" : "translateX(54%)"};
  transition: transform linear 700ms ;
  @media screen and (max-width: 580px) {
    transform: translateX(0);
    flex: 1;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Section = styled(Container)`
  flex-direction: column;
  justify-content: center;
`;

const InnerContent = styled(Section)`
  width: 100%;
  height: 100%;
  justify-content: space-evenly;
  &.content-appear {
    opacity: 0;
    transform: scale(0.9);
  }
  &.content-appear-active {
    opacity: 1;
    transform: translateX(0);
    transition: opacity 300ms, transform 300ms;
  }
  &.content-enter {
    opacity: 0;
    transform: scale(0.9);
  }
  &.content-enter-active {
    opacity: 1;
    transform: translateX(0);
    transition: opacity 300ms, transform 300ms;
  }
  &.content-exit {
    opacity: 1;
  }
  &.content-exit-active {
    opacity: 0;
    transform: scale(0.9);
    transition: opacity 300ms, transform 300ms;
  }
`;

const Title = styled.h1`
  font-size: 3em;
  color: ${props => props.theme.primary};
  margin: 0;
  text-align: center;
`;

const SocialButton = styled(Button)`
  width: 44px;
  height: 44px;
  border-radius: 50%;
  font-size: x-large;
  font-weight: bolder;
`;


const Label = styled.label`
  color: ${props => props.theme.primary};
  font-size: 15px;
`;

const Link = styled.a`
  text-decoration: none;
  color:#acacac;
`;

export default function MainContent({ login }) {
  return (
    <Content login={login}>
      <SwitchTransition>
        <CSSTransition
          timeout={900}
          key={login}
          classNames={"content"}
          appear={true}
        >
          {login ? (
            <InnerContent>
              <Title>Sign In</Title>
              <Container>
                <SocialButton>f</SocialButton>
                <SocialButton>G</SocialButton>
                <SocialButton>in</SocialButton>
              </Container>
              <Section>
                <Label>or use your email account:</Label>
                <Input placeholder="Email" />
                <Input placeholder="Password" />
              </Section>
              <Section>
                <Button>SIGN IN</Button>
                <Link href="#">forget your password?</Link>
              </Section>
            </InnerContent>
          ) : (
              <InnerContent>
                <Title>Create Account</Title>
                <Container>
                  <SocialButton>f</SocialButton>
                  <SocialButton>G</SocialButton>
                  <SocialButton>in</SocialButton>
                </Container>
                <Section>
                  <Label>or use your email for registration:</Label>
                  <Input placeholder="Name" />
                  <Input placeholder="Email" />
                  <Input placeholder="Password" />
                </Section>
                <Section>
                  <Button>SIGN UP</Button>
                </Section>
              </InnerContent>
            )}
        </CSSTransition>
      </SwitchTransition>
    </Content>
  );
}