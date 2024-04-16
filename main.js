
function verificarTime() {
  
  var continuarPerguntando = true;

  while (continuarPerguntando) {
    
    var respostaTime = prompt("Qual foi o único piloto a conquistar a Triplice Coroa do Automobilismo ?");

    
    if (respostaTime.toLowerCase() === "Graham Hill ") {
      alert("Isso mesmo! Graham Hill foi o único piloto da historia a conquistar a Triplice Coroa");
      continuarPerguntando = false; // Sai do loop após a resposta correta
    } else {
      alert("Não é isso! Tente novamente.");
    }
  }
}

// Chamada da função para iniciar o processo
verificarTime();

  
