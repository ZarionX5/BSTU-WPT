import "./Footer.css";

function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer-langs">
          <ul>
            <li>
              <button className="current-lang">
                Россия
              </button>
            </li>
            <li><a href="./null.html">English (US)</a></li>
            <li><a href="./null.html">Русский</a></li>
          </ul>
        </div>
        <div className="footer-other">
          <p className="copyright">
            <span dir="ltr">
              <span dir="auto">Copyright © 2025</span>
              <a rel="license">Loek Inc.</a>
              <span dir="auto">Все права защищены.</span>
            </span>
          </p>
          <ul className="other-links">
            <li><a href="./null.html" rel="bookmark" dir="auto">Условия пользования
                интернет-сервисами</a></li>
            <li><a href="./null.html" rel="bookmark" dir="auto">Конфиденциальность</a>
            </li>
            <li><a href="./null.html" rel="bookmark" dir="auto">Предупреждение об использовании
                файлов
                cookie</a></li>
            <li><a href="./null.html" rel="help" dir="auto">Служба поддержки</a></li>
            <li><a href="./null.html" rel="contact" dir="auto">Обратная связь</a></li>
          </ul>
        </div>
      </footer>
    </>
  )
}

export default Footer
