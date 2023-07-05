import { t } from "i18next";
import { Container } from "./styles";

export function ButtonAncoraMenu({isMobile}) {

  return(
   <Container >
       <div className={isMobile ? "mobile" : "web"}>
       <ul>
          <li>
            <a href="#Sobre">{t("buttonMenu1")} </a>
          </li>
          <li>
            <a href="#Funcionalidades">{t("buttonMenu2")}</a>
          </li>
          <li>
            <a href="#Games">Games</a>
          </li>
          <li>
            <a href="#Depoimentos">Depoimentos</a>
          </li>
          <li>
            <a href="#Download">Download</a>
          </li>
        </ul>
       </div>
  </Container>
  )
}
