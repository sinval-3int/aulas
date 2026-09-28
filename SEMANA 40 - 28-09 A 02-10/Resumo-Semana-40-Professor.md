# 🗂️ Resumo da Semana 40 (28/09 a 02/10) — Guia de Consulta do Professor

Fonte única de consulta para a semana: o que dar em cada aula, o que escrever no quadro, como
conduzir cada dinâmica/exercício, o que levar/preparar antes, e os pontos de atenção. Detalhes
completos (BNCC, avaliação, recomposição) estão nos planos individuais em `Planejamento/`.

**Estrutura da semana:** manhãs expositivas (slides + resumo de quadro + exercício sem
computador) e tardes práticas (no laboratório). Três frentes de conteúdo avançam em paralelo:
Excel (Banco de Dados/Lab. Hardware), Imersão HTML+CSS+JS (Lab. Software → Design → Prog. Web
II) e Funções (Lab. Web → prática em Lab. Web/Lab. Software). Rede de Computadores dá apoio
leve, sem conteúdo pesado novo.

---

## 📅 Segunda-feira

### Banco de Dados — 07:00 (manhã, expositiva)
**Tema:** Introdução ao Excel, parte 1 — planilha, linha (registro), coluna (campo), célula (valor), tipos de dado.

**Quadro (resumo para os alunos copiarem):**
```
1. Planilha = conjunto de tabelas (uma tabela por aba).
2. Linha = registro (ex.: uma tarefa do projeto).
3. Coluna = campo/atributo (ex.: responsável, prazo, status).
4. Célula = valor de um campo em um registro.
5. Cada coluna deve ter um tipo consistente de dado (texto, número, data).
```
**Como conduzir:** apresentar o Excel como ferramenta de organização de dados usando o exemplo
de controle de projeto (tarefa, responsável, prazo, status) — sem ligar o computador.
**Exercício sem computador:** escrever no quadro 5 registros soltos/desorganizados (dados de
tarefas fictícias). Alunos desenham a tabela no caderno e organizam os dados, apontando campo x
registro. *Dica:* prepare esses 5 registros com antecedência (ex.: variar tipos de dado —
nome, data, número — para reforçar o ponto 5 do quadro).
**Ponto de atenção:** é o primeiro contato da turma com planilha/Excel na disciplina — não
pressupor conhecimento prévio.

### Banco de Dados — 13:20 (tarde, prática)
**Tema:** montagem no computador de planilha real de organização de projeto.
**Como conduzir:** cada aluno monta sua planilha (pode ser o próprio projeto integrador),
aplicando linhas/colunas/células e ao menos duas fórmulas (soma, média — mesmo sem tê-las
formalizado ainda; dar o comando pronto se precisar, a formalização vem terça no Lab. Hardware).
**Fechamento sugerido:** perguntar "o que uma planilha não resolve bem, que um banco de dados
resolve?" (dados repetidos, múltiplos usuários, relações entre tabelas) — gancho para conteúdo
futuro de BD.
**Entregável:** planilha com estrutura linha/coluna e ao menos 1 fórmula.

### Rede de Computadores — 14:10
**Tema:** dinâmica "corrente de dados".
**Como conduzir:** organizar a turma em fileira: Cliente (navegador/HTML+CSS+JS) → Rede
(cabo/Wi-Fi) → Servidor → Banco de Dados/Planilha. Um "pedido" (papel com um valor, ex.: peso e
altura para IMC) passa de mão em mão até o Banco de Dados e a resposta (resultado calculado)
volta pelo mesmo caminho. **Repetir 2-3 vezes, trocando quem faz cada papel.**
**Dica de preparação:** ter os papéis com os "pedidos" prontos antes da aula (pelo menos 3
variações de peso/altura) para não perder tempo de aula escrevendo na hora.
**Observação:** atividade de fixação, sem nota formal — foco em participação.

