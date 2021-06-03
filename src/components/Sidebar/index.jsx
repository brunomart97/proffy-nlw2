import "./styles.scss";

import ImperiusLogo from '../../assets/img/imperius-logo.png';

import { AiOutlineHome } from 'react-icons/ai';
import { CgArrowsExchange } from 'react-icons/cg';
import { HiOutlineUserAdd } from 'react-icons/hi';

export default function Sidebar({ darkTheme }) {
  return (
    <div className={`backSidebar ${darkTheme && "dark"}`}>
      <div className={`sidebar ${darkTheme && "dark"}`}>
        <div className="top">
          <div className={`logo ${darkTheme && "dark"}`}>
            <img src={ImperiusLogo} alt="Logo Imperius" />
          </div>

          <div className="menu">
            <button className="active">
              <AiOutlineHome />
              Dashboard
            </button>
            <button>
              <CgArrowsExchange />
              Movimentações
            </button>
            <button>
              <HiOutlineUserAdd />
              Cadastros
            </button>
            <button>
              Messages
            </button>
            <button>
              Friends
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
