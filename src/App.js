import React, { useState } from 'react';
import styled from 'styled-components';
import Main from './components/Main';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SideDrawer from './components/SideDrawer';

const AppContainer = styled.div`
  height: 100%;
  position: absolute;
  width: 90%;
  padding: 0 5%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

function App() {
  const [open, setOpen] = useState(false);
  const [login, setLogin] = useState(true);
  const [translate, setTranslate] = useState(false);

  const toggleOpen = () => {
    setOpen(state => !state);
  }
  return (
    <AppContainer>
      <Navbar
        toggleOpen={toggleOpen}
        setLogin={setLogin}
        login={login}
        translate={translate}
        setTranslate={setTranslate}
      />
      <SideDrawer
        open={open}
        toggleOpen={toggleOpen}
        setLogin={setLogin}
        translate={translate}
        setTranslate={setTranslate}
      />
      <Main
        login={login}
        setLogin={setLogin}
        translate={translate}
        setTranslate={setTranslate}
      />
      <Footer />
    </AppContainer>
  );
}

export default App;
