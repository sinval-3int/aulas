# Lista 1 — Treinando Funções

**3º INT · Semana 40** · Resolva no seu `script.js`, sempre ligando a função a um `<input>` (via `document.getElementById(...).value`) e mostrando o resultado na página com `.innerHTML`.

**Lembrete:**
```javascript
function nomeDaFuncao(parametro1, parametro2) {
  // bloco de comandos
  return valor; // quando a função precisa devolver um resultado
}
```

## Nível 1 — Sem parâmetro, sem retorno (aquecimento)

1. Crie uma função `mostrarSaudacao()` que escreve "Olá, turma!" em um elemento da página quando um botão é clicado.
2. Crie uma função `mostrarDataAtual()` que escreve a data de hoje (`new Date()`) na tela.

## Nível 2 — Com parâmetro, sem retorno

3. Crie uma função `verificarIdade(idade)` que recebe a idade digitada em um `<input>` e escreve "Maior de idade" ou "Menor de idade" na tela.
4. Crie uma função `verificarParidade(numero)` que recebe um número digitado e escreve na tela se ele é "par" ou "ímpar".
5. Crie uma função `saudacaoComNome(nome)` que recebe um nome digitado em um `<input>` de texto e escreve "Olá, `<nome>`!" na tela.

## Nível 3 — Com parâmetro e `return`

6. Transforme o cálculo de IMC já feito nos protótipos em uma função `calcularIMC(peso, altura)` que usa `return` para devolver o valor calculado; crie uma segunda função `mostrarIMC()` que lê os dois `<input>`, chama `calcularIMC` e escreve o resultado formatado na tela.
7. Crie uma função `calcularMedia(nota1, nota2)` que devolve a média das duas notas com `return`, e uma função `mostrarMedia()` que lê os `<input>`, chama `calcularMedia` e escreve "Aprovado", "Recuperação" ou "Reprovado" conforme a média.
8. Crie uma função `converterCelsiusParaFahrenheit(celsius)` que devolve o valor convertido com `return` (fórmula: `(celsius * 9/5) + 32`).

## Nível 4 — Reaproveitando a função (chamar várias vezes)

9. Usando a função `calcularIMC(peso, altura)` do exercício 6, chame-a **duas vezes** com pares de peso/altura diferentes (pode ser valores fixos no código ou dois pares de `<input>`) e mostre os dois resultados na mesma página, um embaixo do outro.
10. Crie uma função `somarDoisNumeros(numero1, numero2)` com `return`, e um botão "Somar" que a chama passando os valores de dois `<input>` numéricos, mostrando o total. Depois, sem trocar a função, crie um segundo botão "Somar de novo" que chama a mesma função com outros dois valores, mostrando que a função é reutilizável.
