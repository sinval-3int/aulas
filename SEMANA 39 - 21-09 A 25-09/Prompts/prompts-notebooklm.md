# Prompts para o NotebookLM — Aulas expositivas da Semana 39

Quatro aulas expositivas (terça e quinta), em sequência: **Listas → Conjuntos → Frequência (e extras de listas/conjuntos) → Laço while**. Colar cada prompt no NotebookLM (pode subir `aula3-js-if-else.md` da Semana 33 como fonte para retomar estruturas de controle).

Contexto comum aos quatro prompts: aulas de Ensino Médio Técnico, turma 3INT; sem Node/terminal; HTML/CSS já prontos; `var` e `document.getElementById`; aula estritamente expositiva, sem exercícios.

---

## Aula 1 — Listas (Terça, 09:45, Laboratório de Hardware)

```
Você é um assistente de criação de slides para uma aula técnica de Ensino Médio Técnico (turma 3INT). Crie slides sobre "Listas (arrays) em JavaScript". A aula é EXPOSITIVA, sem exercícios.

PARTE 1 — RESUMO PARA O ALUNO COPIAR NO CADERNO (2 a 3 slides), tópicos numerados e curtos:
1. Declaração: var frutas = ['maçã', 'uva', 'pera'];
2. Acesso por índice (começa em 0): frutas[0].
3. frutas.length e frutas.push('manga').
4. Percorrer com for: for (var i = 0; i < frutas.length; i++) { frutas[i] }.

PARTE 2 — EXPLICAÇÃO PARA O PROFESSOR APRESENTAR:
- Motivação: várias notas em várias variáveis x uma lista.
- Índice começando em 0 (com desenho de caixinhas numeradas).
- length e push, com exemplo ligado a um <ul> via document.getElementById.
- Listas de números, textos e objetos (ligação com dados vindos de um banco).
- Erros comuns: índice fora da lista (undefined), esquecer que começa em 0.
- Slide final: perguntas de fixação para o professor fazer oralmente (a prática é na quarta-feira).

Regras: pouco texto, blocos de código monoespaçados, HTML e JS lado a lado, português do Brasil.
```

---

## Aula 2 — Conjuntos (Terça, 10:35, Laboratório de Software)

```
Crie slides sobre "Conjuntos (Set) em JavaScript" para aula EXPOSITIVA (turma 3INT, sem exercícios), continuando a aula de Listas.

PARTE 1 — RESUMO PARA O CADERNO (2 a 3 slides):
1. Lista: ordenada, aceita repetidos. Conjunto (Set): não aceita repetidos.
2. var c = new Set([1, 2, 2, 3]); // 1, 2, 3
3. c.add(4); c.has(2); c.delete(1); c.size
4. Remover repetidos: [...new Set(lista)]

PARTE 2 — EXPLICAÇÃO PARA O PROFESSOR:
- Analogia com conjuntos da matemática (sem repetição).
- Tabela comparativa Lista x Conjunto (ordem, repetidos, acesso por índice, quando usar).
- Exemplos de add, has, delete e size ligados a um elemento da página.
- Exemplo: lista de e-mails/cidades com repetidos virando conjunto.
- Como percorrer um Set (for...of) e converter Set em lista.
- Erros comuns: tentar c[0]; esquecer o new.
- Slide final com perguntas orais de fixação (prática na sexta).

Regras: pouco texto, código monoespaçado, português do Brasil.
```

---

## Aula 3 — Frequência e extras de listas/conjuntos (Quinta, 07:00, Design)

```
Crie slides sobre "Frequência de elementos: contando em listas e conjuntos" para aula EXPOSITIVA (turma 3INT, sem exercícios), continuando Listas e Conjuntos.

PARTE 1 — RESUMO PARA O CADERNO (2 a 3 slides):
1. Frequência = quantas vezes um valor aparece.
2. Contador: var cont = 0; for (...) { if (lista[i] === alvo) { cont++; } }
3. Todos de uma vez: freq[item] = (freq[item] || 0) + 1;
4. Únicos: [...new Set(lista)]; quantidade: new Set(lista).size

PARTE 2 — EXPLICAÇÃO PARA O PROFESSOR:
- Problema motivador (ex.: votos numa enquete).
- Contagem manual no quadro, depois o código com for.
- Objeto contador para todos os valores; como exibir em uma tabela HTML.
- Set para valores únicos e comparação lista.length x set.size.
- Extras: indexOf, includes, pop, slice.
- Erros comuns: esquecer de inicializar o contador; confundir = e ===.
- Slide final com perguntas orais de fixação (prática na sexta).

Regras: pouco texto, código monoespaçado, português do Brasil.
```

---

## Aula 4 — Laço while (Quinta, 08:40, Laboratório Web)

```
Crie slides sobre "Laço while em JavaScript" para aula EXPOSITIVA (turma 3INT, sem exercícios). Os alunos já conhecem o for.

PARTE 1 — RESUMO PARA O CADERNO (2 a 3 slides):
1. while (condição) { bloco } — repete enquanto a condição for verdadeira.
2. Preparar a variável antes; alterá-la dentro do bloco.
3. for: voltas conhecidas. while: voltas desconhecidas.
4. break interrompe o laço.

PARTE 2 — EXPLICAÇÃO PARA O PROFESSOR:
- Fluxograma: testa condição → executa → volta ao teste.
- Mesmo exemplo (contar de 1 a 5) escrito com for e com while, lado a lado.
- Quando usar while: repetir até algo acontecer (ex.: somar até passar de 100).
- Percorrer uma lista com while.
- Erro do laço infinito: esquecer de alterar a variável.
- Teste de mesa passo a passo.
- Slide final com perguntas orais de fixação (prática na sexta).

Regras: pouco texto, código monoespaçado, português do Brasil.
```
