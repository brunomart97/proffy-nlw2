import { useState } from "react";

import "./styles.scss";

import Sidebar from '../Sidebar';
import Header from '../Header';

export default function Layout() {
  const [darkTheme, setDarkTheme] = useState(false);

  function changeTheme() {
    setDarkTheme(!darkTheme);
  };

  return (
    <div className={`layout ${darkTheme && "dark"}`}>
      <Sidebar
        darkTheme={darkTheme}
      />

      <Header
        changeTheme={changeTheme}
        darkTheme={darkTheme}
      />
    </div>
  );
}
