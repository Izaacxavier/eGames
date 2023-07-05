import {Container} from './styles'
import LogoApple from "../../assets/icons/logo_apple.svg";

export function ButtonApple (){
    return(
        <Container>
              <button>
              <img src={LogoApple} />
              <div>
                <small>Download</small>
                <strong>Play Store</strong>
              </div>
            </button>
        </Container>
    )
}