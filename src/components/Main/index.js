import React from 'react';
import styled from 'styled-components';
import MainContent from '../MainContent';
import SideContent from '../SideContent';

const MainContainer = styled.div`
  display: flex;
  flex: 0.95;
  margin-top: 10px;
  margin-bottom: 10px;
  border: solid 1px ${props => props.theme.primary};
  border-radius: 15px;
  box-shadow: 0px 0px 20px 5px ${props => props.theme.primary};
`;



export default function Main({ login, setLogin, translate, setTranslate }) {
  return (
    <>
      <MainContainer>
        <MainContent login={login} />
        <SideContent
          login={login}
          translate={translate}
          setLogin={setLogin}
          setTranslate={setTranslate}
        />
      </MainContainer>
    </>
  );
}