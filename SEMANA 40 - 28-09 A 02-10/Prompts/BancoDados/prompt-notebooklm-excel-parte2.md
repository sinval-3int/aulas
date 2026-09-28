# Prompt para o NotebookLM — Slides (Laboratório de Hardware: Introdução ao Excel, parte 2)

Instruções de uso: subir `../Fonte-Semana-40.md` como fonte no NotebookLM (fonte única da
semana) e colar o prompt abaixo no chat/gerador de slides, informando que o conteúdo desta
aula é a **PARTE B** do arquivo (a **PARTE A**, já dada na aula anterior, serve de
referência de estilo/nomenclatura).

Aula: **Laboratório de Hardware — Terça-feira, 09:45h (manhã, expositiva, sem computador)**.

---

**Prompt:**

```
Você é um assistente de criação de slides para uma aula técnica de Ensino Médio Técnico
(disciplina: Laboratório de Hardware, turma 3INT — curso de Informática/TI). Esta é a
continuação direta da aula "Introdução ao Excel, parte 1" dada em Banco de Dados na
segunda-feira (linha=registro, coluna=campo, célula=valor). Agora a turma vai aprender
fórmulas básicas e a usar planilha para organizar projetos — habilidade que será cobrada
logo na sequência, na prática de projeto do próprio curso (ex.: projeto integrador).

Crie uma apresentação de slides sobre "Introdução ao Excel: fórmulas e organização de
projetos (parte 2)", dividida em DUAS PARTES.

PARTE 1 — RESUMO PARA O ALUNO COPIAR NO CADERNO (3 a 4 slides)
- Texto curto, direto, em tópicos numerados, sem explicação longa — para copiar à mão, sem
  computador na carteira.
- Deve conter, na ordem:
  1. =SOMA(intervalo) — soma todos os valores de um intervalo de células (ex.: =SOMA(B2:B10)).
  2. =MÉDIA(intervalo) — calcula a média de um intervalo de células.
  3. =CONT.NÚM(intervalo) ou =CONT.VALORES(intervalo) — conta quantas células têm valor.
  4. Cronograma de projeto = uma tabela com colunas como: Tarefa, Responsável, Prazo, Horas
     estimadas, Status (a fazer / em andamento / concluído).
- Manter linguagem simples, retomando os termos já dados na parte 1 (registro, campo,
  célula).

PARTE 2 — EXPLICAÇÃO DETALHADA PARA O PROFESSOR APRESENTAR (o restante dos slides)
- Um slide por bloco de conteúdo, sempre com EXEMPLOS CONCRETOS ligados a projetos de TI:
  1. Slide de retomada: relembrar rapidamente linha/coluna/célula com o exemplo da tabela de
     alunos (ou de chamados de suporte) usado na aula anterior.
  2. Slide "Por que fórmula?" — mostrar o problema de calcular manualmente o total de horas
     de um projeto com 20 tarefas: é lento e sujeito a erro; a fórmula recalcula sozinha
     sempre que um valor muda.
  3. Slide "=SOMA()" — exemplo passo a passo: uma coluna "Horas estimadas" com 6 tarefas de
     um projeto de desenvolvimento de um pequeno sistema web (ex.: "Criar tela de login: 4h",
     "Criar tela de cadastro: 6h", "Conectar ao banco de dados: 8h" etc.), e a fórmula
     =SOMA(B2:B7) somando tudo na célula de total.
  4. Slide "=MÉDIA()" — mesma tabela, calculando a média de horas por tarefa com
     =MÉDIA(B2:B7), e discutindo o que esse número diz sobre o tamanho médio das tarefas do
     projeto.
  5. Slide "=CONT.NÚM() / =CONT.VALORES()" — exemplo contando quantas tarefas já foram
     "Concluídas" numa coluna de Status, como uma forma simples de acompanhar o progresso de
     um projeto (paralelo com um quadro Kanban/Trello, que a turma provavelmente já usou ou
     ouviu falar).
  6. Slide "Montando um cronograma de projeto" — modelo completo de tabela: colunas Tarefa /
     Responsável / Prazo / Horas estimadas / Status, com 5-6 linhas de exemplo de um projeto
     de TI (ex.: desenvolvimento de um site, ou manutenção de computadores do laboratório),
     e uma linha de "Totais" ao final usando =SOMA() e =MÉDIA().
  7. Slide "Planilha como ferramenta de gestão de projeto" — conectar com o vocabulário de
     TI: cronograma, backlog de tarefas, responsável, prazo — termos que aparecem em
     ferramentas profissionais (Trello, Jira, Excel/Planner) e que a planilha simples já
     ensina na prática.
  8. Slide-síntese: recapitular as 3 fórmulas (soma, média, contagem) e anunciar a prática
     de quarta-feira (Laboratório de Hardware, tarde): montar esse cronograma de projeto de
     verdade no computador, com fórmulas funcionando.
  9. Slide final com um exercício rápido "de cabeça"/no papel: dada uma tabela pequena de 4
     tarefas com horas (ex.: 3h, 5h, 2h, 6h), os alunos calculam de cabeça o total e a média,
     como preparação para o exercício da aula (que será feito no caderno, sem computador).

Regras gerais de formatação:
- Slides com pouco texto, sempre mostrando a fórmula do Excel junto com o resultado que ela
  produziria (ex.: "=SOMA(B2:B7) → 34").
- Usar sempre exemplos do universo de TI (cronograma de desenvolvimento de sistema,
  manutenção de laboratório, controle de chamados) — não usar exemplos genéricos
  desconectados do curso.
- Português do Brasil, tom de professor para turma de Ensino Médio Técnico em Informática.
- Manter consistência de nomenclatura com a aula "Introdução ao Excel, parte 1" (linha =
  registro, coluna = campo, célula = valor).
```
