/*
 * Este é o JavaScript Scratchpad.
 *
 * Escreva JavaScript, e depois clique com o botão direito ou selecione no menu Execução:
 * 1. Executar: para avaliar o texto selecionado (Ctrl+R),
 * 2. Inspecionar: para abrir o resultado em uma janela de inspeção (Ctrl+I)
 * 3. Visualizar: para inserir o resultado em um comentário depois da seleção. (Ctrl+L)
 */

var answer = prompt("Qual é a capital de Nova York?");

if(answer === "Albany") {
  alert("Você está certo! Parabéns!");
} else {
  alert("Uff...." + " " + answer + " " + " não é a resposta correta!! Tente novamente!");
}