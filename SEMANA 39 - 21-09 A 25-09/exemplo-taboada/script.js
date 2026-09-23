// Pega o input, o botão e a div do HTML, usando o id de cada um
const inputNumero = document.getElementById("numero_input");
const botaoGerar = document.getElementById("botao_gerar");
const divResultado = document.getElementById("resultado");

// Quando o usuário clicar no botão, este código roda
botaoGerar.onclick = () => {
  const numero = inputNumero.value;
  let texto = "";

  for (let i = 1; i <= 10; i++) {
    texto = texto + numero + " x " + i + " = " + numero * i + "<br>";
  }

  divResultado.innerHTML = texto;
};
