import { Container } from "./styles";
import PeoplePlusUser from '../../assets/icons/people_plus_user.svg'
import GamerThree from '../../assets/icons/gamer_three.svg'
import Lightning from '../../assets/icons/lightning.svg'
import { t } from "i18next";
import { useState, useEffect } from "react";

export function SectionNumbers() {
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);
  const [counter3, setCounter3] = useState(0);


  useEffect(() => {
    const interval1 = setInterval(() => {
      if (counter1 < 650) {
        setCounter1((prevCounter) => prevCounter + 1);
      } else {
        clearInterval(interval1);
      }
    }, 0);
    const interval2 = setInterval(() => {
      if (counter2 < 9) {
        setCounter2((prevCounter) => prevCounter + 1);
      } else {
        clearInterval(interval2);
      }
    }, 5);
    const interval3 = setInterval(() => {
      if (counter3 < 75) {
        setCounter3((prevCounter) => prevCounter + 1);
      } else {
        clearInterval(interval3);
      }
    }, 2);

    return () => {
      clearInterval(interval1);
      clearInterval(interval2);
      clearInterval(interval3);
    };
  }, [counter1, counter2, counter3]);


  return (
    <Container>
      <div className="title_container">
        <h2>{t("titleNumbers")}</h2>
      </div>
      <div className="cards">
        <div className="card">
          <img src={PeoplePlusUser} alt="user icon" />
          <div>
            <strong>+{counter1}{t("thousand")}</strong>
            <span>{t("textNumbers1")}</span>
          </div>
        </div>
        <div className="card">
          <img src={GamerThree} alt="gamer icon" />
          <div>
            <strong>+{counter2}{t("thousand")}</strong>
            <span>{t("textNumbers2")}</span>
          </div>
        </div>
        <div className="card">
          <img src={Lightning} alt="lightning icon" />
          <div>
            <strong>+{counter3}{t("thousand")}</strong>
            <span>{t("textNumbers3")}</span>
          </div>
        </div>
      </div>
    </Container>
  );
}
