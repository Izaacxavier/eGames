import styled from "styled-components";


export const Container = styled.nav`
    width: 100%;
    height: 20rem;
    display: none;
    justify-content: flex-start;
    background: ${({theme}) => theme.COLORS.BACKGROUND_700};
    border-radius: 0 0 22px 22px;
    position: fixed;
    z-index: 99999; 
    
    &.open{
        display: flex;
    }
`;
export const Content = styled.div`
    width: 100%;
    padding: 1rem;

    header{
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-bottom: 2rem;

      > button{
          background: none;
          border: none;
          color: ${({theme}) => theme.COLORS.WHITE};
          cursor: pointer;
      }
  }
    


`
