/*
----------------------------------------------------------------
 EXERCÍCIO 7 — Idade em Dias
----------------------------------------------------------------
ENUNCIADO: leia a idade em dias e converta em anos, meses e dias (ano = 365 dias, mês = 30 dias).
ENTRADA ESPERADA: um valor inteiro (dias).
SAÍDA ESPERADA: 3 linhas — "X ano(s)", "X mes(es)", "X dia(s)".
EXEMPLOS:
  Entrada: 400   Saída: 1 ano(s) / 1 mes(es) / 5 dia(s)
  Entrada: 800   Saída: 2 ano(s) / 2 mes(es) / 10 dia(s)
  Entrada: 30    Saída: 0 ano(s) / 1 mes(es) / 0 dia(s)
*/
prompt = require("prompt-sync")();

const diasInformados = prompt("Informe sua idade em dias: ");

// Quantos anos tem em X dias?
// Pegamos a parte inteira dos dias e transformamos em ano
const ano = parseInt(diasInformados / 365);

// Salvamos os dias restantes para calcular os meses e dias
// Quantas dias tem sobrado depois que tiramos os anos?
const diasRestantes = diasInformados % 365;

// Quantos meses temos no resto dos dias que sobraram do ano?
// Pegamos a parte inteira dos dias restantes e transformamos em meses
const mes = parseInt(diasRestantes / 30);

// Para achar os dias, pegamos o restante dos dias que nao completam o mes
// o resto da divisao por
const dia = diasRestantes % 30;

console.log(`
    ${ano} ano(s) / 
    ${mes} mes(es) / 
    ${dia} dia(s)`);
