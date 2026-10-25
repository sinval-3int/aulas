# Histórico Git do Modelo

O arquivo `historico-exemplo.bundle` é um bundle Git real com o código e três commits explicativos. Ele pode ser clonado para uma pasta temporária e consultado com `git log --oneline`.

Commits do exemplo:

1. `Cria identidade visual e estrutura da Loja da Tete`
2. `Adiciona catalogo, busca, filtros e sacola demonstrativa`
3. `Documenta dados, testes e criterios do projeto final`

Comandos para conferir:

```bash
git clone historico-exemplo.bundle loja-tete-com-historico
cd loja-tete-com-historico
git log --oneline
git status
```

O bundle preserva um histórico de exemplo sem criar um repositório `.git` dentro da pasta das aulas.
