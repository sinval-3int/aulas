# Guia de Git

Bem-vindo! 👋

Este repositório reúne guias rápidos para aprender a usar o **Git** e o **GitHub** durante as aulas.

Os arquivos estão organizados por assunto para facilitar a consulta.

## 📚 Conteúdo

### 1. Configuração Inicial

Arquivo: **01-configuracao-inicial.md**

Neste guia você aprenderá a:

- Configurar o Git pela primeira vez;
- Remover configurações antigas (caso necessário);
- Criar um repositório Git;
- Configurar seu nome e e-mail;
- Conectar o projeto ao GitHub.

---

### 2. Enviando alterações para o GitHub

Arquivo: **02-fazer-push.md**

Este guia mostra como:

- Verificar alterações no projeto;
- Adicionar arquivos (`git add`);
- Criar um commit (`git commit`);
- Enviar as alterações para o GitHub (`git push`).

---

### 3. Atualizando um projeto existente

Arquivo: **03-fazer-pull.md**

Aprenda como:

- Baixar as alterações mais recentes do GitHub;
- Resolver conflitos simples;
- Manter seu projeto sempre atualizado usando `git pull`.

---

### 4. Clonando um repositório

Arquivo: **04-git-clone.md**

Neste guia você verá como:

- Baixar um projeto já existente do GitHub;
- Clonar um repositório usando `git clone`;
- Entrar na pasta do projeto;
- Começar a trabalhar utilizando o fluxo correto.

---

## 🚀 Fluxo de trabalho recomendado

Sempre que for trabalhar em um projeto, siga esta sequência:

```text
git pull
    ↓
git add .
    ↓
git commit -m "Descrição da alteração"
    ↓
git push
```

## 💡 Dica

Antes de começar qualquer atividade, execute:

```bash
git pull
```

Assim você garante que está trabalhando na versão mais recente do projeto e evita conflitos com alterações feitas por outras pessoas.

---

Bons estudos e bom código! 🚀
