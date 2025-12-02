import { useState } from "react";
import { Link, useLocation } from 'react-router-dom';

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

import Content from "../../components/Content/Content"
import Map from '../../components/Map/Map'
import { AuthProtectProvider } from "@/components/AuthContext/AuthContext";
import useAuth from "@/hooks/useAuth";

import "./ContentPage.css";
import ObjectsTab from "@/components/ObjectsTab/ObjectsTab";
import MonitoringTab from "@/components/MonitoringTab/MonitoringTab";

interface ContentPageProps {
  tabOpened: 'dashboard' | 'monitoring' | 'objects'
}

function ContentPage({tabOpened}: ContentPageProps) {
  const { user } = useAuth();

  const content = () => {
    if (tabOpened === "dashboard") {
      return null
    } else if (tabOpened === "monitoring") {
      return (
        <>
          <MonitoringTab />
        </>
      )
    } else if (tabOpened === "objects") {
      return (
        <ObjectsTab/>
      )
    }
  }

  return (
    <AuthProtectProvider>
      <header className="header-content">
        <div className="header-content-logo">
          <MainLogo/>
          <span>Tracker</span>
        </div>
        <nav>
          <div className={"nav-btn-cnt " + (tabOpened === "dashboard" ? "nav-btn-selected" : "")}>
            <Link className="btn-dashboard" to="/dashboard">
              <div>
                <DashboardLogo/>
              </div>
              <span className="nav-btn-name">Дашборд</span>
            </Link>
          </div>
          <div className={"nav-btn-cnt " + (tabOpened === "monitoring" ? "nav-btn-selected" : "")}>
            <Link className="btn-monitoring" to="/monitoring">
              <div>
                <MonitoringLogo/>
              </div>
              <span className="nav-btn-name">Мониторинг</span>
            </Link>
          </div>
          <div className={"nav-btn-cnt " + (tabOpened === "objects" ? "nav-btn-selected" : "")}>
            <Link className="btn-objects" to="/objects">
              <div>
                <AddLogo/>
              </div>
              <span className="nav-btn-name">Объекты</span>
            </Link>
          </div>
        </nav>

        <div className="user-cnt">
          <Link to="/null">
            <div>
                <AccountLogo/>
            </div>
            <span>
              {user ? user.name : '...'}
            </span>
          </Link>
        </div>
      </header>
      <Content>
        {content()}



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
    </AuthProtectProvider>
  )
}

export default ContentPage
