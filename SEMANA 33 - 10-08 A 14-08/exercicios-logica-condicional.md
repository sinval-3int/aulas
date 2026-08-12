---
title: "Exercícios de Lógica Condicional"
subtitle: "Estruturas de Decisão (if / else if / else)"
author: "Lista de Exercícios — EMTI"
---

# Exercícios de Lógica Condicional

Para cada exercício, você recebe a entrada e a saída esperada já prontas. Sua tarefa é escrever apenas o código que, a partir daquela entrada, produz exatamente aquela saída.

Regra: resolva usando apenas `if`, `else if`, `else` e operadores lógicos (`&&`, `||`, `!`). Não utilize `switch/case`.

---

## 1. Verificador de Senha Segura

### Objetivo
Verificar se uma senha é considerada segura, com base em três critérios mínimos: ter pelo menos 8 caracteres, conter pelo menos um número e conter pelo menos uma letra maiúscula.

### Entrada
```
senha = "Carro2025"
temOitoOuMaisCaracteres = true
temNumero = true
temMaiuscula = true
```

### Saída esperada
```
Senha segura!
```

> Dica: use o operador `&&` (E lógico) para exigir que todas as condições sejam verdadeiras ao mesmo tempo. Se qualquer uma delas for falsa, o resultado já deve ser "Senha fraca".

<div style="page-break-after: always;"></div>

## 2. Sistema de Aprovação Escolar

### Objetivo
Receber 3 notas de um aluno, calcular a média aritmética e determinar sua situação acadêmica.

### Entrada
```
nota1 = 8
nota2 = 6
nota3 = 7
```

### Saída esperada
```
Média: 7.0
Situação: Aprovado
```

> Dica: calcule a média primeiro, mas antes de decidir a situação, verifique se alguma nota individual é menor que 3 — essa checagem deve vir antes da checagem da média (regra do desafio extra).

<div style="page-break-after: always;"></div>

## 3. Categoria de Atleta e Elegibilidade de Voto

### Objetivo
Com base na idade de uma pessoa, determinar o status do voto nas eleições brasileiras.

### Entrada
```
idade = 17
```

### Saída esperada
```
Voto: Opcional
```

> Dica: o voto opcional cobre dois grupos de idade separados (16–17 e 70+). Use o operador `||` (OU) para juntar as duas faixas numa mesma condição.

<div style="page-break-after: always;"></div>

## 4. Calculadora de Desconto de Loja

### Objetivo
Calcular o valor final de uma compra aplicando descontos baseados no valor total e no tipo de cliente.

### Entrada
```
tipoCliente = "COMUM"
valorCompra = 250.00
```

### Saída esperada
```
Desconto: 10%
Valor final: R$ 225,00
```

> Dica: o cliente `COMUM` só ganha desconto se o valor da compra for maior que R$ 200 — trate esse caso como uma condição dentro da condição (`if` aninhado).

<div style="page-break-after: always;"></div>

## 5. Validador de Triângulos

### Objetivo
Dados três lados (A, B e C), verificar se formam um triângulo e, se sim, classificá-lo.

### Entrada
```
A = 5
B = 5
C = 5
```

### Saída esperada
```
Triângulo válido: Equilátero
```

> Dica: primeiro confirme as três condições de existência do triângulo (`A+B>C`, `A+C>B`, `B+C>A`); só depois verifique quantos lados são iguais.

<div style="page-break-after: always;"></div>

## 6. Classificador de Temperatura Corporal

### Objetivo
Dada a temperatura corporal de uma pessoa (em graus Celsius), classificar o seu estado de saúde.

### Regras

| Temperatura | Classificação |
|---|---|
| Abaixo de 35.0 | Hipotermia |
| 35.0 a 36.9 | Normal |
| 37.0 a 37.9 | Febril (febre leve) |
| 38.0 ou mais | Febre alta |

### Entrada
```
temperatura = 38.5
```

### Saída esperada
```
Febre alta
```

> Dica: preste atenção nos limites de cada faixa (use `>=` corretamente) e teste seu código com valores exatamente na fronteira, como 37.0 e 38.0, para garantir que a classificação não "vaza" para a faixa errada.

<div style="page-break-after: always;"></div>

## 7. Simulador de Login e Autenticação

### Objetivo
Simular o processo de login comparando as credenciais informadas com valores salvos em constantes.

### Entrada
```
usuarioSalvo = "joao"
senhaSalva = "abcd"
usuarioBloqueado = false

usuarioDigitado = "joao"
senhaDigitada = "1234"
```

### Saída esperada
```
Senha incorreta.
```

> Dica: verifique `usuarioBloqueado` antes de qualquer outra coisa; depois compare o usuário e, só se ele bater, compare a senha.

<div style="page-break-after: always;"></div>

## 8. Verificador de Ano Bissexto

### Objetivo
Receber um ano e determinar se ele é bissexto ou não.

### Entrada
```
ano = 2024
```

### Saída esperada
```
2024 é bissexto.
```

> Dica: um ano é bissexto se `(divisível por 4 E não por 100) OU (divisível por 400)`. Teste seu código também com 2100 (não bissexto) e 2000 (bissexto) para validar as exceções.

<div style="page-break-after: always;"></div>

## 9. Maior e Menor entre Três Números (sem usar Math.max)

### Objetivo
Receber 3 números distintos e identificar qual é o maior e qual é o menor, usando apenas condicionais e operadores lógicos.

### Entrada
```
a = 15
b = 42
c = 7
```

### Saída esperada
```
O maior número é 42 e o menor é 7.
```

> Dica: compare os números dois a dois (`a` com `b`, depois o resultado com `c`) em vez de tentar resolver tudo numa única condição gigante.

<div style="page-break-after: always;"></div>

## 10. Calculadora de Imposto de Renda Simplificada

### Objetivo
Dado o salário bruto de um funcionário, calcular o valor do imposto retido na fonte e o salário líquido resultante.

### Entrada
```
salarioBruto = 5000.00
```

### Saída esperada
```
Imposto: R$ 750,00
Salário líquido: R$ 4250,00
```

> Dica: identifique primeiro em qual faixa da tabela o salário se encaixa, depois aplique a alíquota correspondente sobre o valor total do salário (não é cálculo progressivo por faixa).
