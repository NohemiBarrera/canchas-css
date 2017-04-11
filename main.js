var canchaFutbol=document.getElementById("canchaFut");
var canchaBasquet=document.getElementById("canchaBasquet");
var canchaTenis=document.getElementById("canchaTenis");
var botonFutbol=document.getElementById("botonFut");
var botonTenis=document.getElementById("botonTenis");
var botonReiniciar=document.getElementById("botonReiniciar");

botonFutbol.addEventListener("click",mostrarFut);
botonTenis.addEventListener("click",mostrarTenis);
botonBasquet.addEventListener("click",mostrarBasquet);
botonReiniciar.addEventListener("click",reiniciar);


function mostrarFut(){
  canchaFut.hidden=false;
  canchaBasquet.hidden=true;
  canchaTenis.hidden=true;
}

function mostrarTenis(){
  canchaFutbol.hidden=true;
  canchaBasquet.hidden=true;
  canchaTenis.hidden=false;
}

function mostrarBasquet(){
  canchaFutbol.hidden=true;
  canchaBasquet.hidden=false;
  canchaTenis.hidden=true;
}

function reiniciar(){
  canchaFutbol.hidden=true;
  canchaBasquet.hidden=true;
  canchaTenis.hidden=true;
}