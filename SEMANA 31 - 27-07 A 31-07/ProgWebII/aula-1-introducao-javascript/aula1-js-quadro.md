# Aula 1 — Introdução ao JavaScript
## Programação Web II — 3INT

---

## 1. O que é JavaScript?

- Linguagem de programação que roda no **navegador** (lado cliente)
- Permite interagir com a página: cliques, alertas, validações, animações

---

## 2. História

| Ano | Acontecimento |
|-----|---------------|
| 1995 | Criada pela **Netscape** com o nome **LiveScript** |
| - | Mudou para **JavaScript** por marketing (Java era popular) |
| - | **JavaScript NÃO é Java** — são linguagens diferentes! |

---

## 3. Características

- **Tipagem dinâmica**: não precisa declarar o tipo da variável
- **Interpretada**: executa linha a linha no navegador (não precisa compilar)

---

## 4. Para que serve?

- Alterar elementos HTML
- Responder a eventos (clique, tecla, mouse)
- Validar formulários
- Criar animações
- Comunicação com servidor sem recarregar a página

---

## 5. Onde é usado?

| Onde | Exemplos |
|------|----------|
| Sites | Google, YouTube, Facebook, Instagram |
| Apps mobile | React Native, Ionic |
| Desktop | VS Code, Discord, Slack (via Electron) |
| Servidor | Node.js |

---

## 6. Ferramentas para programar

**Mínimo necessário:** editor de texto + navegador

Editores comuns: Dreamweaver, UltraEdit, Bluefish, NetBeans, VS Code

---

## 7. Como colocar JS no HTML

```
<script>
  // código JavaScript aqui
</script>
```

Pode ir no `<head>` ou no `<body>`.

---

## 8. Formas de importar

| Tipo | Como fazer |
|------|------------|
| **JS interno** | `<script> código </script>` direto no HTML |
| **JS externo** | `<script src="script.js"></script>` (arquivo separado) |

---

## 9. Estrutura completa (HTML + CSS + JS)

```
Projeto/
├── index.html
├── style.css     → importado via <link> no <head>
└── script.js     → importado via <script src> no final do <body>
```

```html
<!DOCTYPE html>
<html>
<head>
  <title>Exemplo</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <h1>Olá!</h1>
  <button onclick="alert('Oi')">Clique</button>
  <script src="script.js"></script>
</body>
</html>
```

> 📌 **Regra prática:** CSS no `<head>` com `<link>` — JS no final do `<body>` com `<script src>`

---

## 10. Curiosidades

- Linguagem mais popular do mundo (Stack Overflow)
- Nome foi estratégia de marketing — não tem relação com Java
- Única linguagem que roda nativamente no navegador
- Netflix, Uber, LinkedIn usam JS
- Node.js permite JS fora do navegador

---

## 📝 Resumo para o caderno

```
1. JS = linguagem que roda no navegador (lado cliente)
2. Criada pela Netscape em 1995 (antes chamada LiveScript)
3. JS NÃO é Java
4. Tipagem dinâmica + interpretada
5. Precisa só de editor de texto + navegador
6. Código fica entre <script> e </script>
7. JS interno: <script>código</script>
   JS externo: <script src="arquivo.js"></script>
8. CSS → <link> no <head>
   JS → <script src> no final do <body>
9. Usado em sites, apps, desktop, servidor
10. Permite interagir com a página em tempo real
```
