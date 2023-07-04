import { PlayCircle, Rocket, Star, Trophy } from "@phosphor-icons/react";
import { Container, Content } from "./styles";
import image2 from "../../assets/image2.png";
import image1 from "../../assets/image1.png";
import image3 from "../../assets/image3.png";
import image4 from "../../assets/image4.png";
import { TitleSectio } from "../TitleSection";
import { useState } from "react";

export function SectionFuncionalidades() {
  const [image, setImage] = useState(image2);

  return (
    <Container>
      <TitleSectio />
      <Content>
        <div className="content_mobile">
          <div className="menu_mobile">
            <div className="content1" onClick={() => {setImage(image1)}}>
              <div>
                <h2> <Star size={16} /> Avaliações</h2>
                <p>
                  Encontre as melhores avaliações antes de baxar ou comprar um
                  jogo novo.
                </p>
              </div>
            </div>
            <div
              className="content2"
              onClick={() => {
                setImage(image3);
              }}
            >
              <div>
                <h2>
                  <PlayCircle size={16} /> Streamers
                </h2>
                <p>Divirta-se com streamers parceiros oficiais da eGamers.</p>
              </div>
            </div>
            <div
              className="content3"
              onClick={() => {
                setImage(image2);
              }}
            >
              <div>
                <h2>
                  {" "}
                  <Rocket size={16} /> Posts
                </h2>
                <p>Compartilhe tela e poste seu jogo favorito nos stories.</p>
              </div>
            </div>
            <div
              className="content4"
              onClick={() => {
                setImage(image4);
              }}
            >
              <div>
                <h2>
                  {" "}
                  <Trophy size={16} /> Campeonatos
                </h2>
                <p>
                  Organize e acompanhe os melhores campeonatos em um só lugar.
                </p>
              </div>
            </div>
          </div>
          <div className="slide_image">
            <img src={image} />
          </div>
        </div>








        <div className="content_web">
          <div className="slide_image">
            <img src={image} />
          </div>
          <div className="menu">
            <div
              className="content1"
              onClick={() => {
                setImage(image1);
              }}
            >
              <div>
                <h2>
                  {" "}
                  <Star size={18} /> Avaliações
                </h2>
                <p>
                  Encontre as melhores avaliações antes de baxar ou comprar um
                  jogo novo.
                </p>
              </div>
            </div>
            <div
              className="content2"
              onClick={() => {
                setImage(image3);
              }}
            >
              <div>
                <h2>
                  {" "}
                  <PlayCircle size={18} /> Streamers
                </h2>
                <p>Divirta-se com streamers parceiros oficiais da eGamers.</p>
              </div>
            </div>
            <div
              className="content3"
              onClick={() => {
                setImage(image2);
              }}
            >
              <div>
                <h2>
                  {" "}
                  <Rocket size={18} /> Postagem de conteúdo
                </h2>
                <p>Compartilhe tela e poste seu jogo favorito nos stories.</p>
              </div>
            </div>
            <div
              className="content4"
              onClick={() => {
                setImage(image4);
              }}
            >
              <div>
                <h2>
                  <Trophy size={18} /> Campeonatos
                </h2>
                <p>
                  Organize e acompanhe os melhores campeonatos em um só lugar.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Content>
    </Container>
  );
}
