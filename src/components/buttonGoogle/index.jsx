import {Container} from './styles'
import LogoGoogle from "../../assets/icons/logo_google.svg";

export function ButtonFacebook (){
    return(
        <Container>
              <button>
              <img src={LogoGoogle} />
              <div>
                <small>Get it on</small>
                <strong>Google PLay</strong>
              </div>
            </button>
        </Container>
    )
}