var audioCtx = new(window.AudioContext || window.webkitAudioContext)();
var text = document.querySelector('#hz');
var text2 = document.querySelector('#primeraNota');

// crear un filtro pasa bajos
var filter = audioCtx.createBiquadFilter();
filter.type = "lowpass";

// creamos un analyzer
var analyser = audioCtx.createAnalyser();
analyser.smoothingTimeConstant = 0.9;
analyser.fftSize = 2048;

// Ajustar el rango de decibles de analisis cambia mucho los sonidos que toma. 
//analyser.minDecibels = -80.0;
//analyser.maxDecibels = -50.0;

// el rango de frecuencias FFT es 1/2 del sampleRate
var range = audioCtx.sampleRate;

// cantidad de Hz por muestra
var factor = range / analyser.fftSize;

// creamos un audio processor
var processor = audioCtx.createScriptProcessor(4096, 1, 1);
var array = new Uint8Array(analyser.frequencyBinCount);
// en el evento, verificamos si hay volumen o no
var max;
processor.onaudioprocess = function(audio) {

  // tomar los datos del analyzer

  analyser.getByteFrequencyData(array);

  // calcular el volumen promedio
  var maxIx = [];
  var maxVal = 0;
  for (var i = 0; i < array.length; i++) {
    if (array[i] > maxVal) {
      maxVal = array[i];
      maxIx = []
    }
    if (array[i] == maxVal) {
      maxIx.push(i);
    }
  }

  if (maxIx.length > 1 || maxIx[0] == 0) {
    text.innerHTML = "-"
  } else {
    text.innerHTML = (maxIx[0] * factor).toFixed() + " Hz"
    max = (maxIx[0] * factor).toFixed();
    frecuenciaActual(max);
  }
}


// solicitar el acceso al microfono
navigator.getUserMedia({
  audio: true,
  video: false
}, handleAudio, handleError);

function handleAudio(micStream) {
  var source = audioCtx.createMediaStreamSource(micStream);
  source.connect(filter);
  filter.connect(analyser);
  analyser.connect(processor);
  processor.connect(audioCtx.destination);
}

// manejador de errores
function handleError(e) {
  console.log("Ocurrio un error", e)
}

var bufferLength = analyser.frequencyBinCount;
var dataArray = new Uint8Array(bufferLength);

var canvas = document.querySelector('canvas');
var canvasCtx = canvas.getContext('2d');

function draw() {

  var w = canvas.width = window.innerWidth;
  var h = canvas.height = window.innerHeight;
  analyser.getByteFrequencyData(dataArray);

  canvasCtx.fillStyle = 'rgb(0, 0, 0)';
  canvasCtx.fillRect(0, 0, w, h);

  /*var barWidth = (w / bufferLength) * 2.5;
  var barHeight;
  var x = 0;
  var max = 0;
  for (var i = 0; i < bufferLength; i++) {
    if (dataArray[i] > max) {
      max = dataArray[i];
    }
  }

  for (var i = 0; i < bufferLength; i++) {
    barHeight = dataArray[i];
    if (barHeight == max) {
      canvasCtx.fillStyle = 'rgb(0,255,0)'; // 50,' + (barHeight+100) + ')';
    } else {
      canvasCtx.fillStyle = 'rgb(' + (barHeight + 100) + ',50,50)';
    }
    canvasCtx.fillRect(x, h - barHeight / 2, barWidth, barHeight / 2);

    x += barWidth + 1;
  }*/

  drawVisual = requestAnimationFrame(draw);
};

draw();