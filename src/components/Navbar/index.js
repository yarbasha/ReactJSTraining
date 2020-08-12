import React from 'react';
import './navbar.css';


const Navbar = ({ toggleOpen, setLogin, login, setTranslate }) => {

  return (
    <div className="navbar">
      <div className="brand">
        <h3><a href="#" onClick={toggleOpen}>Business Hub</a></h3>
      </div>
      <div className="left">
        <a href="/">Home</a>
        <a href="/">About</a>
        <a href="/">Contact</a>
      </div>
      <div className="right">
        {login ? <a href="#" onClick={() => { setLogin(false); setTranslate(true); }}>Sign up</a> :
          <a href="#" onClick={() => { setLogin(true); setTranslate(true); }}>Log in</a>
        }

      </div>
      {/* <div className={collapse ? "menu menu-collapse" : "menu"}>
        <a href="/">Home</a>
        <a href="/">About</a>
        <a href="/">Contact</a>
        <a href="/">Sign up</a>
      </div> */}
    </div >
  )
};

export default Navbar;