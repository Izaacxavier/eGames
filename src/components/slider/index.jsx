import { Container } from "./styles";
import Valorant from "../../assets/valorant_icon.svg";
import User1 from "../../assets/user1.png";
import User2 from "../../assets/user2.png";
import User3 from "../../assets/user3.png";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Card } from "../Card";
import { useEffect, useRef, useState } from "react";
import { t } from "i18next";

export function Slider() {
  const swiperRef = useRef(null);
  const [slidesPerView, setSlidesPerView] = useState(2.5)

  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideNext();
    }
  }, []);

  useEffect(() => {
    function verificarTamanhoTela() {
      if (window.matchMedia('(max-width: 700px)').matches) {
        setSlidesPerView(1.5);
      } else {
        setSlidesPerView(2.5);

      }
    }

    // Verifica o tamanho da tela quando o componente é montado
    verificarTamanhoTela();

    // Cria um observador de media query para detectar mudanças de tamanho de tela
    const mediaQuery = window.matchMedia('(max-width: 500px)');
    mediaQuery.addEventListener('change', verificarTamanhoTela);

    // Remove o observador quando o componente é desmontado
    return () => {
      mediaQuery.removeEventListener('change', verificarTamanhoTela);
    };
  }, []);

  return (
    <Container>
        <Swiper
          className="swiper-container"
          ref={swiperRef}
          spaceBetween={50}
          slidesPerView={slidesPerView}
          centeredSlides={true}
          navigation={true}
          modules={[Navigation, A11y]}
        >
          <SwiperSlide>
            <Card
              avatar={User2}
              name="Pedro henrique"
              userInfo="Gamer e UI desinger"
              coments={t("textCardComments3")}
              Game="Valorant"
              logoGame={Valorant}
              isBlack
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              avatar={User1}
              name="Pedro henrique"
              userInfo="Gamer e UI desinger"
              coments={t("textCardComments1")}
              Game="Valorant"
              logoGame={Valorant}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              avatar={User3}
              name="Pedro henrique"
              userInfo="Gamer e UI desinger"
              coments={t("textCardComments2")}
              Game="Valorant"
              logoGame={Valorant}
              isBlack
            />
          </SwiperSlide>
        </Swiper>
    </Container>
  );
}
