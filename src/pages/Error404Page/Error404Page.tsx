import Footer from "../../components/Footer/Footer"
import Content from "../../components/Content/Content"
import "./Error404Page.css";

import AngryEyeLogo from '/src/assets/other/angry-eye.svg?react'


function Error404Page() {
  return (
    <>
      <Content>
        <div className="err-404-cnt">
        <div className="err-404 glow">
          <div className="title">
            <h1 className="title-main">404</h1>
            <h2 className="title-name bg-stripes">PAGE NOT FOUND</h2>
          </div>
          <div className="err-404-logo">
            <AngryEyeLogo/>
          </div>
          <h3 className="title-description">
            Страница пока не реализована либо её не существует.
          </h3>
        </div>
      </div>
      </Content>
      <Footer/>
    </>
  )
}

export default Error404Page
