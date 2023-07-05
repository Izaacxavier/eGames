import {Container} from "./styles";
import PeoplePlusUser from '../../assets/icons/people_plus_user.svg'
import GamerThree from '../../assets/icons/gamer_three.svg'
import Lightning from '../../assets/icons/lightning.svg'
import { t } from "i18next";
import { useState } from "react";

export function SectionNumbers() {

  const [counter, setCounter] = useState(0)

  

  return(
    <Container>
    <div className="title_container">
      <h2>{t("titleNumbers")}</h2>
    </div>
    <div className="cards">
      <div className="card">
        <img src={PeoplePlusUser} alt="user icon" />
        <div>
        <strong>+650{t("thousand")}</strong>
        <span>{t("textNumbers1")}</span>
        </div>
      </div>
      <div className="card">
        <img src={GamerThree} alt="gamer icon" />
        <div>
        <strong>+9{t("thousand")}</strong>
        <span>{t("textNumbers2")}</span>
        </div>
      </div>
      <div className="card">
        <img src={Lightning} alt="lightning icon" />
        <div>
        <strong>+75{t("thousand")}</strong>
        <span>{t("textNumbers3")}</span>
        </div>
      </div>
    </div>
  </Container>
  
  )
  
}
