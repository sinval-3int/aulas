# 📚 Resumo da Semana 33 (10/08 a 14/08) — 3º INT

Foco da semana: **HTML + CSS + JavaScript juntos no site que você já criou**, com estrutura condicional (`if`/`else`/`else if`) e declaração de variáveis. Sem Node.js, sem terminal — o script roda direto no navegador, ligado ao seu `index.html`.

## 💻 Segunda-feira — Banco de Dados, Rede e If/Else em JavaScript

**Banco de Dados (07:00 e 13:20):** coluna de tabela = variável, e WHERE = if.
- Uma coluna guarda um valor por vez, em cada linha — igual uma variável.
- `SELECT * FROM alunos WHERE idade >= 18;` só devolve as linhas que satisfazem a condição, igual `if (idade >= 18)` do JavaScript.

**Rede de Computadores (14:10):** a aba Network como teste de if/else.
- Status 200 = sucesso (o "if"). Sem internet, a requisição falha e aparece como erro no console (o "else").

**Programação Web II (15:15):** Estrutura Condicional — `if`, `if/else`, `if/else if/else`, agora ligado ao seu HTML.

```html
<script src="script.js"></script>
```
```javascript
// script.js
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

## 🖥️ Terça-feira — Laboratório de Hardware e Laboratório de Software

**Laboratório de Hardware (09:45):** conexão de rede como if/else no hardware.
- Cabo conectado (`true`) ou desconectado (`false`) — a mesma ideia de condição do `if`.
- Pseudocódigo: `if (cabo conectado) { "Conectado" } else { "Sem conexão" }`.

**Laboratório de Software (10:35):** o que é o npm.
- `npm init -y` → gera `package.json`. `npm install <nome>` → baixa um módulo para `node_modules`.
- Cada módulo resolve um problema pronto, sem reescrever tudo do zero.

## 🌐 Quarta-feira — Laboratório de Hardware e Rede de Computadores

**Laboratório de Hardware (13:20):** experimento — desconectar o cabo de rede, ver o ícone de conexão mudar e o site não carregar; reconectar e confirmar que volta.

**Rede de Computadores (14:10):** experimento — recarregar uma página com internet (status 200, sucesso) e depois sem internet, propositalmente (erro no console, falha).

**Rede de Computadores (15:15):** aula de dúvidas e fixação — revisão da aba Network e dos testes de sucesso/falha.

## 🎨 Quinta-feira — Design e Laboratório Web

**Design (07:00) e Laboratório Web (08:40):** tríade HTML + CSS + JavaScript no seu próprio protótipo.
- Criar `script.js` na pasta do projeto e ligar no `index.html`, antes de `</body>`.
- `document.getElementById('id')` busca um elemento do HTML; `.value` lê o que foi digitado; `.innerHTML` escreve o resultado na página.
- Primeiro exemplo prático de `if/else` alterando a própria página, aplicado em todas as páginas do protótipo.
- **Sem Media Queries** nesta semana.

## ⚙️ Sexta-feira — Aulas de Dúvidas e Fixação de Conteúdo

**Programação WEB II (13:20):** prática de if/else/else if integrada ao `index.html`/`script.js`.

**Atividade avaliativa:** o professor passará, separadamente, uma lista com **10 exercícios** (variáveis, cálculos e estrutura condicional) para serem trabalhados ao longo da semana. Atividade publicada como **campo no Google Sala de Aula** — resolução direto por lá, sem arquivo de entrega.

**Laboratório Web (14:10):** exercícios práticos de fixação da tríade HTML/CSS/JS, com foco em if/else.

**Laboratório de Software (15:15):** revisão dos módulos instalados (npm), criação do `.gitignore` (excluindo `node_modules`) e envio do projeto atual para o GitHub.

---
