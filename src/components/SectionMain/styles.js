import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  padding: 1rem 15%;

  .reverse {
    flex-direction: row-reverse;
  }
  @media (max-width: 1400px) {
    padding: 1rem 5%;
    }
`;
export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;

  > img {
    width: 25rem;
  }

  .right_content {
    width: 440px;
    text-align: start;
    > h1 {
      font-size: 2rem;
      font-weight: bold;
      line-height: 48px;
    }
    p {
      font-size: 1rem;
      color: ${({ theme }) => theme.COLORS.GRAY_100};
    }
    .icon_title {
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 16px;
      margin-bottom: 0.625rem;
      width: 3rem;
      height: 3rem;
      align-self: flex-start;
      background: rgb(113, 45, 224);
      background: rgb(113, 45, 224);
      background: linear-gradient(
        357deg,
        rgba(113, 45, 224, 1) 34%,
        rgba(235, 47, 147, 1) 100%
      );
    }

    .buttons {
      padding: 2rem 0;
      display: flex;
      gap: 1rem;
      button {
        width: 8rem;
        display: flex;
        gap: 0.313rem;
        align-items: center;
        justify-content: center;
        padding: 0.313rem 1rem;
        color: ${({theme}) => theme.COLORS.WHITE};
        background: ${({theme}) => theme.COLORS.BACKGROUND_600};
        border: none;
        border-radius: 0.5rem;
      }
    }
  }
  @media (max-width: 700px) {
    justify-content: center;
    flex-wrap: wrap-reverse;
  }
`;
