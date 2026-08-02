# 📚 Resumo da Semana 32 (03/08 a 07/08) — 3º INT

## 🎙️ Segunda-feira — Dia do Projeto Rádio Interativa
Todas as aulas do dia são dedicadas ao **Projeto Rádio Interativa da escola**.

## 🖥️ Terça-feira — Laboratório de Hardware e Laboratório de Software

**Laboratório de Hardware (09:45):** hardware e desempenho na execução de JavaScript.
- CPU processa as instruções do script; RAM guarda as variáveis enquanto a página está aberta.
- Hardware limitado (processador lento, pouca RAM) deixa o navegador mais lento para responder a scripts.
- Quanto mais elementos dinâmicos um site tiver, mais importa o hardware de quem acessa.

**Laboratório de Software (10:35):** Node.js — JavaScript fora do navegador.
- Node.js executa JavaScript direto no Sistema Operacional, sem navegador.
- Um arquivo `.js` é executado no terminal com o comando: `node arquivo.js`

## 🌐 Quarta-feira — Laboratório de Hardware e Rede de Computadores

**Laboratório de Hardware (13:20):** verificação prática de consumo de recursos.
- O Gerenciador de Tarefas mostra o consumo de CPU e RAM de cada aba do navegador.
- Comparar páginas com poucos e com muitos elementos dinâmicos mostra a diferença de consumo.

**Rede de Computadores (14:10):** a aba Network (Rede) das Ferramentas do Desenvolvedor.
- Ao recarregar a página, aparece cada requisição feita ao servidor: HTML, cada CSS, cada JS, imagens, etc. Colunas importantes: Name (arquivo), Status (200 = ok, 404 = não encontrado), Type (html/css/js/img), Size (tamanho) e Time (tempo de resposta = latência de cada requisição).
- Prática: cada aluno inspeciona o carregamento do próprio protótipo de site e registra essas informações.

**Rede de Computadores (15:15):** aula de dúvidas e fixação — revisão geral do conteúdo de Rede das Semanas 31 e 32 (trajeto do dado, cabeamento, aba Network).

## 🎨 Quinta-feira — Design e Laboratório Web

**Design (07:00) e Laboratório Web (08:40):** sequência da apostila de HTML/CSS aplicada ao protótipo de site do próprio aluno.
- Novas tags estruturais/semânticas: `header`, `nav`, `main`, `section`, `article`, `footer`.
- Cada bloco do layout planejado pelo aluno vira uma dessas tags no código.
- Retomada e aprofundamento de CSS: seletores, Box Model e cores.
- Construção, individual, do HTML/CSS do próprio protótipo, com organização dos arquivos (index.html, style.css) em uma pasta do projeto pessoal.

### Exemplo — estrutura semântica básica
```html
<body>
  <header>
    <h1>Título do site</h1>
    <nav>...</nav>
  </header>
  <main>
    <article>
      <h2>Título do conteúdo</h2>
      <p>Texto...</p>
    </article>
  </main>
  <footer>...</footer>
</body>
```

## 💻 Sexta-feira — Aulas de Dúvidas e Fixação de Conteúdo

**Programação WEB II (13:20):** fixação de Variáveis e Operadores em JavaScript.
- Variável guarda um valor por vez; em JS não é preciso declarar o tipo (`var nome = "João";`).
- Tipos: numéricas, booleanas (`true`/`false`), strings (`'...'` ou `"..."`).
- `null` representa valor desconhecido/vazio.
- Operadores matemáticos: `+ - * / ++ -- %`
- Operadores de comparação: `> < >= <= == === !=`
- Operadores lógicos: `&&` (E), `||` (OU), `!` (NÃO)

**Exemplo — cálculo de IMC:**
```html
<script>
  var peso = 70;
  var altura = 1.75;
  var calc_imc = peso / (altura * altura);
  document.write(calc_imc);
</script>
```

**Exercícios para praticar:**
1. Script para calcular a **média aritmética de 3 notas**, exibindo as notas e a média.
2. Script para calcular a **idade** a partir do ano atual e do ano de nascimento.
3. Script para mostrar o **consumo médio de um automóvel**.

**Laboratório Web (14:10):** exercícios práticos de fixação de HTML/CSS (tags estruturais, seletores, Box Model).

**Laboratório de Software (15:15):** revisão geral de Sistema Operacional, terminal e Node.js.

---