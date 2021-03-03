export const dateCompare = (dtIni: string, dtFim: string): number | null => {
  const dtIniParsed = Number(dtIni.split('-').join(''));
  const dtFimParsed = Number(dtFim.split('-').join(''));

  if (dtIniParsed > dtFimParsed) {
    return -1;
  }

  if (dtIniParsed === dtFimParsed) {
    return 0;
  }

  if (dtIniParsed < dtFimParsed) {
    return 1;
  }

  return null;
};

export const isOver18 = (dt: string): boolean => {
  const hoje = new Date();

  const nascimento = new Date(dt);

  // Retorna a diferença entre hoje e a data de nascimento em anos.
  let ano = hoje.getFullYear() - nascimento.getFullYear();

  // Retorna a diferença de mês do mês de nascimento para o atual.
  const m = hoje.getMonth() - nascimento.getMonth();

  // Caso ainda não tenha ultrapassado o dia e o mês
  if (m < 0 || (m === 0 && hoje.getDate() < nascimento.getDate())) {
    ano--;
  }
  return ano >= 18 ? true : false;
};
