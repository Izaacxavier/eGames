import {Container} from './styles'

export function TitleSectio({icon, title}){
    return(
        <Container>
            <img src={icon}/>
            <h1>{title}</h1>
        </Container>
    )
}