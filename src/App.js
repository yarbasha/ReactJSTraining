import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Main from './components/Main';
import ChatContianer from './components/ChatContainer';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Drawer from './components/Drawer';
import theme from './styles/theme';

const AppContainer = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  padding: 0 5%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: linear-gradient(to bottom,  ${props => props.theme.primary} -150%, #fff 100%);
  background-attachment: fixed;
`;

function App() {
  const [open, setOpen] = useState(false);
  const [login, setLogin] = useState(true);
  const [translate, setTranslate] = useState(false);

  const toggleOpen = () => {
    setOpen(state => !state);
  }
  return (
    <ThemeProvider theme={theme}>
      <AppContainer>
        <Navbar
          toggleOpen={toggleOpen}
          setLogin={setLogin}
          login={login}
          translate={translate}
          setTranslate={setTranslate}
        />
        <Drawer
          open={open}
          toggleOpen={toggleOpen}
          setLogin={setLogin}
          translate={translate}
          setTranslate={setTranslate}
        />
        <ChatContianer />
        {/* <Main
          login={login}
          setLogin={setLogin}
          translate={translate}
          setTranslate={setTranslate}
        /> */}
        <Footer />
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
