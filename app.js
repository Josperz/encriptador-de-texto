let hayElementos = 0;
const cambiarEncriptar = {
  a:"ai",
  e:"enter",
  i:"imes",
  o:"ober",
  u:"ufat"
}
const cambiarDesencriptar = {
  ai: "a",
  enter: "e",
  imes: "i",
  ober: "o",
  ufat: "u"
}
let p = document.getElementById("resultado")

function encriptartxt() {
  if (hayElementos === 0) {
    ocultar();
  }
  hayElementos++;
  let textoDelTextarea = document.getElementById("txtingresado").value;
  console.log(textoDelTextarea);
  textoDelTextarea = textoDelTextarea.replace(/a|e|i|o|u/gi, function(matched){
    return cambiarEncriptar[matched]
  })
  p.innerText = textoDelTextarea
}

function desencriptartxt() {
  if (hayElementos === 0) {
    ocultar();
  }
  let textoTextarea = document.getElementById("txtingresado").value;
  textoTextarea = textoTextarea.replace(/ai|enter|imes|ober|ufat/gi, function(matched){
    return cambiarDesencriptar[matched];
  })
  p.innerText = textoTextarea
}

function copiar() {
  let copy = document.getElementById("resultado").innerHTML;
  navigator.clipboard.writeText(copy);
}

function ocultar() {
  document.getElementById("imagen-mostrar").style.display = "none";
  document.getElementById("parrafos").style.display = "none";
  document.getElementById("boton-copiar").style.display = "block";
}