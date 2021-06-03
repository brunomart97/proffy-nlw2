import "./styles.scss";

import { RiSunFill } from 'react-icons/ri';
import { FaMoon } from 'react-icons/fa';

export default function Header({ changeTheme, darkTheme }) {
  return (
    <header className={`header ${darkTheme && "dark"}`}>
      <div className="leftSide">
        <div className="title">
          <h1 className={darkTheme && "dark"}>Dashboard</h1>
        </div>

        <div className="menu">
          <nav>
            <a href="">DashOne</a>
            <a href="">DashTwo</a>
          </nav>
        </div>
      </div>

      <div className="rightSide">
        <button
          className={`darkLightBtn ${darkTheme && "dark"}`}
          onClick={changeTheme}
        >
          <div className="innerButton">
            {darkTheme ? <FaMoon /> : <RiSunFill />}
          </div>
        </button>
      </div>
    </header>
  );
}
