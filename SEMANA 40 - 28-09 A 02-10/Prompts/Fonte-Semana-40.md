# Fonte de Conteúdo — Semana 40 (28/09 a 02/10)
## 3º INT — Todas as aulas teóricas da semana

Este arquivo reúne o conteúdo de quadro de todas as 5 aulas expositivas da semana, para ser
usado como **fonte única** no NotebookLM. Cada prompt de geração de slides (em
`BancoDados/`, `ImersaoHtmlCssJs/` e `Funcoes/`) indica qual parte deste arquivo usar.

---
---

# PARTE A — Introdução ao Excel, parte 1 (Organizando dados em planilhas)
### Banco de Dados — Segunda-feira, 07:00h

## A.0. Por que planilha antes de Banco de Dados

Toda tabela de banco de dados nasce da mesma ideia de uma planilha: dados organizados em
**linhas e colunas**. Antes de aprender bancos de dados de verdade (com SQL, tabelas
relacionadas etc.), a turma vai aprender a organizar dados numa planilha eletrônica (Excel
ou Google Sheets) — o primeiro passo para "pensar como um banco de dados pensa".

## A.1. Planilha, aba e tabela

Uma **planilha eletrônica** (Excel, Google Sheets) é um programa para organizar dados em
linhas e colunas, dentro de **abas** — cada aba é, na prática, uma tabela.

```
Aba "Alunos"          Aba "Chamados"
+--------+-------+     +--------+-------------+
| Nome   | Nota  |     | Nº     | Status      |
+--------+-------+     +--------+-------------+
| João   | 8.5   |     | 001    | Aberto      |
| Maria  | 9.0   |     | 002    | Fechado     |
+--------+-------+     +--------+-------------+
```

## A.2. Linha = Registro

Cada **linha** de uma tabela é um **registro**: um conjunto completo de informações sobre
UMA coisa só (uma pessoa, uma tarefa, um chamado, um produto).

**Exemplo — tabela de alunos:**

| Nome  | Matrícula | Turma | Nota |
|-------|-----------|-------|------|
| João  | 2024001   | 3INT  | 8.5  |
| Maria | 2024002   | 3INT  | 9.0  |

A linha do João tem **tudo** sobre o João; a linha da Maria tem **tudo** sobre a Maria. Cada
registro é independente dos demais.

## A.3. Coluna = Campo (ou atributo)

Cada **coluna** é um **campo**: um tipo de informação que se repete em todos os registros
(ex.: "Nome", "Matrícula", "Nota"). Na tabela acima, a coluna "Nota" se repete para todos os
alunos — é sempre o mesmo tipo de informação (um número).

## A.4. Célula = Valor

A **célula** é o cruzamento de uma linha com uma coluna: o valor de um campo, para um
registro específico. Na tabela de alunos, a célula na linha do João e coluna "Nota" guarda
só um valor: `8.5`.

## A.5. Tipos de dado por coluna

Cada coluna deve guardar sempre o **mesmo tipo** de dado (texto, número, data) — nunca
misturar tipos na mesma coluna.

**Exemplo de erro comum:** numa coluna "Idade", alguém digita `"quinze anos"` em vez de
`15`. Isso quebra fórmulas de soma/média e a ordenação da tabela.

**Exemplo do dia a dia de TI — planilha de controle de chamados de suporte técnico:**

| Nº do chamado (número) | Data de abertura (data) | Cliente (texto) | Status (texto) |
|---|---|---|---|
| 101 | 22/09/2026 | Empresa A | Aberto |
| 102 | 23/09/2026 | Empresa B | Em andamento |
| 103 | 24/09/2026 | Empresa C | Fechado |

## A.6. Planilha x Banco de Dados de verdade (introdução, sem aprofundar)

Uma planilha é ótima para poucos dados e uma pessoa só editando por vez. Um **banco de
dados** (assunto das próximas semanas) resolve quando:
- há muitos dados;
- muitas pessoas mexem ao mesmo tempo;
- os mesmos dados aparecem repetidos em vários lugares (ex.: o nome do mesmo cliente
  digitado em 10 planilhas diferentes, podendo ficar inconsistente).

## A.7. Exemplos para identificar Linha/Coluna/Célula (exercício de fixação)