### Programação Web II — 15:15 (prática)
**Tema:** uso da planilha de projeto (feita em Banco de Dados, mesma manhã) para planejar o
protótipo do site da turma. **Sem conteúdo novo de JavaScript.**
**Como conduzir:** turma lista, como se fossem tarefas de projeto, o que falta em cada
protótipo já existente (IMC, aprovado/reprovado etc.).
**Entregável:** lista de tarefas do protótipo organizada em planilha.

---

## 📅 Terça-feira

### Laboratório de Hardware — 09:45 (manhã, expositiva)
**Tema:** Introdução ao Excel, parte 2 — fórmulas (soma, média, contagem) e cronograma de projeto.

**Quadro:**
```
1. = soma(intervalo) — soma os valores de um intervalo de células.
2. = média(intervalo) — calcula a média de um intervalo de células.
3. = contar(intervalo) — conta quantas células têm valor.
4. Cronograma de projeto = tabela com colunas: tarefa, responsável, prazo, horas estimadas, status.
```
**Exercício sem computador:** tabela de 6 tarefas fictícias com horas estimadas; alunos calculam
"à mão" soma total e média de horas, preenchendo uma linha de "Totais" no caderno.
**Dica de preparação:** ter a tabela de 6 tarefas pronta (impressa ou só no quadro) — evita
perder tempo montando na hora.

### Laboratório de Software — 10:35 (manhã, expositiva)
**Tema:** Imersão HTML+CSS+JS, parte 1 — DOM, `document.getElementById`, `.value`.

**Quadro:**
```
1. HTML dá a estrutura da página; CSS dá a aparência; JavaScript dá o comportamento.
2. Todo elemento pode ter um id="..." único, que o identifica na página.
3. document.getElementById('id') — pega, em JavaScript, o elemento do HTML que tem aquele id.
4. .value — lê (ou escreve) o que está digitado dentro de um <input>.
```
**Exercício sem computador:** trecho de HTML impresso/projetado com 4-5 elementos com `id`
diferentes (ex.: `id="nomeInput"`, `id="resultado"`, `id="botaoEnviar"`). Ao lado de cada
`document.getElementById('...')` escrito no quadro, alunos identificam no caderno qual elemento
seria selecionado.
**Dica de preparação:** imprimir ou projetar o trecho de HTML antes da aula — melhor que só
falado, porque a turma precisa "ler" o id no HTML.
**Ponto de atenção:** essa é a base ("ponte" JS↔HTML) para tudo que vem depois na semana
(innerHTML na quinta, prática completa na sexta) — não avançar sem a turma entender o
`getElementById`.

*(Não há aulas à tarde na terça nesta semana.)*

---

## 📅 Quarta-feira

### Laboratório de Hardware — 13:20 (prática)
**Tema:** cronograma de projeto completo no computador, com fórmulas de soma e média funcionando.
**Como conduzir:** retomar a planilha iniciada em Banco de Dados (segunda) e aplicar as fórmulas
formalizadas na terça.
**Entregável:** cronograma com fórmulas de soma/média corretas.

### Rede de Computadores — 14:10
**Tema:** modelo Cliente-Servidor + retomada leve de OSI/TCP-IP (Semana 39).

**Quadro:**
```
1. Cliente = o navegador do usuário, rodando o HTML/CSS/JS do protótipo.
2. Servidor = o computador que guarda o site e busca os dados quando pedido.
3. Rede = o caminho (cabo/Wi-Fi) que leva o pedido do Cliente até o Servidor e a resposta de volta.
4. Banco de Dados/Planilha = onde os dados ficam guardados, organizados em linhas e colunas.
```
**Como conduzir:** conversa dirigida (não expositiva pesada) ligando a dinâmica de segunda à
teoria: quando o aluno clica "Calcular" no protótipo, está simulando numa única página o que
numa aplicação real seria um pedido pela rede até servidor+BD. Retomar OSI/TCP-IP só de forma
leve, sem aprofundar.
**Observação:** sem nota formal — perguntas dirigidas para fixação.

