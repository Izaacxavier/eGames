import { Container, Content } from "./styles";
import  Logo2 from '../../assets/Logo2.svg'
import  IconStar from '../../assets/icons/iconStar.svg'
import  ImageMockup from '../../assets/mockup_group.svg'
import { ButtonFacebook } from "../buttonGoogle";
import { ButtonApple } from "../buttonApple";

export function SectionDownload() {
  return (
    <Container>
      <Content>
        <div className="left_side">
            <img src={Logo2} alt="" />
            <h1>Instale o aplicativo e junte-se a nossa comunidade</h1>
            <div>
            <span> <img src={IconStar} alt="" /> 4,9</span>
            <span>257mil</span>
            <span>Avaliações</span>
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
