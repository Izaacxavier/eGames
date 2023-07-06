import styled from "styled-components";

export const Container = styled.div`
    .web{
    ul, li, a {
    display: flex;
    gap: 1.438rem;
    font-size: 1rem;
    color: ${({ theme }) => theme.COLORS.WHITE_100};

    &:hover {
          color: ${({ theme }) => theme.COLORS.WHITE};
        }
 }
    }

   .mobile {
    ul, li, a {
      display: flex;
      flex-direction: column;
      gap: 1.438rem;
      font-size: 16px;
      color: ${({ theme }) => theme.COLORS.WHITE_100};
      padding-bottom: 4px;
      
      &:hover {
          color: ${({ theme }) => theme.COLORS.WHITE};
        }
    }

    li{
        border-bottom: solid 1px ${({ theme }) => theme.COLORS.GRAY_50};
    }
  }
`;
