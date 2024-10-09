//let pronombre = ["el", "mi", "su", "tu"];
//let adjetivo = ["gran", "buen", "mayor", "mejor"];
//let sustantivo = ["protecto", "sueño", "trabajo", "esfuerzo"];

//for (let i = 0; i < pronombre.length; i++) {
//for (let j = 0; j < adjetivo.length; j++) {
// for (let k = 0; k < sustantivo.length; k++) {
//console.log(pronombre[i] + adjetivo[j] + sustantivo[k] + ".es");
// }
//}
//}

window.onload = function() {
  let pronombre = ["el", "mi", "su", "tu"];
  let adjetivo = ["gran", "buen", "mayor", "mejor"];
  let sustantivo = ["proyecto", "sueño", "trabajo", "esfuerzo"];

  document
    .getElementById("boton1")
    .addEventListener("click", generaLista(pronombre, adjetivo, sustantivo));

  function generaLista(pronombre, adjetivo, sustantivo) {
    document.getElementById("ListaDom").innerHTML = "";

    for (let i = 0; i < pronombre.length; i++) {
      for (let j = 0; j < adjetivo.length; j++) {
        for (let k = 0; k < sustantivo.length; k++) {
          document.getElementById("ListaDom").innerHTML +=
            "<p>" +
            pronombre[i] +
            adjetivo[j] +
            sustantivo[k] +
            ".com " +
            "</p>";
        }
      }
    }
  }
};
