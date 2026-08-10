Professor(a): Sinval Silva Júnior

Componente Curricular: Banco de Dados

Turma(s): 3º Ano Integral

Período previsto: 10/08 a 14/08 (Semana 33)

CONTEÚDO / TEMA DA AULA
Coluna de tabela como equivalente da variável (guarda um valor por vez) e a cláusula WHERE do SQL como estrutura condicional (filtra as linhas que satisfazem uma condição, o "if" aplicado a uma tabela).

HABILIDADES (BNCC)
(EM13TEC02) Utilizar ferramentas e linguagens de programação para solucionar problemas e criar interfaces. (Competência Técnica) Relacionar o conceito de variável (JavaScript) ao de coluna/campo de tabela, e o conceito de estrutura condicional (if) à cláusula WHERE de uma consulta SQL.

DESENVOLVIMENTO DAS AULAS (2 aulas)
Aula 1 (Segunda-feira, 07:00h - Sala de Aula / Teórica):
Resumo para o quadro (Para cópia dos alunos):
"1. Variável (JavaScript) guarda um valor por vez; coluna de uma tabela guarda um valor por vez, em cada linha.
2. Uma tabela é, na prática, um conjunto organizado de 'variáveis com nome' (as colunas), repetidas linha a linha.
3. SELECT * FROM tabela; devolve todas as linhas — sem nenhuma condição aplicada."
Atividade Teórica: Apresentação da analogia variável x coluna, com exemplos de uma tabela simples (ex: alunos: nome, idade, media), preparando o vocabulário para a cláusula WHERE trabalhada na Aula 2. Prompt para geração de slides no NotebookLM: ver seção "Slides (NotebookLM)" ao final deste arquivo.

Aula 2 (Segunda-feira, 13:20h - Sala de Aula / Prática):
Resumo para o quadro (Para cópia dos alunos):
"4. WHERE filtra as linhas: só aparecem no resultado as que satisfazem a condição.
5. SELECT * FROM alunos WHERE idade >= 18; — mesma ideia do if (idade >= 18) do JavaScript, aplicada a uma tabela inteira.
6. Operadores de comparação do SQL: = > < >= <= <> — quase os mesmos usados no if do JavaScript."
Descrição da aula: Exercícios práticos de SELECT ... WHERE sobre uma tabela de exemplo (ex: alunos, com colunas nome/idade/media), comparando explicitamente cada consulta com o if/else equivalente em JavaScript visto em Programação Web II na mesma semana.

AVALIAÇÃO
Avaliação contínua através da participação na analogia variável x coluna (Aula 1) e da correta escrita de consultas SELECT ... WHERE (Aula 2).

RECOMPOSIÇÃO DE APRENDIZAGEM
Para alunos com dificuldade de abstração, montar junto, linha por linha de uma tabela pequena no quadro, quais linhas "passariam" por uma condição WHERE, antes de escrever a consulta SQL correspondente.

OBSERVAÇÕES:
Semana volta ao conteúdo normal de Banco de Dados (sem instalação de ambiente). Conexão direta com a estrutura condicional (if/else) e a declaração de variáveis vistas em Programação Web II na mesma semana.

## Slides (NotebookLM) — prompt para a Aula 1 (Teórica)

```
Você é um assistente de criação de slides para uma aula técnica de Ensino Médio Técnico
(disciplina: Banco de Dados, turma 3INT).

Crie uma apresentação de slides sobre "Coluna de tabela como variável, e WHERE como
estrutura condicional", dividida em DUAS PARTES:

PARTE 1 — RESUMO PARA O ALUNO COPIAR NO CADERNO (2 slides)
1. Variável guarda um valor por vez; coluna de tabela guarda um valor por vez, em cada linha.
2. Uma tabela é um conjunto organizado de "variáveis com nome" (colunas), repetido linha a linha.
3. WHERE filtra linhas: só aparecem as que satisfazem a condição, igual um if.

PARTE 2 — EXPLICAÇÃO DETALHADA PARA O PROFESSOR APRESENTAR
1. Exemplo de tabela simples (alunos: nome, idade, media) com 4-5 linhas de dados fictícios.
2. SELECT * FROM alunos; sem condição — todas as linhas aparecem.
3. SELECT * FROM alunos WHERE idade >= 18; comparado lado a lado com o equivalente em
   JavaScript: if (idade >= 18) { ... }.
4. Tabela de operadores de comparação do SQL (=, >, <, >=, <=, <>) ao lado dos operadores
   equivalentes do JavaScript vistos na Aula 2 de Programação Web II.
5. Slide final com 1-2 exercícios de consulta WHERE para os alunos resolverem.

Formatação: pouco texto por slide, exemplos em tabela e em bloco de código monoespaçado,
português do Brasil, tom de professor para Ensino Médio Técnico.
```