1. Planilha de **inventário de computadores** do laboratório: colunas Patrimônio, Modelo,
   Setor, Estado de conservação.
2. Planilha de **senhas/acessos de uma equipe**: colunas Sistema, Usuário, Nível de acesso.
3. Planilha de **chamados de suporte** (exemplo da seção A.5).

Para cada uma: aponte o que seria uma linha (registro), uma coluna (campo) e uma célula
(valor).

## A.8. Exercício em sala (sem computador)

O professor lista no quadro 5 registros soltos e desorganizados de um projeto fictício
(tarefa, responsável, prazo, status). Os alunos desenham no caderno uma tabela (linhas e
colunas) e organizam esses dados corretamente, identificando qual é o campo e qual é o
registro.

---
---

# PARTE B — Introdução ao Excel, parte 2 (Fórmulas e organização de projetos)
### Laboratório de Hardware — Terça-feira, 09:45h

## B.0. Retomada da parte 1

Na aula anterior (Banco de Dados, segunda-feira), a turma aprendeu: **linha = registro**,
**coluna = campo**, **célula = valor**, e que cada coluna deve manter um tipo consistente de
dado. Hoje: como fazer a planilha **calcular sozinha** e como usá-la para **organizar um
projeto**.

## B.1. Por que usar fórmula

Calcular manualmente o total de horas de um projeto com 20 tarefas é lento e sujeito a
erro. Uma fórmula recalcula automaticamente sempre que um valor muda — e essa é a grande
vantagem de uma planilha sobre uma lista escrita à mão.

## B.2. `=SOMA(intervalo)`

Soma todos os valores de um intervalo de células.

**Exemplo — coluna "Horas estimadas" de um projeto de desenvolvimento web:**

| Tarefa | Horas estimadas |
|---|---|
| Criar tela de login | 4 |
| Criar tela de cadastro | 6 |
| Conectar ao banco de dados | 8 |
| Estilizar com CSS | 5 |
| Testar formulários | 3 |
| Publicar no servidor | 2 |
| **Total** | `=SOMA(B2:B7)` → **28** |

## B.3. `=MÉDIA(intervalo)`

Calcula a média de um intervalo de células. Na tabela acima, `=MÉDIA(B2:B7)` → **4.67**,
mostrando o tamanho médio das tarefas do projeto.

## B.4. `=CONT.NÚM(intervalo)` / `=CONT.VALORES(intervalo)`

Conta quantas células têm valor. Útil para acompanhar o progresso de um projeto: contar
quantas tarefas já estão com status "Concluída" numa coluna de Status — o mesmo tipo de
acompanhamento que ferramentas profissionais como Trello ou Jira mostram num quadro Kanban.

## B.5. Montando um cronograma de projeto

Um **cronograma de projeto** em planilha é uma tabela com colunas como: Tarefa,
Responsável, Prazo, Horas estimadas, Status.

**Exemplo completo (projeto de manutenção do laboratório de informática):**

| Tarefa | Responsável | Prazo | Horas estimadas | Status |
|---|---|---|---|---|
| Trocar memória RAM (5 máquinas) | João | 30/09 | 3 | Concluída |
| Formatar e reinstalar SO | Maria | 01/10 | 6 | Em andamento |
| Testar rede local | Pedro | 01/10 | 2 | A fazer |
| Organizar cabeamento | Ana | 02/10 | 4 | A fazer |
| **Totais** | — | — | `=SOMA(D2:D5)` → **15** | `=CONT.VALORES(E2:E5)` → **4** |

## B.6. Planilha como ferramenta de gestão de projeto

Termos como **cronograma**, **backlog de tarefas**, **responsável** e **prazo** aparecem em
ferramentas profissionais de gestão (Trello, Jira, Planner). A planilha simples já ensina a
mesma lógica na prática, sem precisar de outra ferramenta.

## B.7. Exercício em sala (sem computador)

O professor escreve no quadro uma tabela de 6 tarefas de um projeto fictício com horas
estimadas (ex.: 3h, 5h, 8h, 6h, 4h, 2h). Os alunos calculam **à mão** o total de horas do
projeto (soma) e a média de horas por tarefa, preenchendo uma linha de "Totais" ao final da
tabela no caderno — sem usar calculadora nem computador.

