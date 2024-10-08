let pronombre = ["el", "mi", "su", "tu"];
let adjetivo = ["gran", "buen", "mayor", "mejor"];
let sustantivo = ["protecto", "sueño", "trabajo", "esfuerzo"];

for (let i = 0; i < pronombre.length; i++) {
  for (let j = 0; j < adjetivo.length; j++) {
    for (let k = 0; k < sustantivo.length; k++) {
      console.log(pronombre[i] + adjetivo[j] + sustantivo[k] + ".es");
    }
  }
}
