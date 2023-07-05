import {Container} from './styles'
import LogoApple from "../../assets/icons/logo_apple.svg";

export function ButtonApple (){
    return(
        <Container>
          <a href="https://www.apple.com/br/app-store/" target="_blank">
              <button>
              <img src={LogoApple} />
              <div>
                <small>Download</small>
                <strong>App Store</strong>
              </div>
            </button>
            </a>
        </Container>
    )
}