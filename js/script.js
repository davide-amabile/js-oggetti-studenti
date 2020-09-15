$(document).ready(function(){
  // 1. Creare un oggetto con 3 proprietà
  var studente = {
    "nome" : "Davide",
    "cognome" : "Amabile",
    "eta" : 36,
  }

  console.log(studente);

  // 2.creare ciclo for in per stampare le proprietà
  for ( var key in studente) {
    console.log(studente[key]);
  }
});
