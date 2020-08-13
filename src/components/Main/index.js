import React from 'react';
import styled from 'styled-components';
import MainContent from '../MainContent';
import SideContent from '../SideContent';

const MainContainer = styled.div`
  display: flex;
  flex: 0.75;
  flex-direction: row;
  justify-content: center;
  border: solid 1px #36c997;
  border-radius: 15px;
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