// Catálogo de demonstração: os mesmos registros estão documentados no arquivo Excel.
var produtos = [
  { id: 1, nome: "Kit de brinquedos", categoria: "Brincar", descricao: "Peças coloridas para explorar formas e encaixes.", faixaEtaria: "12+ meses", preco: 39.90, estoque: 12, imagem: "imagens/brinquedos.jpg", alt: "Teté brinca com brinquedos coloridos", destaque: true },
  { id: 2, nome: "Fralda de passeio G", categoria: "Cuidar", descricao: "Um item prático para levar na bolsa da família.", faixaEtaria: "9–12 kg", preco: 34.90, estoque: 24, imagem: "imagens/fralda.jpg", alt: "Teté ao lado de uma embalagem de fraldas", destaque: true },
  { id: 3, nome: "Livro de descobertas", categoria: "Ler", descricao: "Uma ideia para desenhar, folhear e inventar histórias.", faixaEtaria: "12+ meses", preco: 24.90, estoque: 8, imagem: "imagens/livro.jpg", alt: "Teté desenha em uma atividade de leitura", destaque: true },
  { id: 4, nome: "Óculos de sol infantil", categoria: "Passear", descricao: "Acessório leve para dias de passeio com a família.", faixaEtaria: "12+ meses", preco: 79.90, estoque: 5, imagem: "imagens/oculos.jpg", alt: "Teté usa óculos de sol em um dia claro", destaque: false },
  { id: 5, nome: "Fantasia de festa", categoria: "Vestir", descricao: "Uma roupa colorida para brincar de se fantasiar.", faixaEtaria: "12–24 meses", preco: 59.90, estoque: 6, imagem: "imagens/fantasia.jpg", alt: "Teté fantasiada em uma festa de Carnaval", destaque: true },
  { id: 6, nome: "Passeio no mercado", categoria: "Passear", descricao: "Um registro divertido de um passeio em família.", faixaEtaria: "12+ meses", preco: 79.90, estoque: 4, imagem: "imagens/carrinho.jpg", alt: "Teté passeia sentada em um carrinho de mercado", destaque: false },
  { id: 7, nome: "Bolo de aniversário", categoria: "Celebrar", descricao: "Uma ideia doce para comemorar momentos especiais.", faixaEtaria: "Para a família", preco: 45.00, estoque: 3, imagem: "imagens/bolo.jpg", alt: "Bolo decorado para uma comemoração", destaque: false },
  { id: 8, nome: "Livro para colorir", categoria: "Ler", descricao: "Cores e rabiscos para acompanhar novas descobertas.", faixaEtaria: "12+ meses", preco: 29.90, estoque: 7, imagem: "imagens/livro-colorir.jpg", alt: "Teté faz uma atividade de desenho", destaque: false }
];

var chaveSacola = "loja-tete-sacola-demonstracao";
var sacola = carregarSacola();

function escaparHTML(valor) {
  var mapa = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" };
  return String(valor).replace(/[&<>"']/g, function (caractere) {
    return mapa[caractere];
  });
}

function formatarPreco(valor) {
  return "R$ " + Number(valor).toFixed(2).replace(".", ",");
}

function carregarSacola() {
  try {
    var dadosSalvos = localStorage.getItem(chaveSacola);
    if (dadosSalvos) {
      var itensSalvos = JSON.parse(dadosSalvos);
      if (Array.isArray(itensSalvos)) {
        return itensSalvos.filter(function (item) {
          if (!item || !Number.isInteger(item.id) || !Number.isInteger(item.quantidade)) {
            return false;
          }
          var produto = obterProdutoPorId(item.id);
          return produto && item.quantidade > 0 && item.quantidade <= produto.estoque;
        });
      }
    }
  } catch (erro) {
    return [];
  }
  return [];
}

function salvarSacola() {
  try {
    localStorage.setItem(chaveSacola, JSON.stringify(sacola));
  } catch (erro) {
    // A sacola continua funcionando durante esta visita mesmo sem armazenamento local.
  }
}

function obterCategorias() {
  var categoriasUnicas = new Set();
  var categorias = [];
  for (var i = 0; i < produtos.length; i++) {
    categoriasUnicas.add(produtos[i].categoria);
  }
  for (var categoria of categoriasUnicas) {
    categorias.push(categoria);
  }
  return categorias;
}

function preencherFiltroCategorias() {
  var campoCategoria = document.getElementById("filtro-categoria");
  var categorias = obterCategorias();
  var html = '<option value="todas">Todas as categorias</option>';
  for (var i = 0; i < categorias.length; i++) {
    var categoriaSegura = escaparHTML(categorias[i]);
    html += '<option value="' + categoriaSegura + '">' + categoriaSegura + '</option>';
  }
  campoCategoria.innerHTML = html;
}

