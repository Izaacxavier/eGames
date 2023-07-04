import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  padding: 10rem 15%;

  @media (max-width: 768px) {
    padding: 10rem 5%;
  }
`;
export const Content = styled.div`
  display: flex;
  align-items: center;
  max-width: 1128px;
  height: 28.125rem;
  padding: 0 1.125rem;
  border-radius: 16px;
  justify-content: space-between;
  background: ${({ theme }) => theme.COLORS.WHITE};
  flex-wrap: wrap;
  .button_content {
    display: flex;
    gap: 1.25rem;
  }

  .left_side {
    display: flex;
    flex-direction: column;
    padding: 0.625rem;
    justify-content: flex-start;
    > div {
      padding: 0.625rem;
      > span:nth-child(1) {
        color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
        font-weight: bold;
        font-size: 1rem;
        padding: 0 0.625rem;
        border: 1px solid ${({ theme }) => theme.COLORS.GRAY_100};
        border-radius: 8px;
      }
      > span:nth-child(2) {
        color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
        font-weight: bold;
        font-size: 1rem;
        margin-left: 1rem;
      }
      > span:nth-child(3) {
        color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
        font-size: 1rem;
        margin-left: 3px;
      }
    }
    > h1 {
      width: 18.75rem;
      font-size: 1.625rem;
      font-weight: 600;
      color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
      padding: 0.625rem;
    }
    > img {
      align-self: flex-start;
      width: 6.25rem;
    }
  }

  .right_side {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    position: relative;

    > img {
      width: 30rem;
      position: absolute;
      margin-top: -6.25rem;
      margin-right: 25rem;
    }
  }

  @media (max-width: 631px) {
    flex-wrap: wrap;
    height: 100%;
    align-items: center;
   

    .right_side {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 420;
    width: 100%;
    
    > img {
      width: 30rem;
      position: static;
      margin-top: 0;
      margin-right: 0;
    }
  }
  }
`;
