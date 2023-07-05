import styled from "styled-components";
import BackgroundImageHero from "../../assets/Background_hero_main.png";

export const Container = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 3rem 15%;
  background-image: url(${BackgroundImageHero});
  background-repeat: no-repeat;

  .button-container {
    display: flex;
    gap: 1.25rem;

    > button {
      height: 3rem;
      width: 12.5rem;
      display: flex;
      border-radius: 0.625rem;
      background: ${({ theme }) => theme.COLORS.BACKGROUND_900};
      border: none;
      padding: 0.313rem 0.625rem;
      gap: 0.625rem;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      > div {
        display: flex;
        flex-direction: column;
        text-align: start;

        > small {
          font-size: 0.75rem;
          color: ${({ theme }) => theme.COLORS.GRAY_200};
        }
        > strong {
          color: ${({ theme }) => theme.COLORS.WHITE};
          font-size: 1rem;
        }
      }
      > img {
        width: 1.25rem;
      }
    }
  }
  .divisor {
    width: 80%;
    border-top: 1px solid rgba(255, 255, 255, 0.5);
    align-items: center;
    padding-top: 20px;
    margin-top: -30px;
    font-size: 0.625rem;
    color: ${({ theme }) => theme.COLORS.WHITE};

    > div {
      padding: 15px 0;
      display: flex;
      gap: 2rem;
      align-items: center;
      > img {
        width: 5.625rem;
      }
      > img:nth-of-type(1) {
        width: 10rem;
      }
      > img:nth-of-type(2) {
        width: 2rem;
      }
    }
  }
  @media (max-width: 1320px) {
    padding: 3rem 5%;
  }
  @media (max-width: 1400px) {
    padding: 3rem 5%;
  }
  @media (max-width: 580px) {
    padding: 1rem 5%;
  }
`;
export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  position: relative;

  .container_title_main {
    width: 20rem;

    .title {
      width: 100%;
      font-family: "Space Grotesk", sans-serif;
      line-height: 4.688rem;
      font-weight: bold;
      width: 37.5rem;
      font-size: 2.25rem;
      padding: 4px 0 4px;
    }

    .tag_main {
      display: flex;
      align-items: center;
      gap: 10px;
      .tag {
        padding: 3px 8px;
        border-radius: 8px;
        font-size: 0.75rem;
        background: rgb(113, 45, 224);
        background: linear-gradient(
          58deg,
          rgba(113, 45, 224, 1) 8%,
          rgba(235, 47, 147, 1) 100%
        );

        > img {
          width: 14px;
        }

        > small {
          font-size: 18px;
        }
      }
    }

    .subtitle {
      width: 400px;
      font-size: 1.125rem;
      padding: 30px 0;
      font-weight: 400;
    }
  }

  .image_banner_main {
    position: relative;
  }
  img {
    width: 37.5rem;
  }

  @media (max-width: 800px) {
    
    .image_banner_main {
      padding-top: 20rem;
      img {
        width: 30rem;
      }
    }
  }
  @media (max-width: 768px) {
    
    .image_banner_main {
      padding-top: 30rem;
      margin-left: -30rem;
      img {
        width: 20rem;
      }
    }
  }
`;
