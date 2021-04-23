//Poptart Clicker by Diego Casillas
var pScore = 0;

onEvent("poptartbutton", "click", function(OnPlayerClickPoptart) {
  pScore++;
  setText("scoretext", pScore);
  setText("poptartclickerh", "Poptart Clicker");
  setText("credits", "Poptart clicker by realdiegopoptart");
  setText("scoret", "Score:");
});
