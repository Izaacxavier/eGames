import { Container, Content } from "./styles";
import Instagram from "../../assets/icons/iconInstagram.svg";
import Facebook from "../../assets/icons/iconfacebook.svg";
import Linkedin from "../../assets/icons/iconLinkedin.svg";
import Twitter from "../../assets/icons/iconTwitter.svg";
import { ButtonTranslate } from "../ButtonTranslate";
import { Logo } from "../Logo";
import { t } from "i18next";

export function Footer() {
  return (
    <Container>
      <Content>
        <header>
          <div>
            <Logo />
             <p>{t("textFooter")}</p>
            <div className="redes_sociais">
              <a href="https://www.instagram.com/" target="_blank">
                <button>
                  <img src={Instagram} alt="" />
                </button>
              </a>
              <a href="https://www.facebook.com/" target="_blank">
                <button>
                  <img src={Facebook} alt="" />
                </button>
              </a>
              <a href="https://www.linkedin.com/feed/" target="_blank">
                <button>
                  <img src={Linkedin} alt="" />
                </button>
              </a>
              <a href="https://twitter.com/home" target="_blank">
                <button>
                  <img src={Twitter} alt="" />
                </button>
              </a>
            </div>
          </div>

          <div>
            <ul>
              <li>
                <a href="">{t("aFootertitle1")}</a>
              </li>
              <li>
                <a href="">{t("aFootertitle2")}</a>
              </li>
              <li>
                <a href="">{t("aFootertitle3")}</a>
              </li>
              <li>
                <a href="">{t("aFootertitle4")}</a>
              </li>
              <li>
                <a href="">{t("aFootertitle5")}</a>
              </li>
              <li>
                <a href="">{t("aFootertitle6")}</a>
              </li>
            </ul>
          </div>
          <div className="news_container">
            <h2>{t("tliteNews")}</h2>
            <div>
              <input type="email" placeholder={t("placeholder")} />
              <button>{t("buttonNews")}</button>
            </div>
          </div>
        </header>
        <footer>
          <div>
            <small>{t("copyright")}</small>
          </div>
          <div className="buttonTranslate">
            <ButtonTranslate />
          </div>
        </footer>
        <span>
          <small>Developer by <a href="https://www.linkedin.com/in/izaacxavier/" target="_blank">Izaac Xavier</a></small>
        </span>
      </Content>
    </Container>
  );
}
