# Roteiro de Testes — Loja da Teté

## Busca e filtros

- Pesquise `livro`: o catálogo deve mostrar os livros e atualizar a quantidade de resultados.
- Escolha uma categoria: somente os produtos dessa categoria devem aparecer.
- Limpe a busca e selecione “Todas as categorias”: o catálogo completo deve voltar.
- Pesquise um termo sem resultado: a página deve mostrar uma mensagem clara e manter os filtros utilizáveis.

## Sacola

- Adicione um produto: a contagem, a linha do produto e o subtotal devem atualizar.
- Adicione o mesmo produto outra vez: a quantidade deve aumentar, sem criar uma linha duplicada.
- Aumente e diminua a quantidade: subtotal e contagem devem acompanhar a mudança.
- Remova o último item: a sacola deve mostrar seu estado vazio.
- Recarregue a página com itens na sacola: os itens devem permanecer no mesmo navegador.
- Confirme o pedido: a página deve avisar que a ação é uma simulação e que nada foi enviado.

## Formulário e acessibilidade

- Tente enviar o formulário vazio: o navegador deve apontar os campos obrigatórios.
- Envie nome, e-mail e mensagem: a confirmação deve aparecer na página, sem recarregar.
- Abra e feche a sacola pelo botão, pelo botão “Fechar” e pela tecla Escape.
- Use Tab e Enter para navegar e operar os controles principais.

## Registro de execução do modelo

Verificações executadas no navegador Chromium:

- **Catálogo inicial:** 8 produtos exibidos; passou.
- **Busca por “livro”:** 2 resultados; passou.
- **Filtro “Brincar”:** 1 produto; passou.
- **Sacola:** adicionar produto atualiza contagem e subtotal; tecla Escape fecha o painel; passou.
- **Formulário:** dados válidos exibem confirmação local; passou.
- **Dado inválido encontrado e corrigido:** um item salvo com quantidade textual inválida poderia produzir subtotal incorreto. `carregarSacola()` agora descarta registros inválidos, quantidades não inteiras, zero/negativas, acima do estoque e IDs desconhecidos. O teste de carga inválida confirmou sacola vazia e subtotal correto.
- **Erros JavaScript na página:** nenhum erro durante os cenários acima.

Os testes não representam uma integração real com loja ou banco de dados.
