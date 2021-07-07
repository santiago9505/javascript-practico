let mediana;

const calcularMediaAritmetica = (lista) => {
  const sumaLista = lista.reduce((valorAcumulado = 0, nuevoElemento) => {
    return valorAcumulado + nuevoElemento;
  });

  const promedioLista = sumaLista / lista.length;
  return promedioLista;
};

const esPar = (numero) => {
  if (numero % 2 === 0) {
    return true;
  } else {
    return false;
  }
};

const calcularMediana = (lista) => {
  listaOrdenada = lista.sort(function (a, b) {
    return a - b;
  });

  const mitadLista = parseInt(listaOrdenada.length / 2);
  if (esPar(listaOrdenada.length)) {
    const elemento1 = listaOrdenada[mitadLista];
    const elemento2 = listaOrdenada[mitadLista - 1];

    const promedioElemento1y2 = calcularMediaAritmetica([elemento1, elemento2]);
    mediana = promedioElemento1y2;
  } else {
    mediana = listaOrdenada[mitadLista];
  }
};
calcularMediana([400, 100, 200, 300, 500, 400000000]);
console.log(mediana);
