import styled from "styled-components";

export const Container = styled.footer`
  width: 100%;
  padding: 0rem 15%;

  @media (max-width: 700px){
    padding: 0rem 5%;
  }
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 2rem;
    flex-wrap: wrap;

    div {
      display: flex;
      flex-direction: column;
    }
    div:first-child {
      p {
        width: 18.75rem;
        color: ${({ theme }) => theme.COLORS.GRAY_200};
        padding: 0.625rem 0;
      }
    }
    div:nth-child(2) {
      padding-bottom: 2rem;
      a {
        color: ${({ theme }) => theme.COLORS.WHITE_100};
        font-size: 1rem;

        &:hover {
          color: ${({ theme }) => theme.COLORS.WHITE};
        }
      }
      li {
        padding-bottom: 0.313rem;
      }
    }
  }
  .news_container {
    width: 18.75rem;
    display: flex;
    flex-direction: column;
    padding-bottom: 5rem;
    > h2 {
      font-size: 0.875rem;
    }
    > div {
      display: flex;
      flex-direction: row;
      padding: 1rem 0;
      gap: 0.313rem;

      > input {
        width: 100%;
        padding: 0.625rem;
        outline: none;
        border: none;
        border-radius: 8px;
        background: ${({ theme }) => theme.COLORS.GRAY_50};
        color: ${({ theme }) => theme.COLORS.WHITE};

        &::placeholder {
          color: ${({ theme }) => theme.COLORS.WHITE}
        }
      }

      > button {
        padding: 0 1rem;
        background: rgb(113, 45, 224);
        background: linear-gradient(
          58deg,
          rgba(113, 45, 224, 1) 8%,
          rgba(235, 47, 147, 1) 100%
        );
        border: none;
        border-radius: 8px;
        color: ${({ theme }) => theme.COLORS.WHITE};
        cursor: pointer;
      }
    }

    @media (max-width: 700px){
      padding-top: 3rem;
      justify-content: center;
      width: 100%;
  }
  }
  .redes_sociais {
    padding: 1rem 0;
    display: flex;
    flex-direction: row;
    gap: 1.5rem;
    button {
      display: flex;
      width: 30px;
      height: 30px;
      background: ${({ theme }) => theme.COLORS.GRAY_50};
      border: none;
      border-radius: 50%;
      align-items: center;
      justify-content: center;
      cursor: pointer;
    }
  }
  .buttonTranslate {
    width: 140px;
  }
  footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem 0;
  }
  span {
    text-align: center;
  }

  a{
    text-decoration: none;
    color: ${({theme}) => theme.COLORS.WHITE};
  }
`;
