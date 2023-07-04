import "/node_modules/flag-icons/css/flag-icons.min.css";
import { Container, Content } from "./styles";
import { CaretDown, Translate } from "@phosphor-icons/react";
import { useState } from "react";

export function ButtonTranslate() {

    const [menuIsOpen, setMenuIsOpen] = useState(true)

    function handleMenulanguages(){
        if(!menuIsOpen){
            setMenuIsOpen(true)
            console.log("clicou")
        }else{
            setMenuIsOpen(false)
        }
    }

  return (
    <Container>
      <Content className="button_translate">
        <Translate size={32} />
        Português
        <button onClick={handleMenulanguages}><CaretDown size={32} /></button>   
      </Content>
      <div className={menuIsOpen ? "languages" : "languages isOpen"}>
          <span className="language"><span class="fi fi-br"></span>Português</span>
          <span className="language"><span class="fi fi-us"></span> Inglês</span>
          <span className="language"><span class="fi fi-es"></span> Espanhol</span>
      </div>
    </Container>
  );
}
