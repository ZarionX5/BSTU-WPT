import "./LoginForm.css";
import mainLogo from "/src/assets/logo.svg"

function LoginForm() {
  return (
    <>
      <div className="login">
        <div className="login-title">
          <div className="login-logo">
            <img alt="logo" src={mainLogo}/>
          </div>
          <div>
            <h2>
              Войти в Tracker
            </h2>
          </div>
        </div>
        <form className="login-form">
          <div className="login-email">
            <div className="login-email-title">
              Email:
            </div>
            <input type="email" placeholder="Введите email" name="email"/>
          </div>
          <div className="login-password">
            <div className="login-password-title">
              Password:
            </div>
            <input type="password" placeholder="Введите пароль" name="password"/>
          </div>
          <div className="login-interaction">
            <button className="login-btn" type="submit" name="commit">
              Войти
            </button>
            <a className="forget-password-btn" href="./null.html">
              Забыл пароль?
            </a>
          </div>
        </form>
      </div>
    </>
  )
}

export default LoginForm
