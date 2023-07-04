import { Card } from "../Card";
import { TitleSectio } from "../TitleSection";
import { Container} from "./styles";
import quote from "../../assets/icons/quotes.png";
import { Slider } from "../slider";
import { t } from "i18next";


export function SectionCarrossel() {
  return (
    <Container>
      <TitleSectio
        icon={quote}
        title={t("titleCarousel")}
      />

        
      <Slider/>
  
    </Container>
  );
}
