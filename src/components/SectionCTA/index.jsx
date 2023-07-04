import { ArrowCircleUpRight, GameController } from '@phosphor-icons/react'
import { TitleSectio } from '../TitleSection'
import { Container, Content} from './styles'
import player from '../../assets/icons/player.svg'
import lightning2 from '../../assets/icons/lightning2.svg'
import heart from '../../assets/icons/heart.svg'
import arrowicon from '../../assets/icons/arrowIcon.svg'

export function SectionCTA (){
    return(
        <Container>
            <TitleSectio title=""/>
            <Content>
                <div className='card'>
                    <div className='icon_content background_white'>
                    <img src={player} alt="" />
                    </div>
                    <strong>Gamers e amantes dos jogos</strong>
                    <p>Não importa seu nível, se você ama jogos  sempre será bem vindo na comunidade eGamers</p>
                    <a href="#">Seja verificado <img src={arrowicon}/></a>
                </div>
                <div className='card'>
                    <div className='icon_content background_pink'>
                    <img src={lightning2} alt="" />

                    </div>
                    <strong>Pro players e streams</strong>
                    <p>É profissional ou ganha a vida fazendo lives?  junte-se ao clã eGamers e divulgue seu trabalho</p>
                    <a href="#">Seja um parceiro <img src={arrowicon} /></a>
                </div>
                <div className='card'>
                    <div className='icon_content background_purple'>
                    <img src={heart} alt="" />
                    </div>
                    <strong>Criadores de conteúdo</strong>
                    <p>Aqui você encontra o publico certo, comece a criar conteúdo em nossa comunidade agora mesmo</p>
                    <a href="#">Seja verificado <img src={arrowicon}/></a>
                </div>
            </Content>
        </Container>
    )
}