function filtrarProdutos() {
  var termo = document.getElementById("busca-produtos").value.trim().toLowerCase();
  var categoriaEscolhida = document.getElementById("filtro-categoria").value;
  var encontrados = [];
  for (var i = 0; i < produtos.length; i++) {
    var produto = produtos[i];
    var textoProduto = (produto.nome + " " + produto.categoria + " " + produto.descricao).toLowerCase();
    var combinaBusca = termo === "" || textoProduto.indexOf(termo) !== -1;
    var combinaCategoria = categoriaEscolhida === "todas" || produto.categoria === categoriaEscolhida;
    if (combinaBusca && combinaCategoria) {
      encontrados.push(produto);
    }
  }
  return encontrados;
}

function criarCartaoProduto(produto) {
  var selo = produto.destaque ? '<span class="product-badge">Em destaque</span>' : "";
  return '<article class="product-card">' +
    '<div class="product-photo">' +
      '<img src="' + escaparHTML(produto.imagem) + '" alt="' + escaparHTML(produto.alt) + '" loading="lazy" />' +
      '<span class="product-category">' + escaparHTML(produto.categoria) + '</span>' + selo +
    '</div>' +
    '<div class="product-info">' +
      '<p class="product-age">' + escaparHTML(produto.faixaEtaria) + '</p>' +
      '<h3>' + escaparHTML(produto.nome) + '</h3>' +
      '<p>' + escaparHTML(produto.descricao) + '</p>' +
      '<div class="product-meta"><span class="product-price">' + formatarPreco(produto.preco) + '</span>' +
      '<span class="product-stock">' + produto.estoque + ' disponíveis</span></div>' +
      '<button class="product-add" type="button" data-adicionar="' + produto.id + '">Adicionar à sacola</button>' +
    '</div>' +
  '</article>';
}

function renderizarProdutos() {
  var lista = filtrarProdutos();
  var grade = document.getElementById("lista-produtos");
  var estadoVazio = document.getElementById("estado-vazio");
  var mensagem = document.getElementById("mensagem-resultados");
  var html = "";
  for (var i = 0; i < lista.length; i++) {
    html += criarCartaoProduto(lista[i]);
  }
  grade.innerHTML = html;
  estadoVazio.hidden = lista.length !== 0;
  mensagem.textContent = lista.length + (lista.length === 1 ? " descoberta na vitrine." : " descobertas na vitrine.");
}

function obterProdutoPorId(id) {
  for (var i = 0; i < produtos.length; i++) {
    if (produtos[i].id === Number(id)) {
      return produtos[i];
    }
  }
  return null;
}

function adicionarAoCarrinho(id) {
  var produto = obterProdutoPorId(id);
  if (!produto) {
    return;
  }
  var encontrado = false;
  for (var i = 0; i < sacola.length; i++) {
    if (sacola[i].id === produto.id) {
      if (sacola[i].quantidade < produto.estoque) {
        sacola[i].quantidade++;
      }
      encontrado = true;
      break;
    }
  }
  if (!encontrado) {
    sacola.push({ id: produto.id, quantidade: 1 });
  }
  salvarSacola();
  renderizarSacola();
  document.getElementById("status-pedido").textContent = produto.nome + " foi adicionado à sacola.";
}

function atualizarQuantidade(id, mudanca) {
  for (var i = 0; i < sacola.length; i++) {
    if (sacola[i].id === Number(id)) {
      var produto = obterProdutoPorId(id);
      sacola[i].quantidade += mudanca;
      if (sacola[i].quantidade <= 0) {
        sacola.splice(i, 1);
      } else if (produto && sacola[i].quantidade > produto.estoque) {
        sacola[i].quantidade = produto.estoque;
      }
      break;
    }
  }
  salvarSacola();
  renderizarSacola();
}

function removerDaSacola(id) {
  for (var i = 0; i < sacola.length; i++) {
    if (sacola[i].id === Number(id)) {
      sacola.splice(i, 1);
      break;
    }
  }
  salvarSacola();
  renderizarSacola();
}

function contarItensNaSacola() {
  var quantidadeTotal = 0;
  var i = 0;
  while (i < sacola.length) {
    quantidadeTotal += sacola[i].quantidade;
    i++;
  }
  return quantidadeTotal;
}

