import { createGlobalStyle } from "styled-components";
import efeitoBackground from '../assets/efeito.png'

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body{
        width: 100%;
        font-family: 'Inter', sans-serif;
        -webkit-font-smoothing: antialiased;
        color: ${({ theme }) => theme.COLORS.WHITE};
        background: ${({ theme }) => theme.COLORS.BACKGROUND_800}; 
        background-image: url(${efeitoBackground});
        background-repeat: no-repeat;
        background-position: center;
       
    }
    ul, li, a{
      list-style: none;
      text-decoration: none;
    }
 

    // Responsividade

    @media (max-width: 1000px){
    
    html{
      font-size: 12px;
     
    }
  } 
    @media (max-width: 768px){
    
    html{
      font-size: 12px;
     
    }
  } 
  
`;
