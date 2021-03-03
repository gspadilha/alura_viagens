import React, { useEffect, useState } from 'react';
import { IBasicButton } from '../../../utils/props/button';
import Opcoes from './Opcoes';

import { PagamentoContainer, InputError } from './styles';

interface IOpcoesPagamentoProps {
  error: string;
  onSelectType: (tipo: string | number) => void;
}

const estadoInicial = {
  selecionadoTransferencia: false,
  selecionadoCartao: false,
  selecionadoPayPal: false,
};

const OpcoesPagamento: React.FC<IOpcoesPagamentoProps> = ({
  error,
  onSelectType,
}) => {
  const [opcao, setOpcao] = useState({});
  const [opcaoSelecionada, setOpcaoSelecionada] = useState(estadoInicial);

  const handleClickOpcoes = (
    estado: Record<string, boolean>,
    tipo: string | number,
  ) => {
    setOpcao(estado);
    onSelectType(tipo);
  };

  useEffect(() => {
    const novoEstado = { ...estadoInicial, ...opcao };
    setOpcaoSelecionada(novoEstado);
  }, [opcao]);

  return (
    <>
      <PagamentoContainer>
        <Opcoes
          icon="/icons/transferencia.svg"
          label="Transferência"
          isSelected={opcaoSelecionada.selecionadoTransferencia}
          onClick={() => {
            handleClickOpcoes({ selecionadoTransferencia: true }, 'T');
          }}
        />

        <Opcoes
          icon="/icons/credit-card.svg"
          label="Cartão"
          isSelected={opcaoSelecionada.selecionadoCartao}
          onClick={() => {
            handleClickOpcoes({ selecionadoCartao: true }, 'C');
          }}
        />

        <Opcoes
          icon="/icons/paypal.svg"
          label="PayPal"
          isSelected={opcaoSelecionada.selecionadoPayPal}
          onClick={() => {
            handleClickOpcoes({ selecionadoPayPal: true }, 'P');
          }}
        />
      </PagamentoContainer>
      <InputError>{error}</InputError>
    </>
  );
};

export default OpcoesPagamento;
