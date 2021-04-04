import * as React from "react";
import { auth } from "../utils/auth";
import { Github, StackOverflow, Linkedin, Login, Logout } from "grommet-icons";
import { useContext } from "react";
import { Context } from "../App";

const Footer: React.FunctionComponent<any> = () => {
  const state = useContext(Context);

  const onLogin = () => {
    auth.login().then((newUser) => {
      state.updateState({ user: newUser });
    });
  };

  const onLogout = () => {
    auth.logout().then(() => {
      state.updateState({ user: null });
    });
  };

  return (
    <footer className="container">
      <nav className="footernav">
        <a href="https://github.com/DylanAllen">
          <Github a11yTitle="Github" />
        </a>
        <a href="https://stackoverflow.com/story/dylanallen">
          <StackOverflow a11yTitle="StackOverflow" />
        </a>
        <a href="https://www.linkedin.com/in/dylanallen/">
          <Linkedin a11yTitle="Linkedin" />
        </a>
      </nav>
      <div id="authnav">
        <span>
          {state.user ? (
            <span className="user-status">
              {state.user.photoURL ? (
                <img
                  alt={state.user.displayName || "user photo"}
                  className="footer-profile-pic"
                  src={state.user.photoURL}
                />
              ) : (
                ""
              )}
              {state.user.displayName}{" "}
              <button className="authicon" onClick={onLogout} title="Logout">
                <Logout a11yTitle="Logout" />
              </button>
            </span>
          ) : (
            <button className="authicon" onClick={onLogin} title="Login">
              <Login a11yTitle="Login" />
              &nbsp;Login
            </button>
          )}
        </span>
      </div>
    </footer>
  );
};

export default Footer;
