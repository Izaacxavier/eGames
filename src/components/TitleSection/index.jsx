import {Container} from './styles'

export function TitleSectio({icon}){
    return(
        <Container>
            <img src={icon}/>
            <h1>Você por dentro de tudo o que acontece com seu jogo favorito</h1>
        </Container>
    )
}