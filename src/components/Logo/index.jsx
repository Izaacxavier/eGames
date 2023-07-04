import { Container } from "./styles";
import logo from '../../assets/logo.svg'

export function Logo() {
  return (
    <Container>
      <a href="">
        <img src={logo} alt="logo eGames" />
      </a>
    </Container>
  );
}
