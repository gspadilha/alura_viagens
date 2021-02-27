import styled from 'styled-components';

export const TitleContainer = styled.p`
  font-family: ${({ theme }) => theme.fontsFamily.pattayaRegular}, sans-serif;
  color: ${({ theme }) => theme.colors.primary};

  text-align: center;
  font-size: 3rem;

  padding: 1rem;

  font-size: 4.5rem;
  font-style: normal;
  font-weight: 400;
  letter-spacing: 0em;
`;
