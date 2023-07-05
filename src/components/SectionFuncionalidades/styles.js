import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  padding: 2rem 15%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 1400px) {
    padding: 0.313rem 5%;
  }
`;
export const Content = styled.div`
  display: flex;
  background: linear-gradient(
    180deg,
    rgba(235, 47, 147, 20%),
    rgba(113, 45, 224, 20%)
  );

  .menu {
    width: 21.875rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-left: 1px solid ${({ theme }) => theme.COLORS.GRAY_200};

    > div:nth-child(-n + 3) {
      border-bottom: 1px solid ${({ theme }) => theme.COLORS.GRAY_200};
    }

    > div {
      position: relative;
      cursor: pointer;
      padding: 2px;
      transition: ease-in-out 0.3s;
      &:hover {
        background: linear-gradient(
          to right,
          rgba(124, 122, 128, 40%),
          rgba(179, 176, 184, 0%)
        );
      }

      > div {
        display: flex;
        justify-content: center;
        flex-direction: column;
        padding: 2rem;
        > h2 {
          display: flex;
          align-items: center;
          gap: 2px;
          font-size: 1rem;
        }
        > p {
          font-size: 0.875rem;
        }
      }
    }
    > div::before {
      content: " ";
      opacity: 0;
      width: 2px;
      height: 95%;
      background: rgb(113, 45, 224);
      background: linear-gradient(
        11deg,
        rgba(113, 45, 224, 1) 0%,
        rgba(235, 47, 147, 1) 100%
      );
      position: absolute;
      transition: opacity 0.1s ease;
    }

    > div:hover::before {
      opacity: 1;
    }
  }
  .slide_image {
    display: flex;
    padding: 1rem;
    align-items: center;
    > img {
      width: 33.5rem;
    }
  }

  .content_web {
    display: flex;
  }

  .content_mobile {
    display: none;
    max-width: 100%;
    .menu_mobile {
      max-width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      border-bottom: 1px solid ${({ theme }) => theme.COLORS.GRAY_200};

      > div:nth-child(-n + 3) {
        border-right: 1px solid ${({ theme }) => theme.COLORS.GRAY_200};
      }

      > div {
        display: flex;
        flex-direction: column;
        cursor: pointer;
        position: relative;

        transition: ease-in-out 0.3s;
        &:hover {
          background: linear-gradient(
            to right,
            rgba(124, 122, 128, 40%),
            rgba(179, 176, 184, 0%)
          );
        }
        > div {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 1rem 0.625rem;
          height: 100%;
          width: 7.5;
          text-align: center;
        }

        h2 {
          font-size: 1rem;
          display: flex;
          align-items: center;
        }
        p {
          font-size: 0.75rem;
          text-align: center;
          padding-top: 0.625rem;
        }
      }

      > div::before {
        content: " ";
        opacity: 0;
        width: 2px;
        height: 95%;
        background: rgb(113, 45, 224);
        background: linear-gradient(
          11deg,
          rgba(113, 45, 224, 1) 0%,
          rgba(235, 47, 147, 1) 100%
        );
        position: absolute;
        transition: opacity 0.1s ease;
      }

      > div:hover::before {
        opacity: 1;
      }
    }
    .slide_image {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  @media (max-width: 700px) {
    .content_mobile {
      display: flex;
      flex-direction: column;
    }
    .content_web {
      display: none;
    }
  }
  @media (max-width: 415px) {
    width: 100%;
    
    .slide_image {
      width: 100%;

      img {
        width: 100%;
      }
    }

    > div{

       h2{
         display: flex;
         flex-direction: column;
       }
      
     }
  }
`;
