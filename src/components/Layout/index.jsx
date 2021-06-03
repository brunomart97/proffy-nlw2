import { useState } from "react";

import "./styles.scss";

import Sidebar from '../Sidebar';

export default function Layout() {
  const [darkTheme, setDarkTheme] = useState(false);

  function changeTheme() {
    setDarkTheme(!darkTheme);
  }

  return (
    <div className="layout">
      <Sidebar />
    </div>
  );
}
