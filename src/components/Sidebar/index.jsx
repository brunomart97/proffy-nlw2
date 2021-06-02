import "./styles.scss";

export default function Sidebar({ darkTheme }) {
  return (
    <div className={`backSidebar ${darkTheme && "dark"}`}>
      <div className={`sidebar ${darkTheme && "dark"}`}>
        <div className="top">
          <div className={`logo ${darkTheme && "dark"}`}>
            <SiXbox />
          </div>

          <div className="menu">
            <button className="active">
              Dashboard
            </button>
            <button>
              Games
            </button>
            <button>
              Store
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
