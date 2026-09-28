# Prompt para o NotebookLM — Slides (Laboratório de Software: Imersão HTML+CSS+JS, parte 1)

Instruções de uso: subir `../Fonte-Semana-40.md` como fonte no NotebookLM (fonte única da
semana) e colar o prompt abaixo no chat/gerador de slides, informando que o conteúdo desta
aula é a **PARTE C** do arquivo. Se possível, subir também `aula1-js-quadro.md` da Semana 31
e `aula2-js-quadro.md` da Semana 32, que já usam `document.getElementById` nos protótipos.

Aula: **Laboratório de Software — Terça-feira, 10:35h (manhã, expositiva, sem computador)**.

---

**Prompt:**

```
Você é um assistente de criação de slides para uma aula técnica de Ensino Médio Técnico
(disciplina: Laboratório de Software, turma 3INT — curso de Informática/TI), a partir dos
materiais fornecidos como fonte. A turma já usa document.getElementById nos protótipos, mas
nunca teve uma aula explicando o CONCEITO por trás disso (o DOM, por que o id conecta HTML e
JavaScript). Aula só teórica, sem computador — a prática completa é só sexta, depois de uma
segunda parte teórica na quinta.

Crie slides sobre "Imersão HTML + CSS + JavaScript: selecionando elementos com
document.getElementById (parte 1)", em DUAS PARTES.

PARTE 1 — RESUMO PARA O ALUNO COPIAR NO CADERNO (4 a 5 slides)
- Tópicos curtos e numerados, para copiar à mão, sem computador na carteira:
  1. HTML dá a estrutura da página; CSS dá a aparência; JavaScript dá o comportamento.
  2. O DOM é a "ponte": o JavaScript enxerga o HTML como uma árvore de elementos.
  3. Todo elemento pode ter um id="..." único — o "nome" que o JS usa para encontrá-lo.
  4. document.getElementById('id') — devolve, em JS, o elemento do HTML com aquele id.
  5. .value — usado em `<input>`, `<select>`, `<textarea>`, lê/escreve o que está digitado.
- Mesmo nível de linguagem dos resumos das Aulas 1 e 2 (frases curtas, var, sem Node).

PARTE 2 — EXPLICAÇÃO DETALHADA PARA O PROFESSOR APRESENTAR (o restante dos slides)
- Um slide por item, com código completo, HTML e JS sempre lado a lado:
  1. Analogia HTML=planta baixa, CSS=decoração, JS=instalação elétrica (clique dispara ação).
  2. "O que é o DOM" — árvore: `<html>` > `<body>` > `<input>`/`<button>`/`<p>` como galhos.
  3. Exemplo de HTML com 3 ids diferentes:
     ```html
     <input type="text" id="nomeInput" placeholder="Digite seu nome">
     <button id="botaoEnviar">Enviar</button>
     <p id="resultado"></p>
     ```
     Destacar: cada id só pode aparecer uma vez na página.
  4. getElementById pegando os 3 elementos em variáveis:
     ```javascript
     var input = document.getElementById('nomeInput');
     var botao = document.getElementById('botaoEnviar');
     var resultado = document.getElementById('resultado');
     ```
  5. `.value` lendo um input digitado:
     ```javascript
     var nomeDigitado = document.getElementById('nomeInput').value;
     ```
     Se o usuário digitou "Ana", `nomeDigitado` guarda "Ana". `.value` só existe em campos
     de entrada, não em `<p>` ou `<div>`.
  6. Exemplo de TI: formulário de login ou de chamado de suporte usando getElementById+.value.
  7. Erros comuns: id diferente no HTML e no JS (retorna `null`); usar `.value` em elemento
     que não é campo de entrada (isso é `.innerHTML`, próxima aula).
  8. Síntese: "id no HTML → getElementById → .value lê o digitado", anunciando que a próxima
     aula (Design) ensina a escrever de volta no HTML com `.innerHTML`.
  9. Exercício no caderno: dado um HTML com 4-5 ids, os alunos dizem o que cada
     `getElementById('...')` selecionaria.

Regras gerais: pouco texto por slide, código em fonte monoespaçada, HTML e JS lado a lado,
exemplos do universo de TI além dos protótipos da turma, mesma nomenclatura das Aulas 1 e 2
(var, getElementById, sem terminal/Node), português do Brasil.
```
