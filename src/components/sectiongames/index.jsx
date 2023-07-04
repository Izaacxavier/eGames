import { Container, Content } from "./styles";
import bettleground from "../../assets/sectionImage/bettlegrounds.png";
import dota from "../../assets/sectionImage/dota.png";
import fifa from "../../assets/sectionImage/fifa.png";
import overwatch from "../../assets/sectionImage/overwatch.png";
import roblox from "../../assets/sectionImage/roblox.png";
import cs from "../../assets/sectionImage/cs.png";
import valorant from "../../assets/sectionImage/valorant.png";
import warzone from "../../assets/sectionImage/warzone.png";
import cta from "../../assets/sectionImage/cta.png";
import { t } from "i18next";

export function SectionGames() {
  return (
    <Container>
      <Content>
        <div className="group1">
          <div>
            <img src={bettleground} alt="" />
          </div>
          <div>
            <img src={dota} alt="" />
          </div>
        </div>
        <div className="group2">
          <div>
            <img src={warzone} alt="" />
          </div>
          <div>
            <img src={overwatch} alt="" />
          </div>
          <div>
            <img src={cs} alt="" />
          </div>
        </div>
        <div className="group3">
          <div>
            <img src={fifa} alt="" />
          </div>
          <div className="card_cta">
            <img src={cta} alt="" />
            <div className="button_container">
            <strong>{t("titleCTA")}</strong>
            <button>{t("buttonCTA")}</button>
            </div>
          </div>
        </div>

        <div className="group4">
          <div>
            <img src={valorant} alt="" />
          </div>

          <div>
            <img src={roblox} alt="" />
          </div>
        </div>
      </Content>
    </Container>
  );
}
