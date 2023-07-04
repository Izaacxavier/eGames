import {Container} from "./styles";
import PeoplePlusUser from '../../assets/icons/people_plus_user.svg'
import GamerThree from '../../assets/icons/gamer_three.svg'
import Lightning from '../../assets/icons/lightning.svg'

export function SectionNumbers() {
  return(
    <Container>
    <div className="title_container">
      <h2>Confira os números eGamers e faça parte você também</h2>
    </div>
    <div className="cards">
      <div className="card">
        <img src={PeoplePlusUser} alt="user icon" />
        <div>
        <strong>+650mil</strong>
        <span>Usuários ativos</span>
        </div>
      </div>
      <div className="card">
        <img src={GamerThree} alt="gamer icon" />
        <div>
        <strong>+9mil</strong>
        <span>Jogos na plataforma</span>
        </div>
      </div>
      <div className="card">
        <img src={Lightning} alt="lightning icon" />
        <div>
        <strong>+75mil</strong>
        <span>Streamers e criadores</span>
        </div>
      </div>
    </div>
  </Container>
  
  )
  
}
