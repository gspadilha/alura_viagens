import styled, { css } from 'styled-components';
import { breakpointsMedia } from '../../../theme/utils/breakpointsMedia';

export const TitleContainer = styled.p`
  font-family: ${({ theme }) => theme.fontsFamily.pattayaRegular}, sans-serif;
  color: ${({ theme }) => theme.colors.primary};

  text-align: center;
  padding: 1rem;

  font-size: 3rem;
  font-style: normal;
  font-weight: 400;
  letter-spacing: 0em;

  ${breakpointsMedia({
    md: css`
      font-size: 4.5rem;
    `,
  })}
`;
