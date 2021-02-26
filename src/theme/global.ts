import { createGlobalStyle } from 'styled-components';
import normalize from 'styled-normalize';

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    background-color: ${({ theme }) => theme.colors.primary};
    font-family: ${({ theme }) => theme.fontsFamily.robotoRegular};
  }

  #__next {
    max-width: 900px;
    flex: 1;
  }

  ${normalize}
`;
