Professor(a): Sinval Silva Júnior

Componente Curricular: Laboratório de Software

Turma(s): 3º Ano Integral

Período previsto: 10/08 a 14/08 (Semana 33)

CONTEÚDO / TEMA DA AULA
O que é o npm, para que serve e como instalar módulos diferentes. Fechamento da semana: revisão dos módulos instalados, criação do .gitignore e envio do projeto atual para o GitHub.

HABILIDADES (BNCC)
(EM13TEC02) Utilizar ferramentas e linguagens de programação para solucionar problemas e criar interfaces. (Competência Técnica) Reconhecer o funcionamento do npm (Node Package Manager), instalar diferentes módulos externos, e aplicar boas práticas de controle de versão (.gitignore e envio ao GitHub) em um projeto Node.js.

DESENVOLVIMENTO DAS AULAS (2 aulas)
Aula 1 (Terça-feira, 10:35h - Sala de Aula / Teórica):
Resumo para o quadro (Para cópia dos alunos):
"1. npm (Node Package Manager) é o gerenciador de pacotes do Node.js — instalado junto com ele.
2. npm init -y cria o package.json: um arquivo que descreve o projeto e suas dependências.
3. npm install <nome> baixa um módulo (biblioteca externa) e o coloca na pasta node_modules.
4. Cada módulo resolve um problema pronto, sem precisar reescrever tudo do zero."
Atividade Teórica: Apresentação do npm (o que é, para que serve) e instalação, em conjunto, de 2-3 módulos diferentes de exemplo, observando o que cada npm install muda no package.json e na pasta node_modules. Prompt para geração de slides no NotebookLM: ver seção "Slides (NotebookLM)" ao final deste arquivo.

Aula 2 (Sexta-feira, 15:15h - Sala de Aula / Aula de Dúvidas e Fixação de Conteúdo):
Resumo para o quadro (Para cópia dos alunos):
"1. Revisão: quais módulos estão instalados? Ver package.json (dependencies) e a pasta node_modules.
2. .gitignore é um arquivo que diz ao Git quais pastas/arquivos NÃO devem ser enviados ao repositório — node_modules é sempre um deles (é grande e pode ser reinstalado com npm install).
3. Fluxo para subir o projeto: git init → git add . → git commit -m 'mensagem' → git push."
Descrição da aula: Atividade fixa da semana. Revisão dos módulos instalados na Aula 1, criação de um arquivo .gitignore incluindo node_modules, e envio do projeto atual (script.js, index.html, style.css, package.json) para o repositório do aluno no GitHub, retomando o guia de Git da aula-0-configurando-git.

AVALIAÇÃO
Avaliação contínua através da participação na instalação dos módulos de exemplo (Aula 1) e da conclusão do envio do projeto ao GitHub com .gitignore configurado (Aula 2).

RECOMPOSIÇÃO DE APRENDIZAGEM
Para alunos com dificuldade de abstração, repetir junto o fluxo completo de terminal: npm init -y → npm install <módulo> → criação do .gitignore → git init → git add . → git commit → git push, um comando de cada vez, conferindo o resultado a cada etapa.

OBSERVAÇÕES:
A Aula 2 (sexta-feira, último horário) é fixa em todas as semanas: dedicada a dúvidas e fixação de conteúdo, funcionando nesta semana como fechamento prático (módulos + .gitignore + GitHub) do projeto trabalhado ao longo da semana.

## Slides (NotebookLM) — prompt para a Aula 1 (Teórica)

```
Você é um assistente de criação de slides para uma aula técnica de Ensino Médio Técnico
(disciplina: Laboratório de Software, turma 3INT).

Crie uma apresentação de slides sobre "npm: o gerenciador de pacotes do Node.js", dividida
em DUAS PARTES:

PARTE 1 — RESUMO PARA O ALUNO COPIAR NO CADERNO (2 slides)
1. npm é o gerenciador de pacotes do Node.js, instalado junto com ele.
2. npm init -y cria o package.json; npm install <nome> baixa um módulo para node_modules.
3. Cada módulo resolve um problema pronto, sem reescrever tudo do zero.

PARTE 2 — EXPLICAÇÃO DETALHADA PARA O PROFESSOR APRESENTAR
1. O que é um pacote/módulo e por que a comunidade JavaScript usa tanto o npm.
2. Passo a passo: npm init -y, explicando o package.json gerado.
3. npm install de 2-3 módulos diferentes de exemplo (nomes simples e seguros), mostrando o
   antes/depois do package.json e da pasta node_modules.
4. Diferença entre dependencies (produção) e devDependencies (desenvolvimento), de forma
   introdutória.
5. Slide de transição para a Aula 2: por que node_modules não deve ir para o GitHub, e o
   papel do .gitignore.
6. Slide final com o roteiro que será praticado na Aula 2 (revisão de módulos, .gitignore,
   git init/add/commit/push).

Formatação: pouco texto por slide, comandos de terminal em bloco de código monoespaçado,
português do Brasil, tom de professor para Ensino Médio Técnico.
```
