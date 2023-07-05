import { Container, Content } from "./styles";
import userPlusIcon from "../../assets/icons/user_plus.svg";
import LogoGoogle from "../../assets/icons/logo_google.svg";
import LogoApple from "../../assets/icons/logo_apple.svg";
import imageBanner from "../../assets/image_banner.png";
import Facebook from '../../assets/icons/facebook_logo.png'
import Twitch from '../../assets/icons/Twitch_Icon.png'
import Youtube from '../../assets/icons/YouTube_logo.png'
import Discord from '../../assets/icons/Discord_Logo.png'
import { useTranslation } from "react-i18next";


export function HeroSection() {
  const { t } = useTranslation();
  return (
    <Container>
      <Content>
        <div className="container_title_main">
          <div className="tag_main">
            <span className="tag">
              {" "}
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
            <button>
              <img src={LogoGoogle} />
              <div>
                <small>Get it on</small>
                <strong>Google PLay</strong>
              </div>
            </button>
            <button>
              <img src={LogoApple} />
              <div>
                <small>Download on the</small>
                <strong>App Store</strong>
              </div>
            </button>
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
