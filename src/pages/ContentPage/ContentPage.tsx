
import Content from "../../components/Content/Content"
import { Link } from 'react-router-dom';
import "./ContentPage.css";

import MainLogo from '/src/assets/logo.svg?react'
import DashboardLogo from '/src/assets/other/dashboard.svg?react'
import MonitoringLogo from '/src/assets/other/monitoring.svg?react'
import AccountLogo from '/src/assets/other/account.svg?react'
import AddLogo from '/src/assets/other/add.svg?react'
import RefreshLogo from '/src/assets/other/refresh.svg?react'
import VdotsLogo from '/src/assets/other/vdots.svg?react'
import SettingsLogo from '/src/assets/other/settings.svg?react'
import LocationLogo from '/src/assets/other/location.svg?react'
import SignalLogo from '/src/assets/other/signal.svg?react'
import PersonLogo from '/src/assets/other/person.svg?react'
import DeleteLogo from '/src/assets/other/delete.svg?react'
import PedalBikeLogo from '/src/assets/other/pedal-bike.svg?react'
import RemoveLogo from '/src/assets/other/remove.svg?react'

function ContentPage() {
  return (
    <>
      <header className="header-content">
        <div className="header-content-logo">
          <MainLogo/>
          <span>Tracker</span>
        </div>
        <nav>
          <div className="nav-btn-cnt">
            <Link className="btn-dashboard" to="/null">
              <div>
                <DashboardLogo/>
              </div>
              <span className="nav-btn-name">Дашборд</span>
            </Link>
          </div>
          <div className="nav-btn-cnt nav-btn-selected">
            <Link className="btn-monitoring" to="/null">
              <div>
                <MonitoringLogo/>
              </div>
              <span className="nav-btn-name">Мониторинг</span>
            </Link>
          </div>
        </nav>

        <div className="user-cnt">
          <Link to="/null">
            <div>
                <AccountLogo/>
            </div>
            <span>
              Nikita Loek
            </span>
          </Link>
        </div>
      </header>
      <Content>
        <div className="container">
          <div className="control-panel">
            <input className="search" type="text"/>

            <div className="control-panel-title">
              <input type="checkbox" name="select-all"/>
              <button className="center">
                  <AddLogo/>
              </button>
              <button className="center">
                  <RefreshLogo/>
              </button>
              <button className="center">
                  <VdotsLogo/>
              </button>
              <button className="center">
                  <SettingsLogo/>
              </button>
              <div className="center">
                  <LocationLogo/>
              </div>
              <div className="center">
                  <SignalLogo/>
              </div>
              <div className="center">
              </div>
            </div>

            <div className="control-panel-list">
              <input type="checkbox" name="select-all"/>
              <div className="center">
                  <PersonLogo/>
              </div>
              <span>Человек 1</span>
              <div className="center">
                <span className="state good">on</span>
              </div>
              <div className="center">
                70%
              </div>
              <div className="center">
                  <DeleteLogo/>
              </div>
            </div>

            <div className="control-panel-list">
              <input type="checkbox" name="select-all"/>
              <div className="center">
                  <PersonLogo/>
              </div>
              <span>Человек 2</span>
              <div className="center">
                <span className="state bad">off</span>
              </div>
              <div className="center">
                0%
              </div>
              <div className="center">
                  <DeleteLogo/>
              </div>
            </div>

            <div className="control-panel-list">
              <input type="checkbox" name="select-all"/>
              <div className="center">
                  <PedalBikeLogo/>
              </div>
              <span>Велосипед</span>
              <div className="center">
                <span className="state good">on</span>
              </div>
              <div className="center">
                95%
              </div>
              <div className="center">
                  <DeleteLogo/>
              </div>
            </div>
          </div>
          <div className="view-panel">
            <div className="world-map">
              <div className="sizing">
                <div className="btn-cnt">
                  <button>
                  <AddLogo/>
                  </button>
                  <button>
                  <RemoveLogo/>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

      </Content>
      <footer className="footer">
        <div className="footer-langs">
          <ul>
            <li>
              <button className="current-lang">
                Россия
              </button>
            </li>
            <li><Link to="/null">English (US)</Link></li>
            <li><Link to="/null">Русский</Link></li>
          </ul>
        </div>
        <div className="footer-other">
          <p className="copyright">
            <span dir="ltr">
              <span dir="auto">Copyright © 2025</span>
              <Link rel="license" to="/null">Loek Inc.</Link>
              <span dir="auto">Все права защищены.</span>
            </span>
          </p>
        </div>
      </footer>
    </>
  )
}

export default ContentPage
