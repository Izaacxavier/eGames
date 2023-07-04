import styled from 'styled-components'

export const Container = styled.section`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    background: ${({theme}) => theme.COLORS.BACKGROUND_700};
    padding: 40px 15%;
    margin-bottom: 5rem;
    

    .title_container{
        width: 21.875rem;
        font-size: 1rem;
        
    }

    .cards{
        display: flex;
        gap: 1rem;

        .card{
           display: flex;
           gap: 1rem;
           > div{
               display: flex;
               flex-direction: column;
               >span{
                   color: ${({theme}) => theme.COLORS.GRAY_100};
               }
           }
           > img{
               width: 2.5rem;
           }
        }
    }

    @media (max-width: 765px){
        flex-wrap: wrap;

        .title_container{
            width: 100%;
            padding-bottom: 2rem;
            text-align: center;
        }
        .cards{
            width: 100%;
            justify-content: center;
            align-items: center;
        }
        .card{
            justify-content: center;
            flex-direction: column;
            align-items: center;
            text-align: center;
        }
    }

    @media (max-width: 1400px){
        padding: 40px 5%;
    }
`
