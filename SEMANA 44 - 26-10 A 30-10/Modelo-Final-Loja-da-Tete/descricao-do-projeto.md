# Descrição do Projeto — Loja da Teté

## Nome

Loja da Teté — vitrine demonstrativa de produtos infantis.

## Problema

Uma família que procura itens para bebês precisa conseguir conhecer produtos, comparar categorias e localizar rapidamente informações como preço, idade indicada e disponibilidade. O projeto organiza essa vitrine em uma página simples de navegar.

## Público

Familiares, responsáveis e pessoas que procuram produtos para crianças pequenas. A Teté, bebê de 1 ano que inspira o projeto de aula, aparece em algumas imagens cedidas pelo site de referência.

## Solução

Um site responsivo com catálogo de produtos, busca por texto, filtro por categoria e sacola de demonstração. A página também explica a proposta da loja e oferece um formulário de contato que valida os campos e exibe uma confirmação local.

## Funcionalidades

- Ver os produtos em destaque e navegar pelo catálogo.
- Pesquisar pelo nome, categoria ou descrição.
- Filtrar produtos por categoria.
- Adicionar itens à sacola, alterar quantidades e remover itens.
- Ver a contagem de itens e o subtotal da sacola.
- Manter a sacola no mesmo navegador entre recargas, usando `localStorage`.
- Preencher o formulário de contato e receber uma resposta demonstrativa.

## Dados do projeto

O arquivo [banco-de-dados.xlsx](banco-de-dados.xlsx) representa o catálogo. A aba `Produtos` registra identificador, nome, categoria, descrição, faixa etária, preço, estoque, imagem e destaque. As abas `Categorias`, `Dicionario` e `Resumo` ajudam a explicar o modelo e incluem fórmulas de contagem, média e soma.

O site usa em JavaScript uma lista de objetos com os mesmos produtos para permitir a interação sem servidor. O Excel é a representação/documentação dos dados; ele não alimenta automaticamente a página. A sacola é salva localmente no navegador e não é um pedido real.

## Organização e uso

- `site/index.html`: estrutura e página inicial.
- `site/style.css`: cores, tipografia, layout e adaptação a telas menores.
- `site/script.js`: dados de demonstração, busca, filtro, sacola e formulário.
- `banco-de-dados.xlsx`: modelo dos dados e exemplos.

Abra `site/index.html` em um navegador. Para testar a persistência local da sacola de forma consistente, sirva a pasta `site` em um servidor local. Veja [site/README.md](site/README.md).

## Limites do protótipo

Preços e estoques são fictícios para fins didáticos. Não há pagamento, conta de usuário, envio de formulário, pedido real ou conexão com MySQL/API. Em uma versão de produção, a aplicação precisaria de um servidor/API que protegesse as credenciais e acessasse o banco real.
