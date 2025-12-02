import Footer from "../../components/Footer/Footer"
import Header from "../../components/Header/Header"
import Content from "../../components/Content/Content"
import "./HomePage.css";
import { Link } from 'react-router-dom';


function HomePage() {
  return (
    <>
      <Header/>
      <Content>
        <div className="home-info">
        <div className="block-info description-cnt">
          <div className="description-title">
            Tracker — удобное приложение для мониторинга!
          </div>
          <div className="description">
            Tracker — флагманское решение для управления автопарками от компании Loek, работающей на рынке более 20
            лет. Этот многолетний опыт стал основой для создания платформы, к которой подключены миллионы транспортных
            средств по всему миру. Tracker позволяет владельцам автопарков держать все процессы под контролем и
            эффективно управлять каждым аспектом своего автопарка.
          </div>
          <Link to="/monitoring">
            <button>
              Опробовать
            </button>
          </Link>
        </div>
        <div className="extra-home-info">
          <div className="block-info">
            <p className="description-title">
              4+ миллиона
            </p>
            подключенных транспортных средств
          </div>
          <div className="block-info">
            <p className="description-title">
              2700+
            </p>
            компаний-партнеров
          </div>
          <div className="block-info">
            <p className="description-title">
              160+
            </p>
            стран
          </div>
          <div className="block-info">
            <p className="description-title">
              3800+
            </p>
            совместимых моделей устройств
          </div>
        </div>
        <div className="advantages-cnt">
          <span className="advantages-title">
            Tracker: основные преимущества
          </span>
          <div className="advantages-blocks">
            <div className="advantages-block">
              <p>
                <b>
                  Подходит для любой отрасли
                </b>
              </p>
              Tracker подходит для самых разных проектов, от отслеживания транспорта в реальном времени до полной
              цифровизации автопарков. Платформа предлагает не только богатый функционал, но и возможности его адаптации
              под различные отрасли, например, организацию доставки, сельское хозяйство или лизинг автомобилей.
            </div>
            <div className="advantages-block">
              <p>
                <b>
                  Широкий выбор устройств
                </b>
              </p>
              Tracker интегрирован с большинством моделей GPS-устройств – от небольших трекеров до сложных устройств с
              множеством входов, поддержкой CAN-шины и OBD. Список совместимых устройств постоянно растет.
            </div>
            <div className="advantages-block">
              <p>
                <b>
                  Гибкие интеграции
                </b>
              </p>
              SDK и открытый API Tracker позволяют легко интегрировать платформу с другими системами, например, с ERP,
              BI и бухгалтерским ПО. Также доступен широкий набор готовых интеграций платформы со сторонними
              инструментами для покрытия различных сценариев и потребностей.
            </div>
          </div>
        </div>
      </div>
      </Content>
      <Footer/>
    </>
  )
}

export default HomePage
