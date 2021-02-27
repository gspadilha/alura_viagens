import styled from 'styled-components';

export const PageContainer = styled.section`
  height: 100%;
  background-color: ${({ theme }) => theme.colors.white};

  -webkit-box-shadow: 10px 10px 78px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 10px 10px 78px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 10px 10px 78px 0px rgba(0, 0, 0, 0.75);
`;

export const PageSubtitle = styled.p`
  display: flex;
  justify-content: flex-start;
  padding: 1rem 0;

  font-size: 1.5rem;
  font-style: normal;
  font-weight: 400;
  letter-spacing: 0em;
`;

export const ButtonComprarContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 1rem 0;
`;
