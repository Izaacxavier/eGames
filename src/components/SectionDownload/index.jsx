import { Container, Content } from "./styles";
import  Logo2 from '../../assets/Logo-2.svg'
import  IconStar from '../../assets/icons/iconStar.svg'
import  ImageMockup from '../../assets/mockup_group.svg'
import { ButtonFacebook } from "../buttonGoogle";
import { ButtonApple } from "../buttonApple";
import { t } from "i18next";

export function SectionDownload() {
  return (
    <Container id="Download">
      <Content>
        <div className="left_side">
            <img src={Logo2} alt="" />
            <h1>{t("titleSection6")}</h1>
            <div>
            <span> <img src={IconStar} alt="" /> 4,9</span>
            <span>257{t("thousand")}</span>
            <span>{t("titleTag4")}</span>
            </div>
            <div className="button_content">
                <ButtonFacebook/>
                <ButtonApple/>
            </div>

        </div>
        <div className="right_side">
          <img src={ImageMockup} alt="" />
        </div>
      </Content>
    </Container>
  );
}
