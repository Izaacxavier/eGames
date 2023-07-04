import { t } from "i18next";
import { useState } from "react";
import { Container } from "./styles";

export function ButtonAncoraMenu({isMobile}) {

  return(
   <Container >
       <div className={isMobile ? "mobile" : "web"}>
       <ul>
          <li>
            <a href="#">{t("buttonMenu1")}</a>
          </li>
          <li>
            <a href="#">{t("buttonMenu2")}</a>
          </li>
          <li>
            <a href="#">Download</a>
          </li>
        </ul>
       </div>
  </Container>
  )
}
