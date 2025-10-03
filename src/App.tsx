import { Routes, Route } from 'react-router-dom'

import HomePage from './pages/HomePage/HomePage'
import RegisterPage from './pages/RegisterPage/RegisterPage'
import LoginPage from './pages/LoginPage/LoginPage'
import ContentPage from './pages/ContentPage/ContentPage'
import Error404Page from './pages/Error404Page/Error404Page'


function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/content" element={<ContentPage />} />
        <Route path="/null" element={<Error404Page />} />
      </Routes>
    </>
  )
}

export default App
