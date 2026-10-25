# Modelo de Trabalho Final — Loja da Teté

Projeto demonstrativo completo para o trabalho final do 3INT. Ele reaproveita o conceito e parte das imagens do site de aula da Loja da Teté e reúne descrição do projeto, planilha Excel de dados, site em HTML/CSS/JavaScript, evidências de Git e explicação dos 20 critérios.

## Arquivos

- [Descrição do projeto](descricao-do-projeto.md)
- [Banco de dados representado em Excel](banco-de-dados.xlsx)
- [Site e instruções para abrir](site/README.md)
- [Checklist dos 20 critérios explicado](Explicacao-20-Criterios.md) · [PDF](Explicacao-20-Criterios.pdf)
- [Histórico Git demonstrativo](historico-git.md) · arquivo de repositório: `historico-exemplo.bundle`
- [Roteiro de testes](roteiro-de-testes.md)

## Resumo do exemplo

A Loja da Teté é uma vitrine demonstrativa de produtos infantis. A pessoa pode pesquisar e filtrar itens, adicionar/remover produtos de uma sacola local e enviar uma mensagem de contato simulada. Não há pagamento, envio de pedido nem conexão real com banco de dados.

O arquivo Excel documenta os dados e o modelo do catálogo. O JavaScript usa uma lista de objetos equivalente para demonstrar funções, condições, repetição, filtros e atualização da interface. A sacola fica salva somente no navegador, usando `localStorage` como recurso demonstrativo.

## Como conferir o histórico

O bundle contém um repositório Git exportado com três commits. Para abrir uma cópia do histórico:

```bash
git clone historico-exemplo.bundle loja-tete-com-historico
cd loja-tete-com-historico
git log --oneline
```

Este diretório de entrega não é um repositório Git aninhado; o bundle é a cópia portável do histórico, para não confundir o repositório maior das aulas.

## Apresentação sugerida

1. Explique o problema e quem usaria a loja.
2. Abra o Excel e mostre como campos e registros estão organizados.
3. Demonstre a busca, o filtro, a sacola e o formulário.
4. Mostre no JavaScript a lista de produtos e uma função que atualiza a página.
5. Abra o histórico Git e explique uma mudança registrada.
