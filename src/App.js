import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Main from './components/Main';
import ChatContianer from './components/ChatContainer';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Drawer from './components/Drawer';
import Home from './components/Home';
import theme from './styles/theme';
import { Container } from './elements';
import About from './components/About';

const AppContainer = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  padding: 0 5%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: linear-gradient(to bottom,  ${({ theme }) => theme.primary} -150%, ${({ theme }) => theme.secondary} 100%);
  background-attachment: fixed;
  background-repeat: no-repeat;
  overflow: auto;
`;

function App() {
  const [open, setOpen] = useState(false);
  const [login, setLogin] = useState(true);
  const [translate, setTranslate] = useState(false);

  const toggleOpen = () => {
    setOpen(state => !state);
  }
  return (
    <Router>
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
            translate={translate}
            setTranslate={setTranslate}
          />
          <Container>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/chat">
                <ChatContianer />
              </Route>
              <Route path="/auth">
                <Main
                  login={login}
                  setLogin={setLogin}
                  translate={translate}
                  setTranslate={setTranslate}
                />
              </Route>
              <Route path="/about">
                <About />
              </Route>
            </Switch>
          </Container>
          <Footer />
        </AppContainer>
      </ThemeProvider>
    </Router>
  );
}

export default App;
