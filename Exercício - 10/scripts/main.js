/*
 * Este é o JavaScript Scratchpad.
 *
 * Escreva JavaScript, e depois clique com o botão direito ou selecione no menu Execução:
 * 1. Executar: para avaliar o texto selecionado (Ctrl+R),
 * 2. Inspecionar: para abrir o resultado em uma janela de inspeção (Ctrl+I)
 * 3. Visualizar: para inserir o resultado em um comentário depois da seleção. (Ctrl+L)
 */

var randomNumber = Math.round(Math.random() * 5);



if(randomNumber % 3 === 0) {
  alert("fizz");
} else if (randomNumber % 5 === 0) {
  alert("buzz");
} else {
  console.log(randomNumber);
}