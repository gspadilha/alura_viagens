import styled from 'styled-components';
import { lighten } from 'polished';

interface IOpcaoContainerProps {
  isSelected: boolean;
}

export const OpcaoContainer = styled.section<IOpcaoContainerProps>`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;

  background-color: ${({ theme, isSelected }) =>
    isSelected ? lighten('0.3', theme.colors.primary) : 'transparent'};

  border: 0;

  border-left-width: 1px;
  border-left-color: ${({ theme }) => theme.colors.primary};
  border-left-style: solid;
  padding: 0 1rem;

  &:first-of-type {
    border-left-width: 0;
  }

  img {
    width: 5rem;
    height: 3rem;
  }
`;
