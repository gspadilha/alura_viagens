import React, { useState } from 'react';
import Cabecalho from '../../components/Cabecalho';
import Button from '../../components/general/Button';
import Input from '../../components/general/Input';
import { Grid } from '../../components/layouts/Grid';
import OpcoesPagamento from '../../components/OpcoesPagamento';
import { IBasicChangeEvent } from '../../props/event';
import { IBasicSubmitEvent } from '../../props/submit';
import { cpfValidate } from '../../utils/validate/cpf';
import { dateCompare, maiorDeIdade } from '../../utils/validate/date';

import { PageContainer, PageSubtitle, ButtonComprarContainer } from './styles';

const formularioInicial = {
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
};

let formulariosErrors = [];

const FormCadastro: React.FC = () => {
  const [formulario, setFormulario] = useState(formularioInicial);
  const [canSubmit, setCanSubmit] = useState(false);

  const handleSubmit = (event: IBasicSubmitEvent) => {
    const {
      tipoPagamento,
      dataSaida,
      dataRetorno,
      cpf,
      dataNascimento,
    } = formulario;

    formulariosErrors = [];

    Object.entries(formulario).forEach(item => {
      const key = item[0];
      const value = item[1];

      if (value === '') {
        formulariosErrors = [];
        formulariosErrors.push('Todos os campos devem ser informados!');
      }
    });

    if (tipoPagamento === '') {
      formulariosErrors.push('Selecione uma opção de pagamento válida!');
    }

    if (dateCompare(dataSaida, dataRetorno) === -1) {
      formulariosErrors.push(
        'Data de retorno deve ser posterior a Data de saída!',
      );
    }

    if (!cpfValidate(cpf)) {
      formulariosErrors.push('CPF Inválido!');
    }

    if (!maiorDeIdade(dataNascimento)) {
      formulariosErrors.push('Usuário deve ser maior de idade!');
    }

    if (!canSubmit) {
      alert(formulariosErrors.join('\n\n'));
    }

    if (canSubmit) {
      alert('Formulário enviado com sucesso!');
    }

    event.preventDefault();
  };

  const handleChangeInput = (event: IBasicChangeEvent) => {
    const { name, value } = event.target;
    setFormulario({ ...formulario, [name]: value });
  };

  const handleOpcoesPagamento = (tipoSelecionado: string) => {
    setFormulario({ ...formulario, tipoPagamento: tipoSelecionado });
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
                value={formulario.dataSaida}
                onChange={handleChangeInput}
              />
            </Grid.Col>

            <Grid.Col value={{ xs: 12, md: 6 }}>
              <Input
                label="Data de retorno"
                type="date"
                name="dataRetorno"
                value={formulario.dataRetorno}
                onChange={handleChangeInput}
              />
            </Grid.Col>
          </Grid.Row>

          <Grid.Row>
            <Grid.Col value={{ xs: 12, md: 6 }}>
              <Input
                label="Local de origem"
                name="localOrigem"
                value={formulario.localOrigem}
                onChange={handleChangeInput}
              />
            </Grid.Col>

            <Grid.Col value={{ xs: 12, md: 6 }}>
              <Input
                label="Local de destino"
                name="localDestino"
                value={formulario.localDestino}
                onChange={handleChangeInput}
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
              <OpcoesPagamento onSelectType={handleOpcoesPagamento} />
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
                value={formulario.nome}
                onChange={handleChangeInput}
              />
            </Grid.Col>
          </Grid.Row>

          <Grid.Row>
            <Grid.Col>
              <Input
                label="Sobrenome"
                name="sobrenome"
                value={formulario.sobrenome}
                onChange={handleChangeInput}
              />
            </Grid.Col>
          </Grid.Row>

          <Grid.Row>
            <Grid.Col value={{ xs: 12, md: 6 }}>
              <Input
                label="País de residência"
                name="pais"
                value={formulario.pais}
                onChange={handleChangeInput}
                classe="paises"
              />
            </Grid.Col>

            <Grid.Col value={{ xs: 12, md: 6 }}>
              <Input
                label="Data de nascimento"
                type="date"
                name="dataNascimento"
                value={formulario.dataNascimento}
                onChange={handleChangeInput}
              />
            </Grid.Col>
          </Grid.Row>

          <Grid.Row>
            <Grid.Col>
              <Input
                label="CPF"
                name="cpf"
                value={formulario.cpf}
                onChange={handleChangeInput}
                data-mask="cpf"
              />
            </Grid.Col>
          </Grid.Row>

          <Grid.Row>
            <Grid.Col>
              <Input
                label="Email"
                type="email"
                name="email"
                value={formulario.email}
                onChange={handleChangeInput}
                data-mask="email"
              />
            </Grid.Col>
          </Grid.Row>

          <Grid.Row>
            <Grid.Col>
              <Input
                label="Telefone"
                name="telefone"
                value={formulario.telefone}
                onChange={handleChangeInput}
                data-mask="telefone"
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
