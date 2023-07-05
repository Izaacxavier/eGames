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
import { useTranslation } from "react-i18next";


export function App() {
  const [menuMobileOpen, setMenuMobileOpen] = useState(false)
  const { t } = useTranslation();

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
        title={t("titleSection1")}
        text={t("subTitleSection1")}
      />
      <SectionMain
        image={Image2}
        icon={<UserPlus size={32} />}
        title={t("titleSection1.2")}
        text={t("subTitleSection1.2")}
        isReverse
        whithinButtons
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
