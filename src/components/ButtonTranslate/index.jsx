import "/node_modules/flag-icons/css/flag-icons.min.css";
import { Container, Content } from "./styles";
import { CaretDown, Translate } from "@phosphor-icons/react";
import { useState } from "react";
import i18n from "../../Utils/i18n";

export function ButtonTranslate() {
  const [menuIsOpen, setMenuIsOpen] = useState(true);
  const [language, setLanguage] = useState("pt");

  function handleMenulanguages() {
    if (!menuIsOpen) {
      setMenuIsOpen(true);
      console.log("clicou");
    } else {
      setMenuIsOpen(false);
    }
  }

  const changeLanguage = (value) => {
    setMenuIsOpen(true);
    setLanguage(value);
    i18n.changeLanguage(value)
      .than(() => {setLanguage(value);})
      .cacth((err) => {console.log(err);});
  };

  return (
    <Container>
      <Content className="button_translate" onClick={handleMenulanguages}>
        <Translate size={32} />
        {language === "pt" ? "Português" : "Português" | language === "en" ? "English" :  "Português" | language === "es" ? "Espanhol" : "Português"}
        <button>
          <CaretDown size={32} />
        </button>
      </Content>
      <div className={menuIsOpen ? "languages" : "languages isOpen"}>
        <button className="language" onClick={() => changeLanguage("pt")}>
          <span className="fi fi-br"></span>Português
        </button>
        <button className="language" onClick={() => changeLanguage("en")}>
          <span className="fi fi-us"></span> Inglês
        </button>
        <button className="language" onClick={() => changeLanguage("es")}>
          <span className="fi fi-es"></span> Espanhol
        </button>
      </div>
    </Container>
  );
}
