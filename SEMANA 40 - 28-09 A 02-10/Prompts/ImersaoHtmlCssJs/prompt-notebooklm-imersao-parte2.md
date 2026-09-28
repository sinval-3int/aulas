# Prompt para o NotebookLM — Slides (Design: Imersão HTML+CSS+JS, parte 2)

Instruções de uso: subir `../Fonte-Semana-40.md` como fonte no NotebookLM (fonte única da
semana) e colar o prompt abaixo no chat/gerador de slides, informando que o conteúdo desta
aula é a **PARTE D** do arquivo (a **PARTE C**, dada em Laboratório de Software, serve de
referência de estilo e nomenclatura).

Aula: **Design — Quinta-feira, 07:00h (manhã, expositiva, sem computador)**.

---

**Prompt:**

```
Você é um assistente de criação de slides para uma aula técnica de Ensino Médio Técnico
(disciplina: Design, turma 3INT — curso de Informática/TI). Continuação direta da aula
"Imersão HTML+CSS+JS, parte 1" (getElementById e .value), dada em Laboratório de Software na
terça-feira. Naquela aula a turma aprendeu a LER dados do HTML; agora vai aprender a
ESCREVER/ALTERAR o HTML via JavaScript (.innerHTML), fechando o fluxo entrada →
processamento → saída. Aula só teórica, sem computador — a prática completa (juntando as
duas partes) é só sexta, em Programação Web II.

Crie slides sobre "Imersão HTML + CSS + JavaScript: alterando a página com .innerHTML
(parte 2)", em DUAS PARTES.

PARTE 1 — RESUMO PARA O ALUNO COPIAR NO CADERNO (3 a 4 slides)
- Tópicos curtos e numerados, para copiar à mão, sem computador na carteira:
  1. elemento.innerHTML — lê ou escreve o conteúdo de dentro de um elemento.
  2. elemento.innerHTML = 'texto'; — SUBSTITUI todo o conteúdo que já existia ali.
  3. elemento.innerHTML += 'texto'; — ACRESCENTA conteúdo novo, sem apagar o que já tinha.
  4. Fluxo completo: pega o elemento (getElementById) → lê o valor (.value) → processa
     (variáveis/operadores) → escreve o resultado na tela (.innerHTML).
- Mesmo nível de linguagem da parte 1 (frases curtas, var, sem Node).

PARTE 2 — EXPLICAÇÃO DETALHADA PARA O PROFESSOR APRESENTAR (o restante dos slides)
- Um slide por item, com código completo, HTML e JS sempre lado a lado:
  1. Retomada rápida do fluxo da parte 1 — id, getElementById, .value lendo o digitado. Hoje:
     o que fazer com esse valor depois de processado.
  2. `.innerHTML` escrevendo na tela:
     ```javascript
     document.getElementById('resultado').innerHTML = "Olá, turma!";
     ```
     O `<p id="resultado">`, que estava vazio, passa a mostrar o texto.
  3. Substituir (`=`) x Acrescentar (`+=`):
     ```javascript
     // Substitui: cada clique APAGA o texto anterior
     document.getElementById('lista').innerHTML = "Item novo";
     // Acrescenta: cada clique MANTÉM os anteriores e soma um novo
     document.getElementById('lista').innerHTML += "<li>Item novo</li>";
     ```
     Fazer o "tracing" de 3 cliques seguidos com cada versão, mostrando o resultado final.
  4. Exemplo completo com o IMC já conhecido pela turma:
     ```javascript
     var peso = document.getElementById('pesoInput').value;
     var altura = document.getElementById('alturaInput').value;
     var imc = peso / (altura * altura);
     document.getElementById('resultadoIMC').innerHTML = "Seu IMC é: " + imc.toFixed(2);
     ```
     Fluxo completo: getElementById (pega) → .value (lê) → processa (calcula) → innerHTML
     (escreve).
  5. Exemplo de TI com `+=`: lista de chamados de suporte crescendo a cada clique, um por vez
     (`document.getElementById('listaChamados').innerHTML += "<li>" + texto + "</li>";`).
  6. Erros comuns: `.innerHTML` só em elementos de exibição (`<p>`, `<div>`, `<ul>`), não em
     `<input>` (isso é `.value`); usar `=` quando a intenção era acrescentar perde os itens
     anteriores.
  7. Síntese dos dois fluxos da semana: "id → getElementById → .value (lê) → processamento →
     .innerHTML ou += (escreve)", anunciando que sexta (Programação Web II) é o dia de rodar
     tudo no computador.
  8. Exercício de tracing no caderno: 2-3 trechos de HTML+JS prontos com `.value`,
     `.innerHTML` e `.innerHTML +=`, os alunos preveem por escrito o que apareceria na tela.

Regras gerais: pouco texto por slide, código em fonte monoespaçada, HTML e JS lado a lado,
exemplos do universo de TI além do IMC já conhecido, mesma nomenclatura da parte 1 (var,
getElementById, sem terminal/Node), português do Brasil.
```
