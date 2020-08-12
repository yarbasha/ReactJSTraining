import React from 'react';
import './App.css';
import Main from './components/Main';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SideDrawer from './components/SideDrawer';
import { useState } from 'react';


function App() {
  const [open, setOpen] = useState(false);
  const [login, setLogin] = useState(true);
  const [translate, setTranslate] = useState(false);

  const toggleLogin = () => {
    setLogin(state => !state);
  }
  const toggleOpen = () => {
    setOpen(state => !state);
  }
  return (
    <div className="app">
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
    </div>
  )

}

export default App;
