import styled from 'styled-components'

export const Container = styled.div`
    display: flex;

    > button {
      height: 3rem;
      width: 9.5rem;
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
  
`

