import styled from 'styled-components';

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  margin: 0.25rem;
  padding-bottom: 0.25rem;
`;

export const LabelContent = styled.label`
  padding-bottom: 0.1rem;

  font-size: 1.125rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.25rem;
  letter-spacing: 0em;
  text-align: left;
`;

export const InputContent = styled.input`
  width: 100%;
  height: 2rem;

  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.primary};
  border-style: solid;
  border-radius: 5px;

  outline: none;

  padding: 0 0.25rem;

  &:focus {
    box-shadow: 0 0 5px ${({ theme }) => theme.colors.primary};
  }
`;
