# Lista 3 — Treinando Conjuntos (`Set`)

**3º INT · Semana 39** · Resolva no seu `script.js`.

**Lembrete:** `new Set()` não aceita repetidos. Principais recursos: `add(x)`, `has(x)`, `delete(x)`, `size`. Para percorrer: `for (var item of conjunto) { ... }`. Para virar lista: `[...conjunto]`.

## Nível 1 — Conhecendo o Set

1. Crie um conjunto com os números 1, 2, 2, 3, 3, 3. Mostre o `size`. Qual o resultado e por quê?
2. Crie um conjunto vazio e use `add` para inserir 5 nomes. Tente inserir um nome repetido — o que acontece?
3. Use `has` para verificar se "Ana" está no conjunto de nomes.
4. Use `delete` para remover um nome e mostre o novo `size`.
5. Percorra o conjunto com `for...of` e mostre cada item em um `<li>`.

## Nível 2 — Removendo repetidos

6. Dada a lista `[3, 7, 3, 9, 7, 1, 9]`, remova os repetidos usando `Set` e mostre a lista final.
7. Dada uma lista de cidades com repetições, mostre quantas cidades **diferentes** existem.
8. Dada uma lista de e-mails, mostre apenas os e-mails únicos, um por linha.
9. Compare `lista.length` e `new Set(lista).size` de uma lista de números e informe quantos repetidos existiam.
10. Verifique se uma lista tem algum valor repetido (compare os tamanhos).

## Nível 3 — Operações entre conjuntos

11. Dados os conjuntos A = {1,2,3,4} e B = {3,4,5,6}, monte a **união** (todos os elementos, sem repetir).
12. Com os mesmos A e B, monte a **interseção** (elementos que estão nos dois) percorrendo A com `for...of` e usando `has` em B.
13. Monte a **diferença** A − B (elementos de A que não estão em B).
14. Dois alunos escolheram matérias favoritas (listas). Mostre as matérias que os dois escolheram e as que só um escolheu.
15. Verifique se A é **subconjunto** de B (todos os elementos de A estão em B).

## Nível 4 — Conjuntos e a página

16. Faça um `<input>` e um botão "Adicionar": cada nome digitado entra em um `Set` e a `<ul>` da página mostra apenas nomes únicos.
17. Mostre na página quantos nomes únicos já foram cadastrados (`size`) a cada clique.
18. Dada uma frase, mostre as **letras diferentes** usadas nela (use um `Set` com as letras; ignore espaços).
19. Sorteie 6 números de 1 a 60 **sem repetir** (use `Set` e repita o sorteio até o `size` chegar a 6).
20. **Desafio:** dada uma lista de votos (`['A','B','A','C','B','A']`), mostre os candidatos únicos (Set) e quantos votos cada um recebeu (frequência).
