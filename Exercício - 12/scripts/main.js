/*
 * Este é o JavaScript Scratchpad.
 *
 * Escreva JavaScript, e depois clique com o botão direito ou selecione no menu Execução:
 * 1. Executar: para avaliar o texto selecionado (Ctrl+R),
 * 2. Inspecionar: para abrir o resultado em uma janela de inspeção (Ctrl+I)
 * 3. Visualizar: para inserir o resultado em um comentário depois da seleção. (Ctrl+L)
 */

alert("Esse é um jogo do Zombie Apocalíptico. Você está roubando uma loja e de repente um zumbi aparece através da porta");
var weapon = prompt("E olhando a sua volta você encontra desesperadamente uma arma. Qual que você irá escolher? Um arco e flexa? Um Machado? Ou uma Galinha de Borracha?");
var randomNumber = Math.round(Math.random());

alert("Você irá atacar o zumbi com" + " " + weapon);

if(randomNumber === 0) {
  alert("O Zumbi pegou você. Você perdeu!")
} else if(randomNumber === 1) {
  alert("Você matou o zumbi com a sua " + " " + weapon + ". Você ganhou! ");
}
