import React from 'react';
import MainContent from '../MainContent';
import SideContent from '../SideContent';

export default function Main({ login, setLogin, translate, setTranslate }) {
  return (
    <>
      <MainContent login={login} />
      <SideContent
        login={login}
        translate={translate}
        setLogin={setLogin}
        setTranslate={setTranslate}
      />
    </>
  );
}