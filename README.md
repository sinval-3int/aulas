# Guia de Configuração e Uso do Git

Este repositório contém as instruções passo a passo para configurar o Git, limpar credenciais antigas no Windows, inicializar um novo repositório local, vinculá-lo ao GitHub e atualizar o projeto com novas alterações.

---

## 1. Configuração Inicial e Limpeza de Credenciais

Se você estiver alternando de conta ou precisar redefinir as configurações de credenciais do Git no Windows, execute os comandos abaixo no Prompt de Comando (cmd) ou terminal de sua preferência.

### Passo 1: Remover credenciais antigas do Windows
Remove o token ou senha do GitHub salvos no Gerenciador de Credenciais do Windows:

`
cmdkey /delete:LegacyGeneric:target=git:https://github.com
`

### Passo 2: Limpar configurações globais antigas
Remove o nome de usuário, e-mail e o assistente de credenciais configurados globalmente para evitar conflitos:
```
git config --global --unset user.name
git config --global --unset user.email
git config --global --unset credential.helper
```
---

## 2. Inicialização e Primeiro Envio (Push)

Siga estes passos para iniciar um repositório do zero e fazer o primeiro envio para o GitHub.

### Passo 1: Inicializar o repositório local
Abra o terminal na pasta do seu projeto e execute:
```
git init
```
### Passo 2: Configurar a identidade local do repositório
Define o nome e o e-mail institucionais especificamente para este projeto:
```
git config user.name "Sinval Silva Júnior"
git config user.email "sinval.silva.junior@educacao.mg.gov.br"
```
### Passo 3: Adicionar os arquivos e criar o commit inicial
Adiciona todos os arquivos atuais da pasta e cria o primeiro ponto na história do projeto:
```
git add .
git commit -m "Commit inicial do projeto"
```
### Passo 4: Definir a branch principal e o repositório remoto
Define o nome da branch principal como `main` e vincula o repositório local ao link remoto do GitHub:
```
git branch -M main
git remote add origin https://sinval-3int@github.com/sinval-3int/aulas.git
```
### Passo 5: Sincronizar e enviar para o GitHub
Sincroniza o histórico caso o repositório remoto já possua arquivos (como um README ou LICENSE) e envia os arquivos locais:
```
git pull origin main --allow-unrelated-histories
git push -u origin main
```
---

## 3. Fluxo de Trabalho Diário (Quando houver alterações)

Sempre que você fizer modificações, criar novos arquivos ou excluir algo no seu projeto, siga o fluxo abaixo para salvar e enviar suas alterações para o GitHub.

### Passo 1: Adicionar as alterações na área de stage
Prepara todos os arquivos modificados para o próximo commit:
```
git add .
```
*(Se quiser adicionar apenas um arquivo específico, use `git add nome-do-arquivo.extensao`)*

### Passo 2: Gravar as alterações (Commit)
Crie um commit descrevendo brevemente o que foi alterado ou adicionado:
```
git commit -m "Sua mensagem descritiva aqui"
```
*Exemplo: `git commit -m "Adiciona novos exercícios de matemática"`*

### Passo 3: Enviar para o GitHub (Push)
Envie as alterações salvas localmente para o servidor remoto do GitHub:
```
git push
```
*(Como o upstream `-u` já foi configurado no primeiro envio, basta digitar apenas `git push` nas próximas vezes)*

---

## 💡 Dicas Úteis

* **Verificar o status atual:** Para ver quais arquivos foram modificados ou estão prontos para o commit, use:
  git status
* **Ver o histórico de commits:** Para visualizar o histórico de alterações realizadas no repositório:
  git log --oneline
