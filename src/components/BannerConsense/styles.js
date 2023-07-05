import styled from "styled-components";

export const Container = styled.div`
  width: 37.5rem;
  padding: 0.313rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.COLORS.WHITE};
  position: fixed;
  left: 0.938rem;
  bottom: 0.938rem;
  z-index: 99999;
  border-radius: 8px;
  animation: getUp 1s ease forwards;

  @keyframes getUp {
    from {
      opacity: 0;
      max-height: 0;
    }
    to {
      opacity: 1;
      max-height: 250px;
    }
  }

  &.closed{
          display: none;
      }

      @media (max-width: 415px){
        width: 33.5rem;
        left: 0.625rem;
        bottom: 0.625rem;
        right: 0.625rem;
      }
`;

export const Content = styled.div`
  color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  width: 100%;
  padding: 0.313rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  > header {
    width: 100%;
    display: flex;
    justify-content: space-between;

    img {
      width: 30px;
    }

    .cookie_title {
      display: flex;
      align-items: center;
      gap: 5px;
      h1 {
        font-size: 1.275rem;
        font-weight: 400;
      }
    }

    button {
      border: none;
      background: transparent;
      cursor: pointer;
      svg {
        font-size: 20px;
      }
    }
  }
  > main {
    display: flex;
    justify-content: space-between;
    gap: 1.25rem;
    width: 100%;

    .cookies_consense {
      display: flex;
      flex-direction: column;
      width: 22.5rem;
      h1 {
        font-size: 0.875rem;
      }
      p {
        font-size: 0.875rem;
        width: 22.5rem;
      }
      > button {
        width: 120px;
        border: none;
        background: transparent;
        display: flex;
        align-items: center;
        gap: 5px;
        margin-top: 0.313rem;
        color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
        cursor: pointer;
        font-size: 0.875rem;

        svg {
          color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
          font-size: 0.875rem;
        }
      }
    }
  }

  .consens_terms {
    display: none;
    width: 22.5rem;
    max-height: 100px;
    overflow: scroll;
    background: ${({ theme }) => theme.COLORS.BACKGROUND_500};
    color: ${({ theme }) => theme.COLORS.WHITE};
    padding: 0.625rem;
    border-radius: 8px;

    > P {
      font-size: 14px;
    }

    &.isOpen {
      display: flex;
    }

  }

  .buttons_content {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    gap: 5px;
    padding-bottom: 10px;

    > button {
      padding: 0.313rem 1.125rem;
      background: transparent;
      border: none;
      border-radius: 8px;
      color: ${({ theme }) => theme.COLORS.WHITE};
      font-size: 0.875rem;
    }

    > button:first-child {
      background: rgb(113, 45, 224);
      background: linear-gradient(
        11deg,
        rgba(113, 45, 224, 1) 0%,
        rgba(235, 47, 147, 1) 100%
      );
    }
    > button:last-child {
      background: ${({ theme }) => theme.COLORS.GRAY_200};
    }
  }

  
`;
