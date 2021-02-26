import React from 'react';
import Cabecalho from '../../components/Cabecalho';
import { Grid } from '../../components/layouts/Grid';

import { PageContainer } from './styles';

const FormCadastro: React.FC = () => {
  return (
    <PageContainer>
      <Cabecalho />

      <Grid.Container>
        <Grid.Row>
          <Grid.Col>
            <p>Quando será a viagem?</p>
          </Grid.Col>
        </Grid.Row>

        <Grid.Row>
          <Grid.Col value={{ xs: 12, md: 6 }}>123</Grid.Col>
          <Grid.Col value={{ xs: 12, md: 6 }}>456</Grid.Col>
        </Grid.Row>

        <Grid.Row>
          <Grid.Col value={{ xs: 12, md: 6 }}>123</Grid.Col>
          <Grid.Col value={{ xs: 12, md: 6 }}>456</Grid.Col>
        </Grid.Row>

        <Grid.Row>
          <Grid.Col value={{ xs: 12, md: 6 }}>123</Grid.Col>
          <Grid.Col value={{ xs: 12, md: 6 }}>456</Grid.Col>
        </Grid.Row>

        <Grid.Row>
          <Grid.Col value={{ xs: 12, md: 6 }}>123</Grid.Col>
          <Grid.Col value={{ xs: 12, md: 6 }}>456</Grid.Col>
        </Grid.Row>

        <Grid.Row>
          <Grid.Col value={{ xs: 12, md: 12 }}>123</Grid.Col>
        </Grid.Row>

        <Grid.Row>
          <Grid.Col>
            <p>Quem vai pagar?</p>
          </Grid.Col>
        </Grid.Row>

        <Grid.Row>
          <Grid.Col value={{ xs: 12, md: 12 }}>123</Grid.Col>
        </Grid.Row>

        <Grid.Row>
          <Grid.Col value={{ xs: 12, md: 12 }}>123</Grid.Col>
        </Grid.Row>

        <Grid.Row>
          <Grid.Col value={{ xs: 12, md: 6 }}>123</Grid.Col>
          <Grid.Col value={{ xs: 12, md: 6 }}>456</Grid.Col>
        </Grid.Row>

        <Grid.Row>
          <Grid.Col value={{ xs: 12, md: 12 }}>123</Grid.Col>
        </Grid.Row>

        <Grid.Row>
          <Grid.Col value={{ xs: 12, md: 12 }}>123</Grid.Col>
        </Grid.Row>

        <Grid.Row>
          <Grid.Col value={{ xs: 12, md: 12 }}>123</Grid.Col>
        </Grid.Row>

        <button>Comprar</button>
      </Grid.Container>
    </PageContainer>
  );
};

export default FormCadastro;
