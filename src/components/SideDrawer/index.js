import React from 'react';
import './sideDrawer.css';

export default function SideDrawer({ open, toggleOpen, setLogin }) {
  return (
    <>
      <div className={open ? "drawer open" : "drawer"}>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/">About</a></li>
          <li><a href="/">Contact</a></li>
          <li><a href="#" onClick={() => { setLogin(false); toggleOpen(); }}>Sign up</a></li>
        </ul>
      </div>
      <div className={open ? "drawer-backdrop open" : "drawer-backdrop"} onClick={toggleOpen}></div>
    </>
  );
}