# Resumo da Semana 39 — 3º INT

**Período:** 21/09 a 25/09 · **Turma:** 3º Ano Integral

## Visão geral

Esta semana temos **três conteúdos novos em JavaScript: listas, conjuntos e laço while**. Terça e quinta são aulas **expositivas** (explicação e introdução); segunda, quarta e sexta são aulas **práticas**, para exercitar o que foi visto.

Lembre de trazer o caderno: a sintaxe do `for` já copiada será usada nas práticas.

| Dia | Tipo | Aulas |
|---|---|---|
| Segunda | Prática | Banco de Dados (07:00 e 13:20) · Rede (14:10) · Prog. Web II (15:15) |
| Terça | Expositiva | Lab. Hardware (09:45): Listas · Lab. Software (10:35): Conjuntos |
| Quarta | Prática | Lab. Hardware (13:20) · Rede (14:10 e 15:15) |
| Quinta | Expositiva | Design (07:00): Frequência · Lab. Web (08:40): Laço while |
| Sexta | Prática | Prog. Web II (13:20) · Lab. Web (14:10) · Lab. Software (15:15) |

## Conteúdos novos da semana

### 1. Listas (arrays)

Uma lista guarda vários valores em uma só variável.

```
var frutas = ['maçã', 'uva', 'pera'];
frutas[0]            // 'maçã' (o índice começa em 0)
frutas.length        // 3
frutas.push('manga') // adiciona ao final
for (var i = 0; i < frutas.length; i++) { frutas[i] }
```

**Exemplo completo com a página** — mostrar a lista em uma `<ul>`:

```
// HTML: <ul id="saida"></ul>
var html = "";
for (var i = 0; i < frutas.length; i++) {
  html += "<li>" + frutas[i] + "</li>";
}
document.getElementById("saida").innerHTML = html;
```

**Somando e achando a média de notas:**

```
var notas = [7, 8.5, 6, 9];
var soma = 0;
for (var i = 0; i < notas.length; i++) { soma += notas[i]; }
var media = soma / notas.length;   // 7.625
```

**Fatiando listas e textos** (`slice(inicio, fim)` — o `fim` não entra):

```
[10, 20, 30, 40, 50].slice(1, 3)   // [20, 30]
"JavaScript".slice(0, 4)           // "Java"
"JavaScript".slice(-6)             // "Script"
"Ana Maria".split(" ")             // ["Ana", "Maria"]
```

### 2. Conjuntos (Set)

Conjunto é como uma lista, mas **não aceita valores repetidos**.

```
var c = new Set([1, 2, 2, 3]);   // 1, 2, 3
c.add(4); c.has(2); c.delete(1); c.size
var unicos = [...new Set(lista)]; // remove repetidos de uma lista
```

**Lista x Conjunto:**

| | Lista | Conjunto (Set) |
|---|---|---|
| Repetidos | aceita | não aceita |
| Acesso por índice (`l[0]`) | sim | não |
| Ordem de inserção | mantida | mantida |
| Tamanho | `length` | `size` |
| Quando usar | dados em sequência | valores únicos |

**Exemplo — quantos nomes diferentes?**

```
var nomes = ['Ana', 'Bia', 'Ana', 'Caio', 'Bia'];
var unicos = new Set(nomes);
unicos.size   // 3
```

### 3. Frequência de elementos

Frequência é quantas vezes um valor aparece em uma lista.

```
var cont = 0;
for (var i = 0; i < lista.length; i++) {
  if (lista[i] === alvo) { cont++; }
}
freq[item] = (freq[item] || 0) + 1;   // frequência de todos os valores
```

**Exemplo — votos de uma enquete:**

```
var votos = ['A', 'B', 'A', 'C', 'B', 'A'];
var freq = {};
for (var i = 0; i < votos.length; i++) {
  freq[votos[i]] = (freq[votos[i]] || 0) + 1;
}
// { A: 3, B: 2, C: 1 }
```

Extras de listas: `indexOf`, `includes`, `pop`, `slice`.

### 4. Laço while

O `while` repete **enquanto a condição for verdadeira**. Use quando não se sabe quantas voltas serão necessárias.

```
var n = 1;
while (n <= 5) {
  n++;   // sem alterar a variável, o laço nunca termina!
}
```

`break` interrompe o laço. Use `for` quando o número de voltas é conhecido.

**Mesmo resultado com `for` e com `while`** (contar de 1 a 5):

```
for (var i = 1; i <= 5; i++) { console.log(i); }

var i = 1;
while (i <= 5) { console.log(i); i++; }
```

**Repetir até uma condição** (o `while` brilha aqui):

```
var soma = 0, n = 0;
while (soma <= 100) { n++; soma += n; }   // para quando a soma passa de 100
```

### Erros comuns

- Índice começa em **0**, não em 1: `lista[lista.length]` é `undefined`.
- Esquecer de alterar a variável no `while` → laço infinito.
- Usar `=` (atribuição) no lugar de `===` (comparação) dentro do `if`.
- Tentar `conjunto[0]`: conjunto não tem índice, use `for...of`.

## Resumo por disciplina

### Banco de Dados — segunda (07:00 e 13:20)

- Como a informação do banco de dados chega ao site: banco → servidor → JSON → navegador.
- Um registro (linha da tabela) vira um objeto `{ chave: valor }`; vários registros formam uma lista de objetos.
- **Prática:** criar um array de objetos no seu site (simulando o banco) e exibir cada registro na página com `for`.

### Rede de Computadores — segunda (14:10) e quarta (14:10 e 15:15)

- **Segunda:** prática de componentes e topologias de rede (cliente, servidor, switch, roteador).
- **Quarta:** Modelo OSI (7 camadas) e TCP/IP (4 camadas), e prática associando protocolos e equipamentos às camadas.

### Programação Web II — segunda (15:15) e sexta (13:20)

- **Segunda:** exercícios só com `for` e integração de HTML, CSS e JavaScript no seu site.
- **Sexta:** exercícios de listas, conjuntos, frequência e `while`, mostrando o resultado no site.

### Laboratório de Hardware — terça (09:45) e quarta (13:20)

- **Terça:** aula expositiva sobre **listas**.
- **Quarta:** prática de listas (criar, acessar por índice, `push` e percorrer com `for`).

### Laboratório de Software — terça (10:35) e sexta (15:15)

- **Terça:** aula expositiva sobre **conjuntos** e a diferença entre lista e conjunto.
- **Sexta:** prática de conjuntos, frequência e `while`.

### Design — quinta (07:00)

- Aula expositiva sobre **frequência de elementos** em listas e conjuntos e extras de listas.

### Laboratório Web — quinta (08:40) e sexta (14:10)

- **Quinta:** aula expositiva sobre o **laço while**.
- **Sexta:** prática de integração HTML + CSS + JavaScript no site, exibindo listas (`<ul>`), contando frequência e usando `Set` e `while`.

## Listas de exercícios para treinar

Na pasta `Exercicios/` estão quatro listas para praticar: **`for`** (20 exercícios), **`while`** (20), **conjuntos** (20) e **listas com fatiamento de strings** (25). Comece pelo Nível 1 de cada uma.

## Como estudar

1. Copie no caderno o resumo de cada aula expositiva.
2. Refaça os exemplos no seu próprio site (`script.js`).
3. Nas dúvidas do `for` e do `while`, faça o **teste de mesa**: anote o valor de `i` a cada volta.

## Próxima semana

Semana 40 (28/09 a 02/10): revisão geral de JavaScript, HTML e CSS e início de Funções em JavaScript.
