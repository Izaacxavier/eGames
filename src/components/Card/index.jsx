import { Container } from "./styles";
import Tagfacebook from "../../assets/tagFacebook.svg";

export function Card({ name, userInfo, avatar, coments, Game, logoGame, isBlack}) {
  return (
    <Container className={isBlack ? "blackBackground" : " "}>
      <header>
        <img src={Tagfacebook} alt="facebook icon" />
      </header>
      <main>
        <img src={avatar} alt="" />
        <div>
          <strong>{name}</strong>
          <small>{userInfo}</small>
        </div>
      </main>
      <footer>
        <p>{coments}</p>
        <div className="tag">
          <span>Jogo preferido</span>
          <span className="game">{Game}</span>
          <img src={logoGame} alt="valorant_icon" />
        </div>
      </footer>
    </Container>
  );
}
