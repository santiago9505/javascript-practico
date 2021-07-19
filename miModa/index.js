let xNumeros = [
  1, 2, 8, 12, 12, 8, 12, 8, 4, 12, 4, 3, 8, 8, 1, 8, 12, 8, 8, 2, 4, 8, 4, 8,
  8, 3, 12, 2, 3, 3, 12, 4, 12, 8,
];
//Grupo filtrado
let lastGroup = [];
//Grupo de los resultados de las sumas
let cuentaMayor = [];

//Filtro por los valores únicos
function onlyUnique(value, index, self) {
  return self.indexOf(value) === index;
}

let unique = xNumeros.filter(onlyUnique);

let group = Object.assign({}, unique);

//Agrupo cada uno de los números y los envío a lastGroup filtrados ej: [[1,1,1][2,2],[3]]
const agruparNumeros = () => {
  for (i = 0; i < Object.keys(group).length; i++) {
    let result = xNumeros.filter((numero) => numero === group[i]);
    lastGroup.push(result);
  }
};

agruparNumeros();

//Envío la suma de todos los resultados al grupo cuentaMayor
for (i = 0; i < lastGroup.length; i++) {
  let quanty = lastGroup[i].length;
  cuentaMayor.push(quanty);
}

//Hallo el que tuvo suma máxima con su indice
let max = Math.max(...cuentaMayor);
let indiceModa = cuentaMayor.indexOf(max);

//Finalemente como ya tengo el indice hallo la moda del grupo que ya está ordenado de esta manera[[2,2,2][3,3]]
let grupoModa = lastGroup[indiceModa];
let moda = grupoModa.filter(onlyUnique)[0];
console.log(moda);
