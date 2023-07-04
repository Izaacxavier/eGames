import { Container, Nav } from "./styles";
import { ButtonTranslate } from "../ButtonTranslate";
import { Logo } from "../Logo";
import { ButtonAncoraMenu } from "../ButtonAncorasMenu";
import { TextAlignLeft } from "@phosphor-icons/react";
import { useEffect, useState } from "react";

export function HeaderMenu({openMenuMobile}) {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Container className={scroll ? " scroll" : ""}>
      <Nav>
        <Logo />
       <div className="menu">
        <div className="menu_ancoras">
          <ButtonAncoraMenu/>
        </div>
        <div className="buttonTranslate">
          <ButtonTranslate />
        </div>
        <div className="button_menu_mobile">
          <button onClick={openMenuMobile} ><TextAlignLeft size={36} /></button>     
        </div>
       </div>      
      </Nav>
    </Container>
  );
}
