import { Link } from 'react-router-dom';
import mainLogo from "/src/assets/logo.svg"
import "./Header.css";
import useAuth from '@/hooks/useAuth';

function Header() {
  const { user, logout } = useAuth();

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
          {user ?
          <Link className='user-opt' to="/null">
            {user.name}
          </Link>
          :
          <Link className='user-opt' to="/login">
            <button className="user-btn">
              Вход
            </button>
          </Link>
          }

          {user ?
          <div className='user-opt'>
            <button className="user-btn"
            onClick={() => {
              logout();
            }}>
              Выход
            </button>
          </div>
          :
          <Link className='user-opt' to="/register">
            <button className="user-btn">
              Регистрация
            </button>
          </Link>
          }
        </div>
      </header>
    </>
  )
}

export default Header
