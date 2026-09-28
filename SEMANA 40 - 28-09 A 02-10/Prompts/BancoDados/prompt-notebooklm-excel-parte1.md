# Prompt para o NotebookLM — Slides (Banco de Dados: Introdução ao Excel, parte 1)

Instruções de uso: subir `../Fonte-Semana-40.md` como fonte no NotebookLM (fonte única da
semana) e colar o prompt abaixo no chat/gerador de slides, informando que o conteúdo desta
aula é a **PARTE A** do arquivo.

Aula: **Banco de Dados — Segunda-feira, 07:00h (manhã, expositiva, sem computador)**.

---

**Prompt:**

```
Você é um assistente de criação de slides para uma aula técnica de Ensino Médio Técnico
(disciplina: Banco de Dados, turma 3INT — curso de Informática/TI). A turma já programa em
JavaScript (variáveis, operadores, estruturas de controle) e vem construindo protótipos de
página web (HTML+CSS+JS) desde o meio do ano. Este é o primeiro contato da turma com Excel
e com o conceito de organização tabular de dados, que servirá de base para os próximos
conteúdos de Banco de Dados (tabelas, registros, campos, SQL).

Crie uma apresentação de slides sobre "Introdução ao Excel: organizando dados em planilhas
(parte 1)", dividida em DUAS PARTES.

PARTE 1 — RESUMO PARA O ALUNO COPIAR NO CADERNO (4 a 5 slides)
- Texto curto, direto, em tópicos numerados, sem explicação longa — é para o aluno copiar
  à mão, sem computador na carteira.
- Deve conter, na ordem:
  1. O que é uma planilha eletrônica (Excel, Google Sheets): um programa para organizar
     dados em linhas e colunas, dentro de "abas" (cada aba é uma tabela).
  2. Linha = registro: um conjunto completo de informações sobre UMA coisa só (uma pessoa,
     uma tarefa, um produto).
  3. Coluna = campo (ou atributo): um tipo de informação que se repete em todos os
     registros (ex.: "Nome", "Idade", "Cidade").
  4. Célula = o valor de um campo, para um registro específico (o cruzamento de uma linha
     com uma coluna).
  5. Cada coluna deve guardar sempre o mesmo TIPO de dado (texto, número, data) — nunca
     misturar tipos na mesma coluna.
- Manter linguagem simples, de Ensino Médio Técnico, sem jargão de banco de dados avançado
  ainda (não usar "chave primária", "SQL" etc. nesta aula — isso vem depois).

PARTE 2 — EXPLICAÇÃO DETALHADA PARA O PROFESSOR APRESENTAR (o restante dos slides)
- Um slide por bloco de conteúdo, sempre com EXEMPLOS CONCRETOS, aplicados ao dia a dia de
  TI e de projetos que a turma já conhece:
  1. Slide de abertura: "Por que planilha antes de Banco de Dados?" — mostrar que toda
     tabela de banco de dados nasce da mesma ideia de uma planilha: dados organizados em
     linhas e colunas. Uma planilha é o primeiro passo para pensar como um banco de dados
     pensa.
  2. Slide "Linha = Registro" — exemplo com uma tabela de ALUNOS: cada linha é um aluno
     completo (Nome, Matrícula, Turma, Nota). Deixar claro: "a linha do João tem tudo sobre
     o João; a linha da Maria tem tudo sobre a Maria".
  3. Slide "Coluna = Campo" — na mesma tabela de alunos, destacar a coluna "Nota": ela se
     repete para TODOS os alunos, é sempre o mesmo tipo de informação (um número).
  4. Slide "Célula = valor" — apontar uma célula específica (linha do João, coluna Nota) e
     mostrar que ali está só UM valor: a nota do João.
  5. Slide "Tipos de dado por coluna" — exemplo de erro comum: numa coluna "Idade", alguém
     digita "quinze anos" em vez de "15". Mostrar por que isso quebra fórmulas e ordenação.
     Trazer também um exemplo do mundo de TI: uma planilha de controle de chamados de
     suporte técnico, com colunas "Nº do chamado" (número), "Data de abertura" (data),
     "Cliente" (texto), "Status" (texto: aberto/em andamento/fechado).
  6. Slide "Planilha x Banco de Dados de verdade" (só uma introdução, sem aprofundar): uma
     planilha é ótima para poucos dados e uma pessoa só editando; um banco de dados
     (assunto das próximas semanas) resolve quando há muitos dados, muitas pessoas mexendo
     ao mesmo tempo, e dados repetidos em vários lugares (ex.: o nome do mesmo cliente
     aparecendo em 10 planilhas diferentes).
  7. Slide-síntese: recapitular Linha (registro) / Coluna (campo) / Célula (valor) com um
     desenho de tabela simples, e anunciar que a próxima aula (Laboratório de Hardware,
     terça-feira) vai ensinar fórmulas (soma, média) e organização de projetos com Excel.
  8. Slide final com 2-3 exemplos de tabelas do dia a dia de TI para os alunos identificarem
     de cabeça, em voz alta, o que é linha/coluna/célula em cada uma: (a) uma planilha de
     inventário de computadores do laboratório (Patrimônio, Modelo, Setor, Estado de
     conservação); (b) uma planilha de senhas/acessos de uma equipe (Sistema, Usuário, Nível
     de acesso); (c) uma planilha de chamados de suporte (já usada no slide 5).

Regras gerais de formatação:
- Slides com pouco texto, uma ideia por slide, sempre com exemplo visual de uma mini-tabela
  (linhas e colunas desenhadas, não precisa ser print de tela real).
- Usar sempre exemplos do universo de TI e de projetos escolares/técnicos (chamados de
  suporte, inventário de equipamentos, controle de projeto, cadastro de alunos) — nunca
  usar apenas exemplos genéricos de "lista de compras" sem conexão com o curso.
- Português do Brasil, tom de professor para turma de Ensino Médio Técnico em Informática.
- Não usar termos avançados de banco de dados (SQL, chave primária, chave estrangeira,
  normalização) — isso é conteúdo de semanas futuras.
```
