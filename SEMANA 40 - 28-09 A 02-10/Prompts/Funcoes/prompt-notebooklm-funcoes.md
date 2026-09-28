# Prompt para o NotebookLM — Geração de Slides (Aula 4: Funções, introdução)

Instruções de uso: subir `../Fonte-Semana-40.md` como fonte no NotebookLM (fonte única da
semana) e colar o prompt abaixo no chat/gerador de slides, informando que o conteúdo desta
aula é a **PARTE E** do arquivo. Se quiser retomada de condicionais, subir também
`aula3-js-if-else.md` da Semana 33.

---

**Prompt:**

```
Você é um assistente de criação de slides para uma aula técnica de Ensino Médio Técnico
(disciplina: Programação Web II, turma 3INT — curso de Informática/TI), a partir do material
fornecido como fonte. A turma já sabe variáveis, operadores e estruturas de controle, e usa
document.getElementById/.value/.innerHTML nos próprios protótipos. Esta é a última aula
teórica de JavaScript do curso. Aula só teórica, sem computador — continua, na sequência, em
uma aula prática (Laboratório Web, 14:10h), que os slides devem preparar diretamente.

Crie slides sobre "Introdução a Funções em JavaScript", em DUAS PARTES.

PARTE 1 — RESUMO PARA O ALUNO COPIAR NO CADERNO (2 a 3 slides)
- Tópicos curtos e numerados, para copiar à mão, sem computador na carteira:
  1. Sintaxe: function nomeDaFuncao(parametro1, parametro2) { bloco de comandos }.
  2. Parâmetro é a variável na declaração; argumento é o valor enviado na chamada.
  3. Como chamar: nomeDaFuncao(valor1, valor2); — só executa quando é chamada.
  4. return valor; — devolve um resultado e encerra a função.
- Mesmo nível de linguagem dos resumos das Aulas 1 a 3 (frases curtas, var, sem Node).

PARTE 2 — EXPLICAÇÃO DETALHADA PARA O PROFESSOR APRESENTAR (o restante dos slides)
- Um slide por item, com código completo, sempre em cima do HTML/CSS já pronto (sem Node/
  terminal):
  1. Motivação: código repetido até aqui (IMC, aprovado/recuperação) e o problema de copiar a
     mesma lógica em vários lugares da página.
  2. Função sem parâmetro:
     ```javascript
     function saudacao() {
       document.getElementById('resultado').innerHTML = "Olá, turma!";
     }
     ```
  3. Função com parâmetro, sem retorno:
     ```javascript
     function verificarIdade(idade) {
       if (idade >= 18) {
         document.getElementById('resultado').innerHTML = "Maior de idade.";
       } else {
         document.getElementById('resultado').innerHTML = "Menor de idade.";
       }
     }
     ```
  4. Função com parâmetro e `return`, separando cálculo de exibição:
     ```javascript
     function calcularIMC(peso, altura) {
       return peso / (altura * altura);
     }
     function mostrarIMC() {
       var imc = calcularIMC(peso, altura);
       document.getElementById('resultadoIMC').innerHTML = "Seu IMC é: " + imc.toFixed(2);
     }
     ```
  5. Analogia com função matemática: entrada (parâmetro) → processamento (bloco) → saída
     (`return`), igual a `f(x) = x²`.
  6. Erros comuns (tabela certo x errado): esquecer os parênteses (`function f() {}` x
     `function f {}`); declarar sem chamar (`saudacao();` x `saudacao;`, que não executa);
     usar `return` fora de uma função.
  7. Slide de transição para a prática: "agora é sua vez — pegue um código já pronto do seu
     protótipo e transforme em função", usando par/ímpar e aprovado/recuperação/reprovado
     como ponto de partida (resolvidos na aula seguinte, em Laboratório Web).

Regras gerais: pouco texto por slide, código em fonte monoespaçada, HTML e JS lado a lado
quando envolver os dois, mesma nomenclatura das Aulas 1 a 3 (var, getElementById, sem
terminal/Node), português do Brasil.
```
