import { ArrowCircleUpRight, GameController } from '@phosphor-icons/react'
import { TitleSectio } from '../TitleSection'
import { Container, Content} from './styles'
import player from '../../assets/icons/player.svg'
import lightning2 from '../../assets/icons/lightning2.svg'
import heart from '../../assets/icons/heart.svg'
import arrowicon from '../../assets/icons/arrowIcon.svg'
import { t } from 'i18next'

export function SectionCTA (){
    return(
        <Container id="Games">
            <TitleSectio title={t("titleSection4")}/>
            <Content>
                <div className='card'>
                    <div className='icon_content background_white'>
                    <img src={player} alt="" />
                    </div>
                    <strong>{t("titlecard1")}</strong>
                    <p>{t("subtitlecard1")}</p>
                    <a href="#"><img/></a>
                </div>
                <div className='card'>
                    <div className='icon_content background_pink'>
                    <img src={lightning2} alt="" />

                    </div>
                    <strong>{t("titlecard2")}</strong>
                    <p>{t("subtitlecard2")}</p>
                    <a href="#">{t("buttonTittleSection3")}<img src={arrowicon} /></a>
                </div>
                <div className='card'>
                    <div className='icon_content background_purple'>
                    <img src={heart} alt="" />
                    </div>
                    <strong>{t("titlecard3")}</strong>
                    <p>{t("subtitlecard3")}</p>
                    <a href="#">{t("buttonTittleSection3.2")}<img src={arrowicon}/></a>
                </div>
            </Content>
        </Container>
    )
}