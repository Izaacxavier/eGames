import { X } from "@phosphor-icons/react";
import { ButtonAncoraMenu } from "../ButtonAncorasMenu";
import { Logo } from "../Logo";
import { Container, Content } from "./styles";

export function MenuMobile({isOpen, closeMenuMobile}) {


  return (
    <Container className={isOpen ? "open" : " "}>
        <Content>
        <header>
            <Logo/>
            <button onClick={closeMenuMobile} ><X size={36} /></button>
        </header>
        <ButtonAncoraMenu isMobile={true}/>
        </Content>
    </Container>
  );
}