## B.8. Prática (quarta-feira, no computador)

Retomar a planilha de projeto iniciada em Banco de Dados (segunda-feira, 13:20h) e montar um
cronograma completo com as fórmulas `=SOMA()` e `=MÉDIA()` funcionando de verdade.

---
---

# PARTE C — Imersão HTML+CSS+JS, parte 1 (Selecionando elementos com getElementById)
### Laboratório de Software — Terça-feira, 10:35h

## C.0. A tríade HTML + CSS + JavaScript

- **HTML** dá a estrutura da página (o "esqueleto": títulos, parágrafos, inputs, botões).
- **CSS** dá a aparência (cores, tamanhos, espaçamentos).
- **JavaScript** dá o comportamento (faz a página reagir a cliques, cálculos, mudanças).

Analogia: HTML é a planta baixa de uma casa; CSS é a decoração/pintura; JavaScript é a
instalação elétrica que faz as coisas "funcionarem" (o interruptor liga a lâmpada, assim
como um clique dispara uma ação em JavaScript).

## C.1. O que é o DOM

O **DOM** (Document Object Model) é a forma como o JavaScript "enxerga" o HTML: uma árvore
de elementos, onde é possível descer/subir para encontrar qualquer elemento específico.

```
<html>
 └── <body>
      ├── <input id="nomeInput">
      ├── <button id="botaoEnviar">
      └── <p id="resultado"></p>
```

## C.2. `id` — o nome do elemento

Todo elemento HTML pode receber um `id="..."` único — é o "nome" que o JavaScript usa para
encontrar aquele elemento específico. Diferente de uma classe CSS (que pode se repetir), um
`id` só pode aparecer **uma vez** na página.

```html
<input type="text" id="nomeInput" placeholder="Digite seu nome">
<button id="botaoEnviar">Enviar</button>
<p id="resultado"></p>
```

## C.3. `document.getElementById('id')`

Devolve, em JavaScript, o elemento do HTML que tem aquele `id`.

```javascript
var input = document.getElementById('nomeInput');
var botao = document.getElementById('botaoEnviar');
var resultado = document.getElementById('resultado');
```

A partir daqui, a variável `input`, por exemplo, "é" aquele elemento do HTML — o JavaScript
pode ler ou alterar coisas nele.

## C.4. `.value` — lendo o que o usuário digitou

Usado em `<input>`, `<select>` e `<textarea>`: lê (ou escreve) o que está digitado ou
selecionado.

```javascript
var nomeDigitado = document.getElementById('nomeInput').value;
```

Se o usuário digitou "Ana" no campo, a variável `nomeDigitado` guarda o texto `"Ana"`.
`.value` só faz sentido em campos de entrada — não existe em `<p>` ou `<div>`.

## C.5. Exemplo do dia a dia de TI

Por trás de qualquer botão "Entrar" ou "Enviar" de um site real existe um
`document.getElementById(...).value` lendo o que foi digitado:
- um formulário de **login** (campo usuário + campo senha);
- um formulário de **cadastro de chamado de suporte** (campo "descrição do problema").

## C.6. Regras de sintaxe (erros comuns)

| Regra | Certo | Errado |
|---|---|---|
| O texto do `id` deve ser idêntico nos dois lugares | `id="nomeInput"` e `getElementById('nomeInput')` | `id="nomeInput"` e `getElementById('nomeinput')` (erro de digitação → retorna `null`) |
| `.value` só em campos de entrada | `document.getElementById('nomeInput').value` | `document.getElementById('resultado').value` (resultado é um `<p>`, não tem `.value`) |

## C.7. Exercício em sala (sem computador)

O professor projeta/entrega um trecho de HTML impresso com 4-5 elementos diferentes, cada um
com um `id` (ex.: `id="nomeInput"`, `id="resultado"`, `id="botaoEnviar"`). Ao lado de cada
`document.getElementById('...')` escrito no quadro, os alunos escrevem no caderno qual
elemento do HTML seria selecionado.

## C.8. Próxima aula

Design (quinta-feira) ensina a outra metade do fluxo: como **escrever de volta** no HTML com
`.innerHTML`.

---
---

# PARTE D — Imersão HTML+CSS+JS, parte 2 (Alterando a página com innerHTML)
### Design — Quinta-feira, 07:00h

