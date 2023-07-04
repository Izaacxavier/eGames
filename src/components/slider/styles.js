import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 400px;
  --swiper-navigation-size: 22px;

  .swiper-container {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .swiper-button-prev {
    color: ${({ theme }) => theme.COLORS.WHITE};
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_500};
    padding: 20px;
    border-radius: 50%;
  }

  .swiper-button-next {
    color: ${({ theme }) => theme.COLORS.WHITE};
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_500};
    padding: 20px;
    border-radius: 50%;
  }

`;
