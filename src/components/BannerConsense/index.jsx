import { Container, Content } from "./styles";
import iconCookie from "../../assets/icons/cookie.svg";
import { CaretDown, X } from "@phosphor-icons/react";
import { useState } from "react";
import Cookies from "js-cookie";

export function BannerConsense() {
  const [moreOfCookiesIsOpen, setMoreOfCookiesIsOpen] = useState(false);
  const [accept, setAccept] = useState(true);
  const [closeBanner, setCloseBanner] = useState(false)

  const cookieIsAccept = Cookies.get("eGamesAcceptCookies");

  function openMoreOfCookies() {
    if (!moreOfCookiesIsOpen) {
      setMoreOfCookiesIsOpen(true);
    } else {
      setMoreOfCookiesIsOpen(false);
    }
  }

  function isAcceptCookies() {
    Cookies.set("eGamesAcceptCookies", true, { expires: 7 });
    setAccept(false);
  }

  if (accept && !cookieIsAccept) {
    return (
      <Container className={closeBanner ? "container closed" : "container"}>
        <Content>
          <header>
            <div className="cookie_title">
              <img src={iconCookie} alt="" />
              <h1>Cookies</h1>
            </div>
            <button onClick={() => setCloseBanner(true)}><X /> </button>
          </header>
          <main>
            <div className="cookies_consense">
              <h1>Este website utiliza cookies</h1>
              <p>
                Esse site utiliza cookies para personalizar e aprimorar a
                experiência. além de fornecer funcionalidades de redes sociais e
                analisar o nosso trafego.
              </p>
              <button onClick={openMoreOfCookies}>
                Leia mais <CaretDown />{" "}
              </button>

              <div
                className={
                  moreOfCookiesIsOpen ? "consens_terms isOpen" : "consens_terms"
                }
              >
                <p>
                  Os cookies são pequenos ficheiros de texto que podem ser
                  utilizados por websites para tornar a experiência do usuário
                  melhor e mais eficiente. A lei diz que podemos armazenar
                  cookies no seu dispositivo se forem estritamente necessários
                  para o funcionamento deste site. Para todos os outros tipos de
                  cookies precisamos da sua permissão. Este site utiliza
                  diferentes tipos de cookies. Alguns cookies são colocados por
                  serviços independentes que aparecem nas nossas páginas. Pode a
                  qualquer momento alterar ou retirar o seu consentimento da
                  Declaração de Cookies no nosso website. Saiba mais sobre quem
                  somos, como pode contactar-nos e como processamos os dados
                  pessoais na nossa Política de Privacidade. Indique sua ID de
                  consentimento e a data quando entrar em contato conosco sobre
                  o seu consentimento.
                </p>
              </div>
            </div>
            <div className="buttons_content">
              <button onClick={isAcceptCookies}>Aceitar todos os cookies</button>
              <button onClick={() => setCloseBanner(true)}>Rejeitar todos os cokkies</button>
            </div>
          </main>
        </Content>
      </Container>
    );
  }else{
      null;
  }
}
