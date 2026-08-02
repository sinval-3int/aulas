# Configuração Inicial do Git

Este guia é para quem vai configurar o Git pela primeira vez ou precisa trocar de conta no computador.

## Passo 1 - Remover credenciais antigas (se necessário)

```bash
cmdkey /delete:LegacyGeneric:target=git:https://github.com
```

```bash
git config --global --unset user.name
git config --global --unset user.email
git config --global --unset credential.helper
```

> Se for a primeira vez usando o Git, pode pular este passo.

## Passo 2 - Criar um repositório

```bash
git init
```

## Passo 3 - Configurar seu nome e e-mail

```bash
git config user.name "Seu Nome"
git config user.email "seu.email@educacao.mg.gov.br"
```

## Passo 4 - Conectar ao GitHub

```bash
git branch -M main
git remote add origin https://usuario@github.com/usuario/repositorio.git
```

## Verificar

```bash
git remote -v
git status
```
