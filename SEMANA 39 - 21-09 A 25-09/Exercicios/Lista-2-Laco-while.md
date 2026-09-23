# Lista 2 — Treinando o laço `while`

**3º INT · Semana 39** · Resolva no seu `script.js` e mostre o resultado na página.

**Lembrete:** `while (condição) { ... }` — prepare a variável **antes** e altere-a **dentro** do bloco, senão o laço é infinito. `break` interrompe o laço.

## Nível 1 — Aquecimento

1. Mostre os números de 1 a 10 usando `while`.
2. Mostre uma contagem regressiva de 10 a 0.
3. Mostre os números pares de 2 a 30.
4. Refaça o exercício 1 com `for` e compare os dois códigos.
5. Explique com suas palavras: por que o código abaixo trava a página? Corrija-o.
```
var n = 1;
while (n <= 5) {
  console.log(n);
}
```

## Nível 2 — Repetir até uma condição

6. Some 1 + 2 + 3 + ... até a soma passar de 100. Mostre a soma final e o último número somado.
7. Comece com 1 e vá dobrando (1, 2, 4, 8...) enquanto for menor que 1000.
8. Um saldo de R$ 1000 rende 10% ao mês. Em quantos meses ele passa de R$ 2000?
9. Divida um número por 2 repetidamente até chegar a 1 e conte quantas divisões foram feitas.
10. Descubra quantas vezes é preciso subtrair 7 de 100 até o resultado ser menor que 7 (quociente da divisão).

## Nível 3 — Entrada do usuário

11. Peça (com `prompt`) um número repetidamente até o usuário digitar um valor entre 1 e 10.
12. Peça notas até o usuário digitar -1; ao final mostre a média das notas digitadas.
13. Peça uma senha até o usuário acertar ("1234"); conte as tentativas.
14. Peça números até o usuário digitar 0; mostre a soma e o maior número informado.
15. Jogo de adivinhação: o programa sorteia um número de 1 a 20 (`Math.floor(Math.random()*20)+1`) e o usuário tenta acertar; diga "maior" ou "menor" a cada palpite.

## Nível 4 — While e listas

16. Percorra a lista `['a','b','c','d']` com `while` e mostre cada item.
17. Percorra uma lista de números com `while` e pare (com `break`) quando encontrar um número negativo.
18. Use `while` para copiar apenas os números pares de uma lista para uma nova lista.
19. Some os dígitos de um número (ex.: 1234 → 10) usando `%` e divisão por 10 dentro do `while`.
20. **Desafio:** inverta um número (1234 → 4321) usando `while`.
