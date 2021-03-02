import { createGlobalStyle } from 'styled-components';
import normalize from 'styled-normalize';

import { ThemeType } from './index';

interface IThemeProps {
  theme: ThemeType;
}

export const GlobalStyle = createGlobalStyle`
   ${normalize}

   * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: ${({ theme }: IThemeProps) => theme.fontsFamily.robotoRegular};
  }

  body{
    background-color: ${({ theme }: IThemeProps) => theme.colors.primary};
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
