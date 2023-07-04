import { Chat, Chats } from "@phosphor-icons/react";
import { Container, Content } from "./styles";
export function SectionMain({image, icon, title, text, isReverse}) {
  return (
    <Container>
      <Content className={isReverse ? "reverse" : " "}>
        <img src={image} alt="imagem ilustrativo app eGames" />

        <div className="right_content">
          <div className="icon_title">
            {icon}
          </div>
          <h1>{title}</h1>
          <p>
            {text}
          </p>
          <div className="buttons">
                <button>
                <Chat size={28} />
                <strong>Chat</strong>
                </button>
                <button>
                <Chats size={28} />
                <strong>Grupos</strong>
                </button>
          </div>
        </div>
      </Content>
    </Container>
  );
}
