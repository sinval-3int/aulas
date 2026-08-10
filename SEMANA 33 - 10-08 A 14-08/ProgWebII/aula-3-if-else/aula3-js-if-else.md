# Aula 3 — Estrutura Condicional (if / else / else if)
## Programação Web II — 3INT

---

## 0. Integrando JavaScript ao site que você já criou

Até a Aula 2 (variáveis e operadores) o script já rodava dentro de tags `<script>` no HTML. Nesta aula seguimos o mesmo caminho — **sem Node, sem terminal** — mas agora ligando o JavaScript ao **HTML/CSS do protótipo que cada aluno já vem construindo** em Design/Laboratório Web.

### Como ligar o JavaScript ao site

1. Na pasta do projeto (mesma pasta do `index.html` e `style.css`), criar um arquivo **`script.js`**.
2. No final do `index.html`, antes de `</body>`, adicionar:

```html
  <script src="script.js"></script>
</body>
```

3. Todo o código JavaScript agora fica em `script.js` — separado do HTML e do CSS, os três arquivos trabalhando juntos (**tríade HTML + CSS + JS**).

---

## 1. Retomada — Variáveis

- `var nome = valor;` — guarda um valor por vez, JS não exige tipo declarado (Aula 2).
- Nesta aula, as variáveis passam a guardar **dados vindos do próprio HTML** (o que o usuário digitou em um campo, por exemplo).

```javascript
var idade = document.getElementById('idadeInput').value;
```

- `document.getElementById('id')` busca, no HTML, o elemento com aquele `id` e retorna esse elemento.
- `.value` pega o que está digitado dentro de um `<input>`.
- ⚠️ O valor de um `<input>` sempre volta como **string** (texto) — para comparar como número, usar `Number(...)`.

---

## 2. Estrutura Condicional — por que existe

O script, sozinho, sempre executa todas as linhas em ordem. A estrutura condicional (`if`) permite o script **decidir** o que mostrar na página conforme uma condição — a mesma ideia de decisão usada, por exemplo, para testar se uma conexão de rede existe ou não.

Condição = expressão com os **operadores de comparação/lógicos** da Aula 2 (`>`, `<`, `>=`, `<=`, `==`, `===`, `!=`, `&&`, `||`, `!`), sempre resultando em `true` ou `false`.

---

## 3. IF — sintaxe simples

```javascript
if (condição) {
  bloco de comandos
}
```

**Exemplo — HTML (`index.html`):**
```html
<input type="number" id="idadeInput" placeholder="Digite sua idade">
<button onclick="verificarIdade()">Verificar</button>
<p id="resultado"></p>
```

**Exemplo — JavaScript (`script.js`):**
```javascript
function verificarIdade() {
  var idade = Number(document.getElementById('idadeInput').value);
  var resultado = document.getElementById('resultado');

  if (idade >= 18) {
    resultado.innerHTML = "Maior de idade.";
  }
}
```
*(se digitar menos de 18, o `<p id="resultado">` fica vazio — falta um "senão")*

---

## 4. IF / ELSE — duas alternativas

```javascript
if (condição) {
  bloco de comandos
} else {
  bloco de comandos
}
```

- Se `condição` verdadeira → executa o bloco do `if`.
- Se `condição` falsa → executa o bloco do `else`.
- **Um dos dois blocos sempre executa.**

```javascript
function verificarIdade() {
  var idade = Number(document.getElementById('idadeInput').value);
  var resultado = document.getElementById('resultado');

  if (idade >= 18) {
    resultado.innerHTML = "Maior de idade.";
  } else {
    resultado.innerHTML = "Menor de idade.";
  }
}
```

---

## 5. IF / ELSE IF / ELSE — mais de duas alternativas

```javascript
if (condição1) {
  comandos
} else if (condição2) {
  comandos
} else {
  comandos
}
```

- Testa `condição1` primeiro; se verdadeira, executa e **para**.
- Se falsa, testa `condição2`; se verdadeira, executa e para.
- Se **nenhuma** condição for verdadeira, executa o `else` final.

**Exemplo — aprovado / recuperação / reprovado:**
```html
<input type="number" id="mediaInput" placeholder="Digite a média final">
<button onclick="verificarMedia()">Verificar</button>
<p id="resultadoMedia"></p>
```
```javascript
function verificarMedia() {
  var media = Number(document.getElementById('mediaInput').value);
  var resultado = document.getElementById('resultadoMedia');

  if (media >= 7) {
    resultado.innerHTML = "Aprovado.";
  } else if (media >= 5) {
    resultado.innerHTML = "Recuperação.";
  } else {
    resultado.innerHTML = "Reprovado.";
  }
}
```

⚠️ **Atenção à ordem**: as condições são testadas de cima para baixo, e a **primeira verdadeira** vence.

---

## 6. Analogia — o mesmo if/else fora do JavaScript

A mesma lógica "se / senão" que escrevemos em código aparece em outras camadas do projeto, vistas nas outras disciplinas nesta semana:

- **Hardware**: se o cabo de rede está conectado → computador tem acesso à rede; senão → sem conexão.
- **Rede**: se a requisição responde com sucesso → aparece na aba Network; senão (sem internet) → erro registrado no console/log.
- **Banco de Dados**: `WHERE idade >= 18` só devolve as linhas que satisfazem a condição — o mesmo "se" aplicado a uma tabela.

---

## 7. Regras de sintaxe (erros comuns)

| Regra | Certo | Errado |
|---|---|---|
| Condição entre parênteses | `if (idade >= 18)` | `if idade >= 18` |
| Bloco entre chaves | `if (x) { ... }` | `if (x) ...` (sem chaves, evitar) |
| Comparação usa `===`/`==`, não `=` | `if (nota == 10)` | `if (nota = 10)` (isso é atribuição!) |
| `else` não tem condição própria | `else { ... }` | `else (x) { ... }` |
| `else if` é `else` + `if` juntos | `else if (x) { }` | `elseif (x) { }` |

---

## 8. Exercícios de prática (prévia)

*A lista completa com os 10 exercícios oficiais será adicionada a este material assim que enviada. Enquanto isso, praticar integrando ao próprio site (`index.html` + `script.js`):*

1. Um `<input>` para digitar um número e um botão que informa, em um `<p>`, se é **par** ou **ímpar** (`% 2`).
2. Um `<input>` para a idade e um botão que informa **maior de idade** ou **menor de idade**.
3. Um `<input>` para a média final e um botão que informa **Aprovado**, **Recuperação** ou **Reprovado** (`if/else if/else`).

---

## 9. Fixação (aula de dúvidas — sexta-feira)

- Revisão da sintaxe: `if`, `if/else`, `if/else if/else`.
- Resolução, em conjunto, dos exercícios acima, integrados ao `index.html`/`script.js` do próprio protótipo.
- Espaço para dúvidas sobre como ligar `script.js` ao HTML e sobre `document.getElementById`.
