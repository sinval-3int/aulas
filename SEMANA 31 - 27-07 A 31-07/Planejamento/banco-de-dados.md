Professor(a): Sinval Silva Júnior

Componente Curricular: Banco de Dados

Turma(s): 3º Ano Integral

Período previsto: 27/07 a 31/07 (Semana 31)

CONTEÚDO / TEMA DA AULA
Para Onde Vão os Dados? A diferença entre a memória temporária do JavaScript (navegador) e o armazenamento permanente do Banco de Dados.

HABILIDADES (BNCC)
(EM13TEC02) Utilizar ferramentas e linguagens de programação para solucionar problemas e criar interfaces. (Competência Técnica) Reconhecer a necessidade de armazenamento persistente para dados que, no front-end, são manipulados apenas de forma temporária pelo JavaScript.

DESENVOLVIMENTO DAS AULAS (2 aulas)
Aula 1 (Segunda-feira, 07:00h - Sala de Aula / Teórica):
Resumo para o quadro (Para cópia dos alunos):
"1. Memória Temporária: Quando o JavaScript guarda um valor numa variável (var nome = 'João'), esse dado só existe enquanto a página está aberta na memória RAM do usuário.
2. O Problema: Se o usuário fechar ou atualizar a página, tudo que o JavaScript guardou se perde.
3. A Solução: O Banco de Dados existe para guardar essa informação de forma permanente, mesmo depois que a página é fechada.
4. Revisão de SGBD: Um Sistema Gerenciador de Banco de Dados organiza essas informações em tabelas, para que possam ser recuperadas depois."
Atividade Teórica: O professor apresentará um formulário simples (nome, e-mail, idade) que os alunos estão desenvolvendo em Programação Web II. Em grupo, os alunos listarão no caderno quais desses dados fazem sentido guardar permanentemente e por quê.

Aula 2 (Segunda-feira, 13:20h - Sala de Aula / Teórica):
Resumo para o quadro (Para cópia dos alunos):
"5. Tipos no JavaScript x Tipos no Banco: No JavaScript, uma variável pode guardar texto, número ou verdadeiro/falso sem declarar o tipo. No Banco de Dados, cada coluna de uma tabela precisa de um tipo definido (VARCHAR, INT, BOOLEAN).
6. Correspondência: Um dado que o JavaScript trata como número (idade) deve virar uma coluna INT. Um texto (nome) deve virar uma coluna VARCHAR."
Atividade de Fixação: Exercício de mapeamento — para cada variável JavaScript listada na Aula 1, os alunos escreverão qual tipo de coluna SQL corresponde a ela.

AVALIAÇÃO
Avaliação contínua através da correção da lista de dados relevantes (Aula 1) e do exercício de mapeamento variável JavaScript → tipo de coluna SQL (Aula 2).

RECOMPOSIÇÃO DE APRENDIZAGEM
Para alunos com dificuldade de abstração, desenhar no quadro uma tabela com colunas, escrevendo ao lado de cada uma o tipo de variável JavaScript equivalente, materializando a correspondência entre os dois mundos.

OBSERVAÇÕES:
Aula preparatória: introduz o vocabulário que será usado nas próximas semanas, quando o comando INSERT INTO for formalmente apresentado a partir dos formulários HTML.
