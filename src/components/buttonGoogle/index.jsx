import { Container } from "./styles";
import LogoGoogle from "../../assets/icons/logo_google.svg";

export function ButtonGoogle() {
  return (
    <Container>
      <a href="https://play.google.com/store/games" target="_blank">
        <button>
          <img src={LogoGoogle} />
          <div>
            <small>Get it on</small>
            <strong>Google PLay</strong>
          </div>
        </button>
      </a>
    </Container>
  );
}
