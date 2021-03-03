import React from 'react';
import Button from '../../components/commons/Button';
import Input from '../../components/commons/Input';
import Cabecalho from '../../components/general/Cabecalho';
import OpcoesPagamento from '../../components/general/OpcoesPagamento';
import { Grid } from '../../components/layouts/Grid';
import useFormulario from '../../hooks/Formulario';
import { IBasicSubmitEvent } from '../../utils/props/submit';
import formValidation from './formValidation';

import { PageContainer, PageSubtitle, ButtonComprarContainer } from './styles';

const FormCadastro: React.FC = () => {
  const formik = useFormulario({
    initialFormFields: {
      dataSaida: '',
      dataRetorno: '',
      localOrigem: '',
      localDestino: '',
      tipoPagamento: '',
      nome: '',
      sobrenome: '',
      pais: '',
      dataNascimento: '',
      cpf: '',
      email: '',
      telefone: '',
    },
    validateOnlyOnSubmit: true,
    validate: formValidation,
  });

  const handleOpcoesPagamento = (tipo: string | number) => {
    formik.values.tipoPagamento = tipo;
  };

  const handleSubmit = (event: IBasicSubmitEvent) => {
    event.preventDefault();

    const canSubmit = formik.handleSubmit(formik.values);

    if (!canSubmit) {
      alert('Erros foram encontrados');
    }

    if (canSubmit) {
      alert('Enviado com sucesso');
    }
  };

  return (
    <PageContainer>
      <Cabecalho />

      <form onSubmit={handleSubmit}>
        <Grid.Container>
          <Grid.Row>
            <Grid.Col>
              <PageSubtitle>Quando será a viagem?</PageSubtitle>
            </Grid.Col>
          </Grid.Row>

          <Grid.Row>
            <Grid.Col value={{ xs: 12, md: 6 }}>
              <Input
                label="Data de saída"
                type="date"
                name="dataSaida"
                value={formik.values.dataSaida}
                error={formik.errors.dataSaida}
                onChange={formik.handleChange}
              />
            </Grid.Col>

            <Grid.Col value={{ xs: 12, md: 6 }}>
              <Input
                label="Data de retorno"
                type="date"
                name="dataRetorno"
                value={formik.values.dataRetorno}
                error={formik.errors.dataRetorno}
                onChange={formik.handleChange}
              />
            </Grid.Col>
          </Grid.Row>

          <Grid.Row>
            <Grid.Col value={{ xs: 12, md: 6 }}>
              <Input
                label="Local de origem"
                name="localOrigem"
                value={formik.values.localOrigem}
                error={formik.errors.localOrigem}
                onChange={formik.handleChange}
                withMask="stru"
              />
            </Grid.Col>

            <Grid.Col value={{ xs: 12, md: 6 }}>
              <Input
                label="Local de destino"
                name="localDestino"
                value={formik.values.localDestino}
                error={formik.errors.localDestino}
                onChange={formik.handleChange}
                withMask="stru"
              />
            </Grid.Col>
          </Grid.Row>

          <Grid.Row>
            <Grid.Col>
              <PageSubtitle>Como será o pagamento?</PageSubtitle>
            </Grid.Col>
          </Grid.Row>

          <Grid.Row>
            <Grid.Col value={{ xs: 12, md: 6 }}>
              <OpcoesPagamento
                onSelectType={handleOpcoesPagamento}
                error={formik.errors.tipoPagamento}
              />
            </Grid.Col>
          </Grid.Row>

          <Grid.Row>
            <Grid.Col>
              <PageSubtitle>Quem vai pagar?</PageSubtitle>
            </Grid.Col>
          </Grid.Row>

          <Grid.Row>
            <Grid.Col>
              <Input
                label="Nome"
                name="nome"
                value={formik.values.nome}
                error={formik.errors.nome}
                onChange={formik.handleChange}
                withMask="stru"
              />
            </Grid.Col>
          </Grid.Row>

          <Grid.Row>
            <Grid.Col>
              <Input
                label="Sobrenome"
                name="sobrenome"
                value={formik.values.sobrenome}
                error={formik.errors.sobrenome}
                onChange={formik.handleChange}
                withMask="stru"
              />
            </Grid.Col>
          </Grid.Row>

          <Grid.Row>
            <Grid.Col value={{ xs: 12, md: 6 }}>
              <Input
                label="País de residência"
                name="pais"
                value={formik.values.pais}
                error={formik.errors.pais}
                onChange={formik.handleChange}
                withDefaultList="paises"
              />
            </Grid.Col>

            <Grid.Col value={{ xs: 12, md: 6 }}>
              <Input
                label="Data de nascimento"
                type="date"
                name="dataNascimento"
                value={formik.values.dataNascimento}
                error={formik.errors.dataNascimento}
                onChange={formik.handleChange}
              />
            </Grid.Col>
          </Grid.Row>

          <Grid.Row>
            <Grid.Col>
              <Input
                label="CPF"
                name="cpf"
                value={formik.values.cpf}
                error={formik.errors.cpf}
                onChange={formik.handleChange}
                withMask="cpf"
              />
            </Grid.Col>
          </Grid.Row>

          <Grid.Row>
            <Grid.Col>
              <Input
                label="Email"
                name="email"
                value={formik.values.email}
                error={formik.errors.email}
                onChange={formik.handleChange}
                data-mask="email"
              />
            </Grid.Col>
          </Grid.Row>

          <Grid.Row>
            <Grid.Col>
              <Input
                label="Telefone"
                name="telefone"
                value={formik.values.telefone}
                error={formik.errors.telefone}
                onChange={formik.handleChange}
                withMask="phone"
              />
            </Grid.Col>
          </Grid.Row>

          <Grid.Row>
            <Grid.Col offset={{ xs: 0, md: 3 }} value={{ xs: 12, md: 6 }}>
              <ButtonComprarContainer>
                <Button type="submit">Comprar</Button>
              </ButtonComprarContainer>
            </Grid.Col>
          </Grid.Row>
        </Grid.Container>
      </form>
    </PageContainer>
  );
};

export default FormCadastro;