### Rede de Computadores — 15:15
**Tema:** cartaz em grupo — caminho do dado.
**Como conduzir:** grupos desenham num cartaz o caminho completo de um dado do protótipo (ex.:
IMC): do `<input>` → rede → servidor/BD fictício → volta até o `.innerHTML` que mostra o
resultado. Apresentação rápida de 2-3 grupos ao final.
**Dica de preparação:** levar cartolina/papel A3 e canetinhas; separar grupos com antecedência
(3-4 alunos) para não perder tempo de aula.

---

## 📅 Quinta-feira

### Design — 07:00 (manhã, expositiva)
**Tema:** Imersão HTML+CSS+JS, parte 2 — `.innerHTML` e `.innerHTML +=`.

**Quadro:**
```
1. elemento.innerHTML = 'texto'; — substitui todo o conteúdo de dentro do elemento.
2. elemento.innerHTML += 'texto'; — acrescenta conteúdo, sem apagar o que já tinha.
3. Fluxo completo: pega o input (getElementById) -> lê o valor (.value) -> processa -> escreve o resultado (.innerHTML).
```
**Como conduzir:** retomada rápida de `getElementById`/`.value` (terça) e diferença `=` vs
`+=` usando exemplos já conhecidos: IMC (substituir resultado) e lista que cresce (acrescentar).
**Exercício sem computador (tracing):** 3 trechos prontos de HTML+JS no quadro (com
`getElementById`, `.value`, `.innerHTML`/`+=`); alunos preveem por escrito o que aparece na tela,
sem rodar código.
**Dica de preparação:** preparar os 3 trechos com antecedência, variando `=` e `+=` para que a
correção coletiva evidencie a diferença.
**Ponto de atenção comum:** confusão entre `=` (substitui) e `+=` (acrescenta) — se surgir,
refazer o mesmo trecho com os dois operadores lado a lado no quadro.

### Laboratório Web — 08:40 (manhã, expositiva)
**Tema:** Introdução a Funções em JavaScript — declaração, parâmetros, `return`, chamada.
**⚠️ Última aula teórica de JavaScript do curso** — a partir daqui é só aplicação.

**Quadro:**
```
1. function nomeDaFuncao(parametro1, parametro2) { bloco } — declara uma função.
2. Parâmetro é a variável que a função recebe; argumento é o valor enviado na chamada.
3. nomeDaFuncao(valor1, valor2); — chama (executa) a função com valores reais.
4. return valor; — devolve um resultado e encerra a função.
5. Uma função só roda quando é chamada — declarar não executa.
```
**Como conduzir:** motivar pelo problema do código repetido (IMC e aprovação/reprovação já
escritos várias vezes nos protótipos). Mostrar em slides: função sem parâmetro → com parâmetro
sem retorno → com parâmetro e `return`. Fazer o paralelo com função matemática (entrada →
processamento → saída). Fechar avisando que é a última teoria de JS do curso.
**Exercício sem computador:** 2 funções prontas no quadro (soma e IMC), cada uma com 3 pares de
valores de chamada; alunos calculam à mão o `return` — tabela de entrada/saída, sem rodar código.
**Dica de preparação:** montar a tabela de entrada/saída com valores redondos (facilita conferir
de cabeça na correção coletiva).
**Ponto de atenção:** para quem tem dificuldade de abstração, ter à mão o "antes/depois" — o
mesmo trecho de código sem função e depois dentro de uma function, mudando só a "moldura".

*(Não há aulas à tarde na quinta nesta semana.)*

---

## 📅 Sexta-feira — dia de prática pesada, planejar bem os 3 laboratórios

