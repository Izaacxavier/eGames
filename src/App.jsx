import { HeaderMenu } from "./components/headerMenu";
import { HeroSection } from "./components/HeroSection";
import { SectionMain } from "./components/SectionMain";
import { SectionNumbers } from "./components/SectionNumbers";
import Image1 from "./assets/image_section01.svg";
import Image2 from "./assets/image_section02.svg";
import { ShareNetwork, UserPlus } from "@phosphor-icons/react";
import { SectionFuncionalidades } from "./components/SectionFuncionalidades";
import { SectionCTA } from "./components/SectionCTA";
import { SectionGames } from "./components/sectiongames";
import { SectionCarrossel } from "./components/SectionCarrossel";
import { SectionDownload } from "./components/SectionDownload";
import { Footer } from "./components/footer";
import { MenuMobile } from "./components/MenuMobile";
import { useState } from "react";


export function App() {
  const [menuMobileOpen, setMenuMobileOpen] = useState(false)

  function handleMenuMobile(){
    if(!menuMobileOpen){
      setMenuMobileOpen(true)
    }else{
      setMenuMobileOpen(false)
    }
  }

  return (
    <>
      <MenuMobile isOpen={menuMobileOpen} closeMenuMobile={handleMenuMobile}/>
      <HeaderMenu openMenuMobile={handleMenuMobile}/>
      <HeroSection />
      <SectionNumbers />
      <SectionMain
        image={Image1}
        icon={<ShareNetwork size={32} />}
        title="Uma rede social completa só de gamers"
        text="Uma experiencia 100% voltada para jogos. Aqui Você pode postar sobre sua partida acompanhar seu streamer favorito e muito mais"
      />
      <SectionMain
        image={Image2}
        icon={<UserPlus size={32} />}
        title="Faça amigos para próxima partida"
        text="Converse com seus amigos através de mensagens privadas ou até mesmo em grupos de até 200 pessoas"
        isReverse
      />
      <SectionFuncionalidades/>
      <SectionCTA/>
      <SectionGames/>
      <SectionCarrossel/>
      <SectionDownload/>
      <Footer/>
      
    </>
  );
}
