Professor(a): Sinval Silva Júnior

Componente Curricular: Rede de Computadores

Turma(s): 3º Ano Integral

Período previsto: 10/08 a 14/08 (Semana 33)

CONTEÚDO / TEMA DA AULA
Decisão condicional aplicada ao diagnóstico de rede: a aba Network do console do navegador para testar, na prática, se uma requisição teve sucesso (if) ou falhou (else) — simulando erro real ao ficar propositalmente sem internet.

HABILIDADES (BNCC)
(EM13TEC02) Utilizar ferramentas e linguagens de programação para solucionar problemas e criar interfaces. (Competência Técnica) Utilizar a aba Network das Ferramentas do Desenvolvedor para verificar o sucesso ou a falha de uma requisição, relacionando o resultado a uma estrutura condicional (if/else).

DESENVOLVIMENTO DAS AULAS (3 aulas)
Aula 1 (Segunda-feira, 14:10h - Sala de Aula / Teórica):
Resumo para o quadro (Para cópia dos alunos):
"1. Retomada: a aba Network mostra, para cada requisição, uma coluna Status.
2. Ideia de decisão: se Status = 200, a requisição deu certo (o if); senão, algo falhou (o else).
3. Sem internet, a requisição nem chega a ter status — aparece como erro (failed / net::ERR_INTERNET_DISCONNECTED) no console."
Descrição da aula: Apresentação, em formato de fluxo de decisão (se sucesso → aparece na aba Network com status 200; senão → erro registrado no console/log), preparando o experimento prático da Aula 2 e conectando com a lógica de if/else/else if trabalhada em Programação Web II na mesma semana. Prompt para geração de slides no NotebookLM: ver seção "Slides (NotebookLM)" ao final deste arquivo.

Aula 2 (Quarta-feira, 14:10h - Sala de Aula / Prática):
Resumo para o quadro (Para cópia dos alunos):
"4. Experimento: com internet ligada, recarregar uma página e ver a requisição com Status 200 na aba Network (o if, sucesso).
5. Desligar o Wi-Fi (ou ativar 'Offline' na aba Network) e recarregar de novo: a requisição falha, e o erro aparece no console (o else, falha).
6. Religar a internet e confirmar que a página volta a carregar normalmente."
Descrição da aula: Cada aluno reproduz o experimento: recarrega uma página com internet (sucesso, status 200) e depois sem internet, propositalmente (falha, erro no console), registrando a diferença entre os dois cenários e relacionando com o if/else do JavaScript.

Aula 3 (Quarta-feira, 15:15h - Sala de Aula / Aula de Dúvidas e Fixação de Conteúdo):
Resumo para o quadro (Para cópia dos alunos):
"1. Aba Network: cada requisição tem Name, Status, Type, Size e Time.
2. Se sucesso (status 200) → if; se falha (sem internet, erro no console) → else."
Descrição da aula: Atividade fixa da semana. Revisão oral do resumo com apoio do quadro, seguida de exercício de fixação (repetir o teste com/sem internet em outra página à escolha) e resolução de dúvidas dos alunos sobre os conteúdos de Rede das Semanas 31 a 33.

AVALIAÇÃO
Avaliação contínua através da participação na Aula 1, do registro do experimento com/sem internet (Aula 2) e do engajamento na revisão da Aula 3.

RECOMPOSIÇÃO DE APRENDIZAGEM
Para alunos com dificuldade de abstração, fazer o experimento junto com o aluno, apontando lado a lado a aba Network com internet (status 200, sucesso) e sem internet (erro vermelho, falha), nomeando cada cenário como if e como else.

OBSERVAÇÕES:
A Aula 1 (segunda-feira) prepara o vocabulário para o experimento com/sem internet da Aula 2, em conjunto com o experimento equivalente feito em Laboratório de Hardware (cabo de rede desconectado). A Aula 3 (quarta-feira, último horário) é fixa em todas as semanas: dedicada a dúvidas e fixação de conteúdo.

## Slides (NotebookLM) — prompt para a Aula 1 (Teórica)

```
Você é um assistente de criação de slides para uma aula técnica de Ensino Médio Técnico
(disciplina: Rede de Computadores, turma 3INT).

Crie uma apresentação de slides sobre "A aba Network como teste prático de if/else: sucesso
ou falha de uma requisição", dividida em DUAS PARTES:

PARTE 1 — RESUMO PARA O ALUNO COPIAR NO CADERNO (2 slides)
1. A aba Network mostra o Status de cada requisição feita pelo navegador.
2. Status 200 = sucesso (o "if"); sem internet, a requisição falha e aparece como erro no
   console (o "else").

PARTE 2 — EXPLICAÇÃO DETALHADA PARA O PROFESSOR APRESENTAR
1. Como abrir as Ferramentas do Desenvolvedor e a aba Network (botão direito > Inspecionar).
2. Recarregar uma página com internet: mostrar a requisição com status 200.
3. Como simular falta de internet: desligar o Wi-Fi ou usar a opção "Offline" da própria
   aba Network do navegador.
4. Recarregar a mesma página sem internet: mostrar o erro (failed / net::ERR_INTERNET_DISCONNECTED)
   na aba Network e no console.
5. Slide comparando lado a lado: pseudocódigo "if (requisição OK) { mostra página } else
   { mostra erro }" ao lado dos dois prints/descrições do experimento.
6. Slide final com o roteiro do experimento prático que os alunos vão repetir na Aula 2.

Formatação: pouco texto por slide, destaque visual para status 200 (sucesso, verde) x erro
(falha, vermelho), português do Brasil, tom de professor para Ensino Médio Técnico.
```