### Programação Web II — 13:20 (prática)
**Tema:** prática completa reunindo `getElementById`, `.value` e `.innerHTML`.
**Exercício guiado:** página com `<input>` de texto + botão "Adicionar" — cada clique acrescenta
o valor como item de uma `<ul>` (`innerHTML +=`); variação com `<input>` numérico somando valores.
**Fechamento:** comparar com os protótipos já existentes (IMC, aprovado/reprovado), destacando o
padrão input → processamento → saída no HTML.
**Dica:** se sobrar tempo, pedir para adicionarem um botão "Limpar lista" (`innerHTML = ''`) —
reforça a diferença `=`/`+=` na prática.

### Laboratório Web — 14:10 (prática)
**Tema:** Lista de Funções, **exercícios 1 a 5** (sem parâmetro → com parâmetro sem retorno).
Ver lista completa em `Exercicios/Lista-1-Funcoes.md`.
- Nível 1 (1-2): `mostrarSaudacao()`, `mostrarDataAtual()` — aquecimento, sem parâmetro/retorno.
- Nível 2 (3-5): `verificarIdade()`, `verificarParidade()`, `saudacaoComNome()` — com parâmetro.
**Como conduzir:** sempre ligar a função a um `<input>` (via `.value`) e mostrar resultado com
`.innerHTML`. Professor circula atendendo dúvidas individuais.

### Laboratório de Software — 15:15 (prática)
**Tema:** Lista de Funções, **exercícios 6 a 10** (com `return` e reaproveitamento).
- Nível 3 (6-8): `calcularIMC()`, `calcularMedia()`, `converterCelsiusParaFahrenheit()` — com
  `return`.
- Nível 4 (9-10): reaproveitar `calcularIMC()` chamando duas vezes; `somarDoisNumeros()` com dois
  botões chamando a mesma função.
**Fechamento da semana sugerido:** mostrar a mesma função sendo chamada duas vezes com valores
diferentes, exibindo os dois resultados na mesma página — fecha visualmente o conceito de
reaproveitamento de código.

---

## ✅ Checklist de preparação (antes da semana)

- [ ] Registros/tabelas fictícias prontos para os exercícios de Excel (segunda e terça de manhã).
- [ ] Trecho de HTML com ids impresso/projetado para terça de manhã (Lab. Software).
- [ ] 3 trechos de tracing (innerHTML/`+=`) prontos para quinta de manhã (Design).
- [ ] Tabela de entrada/saída de funções pronta para quinta de manhã (Lab. Web).
- [ ] Papéis de "pedido" prontos para a dinâmica de segunda (Rede).
- [ ] Cartolina/canetinha e grupos definidos para quarta (Rede, cartaz).
- [ ] Lista de Funções (10 exercícios) impressa/compartilhada antes de sexta.

## ⚠️ Pontos de atenção da semana

- **Excel** é conteúdo novo — não pressupor familiaridade prévia com planilhas.
- **`getElementById`/`.value`** (terça) é pré-requisito direto para `.innerHTML` (quinta) e para
  toda a prática de sexta — se a turma não fixar bem na terça, reforçar antes de quinta.
- **`=` vs `+=`** é o erro mais comum da semana — ter sempre o exemplo lado a lado pronto.
- **Funções com `return`** (quinta) é a última teoria de JS — se a turma sair da aula insegura,
  vale abrir a prática de sexta com uma retomada rápida de 5 minutos antes de soltar para os
  exercícios.
- **Rede de Computadores** não deve virar aula pesada nova — é apoio/fixação; se render menos
  que o esperado, não é grave, o conteúdo "oficial" da semana está em Excel/Funções/HTML+CSS+JS.
- Os **conjuntos** (Semana 39) não são retomados nesta semana.

---

Próxima semana: continuação da prática de Funções em JavaScript.

*Ver também: [Resumo-Semana-40-Alunos.md](Resumo-Semana-40-Alunos.md) (versão para repassar aos
alunos) e [Planejamento/](Planejamento/) (planos de aula completos por disciplina, com BNCC,
avaliação e recomposição de aprendizagem).*
