import './styles/global.scss';
import './App.scss';

import { useState } from "react";

function App() {
  const [darkTheme, setDarkTheme] = useState(false);

  function changeTheme() {
    setDarkTheme(!darkTheme);
  }

  return (
    <div className="App">
      <h1>Hello Imperius</h1>
    </div>
  );
}

export default App;
