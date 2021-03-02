import styled from 'styled-components';

export const PagamentoContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 5rem;

  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.primary};
  border-style: solid;
  border-radius: 5px;

  button {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    background-color: transparent;
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
  }
`;
