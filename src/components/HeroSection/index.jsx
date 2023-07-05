import { Container, Content } from "./styles";
import userPlusIcon from "../../assets/icons/user_plus.svg";
import LogoGoogle from "../../assets/icons/logo_google.svg";
import LogoApple from "../../assets/icons/logo_apple.svg";
import imageBanner from "../../assets/image_banner.png";
import Facebook from '../../assets/icons/facebook-logo.png'
import Twitch from '../../assets/icons/twitch-icon.png'
import Youtube from '../../assets/icons/youTube-logo.png'
import Discord from '../../assets/icons/discord-logo.png'
import { useTranslation } from "react-i18next";
import { ButtonApple } from "../buttonApple";
import { ButtonGoogle } from "../buttonGoogle";


export function HeroSection() {
  const { t } = useTranslation();
  return (
    <Container>
      <Content>
        <div className="container_title_main">
          <div className="tag_main">
            <span className="tag">
              <img src={userPlusIcon} /> 25.635
            </span>
            <small>{t("descriptionTag")}</small>
          </div>
          <div className="title">
            <h1>{t("titlemain")}</h1>
          </div>
          <div className="subtitle">
            <p>{t("subtitleMain")}</p>
          </div>

          <div className="button-container">
              <ButtonApple/>
              <ButtonGoogle/>
            </div>
        </div>

        <div className="image_banner_main">
          <img src={imageBanner} alt="banner mocukp app eGames" />
        </div>
      </Content>

      <div className="divisor">
          <h2>{t("titleIntegrations")}</h2>
          
          <div>
          <img src={Facebook} alt="facebook logo" />
          <img src={Twitch} alt="Twitch logo"  />
          <img src={Youtube} alt="Youtube logo" />
          <img src={Discord} alt="Discord logo" />
          </div>
      </div>
    </Container>
  );
}