## D.0. Retomada da parte 1

Na aula anterior (Laboratório de Software, terça-feira), a turma aprendeu a **ler** dados do
HTML: `id` no HTML → `document.getElementById` no JS → `.value` lê o que foi digitado. Hoje:
o que fazer com esse valor depois de processado — como **escrever/alterar** o HTML.

## D.1. `.innerHTML` — escrevendo na tela

Lê ou escreve o conteúdo (texto ou HTML) de dentro de um elemento.

```html
<p id="resultado"></p>
```
```javascript
document.getElementById('resultado').innerHTML = "Olá, turma!";
```

O `<p>`, que estava vazio, passa a mostrar o texto na tela.

## D.2. Substituir (`=`) x Acrescentar (`+=`)

```javascript
// Substitui: cada clique APAGA o texto anterior
document.getElementById('lista').innerHTML = "Item novo";

// Acrescenta: cada clique MANTÉM os anteriores e soma um novo
document.getElementById('lista').innerHTML += "<li>Item novo</li>";
```

Fazendo o "tracing" de 3 cliques seguidos: com `=`, a tela sempre mostra só o último item;
com `+=`, a tela acumula todos os itens, um após o outro.

## D.3. Exemplo completo — cálculo de IMC

Reaproveitando o protótipo já conhecido pela turma:

```html
<input type="number" id="pesoInput" placeholder="Peso (kg)">
<input type="number" id="alturaInput" placeholder="Altura (m)">
<button id="botaoCalcular">Calcular</button>
<p id="resultadoIMC"></p>
```
```javascript
var peso = document.getElementById('pesoInput').value;
var altura = document.getElementById('alturaInput').value;
var imc = peso / (altura * altura);
document.getElementById('resultadoIMC').innerHTML = "Seu IMC é: " + imc.toFixed(2);
```

Fluxo completo: `getElementById` (pega) → `.value` (lê) → processa (calcula) → `.innerHTML`
(escreve o resultado).

## D.4. Exemplo com `+=` — lista que cresce

Cenário de TI: registrar chamados de suporte na tela, um por vez, sem apagar os anteriores.

```html
<input type="text" id="chamadoInput" placeholder="Descreva o chamado">
<button id="botaoAdicionar">Adicionar chamado</button>
<ul id="listaChamados"></ul>
```
```javascript
var texto = document.getElementById('chamadoInput').value;
document.getElementById('listaChamados').innerHTML += "<li>" + texto + "</li>";
```

## D.5. Regras de sintaxe (erros comuns)

| Regra | Certo | Errado |
|---|---|---|
| `.innerHTML` em elementos de exibição | `document.getElementById('resultado').innerHTML = "..."` (`<p>`, `<div>`, `<ul>`) | `document.getElementById('nomeInput').innerHTML = "..."` (deveria ser `.value` num `<input>`) |
| Usar `+=` quando a intenção é acrescentar | `innerHTML += "<li>...</li>"` para uma lista que cresce | `innerHTML = "<li>...</li>"` (perde os itens anteriores sem querer) |

## D.6. Síntese do fluxo completo da imersão

```
id no HTML → getElementById → .value (lê) → processamento (variáveis/operadores) → .innerHTML ou += (escreve)
```

## D.7. Exercício em sala (sem computador)

O professor escreve no quadro 2-3 trechos de HTML + JavaScript já prontos, usando `.value`,
`.innerHTML` e `.innerHTML +=`. Os alunos fazem o "tracing" de cada um — sem rodar no
navegador, preveem e escrevem no caderno exatamente o que apareceria na tela após a
execução.

## D.8. Próxima aula

Sexta-feira (Programação Web II) é o dia de colocar tudo isso para rodar de verdade no
computador, juntando as duas partes da imersão.

---
---

# PARTE E — Introdução a Funções em JavaScript
### Laboratório Web — Quinta-feira, 08:40h

## E.0. Por que Funções

Até aqui, sempre que era preciso calcular o IMC ou testar a média final de um aluno, o
código era escrito direto dentro de uma função `onclick` amarrada a um botão. Se o mesmo
cálculo precisasse ser repetido em outro lugar da página, o código teria que ser **copiado
de novo**. Uma **função** resolve isso: um bloco de código com nome, que pode ser **chamado
quantas vezes for preciso**, de lugares diferentes, sem repetir a lógica.

