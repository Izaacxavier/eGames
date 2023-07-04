import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  padding: 10px 15%;
  position: fixed;
  z-index: 9999;
  
  &.scroll{
    background: ${({theme}) => theme.COLORS.PURPLE};
  }

  .buttonTranslate {
    width: 8.75;
  }

  @media (max-width: 1320px) {
    padding: 10px 5%;
  }
  @media (max-width: 1400px) {
    padding: 10px 5%;
  }
`;
export const Nav = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;

  .menu {
    display: flex;
    align-items: center;
    gap: 1.125rem;
  }

  .button_menu_mobile {
    display: none;
    button{
      border: none;
      background: none;
      color: ${({theme}) => theme.COLORS.WHITE};
      cursor: pointer;
    }
  }

  @media (max-width: 700px) {
    .button_menu_mobile {
      display: flex;
    }
    .menu_ancoras{
      display: none;
    }
  }
`;
