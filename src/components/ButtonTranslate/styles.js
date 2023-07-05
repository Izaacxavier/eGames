import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    position: relative;
  

    .languages{
        width: 100%;
        position: absolute;
        display: none;
        flex-direction: column;
        gap: 10px;
        padding: 10px 0;
        
        &.isOpen{
            display: flex;
        }
    }
    .language{
        display: flex;
        align-items: center;
        text-align: start;
        gap: 5px;
        font-size: 0.875rem;
        margin-left: 15px;
        cursor: pointer;
        background: transparent;
        border: none;
        color: ${({theme}) => theme.COLORS.WHITE};
    }

`
export const Content = styled.div` 
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    border-radius: 8px;
    border: none;
    border: 1px solid ${({theme}) => theme.COLORS.GRAY_200};
    background: transparent;
    color: ${({theme}) => theme.COLORS.WHITE};
    padding: 0 1px;
    gap: 0.313rem;
    cursor: pointer;

    > button{
        background: transparent;
        cursor: pointer;
        border: none;
    }

    svg{
        width: 1.125rem;
        color: ${({theme}) => theme.COLORS.WHITE};
    }
   
`