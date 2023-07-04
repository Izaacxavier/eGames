import { Container, Content } from "./styles";
import Instagram from "../../assets/icons/iconInstagram.svg";
import Facebook from "../../assets/icons/iconfacebook.svg";
import Linkedin from "../../assets/icons/iconLinkedin.svg";
import Twitter from "../../assets/icons/iconTwitter.svg";
import { ButtonTranslate } from "../ButtonTranslate";
import { Logo } from "../Logo";

export function Footer() {
  return (
    <Container>
      <Content>
        <header>
          <div>
            <Logo />
            <p>
              Conteúdo gamer feito pra você ficar por dentro da industria e
              também se conectar com outros gamers.
            </p>
            <div className="redes_sociais">
              <a href="">
                <button>
                  <img src={Instagram} alt="" />
                </button>
              </a>
              <a href="">
                <button>
                  <img src={Facebook} alt="" />
                </button>
              </a>
              <a href="">
                <button>
                  <img src={Linkedin} alt="" />
                </button>
              </a>
              <a href="">
                <button>
                  <img src={Twitter} alt="" />
                </button>
              </a>
            </div>
          </div>

          <div>
            <ul>
              <li>
                <a href="">Quem somos</a>
              </li>
              <li>
                <a href="">Perguntas frequentes</a>
              </li>
              <li>
                <a href="">Assessoria de imprensa</a>
              </li>
              <li>
                <a href="">Carreira</a>
              </li>
              <li>
                <a href="">Blog</a>
              </li>
              <li>
                <a href="">Contato</a>
              </li>
            </ul>
          </div>
          <div className="news_container">
            <h2>Assine nossa Newsletter</h2>
            <div>
              <input type="email" placeholder="Seu e-mail" />
              <button>Assinar</button>
            </div>
          </div>
        </header>
        <footer>
          <div>
            <small>eGames 2023 - Todos os direitos reservados</small>
          </div>
          <div className="buttonTranslate">
            <ButtonTranslate />
          </div>
        </footer>
        <span>
          <small>Developer by Izaac Xavier</small>
        </span>
      </Content>
    </Container>
  );
}
