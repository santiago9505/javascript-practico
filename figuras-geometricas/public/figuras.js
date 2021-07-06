const PI = Math.PI;
const squareSection = document.getElementById("cuadradoSection");
const triangleSection = document.getElementById("trianguloSection");
const circleSection = document.getElementById("circuloSection");
const isoscelesSection = document.getElementById("isoscelesSection");
const main = document.getElementById("main");
const squareSelection = document.getElementById("squareA");
const triangleSelection = document.getElementById("triangleA");
const circleSelection = document.getElementById("circuleA");
const isoscelesSelection = document.getElementById("isoscelesA");
let squareSelected = document.getElementById("ladoCuadrado");
let baseValue = document.getElementById("baseTriangulo");
let alturaValue = document.getElementById("alturaTriangulo");
let lado1Value = document.getElementById("lado1Triangulo");
let lado2Value = document.getElementById("lado2Triangulo");
let radioSelected = document.getElementById("radioCirculo");
let lado1IsoValue = document.getElementById("lado1Iso");
let lado2IsoValue = document.getElementById("lado2Iso");
let lado3IsoValue = document.getElementById("lado3Iso");
const calculateButton = document.getElementById("calculate");
const calculateTriangle = document.getElementById("calculateTriangle");
const calculateCircle = document.getElementById("calculateCircle");
const calculateIsosceles = document.getElementById("calculateIso");
const perimetroArea = document.getElementById("perimetro/area");
const perimetroAreaTriangulo = document.getElementById(
  "trianglePerimetro/area"
);
const perimetroAreaCirculo = document.getElementById("circuloPerimetro/area");
const perimetroAreaIsosceles = document.getElementById(
  "isoscelesPerimetro/area"
);
const cuadroResultado = document.getElementById("resultado");
const myPopup = document.getElementById("myPopup");
const myPopupTriangle = document.getElementById("myPopupTriangle");
const myPopupCircle = document.getElementById("myPopupCircle");
const myPopupIso = document.getElementById("myPopupIso");
let ladoCuadrado = document.getElementById("lado");
let ladoCuadrado2 = document.getElementById("lado2");
let ladoCuadrado3 = document.getElementById("lado3");
let ladoCuadrado4 = document.getElementById("lado4");
let baseTriangulo = document.getElementById("medidab");
let alturaTriangulo = document.getElementById("medidah");
let lado1Triangulo = document.getElementById("medidal1");
let lado2Triangulo = document.getElementById("medidal2");
let radioCircle = document.getElementById("radio");
let altura1Iso = document.getElementById("alturaI");
let baseIso = document.getElementById("baseI");
let lado1I = document.getElementById("lado1I");
let lado2I = document.getElementById("lado2I");

console.group("cuadrado");
const perimetroCuadrado = (l) => l * 4;
const areaCuadrado = (l) => l * l;
console.groupEnd("");

console.group("triángulo");
const perimetroTriangulo = (l1, l2, l3) => l1 + l2 + l3;
const areaTriangulo = (b, h) => (b * h) / 2;
console.groupEnd("");

console.group("círculo");
const perimetroCirculo = (r) => 2 * PI * r;
const areaCirculo = (r) => PI * r ** 2;
console.groupEnd("");
let error;
let hipotenusa;
let altura;
let cateto2;

const verificarIsoceles = (l1, l2, l3) => {
  if (l1 === l2 && l2 != l3) {
    console.log("Isósceles");
    hipotenusa = l2;
    cateto2 = l3 / 2;
    lado1I.textContent = `lado a = ${l1}`;
    lado2I.textContent = `lado b = ${l2}`;
    baseIso.textContent = `lado c = ${l3}`;
    calcularAltura(cateto2, hipotenusa);
  } else if (l2 === l3 && l3 != l1) {
    console.log("Isósceles");
    hipotenusa = l2;
    cateto2 = l1 / 2;
    lado1I.textContent = `lado a = ${l2}`;
    lado2I.textContent = `lado b = ${l3}`;
    baseIso.textContent = `lado c = ${l1}`;
    calcularAltura(cateto2, hipotenusa);
  } else if (l1 === l3 && l3 != l2) {
    console.log("Isósceles");
    hipotenusa = l1;
    cateto2 = l2 / 2;
    lado1I.textContent = `lado a = ${l1}`;
    lado2I.textContent = `lado b = ${l3}`;
    baseIso.textContent = `lado c = ${l2}`;
    calcularAltura(cateto2, hipotenusa);
  } else {
    hipotenusa = null;
    console.log("No es isósceles mi pez");
  }
};

const calcularAltura = (cateto2, hipotenusa) => {
  // hipotenusa^2 = cateto1^2 + cateto2^2
  hipotenusaCuadrado = hipotenusa ** 2;
  catetoCuadrado = cateto2 ** 2;
  altura = Math.sqrt(hipotenusaCuadrado - catetoCuadrado);
  altura1Iso.textContent = `h(altura) = ${altura}`;
  console.log(altura);
};

