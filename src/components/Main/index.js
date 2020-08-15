import React from 'react';
import styled from 'styled-components';
import MainContent from '../MainContent';
import SideContent from '../SideContent';

const MainContainer = styled.div`
  display: flex;
  flex: 0.9;
  margin-top: 5px;
  margin-bottom: 5px;
  border: solid 1px #36c997;
  border-radius: 15px;
  box-shadow: 10px 5px 10px 0px #a8fce0;
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