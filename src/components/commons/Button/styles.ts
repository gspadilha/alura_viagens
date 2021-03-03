import styled from 'styled-components';
import { darken } from 'polished';

export const ButtonContainer = styled.button`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};

  padding: 1rem 1.5rem;

  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.primary};
  border-style: solid;
  border-radius: 5px;

  font-size: 1.125rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.25rem;
  letter-spacing: 0em;

  transition: background-color 0.2s;

  &:hover {
    background-color: ${({ theme }) => darken(0.05, theme.colors.primary)};
  }

  &:disabled {
    background-color: lightgray;
    color: gray;
  }
`;