const toSquareSection = () => {
  main.style.display = "none";
  triangleSection.style.display = "none";
  circleSection.style.display = "none";
  isoscelesSection.style.display = "none";
  squareSection.style.display = "block";
};

const toTriangleSection = () => {
  main.style.display = "none";
  squareSection.style.display = "none";
  isoscelesSection.style.display = "none";
  circleSection.style.display = "none";
  triangleSection.style.display = "block";
};

const toCircleSection = () => {
  main.style.display = "none";
  squareSection.style.display = "none";
  triangleSection.style.display = "none";
  isoscelesSection.style.display = "none";
  circleSection.style.display = "block";
};

const toIsoscelesSection = () => {
  main.style.display = "none";
  squareSection.style.display = "none";
  triangleSection.style.display = "none";
  circleSection.style.display = "none";
  isoscelesSection.style.display = "block";
};

const calculateNow = () => {
  ladoCuadrado.textContent = `lado = ${squareSelected.value}`;
  ladoCuadrado2.textContent = `lado = ${squareSelected.value}`;
  ladoCuadrado3.textContent = `lado = ${squareSelected.value}`;
  ladoCuadrado4.textContent = `lado = ${squareSelected.value}`;
  if (perimetroArea.value === "Perímetro") {
    result = perimetroCuadrado(squareSelected.value);
    myPopup.textContent = `El perímetro de tu cuadrado es de: ${result} cm`;
  } else if (perimetroArea.value === "Área") {
    result = areaCuadrado(squareSelected.value);
    myPopup.textContent = `El área de tu cuadrado es de: ${result} cm^2`;
  }
  myPopup.classList.toggle("show");
  console.log(result);
};

const calculateTriangleNow = () => {
  baseTriangulo.textContent = `lado = ${baseValue.value}`;
  alturaTriangulo.textContent = `lado = ${alturaValue.value}`;
  lado1Triangulo.textContent = `lado = ${lado1Value.value}`;
  lado2Triangulo.textContent = `lado = ${lado2Value.value}`;
  if (perimetroAreaTriangulo.value === "Perímetro") {
    result = perimetroTriangulo(
      Number(baseValue.value),
      Number(lado1Value.value),
      Number(lado2Value.value)
    );
    console.log(Number(baseValue.value));
    myPopupTriangle.textContent = `El perímetro de tu triángulo es de: ${result} cm`;
  } else if (perimetroAreaTriangulo.value === "Área") {
    result = areaTriangulo(Number(baseValue.value), Number(alturaValue.value));
    myPopupTriangle.textContent = `El área de tu triángulo es de: ${result} cm^2`;
  } else {
    myPopupTriangle.textContent = `Te falta algo`;
  }
  myPopupTriangle.classList.toggle("show");
};

const calculateCircleNow = () => {
  radioCircle.textContent = `radio: ${radioSelected.value}`;
  if (perimetroAreaCirculo.value === "Perímetro") {
    result = perimetroCirculo(radioSelected.value);
    myPopupCircle.textContent = `El perímetro de tu círculo es de: ${result}`;
  } else if (perimetroAreaCirculo.value === "Área") {
    result = areaCirculo(radioSelected.value);
    myPopupCircle.textContent = `El área de tu círculo es de: ${result}`;
  }
  myPopupCircle.classList.toggle("show");
};

const calculateIsoscelesNow = () => {
  verificarIsoceles(
    lado1IsoValue.value,
    lado2IsoValue.value,
    lado3IsoValue.value
  );
  if (hipotenusa === null) {
    myPopupIso.textContent = `Recuerda que un triángulo isósceles tiene dos lados iguales y uno desigual`;
  } else if (perimetroAreaIsosceles.value === "Perímetro") {
    result = perimetroTriangulo(
      Number(hipotenusa),
      Number(cateto2 * 2),
      Number(hipotenusa)
    );
    myPopupIso.textContent = `El perímetro de tu triángulo es de: ${result}`;
  } else if (perimetroAreaIsosceles.value === "Área") {
    result = areaTriangulo(Number(cateto2 * 2), Number(altura));
    myPopupIso.textContent = `El área de tu triángulo es de: ${result}`;
  } else {
    result = altura;
    myPopupIso.textContent = `La altura de tu triángulo es de: ${result}`;
  }
  myPopupIso.classList.toggle("show");
};

calculateButton.addEventListener("click", calculateNow);
calculateTriangle.addEventListener("click", calculateTriangleNow);
calculateCircle.addEventListener("click", calculateCircleNow);
calculateIsosceles.addEventListener("click", calculateIsoscelesNow);
squareSelection.addEventListener("click", toSquareSection);
triangleSelection.addEventListener("click", toTriangleSection);
circleSelection.addEventListener("click", toCircleSection);
isoscelesSelection.addEventListener("click", toIsoscelesSection);
