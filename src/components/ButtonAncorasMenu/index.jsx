import { useState } from "react";
import { Container } from "./styles";

export function ButtonAncoraMenu({isMobile}) {

  return(
   <Container >
       <div className={isMobile ? "mobile" : "web"}>
       <ul>
          <li>
            <a href="#">Sobre</a>
          </li>
          <li>
            <a href="#">Funcionalidades</a>
          </li>
          <li>
            <a href="#">Download</a>
          </li>
        </ul>
       </div>
  </Container>
  )
}
