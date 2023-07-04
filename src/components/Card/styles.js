import styled from 'styled-components'

export const Container = styled.div`
    width: 600px;
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_500};
    border-radius: 8px;
    padding: 0 3rem;


    &.blackBackground{
        background-color: ${({theme}) => theme.COLORS.BACKGROUND_900};
    }
    > header{
        display: flex;
        width: 100%;
        justify-content: flex-end;
        padding: 1rem 0;
        > img{
            width: 25px;
        }
    }
    > main{
        display: flex;
        gap: 15px;
        align-items: center;
        padding-bottom: 25px;

        div{
           strong{
                font-size: 20px;
            }
            > small{
                color: ${({theme}) => theme.COLORS.GRAY_100};
}
        }
        > img{
            width: 100px;
        }

        > div{
            display: flex;
            flex-direction: column;
            
        }
    }

    footer{
        padding: 2rem 0;

        .tag{
            display: flex;
            align-items: center;
            justify-content: center;
            width: 210px;
            gap: 5px;
            background: ${({theme}) => theme.COLORS.GRAY_200};
            border-radius: 16px;
            margin: 25px 0;
            font-size: 14px;

            >span:first-child{
                margin-right: 5px;
                color: ${({theme}) => theme.COLORS.BACKGROUND_600};
            }
             .game{
                margin-right: 15px;
            }

            img{
                width: 25px;
            }
        }
    }
`