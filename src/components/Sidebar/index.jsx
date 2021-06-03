import { useState } from "react";

import "./styles.scss";

import ImperiusLogo from '../../assets/img/imperius-logo.png';

import { AiOutlineHome } from 'react-icons/ai';
import { CgArrowsExchange } from 'react-icons/cg';
import { FaRegUser } from 'react-icons/fa';
import { FiBox } from 'react-icons/fi';

export default function Sidebar({ darkTheme }) {
  const [selectedButton, setSelectedButton] = useState('dashboard');
  console.log(selectedButton);

  // function changeSelectedButton() {
  //   setSelectedButton(!selectedButton);
  // };

  return (
    <div className={`backSidebar ${darkTheme && "dark"}`}>
      <div className={`sidebar ${darkTheme && "dark"}`}>
        <div className="top">
          <div className={`logo ${darkTheme && "dark"}`}>
            <img src={ImperiusLogo} alt="Logo Imperius" />
          </div>

          <div className="menu">
            <button
              className={selectedButton === 'dashboard' && 'active'}
              onClick={() => setSelectedButton('dashboard')}
            >
              <AiOutlineHome />
              Dashboard
            </button>

            <button
              className={selectedButton === 'movimentacoes' && 'active'}
              onClick={() => setSelectedButton('movimentacoes')}
            >
              <CgArrowsExchange />
              Movimentações
            </button>

            <button
              className={selectedButton === 'encomendas' && 'active'}
              onClick={() => setSelectedButton('encomendas')}
            >
              <FiBox />
              Encomendas
            </button>

            <button
              className={selectedButton === 'cadastros' && 'active'}
              onClick={() => setSelectedButton('cadastros')}
            >
              <FaRegUser />
              Cadastros
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
