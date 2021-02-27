import { createGlobalStyle } from 'styled-components';
import normalize from 'styled-normalize';

export const GlobalStyle = createGlobalStyle`
   ${normalize}

   * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: ${({ theme }) => theme.fontsFamily.robotoRegular};
  }

  body{
    background-color: ${({ theme }) => theme.colors.primary};
    display: flex;
    justify-content: center;
  }

  #__next {
    max-width: 900px;
    width: 100%;
  }

  datalist {
    background-color:white;
  }
`;
