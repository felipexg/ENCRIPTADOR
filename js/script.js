
function remplazar(elemento){
  let texto = elemento.value
  texto = texto.split(/[^ a-z]+/g)
  texto = texto.join("")
  elemento.value = texto
  document.getElementsByTagName('aviso').style.color='#0ca001';
}




function encriptar() {
  
  let texto = document.getElementById("mensaje1").value;
  let text1 = document.getElementById("text1");
  let text2 = document.getElementById("text2");
  let aviso = document.getElementById("aviso");
  let mueco = document.getElementById("mueco");
let textocifrado = texto
    .replace(/a/gi, "ai")
    .replace(/e/gi, "enter")
    .replace(/i/gi, "imes")
    .replace(/o/gi, "ober")
    .replace(/u/gi, "ufat");
   
  if ((texto.length != 0) ) {
    document.getElementById("mensaje2").value = textocifrado;
    text1.textContent = "";
    text2.textContent = "";
    aviso.textContent = "";
     document.getElementById('mueco').style.display = 'none';
    document.getElementById("mensaje1").value = "";
    document.getElementById("btn_copiar").style.visibility = "visible"; 
  } else  {    
  document.getElementById("btn_copiar").style.visibility = "none";
  text1.textContent = "Ningún mensaje fue encontrado";
  text2.textContent = "Ingresa el texto que desea encriptar o desencriptar";
  document.getElementById('mueco').style.display = 'block';
 
  }
  }


/*funcion desencriptar*/
function desencriptar() {
  let texto = document.getElementById("mensaje1").value;
  let text1 = document.getElementById("text1");
  let text2 = document.getElementById("text2");
  let aviso = document.getElementById("aviso")
  let mueco = document.getElementById("mueco");
 
  let textoCifrado = texto
    .replace(/enter/gi, "e")
    .replace(/imes/gi, "i")
    .replace(/ai/gi, "a")
    .replace(/ober/gi, "o")
    .replace(/ufat/gi, "u");

  if (texto.length != 0) {
    document.getElementById("mensaje2").value = textoCifrado;
 
    text1.textContent = "";
    text2.textContent = "";
    aviso.textContent = "";
    document.getElementById('mueco').style.display = 'none';
    document.getElementById("mensaje1").value = "";
    document.getElementById("btn_copiar").style.visibility = "hidden";

  } else {
    document.getElementById("btn_copiar").style.visibility = "visible";
    text1.textContent = "Ningún mensaje fue encontrado";
    text2.textContent = "Ingresa el texto que desea encriptar o desencriptar";
    document.getElementById('mueco').style.display = 'block';
   

  }
}

/*funcion copiar*/
const $content = document.getElementById('mensaje2');
const $btn = document.getElementById('btn_copiar');

$btn.addEventListener('click', e => {
  $content.select();
  document.execCommand('copy');

 
})

