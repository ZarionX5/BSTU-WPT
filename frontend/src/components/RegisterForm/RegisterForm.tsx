import "./RegisterForm.css";
import mainLogo from "/src/assets/logo.svg"

function RegisterForm() {
  return (
    <>
      <div className="register">
        <div className="register-title">
          <div className="register-logo">
            <img alt="logo" src={mainLogo}/>
          </div>
          <div>
            <h2>
              Регистрация в Tracker
            </h2>
          </div>
        </div>
        <form className="register-form">
          <div className="register-name">
            <div className="register-name-title">
              Login:
            </div>
            <input type="username" placeholder="Введите имя пользователя" name="login"/>
          </div>
          <div className="register-email">
            <div className="register-email-title">
              Email:
            </div>
            <input type="email" placeholder="Введите email" name="email"/>
          </div>
          <div className="register-password">
            <div className="register-password-title">
              Password:
            </div>
            <input type="password" placeholder="Введите пароль" name="password"/>
          </div>
          <div className="register-interaction">
            <button className="register-btn" type="submit" name="commit">
              Регистрация
            </button>
          </div>
        </form>
      </div>
    </>
  )
}

export default RegisterForm
