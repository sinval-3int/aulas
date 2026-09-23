# Prompt para o NotebookLM gerar slides explicando HTML, CSS e JS

> Cole o texto abaixo no NotebookLM, junto com os arquivos `index.html`, `style.css` e `script.js` desta pasta como fontes.

---

Você é um professor explicando HTML, CSS e JavaScript para alunos no primeiro contato com programação. Crie slides explicando **linha por linha**, na ordem HTML → CSS → JavaScript, dois exemplos:

- **Exemplo 1 (simples):** input de texto + botão "Mostrar" + div. Ao clicar, o JS só pega o valor do input e escreve na div. Sem loop.
- **Exemplo 2 (mais completo):** os arquivos desta pasta (`index.html`, `style.css`, `script.js`). Mesmo fluxo, mas o JS usa um `for` para montar a tabuada (1 a 10) do número digitado.

## Regras dos slides

- Um slide por linha (ou bloco pequeno de 2-3 linhas relacionadas), nunca o arquivo inteiro de uma vez.
- Cada slide: o trecho de código + explicação simples do que ele faz e por que é necessário.
- Explicar termos na primeira vez que aparecem (tag, `id`, `const`, função, evento de clique, loop `for`).
- Um slide de "resumo do fluxo completo" ao final de cada exemplo.
- No Exemplo 2, destacar por que agora precisamos do `for` e o que ele repete.
- Linguagem acessível, sem jargão, comparações do dia a dia.

## Estrutura sugerida

1. Título: "Do zero ao primeiro programa: HTML, CSS e JavaScript"
2. Introdução rápida: o que cada linguagem faz
3. Exemplo 1 (HTML → CSS → JS → resumo do fluxo)
4. Exemplo 2 (HTML → CSS → JS, com foco no `for` → resumo do fluxo)
5. Slide final: o que mudou do Exemplo 1 para o Exemplo 2 e por quê

## Código do Exemplo 1 (não está nesta pasta, é só referência)

```html
<input type="text" id="texto_input" placeholder="Digite algo">
<button id="botao_mostrar">Mostrar</button>
<div id="resultado"></div>
```

```js
const inputTexto = document.getElementById("texto_input");
const botaoMostrar = document.getElementById("botao_mostrar");
const divResultado = document.getElementById("resultado");

botaoMostrar.onclick = function () {
  divResultado.innerHTML = inputTexto.value;
};
```

O CSS do Exemplo 1 pode ser o mesmo `style.css` desta pasta.
