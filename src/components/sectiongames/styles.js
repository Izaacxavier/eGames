import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  padding: 0.313rem 15%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 1400px) {
    padding: 0.313rem 5%;
  }
`;
export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;

  > div {
    display: flex;
    flex-direction: column;
    gap: 0.625rem;
    img {
      width: 15rem;
    }

    > div{
      width: 100%;
      height: 100%;
      transition: transform 0.3s;
      border-radius: 16px;
      img{
        object-fit: cover;
      }
      &:hover{
      transform: scale(1.1);
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    }
    }
  }

  .card_cta {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .button_container {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      position: absolute;
      padding: 1rem;
      align-items: center;
      text-align: center;
      > strong{
        padding: 1rem;
        font-size: 1.375rem;
      }
      > button {
        padding: 0.5rem 1.625rem;
        border-radius: 8px;
        border: none;
        background-color: rgba(217, 217, 217, 40%);
        color: ${({theme}) => theme.COLORS.WHITE};
        font-size: 1rem;
        cursor: pointer;

        &:hover{
          background-color: rgba(217, 217, 217, 60%); 
        }
      }
    }
  }
  @media (max-width: 668px) {
    flex-wrap: wrap-reverse;
  }
`;
