$(document).ready(function(){
  // 1. Creare un oggetto con 3 proprietà
  var studente = {
    "nome" : "Davide",
    "cognome" : "Amabile",
    "eta" : 36,
  }

  console.log(studente.nome);

  // 2.creare ciclo for in per stampare le proprietà
  for ( var key in studente) {
    console.log(studente[key]);
  }

  // 3.creare un array di oggetti studenti
  var classe = [
    {
      "nome" : "Anna",
      "cognome" : "Amabile",
      "eta" : 6,
    },

    {
      "nome" : "Davide",
      "cognome" : "Verga",
      "eta" : 36,
    },
  ];

  // 4.stampare il nome e cognome degli oggetti
  for ( i = 0; i < classe.length; i++) {
    console.log(classe[i].nome);
    console.log(classe[i].cognome);


  }

});
