import { PlayCircle, Rocket, Star, Trophy } from "@phosphor-icons/react";
import { Container, Content } from "./styles";
import image2 from "../../assets/image2.png";
import image1 from "../../assets/image1.png";
import image3 from "../../assets/image3.png";
import image4 from "../../assets/image4.png";
import { TitleSectio } from "../TitleSection";
import { useState } from "react";
import { t } from "i18next";

export function SectionFuncionalidades() {
  const [image, setImage] = useState(image2);

  return (
    <Container id="Funcionalidades">
      <TitleSectio title={t("titleSection3")}/>
      <Content>
        <div className="content_mobile">
          <div className="menu_mobile">
            <div className="content1" onClick={() => {setImage(image1)}}>
              <div>
                <h2> <Star size={16} /> {t("rating")}</h2>
                <p>{t("text1")}</p>
              </div>
            </div>
            <div
              className="content2"
              onClick={() => {
                setImage(image3);
              }}
            >
              <div>
                <h2> <PlayCircle size={16} /> {t("streamers")}</h2>
                <p>{t("text2")}</p>
              </div>
            </div>
            <div
              className="content3"
              onClick={() => {
                setImage(image2);
              }}
            >
              <div>
                <h2><Rocket size={16} /> {t("posts")}</h2>
                <p>{t("text3")}</p>
              </div>
            </div>
            <div
              className="content4"
              onClick={() => {
                setImage(image4);
              }}
            >
              <div>
                <h2><Trophy size={16} /> {t("championships")}</h2>
                <p>{t("text4")}</p>
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
                  <Star size={18} /> {t("rating")}
                </h2>
                <p>
                {t("text1")}
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
                  <PlayCircle size={18} /> {t("streamers")}
                </h2>
                <p>{t("text2")}</p>
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
                  <Rocket size={18} /> {t("posts")}
                </h2>
                <p>{t("text3")}</p>
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
                  <Trophy size={18} /> {t("championships")}
                </h2>
                <p>
                {t("text4")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Content>
    </Container>
  );
}
