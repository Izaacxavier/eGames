import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column; 
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 5rem 15%;
`;

export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 70px;

    .card:first-child{
        > a{
            opacity: 0;
        }
    }
    
    .card{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 13.75rem;
        text-align: center;
        > strong{
            font-size: 1.5rem;
            font-weight: 400;
        }
        > p {
            font-size: 0.875rem;
            padding: 0.313rem;
            color: ${({theme}) => theme.COLORS.GRAY_100};
        }

        .icon_content{
            display: flex;
            justify-content: center;
            padding: 1.125rem;
            background: red;
            border-radius: 1rem;
            align-items: center;
            margin-bottom: 0.625rem;
            > img{
                width: 1.5rem;
            }
        }

        .background_white{
            background: ${({theme}) => theme.COLORS.WHITE};
        }
        .background_pink{
            background: ${({theme}) => theme.COLORS.BRAND_PINK};
        }
        .background_purple{
            background: ${({theme}) => theme.COLORS.BRAND_PURPLE};
        }
        
        > a{
            display: flex;
            align-items: center;
            padding: 0.625rem;
            font-size: 1rem;
            color: ${({theme}) => theme.COLORS.WHITE};
            gap: 0.313rem;
           > img{
               width: 1.125rem;
           }
        }
    }
    @media (max-width: 768px) {
           flex-direction: column;
  }
`;
