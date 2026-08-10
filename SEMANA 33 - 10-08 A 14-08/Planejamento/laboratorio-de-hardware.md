Professor(a): Sinval Silva Júnior

Componente Curricular: Laboratório de Hardware

Turma(s): 3º Ano Integral

Período previsto: 10/08 a 14/08 (Semana 33)

CONTEÚDO / TEMA DA AULA
Decisão condicional em hardware: desconectar o cabo de rede do computador e verificar, na prática, se existe ou não conexão — testando ao mesmo tempo o hardware físico e a lógica if/else.

HABILIDADES (BNCC)
(EM13TEC02) Utilizar ferramentas e linguagens de programação para solucionar problemas e criar interfaces. (Competência Técnica) Relacionar o estado físico de uma conexão de rede (cabo conectado ou não) a uma estrutura de decisão condicional, verificando na prática o efeito no status de conectividade do equipamento.

DESENVOLVIMENTO DAS AULAS (2 aulas)
Aula 1 (Terça-feira, 09:45h - Sala de Aula / Teórica):
Resumo para o quadro (Para cópia dos alunos):
"1. Conexão de rede é um estado binário: cabo conectado (true) ou cabo desconectado (false) — a mesma ideia de condição do if.
2. O Sistema Operacional mostra esse estado no ícone de rede (conectado x sem conexão) e em comandos como ipconfig/ping.
3. Pseudocódigo do teste: if (cabo conectado) { 'Conectado' } else { 'Sem conexão' }."
Atividade Teórica: Apresentação da analogia cabo conectado/desconectado como condição booleana, explicando o roteiro do experimento prático da Aula 2 (desconectar o cabo, observar o ícone de rede, tentar acessar um site, reconectar). Prompt para geração de slides no NotebookLM: ver seção "Slides (NotebookLM)" ao final deste arquivo.

Aula 2 (Quarta-feira, 13:20h - Sala de Aula / Prática):
Resumo para o quadro (Para cópia dos alunos):
"4. Experimento: com o cabo conectado, verificar o ícone de rede e tentar abrir um site (sucesso, o if).
5. Desconectar o cabo de rede e repetir: ícone de rede muda, site não carrega (falha, o else).
6. Reconectar o cabo e confirmar que a conexão volta (if novamente)."
Atividade Prática: Em duplas, os alunos desconectam o cabo de rede do computador, observam a mudança no ícone/status de conexão do Sistema Operacional e tentam acessar um site (falha esperada); em seguida reconectam o cabo e confirmam o retorno da conexão, registrando os dois estados como if/else.

AVALIAÇÃO
Avaliação contínua através da relação cabo x if/else levantada em grupo (Aula 1) e do registro dos dois estados de conexão testados na Aula 2.

RECOMPOSIÇÃO DE APRENDIZAGEM
Para alunos com dificuldade de abstração, escrever no quadro lado a lado o pseudocódigo do teste ("se cabo conectado { tem internet } senão { sem internet }") e o resultado observado em cada etapa do experimento.

OBSERVAÇÕES:
Aula em paralelo ao experimento equivalente feito em Rede de Computadores (testar sucesso/falha de requisição na aba Network, ficando propositalmente sem internet), e conectada à estrutura condicional (if/else) vista em Programação Web II na mesma semana.

## Slides (NotebookLM) — prompt para a Aula 1 (Teórica)

```
Você é um assistente de criação de slides para uma aula técnica de Ensino Médio Técnico
(disciplina: Laboratório de Hardware, turma 3INT).

Crie uma apresentação de slides sobre "Cabo de rede conectado ou não: testando if/else no
hardware", dividida em DUAS PARTES:

PARTE 1 — RESUMO PARA O ALUNO COPIAR NO CADERNO (2 slides)
1. Conexão de rede é um estado binário: cabo conectado (true) ou desconectado (false).
2. O ícone de rede do Sistema Operacional muda conforme esse estado.
3. Pseudocódigo do teste: if (cabo conectado) { "Conectado" } else { "Sem conexão" }.

PARTE 2 — EXPLICAÇÃO DETALHADA PARA O PROFESSOR APRESENTAR
1. Onde fica o cabo de rede (RJ45) no computador e como desconectá-lo com segurança.
2. Como observar o ícone/status de rede do Sistema Operacional antes e depois de desconectar.
3. Roteiro do experimento: cabo conectado (testar acesso a um site) → desconectar (testar de
   novo, falha esperada) → reconectar (confirmar retorno da conexão).
4. Slide comparando lado a lado o pseudocódigo if/else com os dois estados observados no
   experimento.
5. Slide final com o roteiro passo a passo que os alunos vão executar em duplas na Aula 2.

Formatação: pouco texto por slide, ícones/descrições visuais dos dois estados de conexão,
português do Brasil, tom de professor para Ensino Médio Técnico.
```
