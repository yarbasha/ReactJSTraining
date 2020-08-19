import React, { useEffect } from 'react';
import styled from 'styled-components';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import { Button } from '../../elements'

const SideContainer = styled.div`
  flex: 0.35;
  background-color: ${({ theme }) => theme.primary};
  border-radius: 15px;
  transform: ${({ transform }) => transform} ;
  transition: transform linear 500ms ;
  @media only screen and (max-width: 580px) {
      display: none;
  }
`;

const InnerSide = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  text-align: center;
  &.side-appear {
    opacity: 0;
    transform: scale(0.9);
  }
  &.side-appear-active {
    opacity: 1;
    transform: translateX(0);
    transition: opacity 300ms, transform 300ms;
  }
  &.side-enter {
    opacity: 0;
    transform: scale(0.9);
  }
  &.side-enter-active {
    opacity: 1;
    transform: translateX(0);
    transition: opacity 300ms, transform 300ms;
  }
  &.side-exit {
    opacity: 1;
  }
  &.side-exit-active {
    opacity: 0;
    transform: scale(0.9);
    transition: opacity 300ms, transform 300ms;
  }
`;

const Title = styled.h1`
  font-size: 2.5em;
  color: ${({ theme }) => theme.secondary};
  margin: 30px;
`;

const Text = styled.p`
  color: ${({ theme }) => theme.secondary};
  margin-left: 10px;
  margin-right: 10px;
`;

export default function SideContent({ login, translate, setTranslate, setLogin }) {

  const toggle = () => {
    setTranslate(state => !state);
    setLogin(state => !state);
  };

  useEffect(() => {
    setTranslate(false);
  }, [setTranslate]);

  let transform = login ? "translateX(1%)" : "translateX(-186%)";
  if (translate) {
    transform = "translateX(-93%) scaleX(1.2)";
  }

  return (
    <SideContainer
      transform={transform}
      onTransitionEnd={(e) => {
        if (e.target === e.currentTarget) {
          setTranslate(false);
        }
      }}
    >
      <SwitchTransition>
        <CSSTransition
          timeout={850}
          key={login}
          classNames={"side"}
          appear={true}
        >
          {login ? (
            <InnerSide>
              <Title>Hello, Friend!</Title>
              <Text>Enter your personal details and start journey with us</Text>
              <Button secondary onClick={toggle}>SIGN UP</Button>
            </InnerSide>
          ) : (
              <InnerSide>
                <Title>Welcome back!</Title>
                <Text>to keep connected with us please login with your personal info</Text>
                <Button secondary onClick={toggle}>SIGN IN</Button>
              </InnerSide>
            )}
        </CSSTransition>
      </SwitchTransition>
    </SideContainer>
  );
}