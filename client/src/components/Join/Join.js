import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Join.css";
import { FiGithub } from "react-icons/fi";
import { FiInstagram } from "react-icons/fi";

const Join = () => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");

  const [darkMode, setDarkMode] = useState(getInitialMode());

  React.useEffect(() => {
    localStorage.setItem("dark", JSON.stringify(darkMode));
  }, [darkMode]);

  function getInitialMode() {
    const isReturningUser = "dark" in localStorage;
    const savedMode = JSON.parse(localStorage.getItem("dark"));
    const userPrefersDark = getPrefColorScheme();

    if (isReturningUser) {
      return savedMode;
    } else if (userPrefersDark) {
      return true;
    } else {
      return false;
    }
  }
  function getPrefColorScheme() {
    if (!window.matchMedia) return;

    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  }

  return (
    <div className={darkMode ? "dark-mode" : "light-mode"}>
      <nav>
        <div className="toggle-container">
          <span style={{ color: darkMode ? "grey" : "yellow" }}>☀︎</span>
          <span className="toggle">
            <input
              checked={darkMode}
              onChange={() => setDarkMode((prevMode) => !prevMode)}
              id="checkbox"
              className="checkbox"
              type="checkbox"
            />
            <label htmlFor="checkbox" />
          </span>
          <span style={{ color: darkMode ? "slateblue" : "grey" }}>☾</span>
        </div>
      </nav>
      <div
        className={
          darkMode ? "joinOuterContainer-dark" : "joinOuterContainer-light"
        }
      >
        <form className="rn-form">
          <div className="field">
            <label className="label">Name</label>
            <input
              spellCheck="false"
              className="input"
              placeholder=" "
              onChange={(event) => setName(event.target.value)}
            />
          </div>

          <div className="field mt-100">
            <label className="label">Room</label>
            <input
              spellCheck="false"
              className="input"
              placeholder=" "
              onChange={(event) => setRoom(event.target.value)}
            />
          </div>
          <Link
            onClick={(event) =>
              !name || !room ? event.preventDefault() : null
            }
            to={"/chat?name=" + name + "&room=" + room}
          >
            <button className="button mt-20" type="submit">
              Sign In
            </button>
          </Link>
        </form>
      </div>
      <div className="icons">
        <a className="links" href="https://github.com/upendra-io">
          <FiGithub size="25" className="git" />
        </a>
        <a className="links" href="https://www.instagram.com/upendra_._/">
          <FiInstagram size="25" className="instagram" />
        </a>
      </div>
    </div>
  );
};
export default Join;
