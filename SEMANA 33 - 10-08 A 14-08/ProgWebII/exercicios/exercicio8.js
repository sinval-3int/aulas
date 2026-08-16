/*
----------------------------------------------------------------
 EXERCÍCIO 8 — Fórmula de Bhaskara
----------------------------------------------------------------
ENUNCIADO: leia A, B e C e calcule as raízes de Bhaskara.
Se não for possível (divisão por 0 ou raiz de negativo), mostre "Impossivel calcular".
ENTRADA ESPERADA: 3 valores de ponto flutuante (A, B, C).
SAÍDA ESPERADA: "R1 = " e "R2 = " com 5 casas decimais, ou "Impossivel calcular".
EXEMPLOS:
  Entrada: 10.0 20.1 5.1     Saída: R1 = -0.29788 / R2 = -1.71212
  Entrada: 0.0 20.0 5.0      Saída: Impossivel calcular
  Entrada: 10.3 203.0 5.0    Saída: R1 = -0.02466 / R2 = -19.68408
  Entrada: 10.0 3.0 5.0      Saída: Impossivel calcular
*/

prompt = require("prompt-sync")();

const A = 10.3;
const B = 203;
const C = 5;

const delta = B ** 2 - 4 * A * C;

const x1 = (B * -1 + delta ** 0.5) / (2 * A);
const x2 = (B * -1 - delta ** 0.5) / (2 * A);

if (Number(x1) && Number(x2)) {
  console.log(`R1 = ${x1.toFixed(5)} / R2 = ${x2.toFixed(5)}`);
} else {
  console.log(`Impossível calcular`);
}
