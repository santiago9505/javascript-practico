const lista = [1, 2, 3, 1, 2, 3, 4, 2, 2, 2, 1];

const listaCount = {};

lista.map(function (elemento) {
  if (listaCount[elemento]) {
    listaCount[elemento] += 1;
  } else {
    listaCount[elemento] = 1;
  }
});

const lista1Array = Object.entries(listaCount).sort(function (
  valorAcumulado,
  nuevoValor
) {
  valorAcumulado - nuevoValor;
});

const lista2Array = Object.entries(listaCount).sort(function (
  elementoA,
  elementoB
) {
  return elementoA[1] - elementoB[1];
});

const moda = lista2Array[lista2Array.length - 1];
console.log(moda);
