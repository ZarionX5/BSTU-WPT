import { Link } from 'react-router-dom';
import mainLogo from "/src/assets/logo.svg"
import "./Header.css";

function Header() {
  return (
    <>
      <header className="header">
        <div className="header-logo">
          <img alt="logo" src={mainLogo}/>
          <span>Tracker</span>
        </div>
        <nav>
          <div className="nav-btn-cnt">
            <Link className="btn-dashboard" to="/content">
              <div>
              </div>
              <span className="nav-btn-name">Опробовать</span>
            </Link>
          </div>
          <div className="nav-btn-cnt">
            <a className="btn-monitoring" href="./null.html">
              <div>
              </div>
              <span className="nav-btn-name">Форму</span>
            </a>
          </div>
          <div className="nav-btn-cnt">
            <a className="btn-monitoring" href="./null.html">
              <div>
              </div>
              <span className="nav-btn-name">Техническая поддержка</span>
            </a>
          </div>
          <div className="nav-btn-cnt">
            <a className="btn-monitoring" href="./null.html">
              <div>
              </div>
              <span className="nav-btn-name">Документация</span>
            </a>
          </div>
          <div className="nav-btn-cnt">
            <a className="btn-monitoring" href="./null.html">
              <div>
              </div>
              <span className="nav-btn-name">О нас</span>
            </a>
          </div>
        </nav>

        <div className="user-cnt">
          <Link to="/login">
            <button className="user-btn">
              Вход
            </button>
          </Link>
          <Link to="/register">
            <button className="user-btn">
              Регистрация
            </button>
          </Link>
        </div>
      </header>
    </>
  )
}

export default Header
