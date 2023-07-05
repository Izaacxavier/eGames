import { Container, Content } from "./styles";
import iconCookie from "../../assets/icons/cookie.svg";
import { CaretDown, CaretUp, X } from "@phosphor-icons/react";
import { useState } from "react";
import Cookies from "js-cookie";
import { t } from "i18next";

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
              <h1>{t("titleCookies")}</h1>
              <p>
              {t("textCookies")}
              </p>
              <button onClick={openMoreOfCookies}>{t("readMore")} {!moreOfCookiesIsOpen ? <CaretDown /> : <CaretUp/>}</button>

              <div
                className={
                  moreOfCookiesIsOpen ? "consens_terms isOpen" : "consens_terms"
                }
              >
                <p>
                 {t("consenseText")}
                </p>
              </div>
            </div>
            <div className="buttons_content">
              <button onClick={isAcceptCookies}>{t("buttonCookiesAccept")}</button>
              <button onClick={() => setCloseBanner(true)}>{t("buttonCookies")}</button>
            </div>
          </main>
        </Content>
      </Container>
    );
  }else{
      null;
  }
}