## E.1. Declarando uma função

```javascript
function nomeDaFuncao() {
  bloco de comandos
}
```

- `function` — palavra-chave que declara a função.
- `nomeDaFuncao` — nome escolhido, sempre seguido de `()`.
- O bloco entre `{ }` só executa quando a função é **chamada**, nunca ao ser apenas declarada.

**Exemplo — função sem parâmetro:**
```javascript
function saudacao() {
  document.getElementById('resultado').innerHTML = "Olá, turma!";
}
```
```html
<button onclick="saudacao()">Cumprimentar</button>
<p id="resultado"></p>
```

## E.2. Parâmetros — a função recebe valores

```javascript
function nomeDaFuncao(parametro1, parametro2) {
  bloco de comandos
}
```

- **Parâmetro** é a variável declarada entre parênteses, na função.
- **Argumento** é o valor real enviado quando a função é chamada.

```javascript
function verificarIdade(idade) {
  var resultado = document.getElementById('resultado');
  if (idade >= 18) {
    resultado.innerHTML = "Maior de idade.";
  } else {
    resultado.innerHTML = "Menor de idade.";
  }
}
```
```html
<input type="number" id="idadeInput" placeholder="Digite sua idade">
<button onclick="verificarIdade(Number(document.getElementById('idadeInput').value))">Verificar</button>
<p id="resultado"></p>
```

## E.3. `return` — a função devolve um valor

```javascript
function nomeDaFuncao(parametro) {
  return valor;
}
```

- `return` encerra a função imediatamente e devolve um resultado para quem chamou.
- Sem `return`, a função pode até calcular algo, mas não devolve o valor calculado — só o
  que ela mesma escreveu na tela.

**Exemplo — Cálculo de IMC como função reutilizável:**
```javascript
function calcularIMC(peso, altura) {
  return peso / (altura * altura);
}

function mostrarIMC() {
  var peso = Number(document.getElementById('pesoInput').value);
  var altura = Number(document.getElementById('alturaInput').value);
  var imc = calcularIMC(peso, altura);
  document.getElementById('resultadoIMC').innerHTML = "Seu IMC é: " + imc.toFixed(2);
}
```
```html
<input type="number" id="pesoInput" placeholder="Peso (kg)">
<input type="number" id="alturaInput" placeholder="Altura (m)">
<button onclick="mostrarIMC()">Calcular</button>
<p id="resultadoIMC"></p>
```

`calcularIMC` faz só a conta e devolve o número; `mostrarIMC` lê o HTML, chama
`calcularIMC` e escreve o resultado na página — cada função com uma responsabilidade.

## E.4. Analogia — função em JS x função matemática

Igual a uma função matemática `f(x) = x²`, uma função em JavaScript recebe uma entrada
(parâmetro), processa e devolve uma saída (`return`):

```
entrada (parâmetro) → processamento (bloco de comandos) → saída (return)
```

## E.5. Regras de sintaxe (erros comuns)

| Regra | Certo | Errado |
|---|---|---|
| Parênteses sempre presentes, mesmo sem parâmetro | `function saudacao() { }` | `function saudacao { }` |
| Chamar a função para executar | `saudacao();` | `saudacao;` (não executa) |
| `return` dentro do bloco da função | `function soma(a,b) { return a+b; }` | `return` fora de qualquer função |
| Nome do parâmetro é local à função | `function f(x) { }` | usar `x` fora da função esperando o mesmo valor |

## E.6. Exercícios de tracing (sem computador — quinta-feira, em aula)

Antes da prática no computador, resolver no caderno: dadas as funções `somar(a, b)` e
`calcularIMC(peso, altura)` já definidas, calcular à mão o resultado do `return` para 3
pares de valores diferentes de cada uma, como uma tabela de entrada/saída.

## E.7. Exercícios de prática (computador)

Lista completa de 10 exercícios (do sem-parâmetro ao reaproveitamento da mesma função),
dividida em duas aulas de sexta-feira: exercícios 1 a 5 em Laboratório Web (14:10h) e
exercícios 6 a 10 em Laboratório de Software (15:15h).
