import React, { useState } from 'react';
import './main.css';
import { CSSTransition, SwitchTransition } from 'react-transition-group';

export default function Main({ login, setLogin, translate, setTranslate }) {
  // const [translate, setTranslate] = useState(false);
  // const [isLogin, setIsLogin] = useState(true);

  const toggle = () => {
    setTranslate(state => !state);
    setLogin(state => !state);
  }

  let sideClasses;
  if (login) {
    sideClasses = "side translateSideltr";
  } else {
    sideClasses = "side translateSidertl";
  }
  if (translate && login) {
    sideClasses += " xxxltr";
    setTimeout(() => {
      setTranslate(false);
      sideClasses -= " xxxltr";
    }, 350);
  } else if (translate && !login) {
    sideClasses += " xxxrtl";
    setTimeout(() => {
      setTranslate(false);
      sideClasses -= " xxxrtl";
    }, 350);
  }

  return (
    <>
      <div className="container">
        <div className={login ? "content translateContentltr" : "content translateContentrtl"}>
          <SwitchTransition>
            <CSSTransition
              timeout={450}
              key={login}
              classNames={"content"}
            >
              {login ? (
                <div className="insideContent">
                  <div className="header">
                    <h1>Sign In</h1>
                  </div>
                  <div className="social-buttons-container">
                    <div className="social-button">
                      <a href="http://">f</a>
                    </div>
                    <div className="social-button">
                      <a href="http://">G</a>
                    </div>
                    <div className="social-button">
                      <a href="http://">in</a>
                    </div>
                  </div>
                  <div className="inputs">
                    <label>or use your email account:</label>
                    <input placeholder="Email" />
                    <input placeholder="Password" />
                  </div>
                  <div className="buttons">
                    <a href="http://">forget your password?</a>
                    <button>SIGN IN</button>
                  </div>
                </div>
              ) : (
                  <div className="insideContent">
                    <div className="header">
                      <h1>Create Account</h1>
                    </div>
                    <div className="social-buttons-container">
                      <div className="social-button">
                        <a href="http://">f</a>
                      </div>
                      <div className="social-button">
                        <a href="http://">G</a>
                      </div>
                      <div className="social-button">
                        <a href="http://">in</a>
                      </div>
                    </div>
                    <div className="inputs">
                      <label>or use your email for registration:</label>
                      <input placeholder="Name" />
                      <input placeholder="Email" />
                      <input placeholder="Password" />
                    </div>
                    <div className="buttons">
                      <button>SIGN UP</button>
                    </div>
                  </div>
                )}
            </CSSTransition>
          </SwitchTransition>
        </div>
        <div className={sideClasses}>
          <SwitchTransition>
            <CSSTransition
              timeout={450}
              key={login}
              classNames={"side"}
            >
              {login ? (
                <div className="insideSide">
                  <h1>
                    Hello, Friend!
                  </h1>
                  <p>
                    Enter your personal details and start journey with us
                  </p>
                  <button onClick={toggle}>SIGN UP</button>
                </div>
              ) : (
                  <div className="insideSide">
                    <h1>
                      Welcome back!
                    </h1>
                    <p>
                      to keep connected with us please login with your personal info
                    </p>
                    <button onClick={toggle}>SIGN IN</button>
                  </div>
                )}
            </CSSTransition>
          </SwitchTransition>
        </div>
      </div>
    </>
  );
}