function renderizarSacola() {
  var lista = document.getElementById("itens-sacola");
  var vazio = document.getElementById("sacola-vazia");
  var resumo = document.getElementById("resumo-sacola");
  var totalElement = document.getElementById("subtotal-sacola");
  var contador = document.getElementById("contagem-sacola");
  var total = 0;
  var html = "";
  for (var i = 0; i < sacola.length; i++) {
    var item = sacola[i];
    var produto = obterProdutoPorId(item.id);
    if (produto) {
      total += produto.preco * item.quantidade;
      html += '<article class="cart-row">' +
        '<img src="' + escaparHTML(produto.imagem) + '" alt="" />' +
        '<div><h3>' + escaparHTML(produto.nome) + '</h3>' +
          '<p>' + formatarPreco(produto.preco) + ' cada</p>' +
          '<div class="quantity-controls" aria-label="Quantidade de ' + escaparHTML(produto.nome) + '">' +
            '<button type="button" data-acao="menos" data-id="' + produto.id + '" aria-label="Diminuir quantidade de ' + escaparHTML(produto.nome) + '">−</button>' +
            '<span>' + item.quantidade + '</span>' +
            '<button type="button" data-acao="mais" data-id="' + produto.id + '" aria-label="Aumentar quantidade de ' + escaparHTML(produto.nome) + '">+</button>' +
            '<button class="remove-item" type="button" data-acao="remover" data-id="' + produto.id + '">Remover</button>' +
          '</div></div>' +
        '<span class="cart-row-total">' + formatarPreco(produto.preco * item.quantidade) + '</span>' +
      '</article>';
    }
  }
  lista.innerHTML = html;
  contador.textContent = contarItensNaSacola();
  totalElement.textContent = formatarPreco(total);
  vazio.hidden = sacola.length !== 0;
  resumo.hidden = sacola.length === 0;
}

function abrirSacola() {
  document.getElementById("painel-sacola").hidden = false;
  document.getElementById("fechar-fundo-sacola").hidden = false;
  document.getElementById("abrir-sacola").setAttribute("aria-expanded", "true");
  document.body.classList.add("cart-open");
  document.getElementById("fechar-sacola").focus();
}

function fecharSacola() {
  document.getElementById("painel-sacola").hidden = true;
  document.getElementById("fechar-fundo-sacola").hidden = true;
  document.getElementById("abrir-sacola").setAttribute("aria-expanded", "false");
  document.body.classList.remove("cart-open");
  document.getElementById("abrir-sacola").focus();
}

document.getElementById("filtro-categoria").addEventListener("change", renderizarProdutos);
document.getElementById("busca-produtos").addEventListener("input", renderizarProdutos);
document.getElementById("limpar-filtros").addEventListener("click", function () {
  document.getElementById("busca-produtos").value = "";
  document.getElementById("filtro-categoria").value = "todas";
  renderizarProdutos();
  document.getElementById("busca-produtos").focus();
});
document.getElementById("lista-produtos").addEventListener("click", function (evento) {
  var botao = evento.target.closest("[data-adicionar]");
  if (botao) {
    adicionarAoCarrinho(botao.getAttribute("data-adicionar"));
    abrirSacola();
  }
});
document.getElementById("itens-sacola").addEventListener("click", function (evento) {
  var botao = evento.target.closest("[data-acao]");
  if (!botao) {
    return;
  }
  var id = botao.getAttribute("data-id");
  var acao = botao.getAttribute("data-acao");
  if (acao === "mais") {
    atualizarQuantidade(id, 1);
  } else if (acao === "menos") {
    atualizarQuantidade(id, -1);
  } else if (acao === "remover") {
    removerDaSacola(id);
  }
});
document.getElementById("abrir-sacola").addEventListener("click", abrirSacola);
document.getElementById("fechar-sacola").addEventListener("click", fecharSacola);
document.getElementById("fechar-fundo-sacola").addEventListener("click", fecharSacola);
document.getElementById("voltar-vitrine").addEventListener("click", fecharSacola);
document.addEventListener("keydown", function (evento) {
  if (evento.key === "Escape" && !document.getElementById("painel-sacola").hidden) {
    fecharSacola();
  }
});
document.getElementById("simular-pedido").addEventListener("click", function () {
  document.getElementById("status-pedido").textContent = "Demonstração concluída. Nenhum pedido ou pagamento foi enviado.";
});
document.getElementById("form-contato").addEventListener("submit", function (evento) {
  evento.preventDefault();
  var formulario = evento.currentTarget;
  if (!formulario.checkValidity()) {
    formulario.reportValidity();
    return;
  }
  var nome = document.getElementById("nome-contato").value.trim();
  document.getElementById("status-contato").textContent = "Obrigada, " + nome + "! Esta confirmação é local; a mensagem não foi enviada.";
  formulario.reset();
});

preencherFiltroCategorias();
renderizarProdutos();
renderizarSacola();
