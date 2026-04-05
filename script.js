function calcularEstado(fecha) {
  const hoy = new Date();
  const proxima = new Date(fecha);
  const diff = (proxima - hoy) / (1000 * 60 * 60 * 24);

  if (diff < 0) return "Atrasada";
  if (diff <= 2) return "Próxima a vencer";
  return "Al día";
}

const estadoCelda = document.getElementById("estado");
const estado = calcularEstado("2026-04-10");

estadoCelda.innerText = estado;
estadoCelda.className = estado.toLowerCase().r
