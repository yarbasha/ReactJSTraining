import React from 'react';
import styled from 'styled-components';
import { CSSTransition, SwitchTransition } from 'react-transition-group';

const SideContainer = styled.div`
  flex: 0.35;
  background-color: #36c997;
  border-radius: 15px;
  transform: ${props => props.transform} ;
  transition: transform linear 500ms ;
`;

const InnerSide = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  text-align: center;
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
  color: white;
  margin: 30px;
`;

const Text = styled.p`
  color: white;
  margin-left: 10px;
  margin-right: 10px;
`;

const Button = styled.button`
  width: 216px;
  color:white;
  background-color: transparent;
  border: solid 2px white;
  border-radius: 25px;
  height: 35px;
  margin-left: 10px;
  margin-right: 10px;
  :hover, :focus {
    color: #36c997;
    background: white;
    cursor: pointer;
    outline: none;
  }
`;

export default function SideContent({ login, translate, setTranslate, setLogin }) {

  const toggle = () => {
    setTranslate(state => !state);
    setLogin(state => !state);
  };

  let transform = login ? "translateX(1%)" : "translateX(-186%)";
  if (translate) {
    transform = "translateX(-93%) scaleX(1.2)";
  }

  return (
    <SideContainer
      transform={transform}
      onTransitionEnd={(e) => {
        if (e.target == e.currentTarget) {
          setTranslate(false);
        }
      }}
    >
      <SwitchTransition>
        <CSSTransition
          timeout={850}
          key={login}
          classNames={"side"}
        >
          {login ? (
            <InnerSide>
              <Title>Hello, Friend!</Title>
              <Text>Enter your personal details and start journey with us</Text>
              <Button onClick={toggle}>SIGN UP</Button>
            </InnerSide>
          ) : (
              <InnerSide>
                <Title>Welcome back!</Title>
                <Text>to keep connected with us please login with your personal info</Text>
                <Button onClick={toggle}>SIGN IN</Button>
              </InnerSide>
            )}
        </CSSTransition>
      </SwitchTransition>
    </SideContainer>
  );
}