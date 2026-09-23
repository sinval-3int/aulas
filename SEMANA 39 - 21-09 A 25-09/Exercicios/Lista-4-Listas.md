# Lista 4 — Entendendo Listas (arrays) e Fatiamento de Strings

**3º INT · Semana 39** · Resolva no seu `script.js`.

**Lembrete de listas:** `var l = [10, 20, 30];` · `l[0]` · `l.length` · `l.push(x)` · `l.pop()` · `l.indexOf(x)` · `l.includes(x)` · `l.slice(inicio, fim)`.

**Lembrete de fatiamento de string:** `texto[0]` (um caractere) · `texto.length` · `texto.slice(inicio, fim)` (o `fim` **não** entra) · `texto.slice(-3)` (últimos 3) · `texto.substring(a, b)` · `texto.toUpperCase()` · `texto.split(" ")` (string → lista).

## Nível 1 — Entendendo o índice

1. Crie a lista `['maçã','uva','pera','manga']`. Mostre o primeiro, o último e o tamanho.
2. Qual o resultado de `lista[4]` na lista do exercício 1? E de `lista[-1]`? Teste e explique.
3. Troque o segundo elemento por "banana" e mostre a lista.
4. Adicione dois itens ao final (`push`) e remova o último (`pop`).
5. Descubra a posição de "pera" (`indexOf`) e verifique se "kiwi" existe (`includes`).

## Nível 2 — Percorrendo listas com `for`

6. Mostre todos os itens de uma lista em uma `<ul>`.
7. Some todos os valores de uma lista de notas e calcule a média.
8. Ache o maior e o menor valor de uma lista de números.
9. Conte quantos números de uma lista são maiores que 10.
10. Crie uma nova lista só com os números pares de outra lista.

## Nível 3 — Fatiando listas e strings

11. Da lista `[10,20,30,40,50,60]`, mostre os 3 primeiros com `slice(0, 3)` e os 2 últimos com `slice(-2)`.
12. Dada a palavra "JavaScript", mostre: a primeira letra, a última letra e as 4 primeiras letras (`slice(0, 4)`).
13. Dada a palavra "JavaScript", mostre `slice(4)` e `slice(4, 10)` e explique a diferença.
14. Dado um CPF como texto "12345678900", mostre os 3 primeiros dígitos, os 2 últimos e o CPF formatado `123.456.789-00` usando `slice`.
15. Dada a frase "Aprendendo listas em JavaScript", use `split(" ")` para transformá-la em lista de palavras e mostre a quantidade de palavras e a primeira e a última.

## Nível 4 — Strings percorridas como listas

16. Percorra uma palavra letra por letra com `for` e mostre cada caractere em uma linha.
17. Conte quantas vogais existem em uma palavra digitada.
18. Inverta uma palavra (ex.: "casa" → "asac") percorrendo do fim para o começo.
19. Verifique se uma palavra é **palíndromo** ("arara", "radar").
20. Dado um nome completo ("Maria Souza Lima"), gere as **iniciais** ("MSL") usando `split` e `[0]`.

## Nível 5 — Desafios integrados

21. Lista de objetos: `[{nome:'Ana', nota:8}, {nome:'Bia', nota:5}, ...]` — mostre em uma `<ul>` apenas quem tem nota ≥ 7 (simula dados vindos de um banco).
22. Dada uma lista de nomes, mostre-os com a primeira letra maiúscula (`nome[0].toUpperCase() + nome.slice(1)`).
23. Dada uma lista de e-mails, mostre só o que vem antes do `@` de cada um (`slice(0, e.indexOf('@'))`).
24. Dada uma lista de palavras, ache a maior palavra (maior `length`).
25. Ordene mentalmente e depois confira com `lista.sort()` uma lista de nomes; explique o que mudou na lista original.
