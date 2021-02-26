import styled from 'styled-components';

export const Container = styled.p`
  font-family: ${({ theme }) => theme.fontsFamily.pattayaRegular}, sans-serif;
  color: ${({ theme }) => theme.colors.primary};

  text-align: center;
`;
