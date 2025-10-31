// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Si estamo' los dos en un mismo cuarto", time: 23},
  { text: "El cielo no se ve tan alto", time: 26 },
  { text: "Aquí está mi corazón dentro de un frasco", time: 28 },
  { text: "Sin ti, ¿qué soy yo? Un disfraz barato", time: 31 },
  { text: "Contigo, soy yo, tú el motor del barco", time: 35 },
  { text: "Si te tiras de un barranco, detrás tuyo salto", time: 38 },
  { text: "Puedo ser tu estrella, y tú, mi media Luna", time: 42 },
  { text: "Mi tesoro, mi fortuna", time: 49 },
  { text: "Yo puedo ser tu estrella, tú, mi media Luna", time: 52 },
  { text: "Mi tesoro, mi fortunas", time: 59 },
  { text: "Tus ojos, ciérralo, El miedo, entiérralo'", time: 63 },
  { text: "Yo sé que, sin darnos cuenta, esto escaló, ¿Y pa' qué negarlo?", time: 72 },
  { text: "Si tú también sentiste mariposas en tu ombligo", time: 80 },
  { text: "La noche aquella en la que nos unió el destino", time: 86 },
  { text: "Si es pa' siempre, ¿dónde firmo?", time: 90},
  { text: "Aunque esto no lo aguanta un papel", time: 93 },
  { text: "Cuando estás, suele brillar, Si te vas, empieza a llover", time: 97 },
  { text: "Y si pudiera el tiempo retroceder", time: 103 },
  { text: "Regreso cuando te dije, Te voy a besar si me miras así otra ve'", time: 106 },
  { text: "Otra ve', otra ve', otra ve'", time: 115 },
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);
