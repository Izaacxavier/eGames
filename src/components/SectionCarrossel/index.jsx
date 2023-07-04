import { Card } from "../Card";
import { TitleSectio } from "../TitleSection";
import { Container} from "./styles";
import quote from "../../assets/icons/quotes.png";
import { Slider } from "../slider";


export function SectionCarrossel() {
  return (
    <Container>
      <TitleSectio
        icon={quote}
        title="Feito para todos que amam jogos onlines"
      />

        
      <Slider/>
  
    </Container>
  );
}
