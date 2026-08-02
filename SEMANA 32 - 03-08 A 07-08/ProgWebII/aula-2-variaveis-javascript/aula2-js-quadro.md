# Aula 2 — Variáveis e Operadores
## Programação Web II — 3INT

---

## 1. Variáveis

- Armazenam valor, mas só **um valor por vez**
- Linguagens fortemente tipadas exigem declarar tipo
- JS **não exige** tipo — só usa `var` + nome

---

## 2. Abrangência (escopo)

| Tipo | Onde declarada | Acesso |
|------|-----------------|--------|
| **Global** | Fora de função | Qualquer parte do programa |
| **Local** | Dentro de função (com `var`) | Só dentro da função |

---

## 3. Regras de nomenclatura

- Começa por **letra** ou `_`
- Resto: letras ou números
- **Case-sensitive** (diferencia maiúsculas/minúsculas, acentos, especiais)

---

## 4. Tipos de variáveis

| Tipo | Uso |
|------|-----|
| Numéricas | Armazenar números |
| Booleanas | Valores lógicos (`true`/`false`) |
| Strings | Sequência de caracteres |

- Tipo não é declarado — JS identifica sozinho

---

## 5. Strings

- Delimitadas por aspas simples `'...'` ou duplas `"..."`
- Se abrir com simples, fecha com simples (mesma regra p/ duplas)

### Caracteres especiais

| Caractere | Descrição |
|-----------|-----------|
| `\t` | Tabulação |
| `\n` | Nova linha |
| `\f` | Barra |
| `\b` | Backspace |
| `\r` | Retorno |

---

## 6. NULL

- Representa valor **desconhecido ou nulo**
- Usado p/ variável não inicializada sem gerar erro
- Representação literal: `null` (sem aspas)
- **Palavra reservada**

---

## 7. Operadores

Tipos: **Matemáticos**, **Comparação**, **Lógicos**

---

## 8. Operadores Matemáticos

| Operação | Operador |
|----------|----------|
| Adição | `+` |
| Subtração | `-` |
| Multiplicação | `*` |
| Divisão | `/` |
| Incremento | `++` |
| Decremento | `--` |
| Resto da divisão | `%` |

**Exemplo 1** — valores em variáveis globais no `<head>`, soma exibida no `<body>`:
```html
<script>
  var valor1 = 10;
  var valor2 = 5;
</script>
...
<script>
  document.write(valor1);
  document.write(valor2);
  var resultado = valor1 + valor2;
  document.write(resultado);
</script>
```

**Exemplo 2** — operação direto no `document.write()`, sem variáveis:
```html
<script>
  document.write("Resultado: ", 10 + 5, "<b>", "<br>");
</script>
```

Incremento/decremento:
```
variavel++  ou  ++variavel
variavel--  ou  --variavel
```

---

## 9. Operadores de Comparação

Retornam `true` ou `false`.

| Operação | Operador |
|----------|----------|
| Atribuição | `=` |
| Maior que | `>` |
| Menor que | `<` |
| Maior ou igual | `>=` |
| Menor ou igual | `<=` |
| Igualdade | `==` |
| Igual e mesmo tipo | `===` |
| Diferente | `!=` |

---

## 10. Operadores Lógicos

Exigem operandos booleanos, retornam valor lógico.

| Operação | Operador | Regra |
|----------|----------|-------|
| E (AND) | `&&` | Verdadeiro se **todas** condições forem verdadeiras |
| OU (OR) | `\|\|` | Verdadeiro se **pelo menos uma** condição for verdadeira |
| NÃO (NOT) | `!` | Inverte valor lógico |

*(exemplos práticos vistos com estruturas de controle nas próximas aulas)*

---

## 11. Cálculo de IMC — aplicação de operadores

Fórmula: `IMC = peso / (altura²)`

```html
<script>
  var peso = 70;
  var altura = 1.75;
  var calc_imc = peso / (altura * altura);
  document.write(calc_imc);
</script>
```

- Resolve primeiro o que está entre parênteses (igual matemática)
- Depois divide peso pelo resultado

---

## 12. Exercício Prático

1. Script p/ calcular **média aritmética de 3 notas** — exibir as 3 notas e a média.
2. Script p/ calcular **idade** a partir do ano atual e ano de nascimento — exibir nome e idade.
3. Script p/ mostrar **consumo médio de um automóvel**.
