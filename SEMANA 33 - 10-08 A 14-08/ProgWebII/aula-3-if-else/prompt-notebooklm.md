# Prompt para o NotebookLM — Geração de Slides (Aula 3: if/else/else if)

Instruções de uso: subir `aula3-js-if-else.md` como fonte no NotebookLM (junto com `aula2-js-quadro.md` da Semana 32, se quiser retomada de variáveis/operadores) e colar o prompt abaixo no chat/gerador de slides.

---

**Prompt:**

```
Você é um assistente de criação de slides para uma aula técnica de Ensino Médio Técnico
(disciplina: Programação Web II, turma 3INT), a partir do material fornecido como fonte.

Crie uma apresentação de slides sobre "Estrutura Condicional em JavaScript (if / else / else if)
integrada a um site HTML/CSS já existente", dividida em DUAS PARTES:

PARTE 1 — RESUMO PARA O ALUNO COPIAR NO CADERNO (2 a 3 slides)
- Texto curto, direto, em tópicos numerados, sem explicação longa — é para o aluno copiar à mão.
- Deve conter:
  1. Como ligar um arquivo script.js a um HTML já existente (<script src="script.js"></script>).
  2. document.getElementById('id') e .value — como o JavaScript lê dados do HTML.
  3. Sintaxe do if, do if/else e do if/else if/else, no formato de bloco de código.
  4. As regras principais: condição entre parênteses, bloco entre chaves, "===" vs "=",
     e a ideia de que só um bloco executa.
- Use o mesmo nível de linguagem do resumo de quadro da Aula 2 (variáveis e operadores):
  frases curtas, sem jargão desnecessário.

PARTE 2 — EXPLICAÇÃO DETALHADA PARA O PROFESSOR APRESENTAR (o restante dos slides)
- Um slide por conceito, com exemplos de código completos e comentados, sempre em cima de um
  HTML/CSS já pronto (não usar Node nem terminal):
  1. Tríade HTML + CSS + JS: cada arquivo com seu papel, e como conectá-los.
  2. document.getElementById e manipulação do conteúdo da página (innerHTML/textContent).
  3. IF simples — sintaxe, quando usar, exemplo lendo um <input> e escrevendo em um <p>.
  4. IF/ELSE — sintaxe, diferença para o IF simples, exemplo de maioridade.
  5. IF/ELSE IF/ELSE — sintaxe, ordem de avaliação das condições, exemplo com 3 saídas
     (aprovado / recuperação / reprovado a partir de uma média).
  6. Erros comuns de sintaxe (tabela: certo x errado) — condição sem parênteses, bloco sem
     chaves, "=" no lugar de "==="/"==", "elseif" junto em vez de "else if".
  7. Slide de conexão com as outras disciplinas da semana: o mesmo "se/senão" testado em
     hardware (cabo de rede conectado ou não), em rede (requisição com sucesso ou erro na
     aba Network) e em banco de dados (cláusula WHERE como filtro condicional).
  8. Slide final com 2-3 exercícios de prática, integrados ao próprio index.html/script.js
     (par/ímpar, maioridade, aprovado/recuperação/reprovado) para os alunos resolverem em aula.

Regras gerais de formatação:
- Slides com pouco texto, foco em blocos de código bem formatados (fonte monoespaçada).
- Sempre mostrar o HTML e o JavaScript lado a lado quando o exemplo envolver os dois.
- Manter consistência de nomenclatura com o material da Aula 2 (variáveis, operadores).
- Português do Brasil, tom de professor para turma de Ensino Médio Técnico.
```
