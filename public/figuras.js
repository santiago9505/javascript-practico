const PI = Math.PI;
const squareSection = document.getElementById("cuadradoSection");
const triangleSection = document.getElementById("trianguloSection");
const circleSection = document.getElementById("circuloSection");
const main = document.getElementById("main");
const squareSelection = document.getElementById("squareA");
const triangleSelection = document.getElementById("triangleA");
const circleSelection = document.getElementById("circuleA");
let squareSelected = document.getElementById("ladoCuadrado");
let baseValue = document.getElementById("baseTriangulo");
let alturaValue = document.getElementById("alturaTriangulo");
let lado1Value = document.getElementById("lado1Triangulo");
let lado2Value = document.getElementById("lado2Triangulo");
let radioSelected = document.getElementById("radioCirculo");
const calculateButton = document.getElementById("calculate");
const calculateTriangle = document.getElementById("calculateTriangle");
const calculateCircle = document.getElementById("calculateCircle");
const perimetroArea = document.getElementById("perimetro/area");
const perimetroAreaTriangulo = document.getElementById(
  "trianglePerimetro/area"
);
const perimetroAreaCirculo = document.getElementById("circuloPerimetro/area");
const cuadroResultado = document.getElementById("resultado");
const myPopup = document.getElementById("myPopup");
const myPopupTriangle = document.getElementById("myPopupTriangle");
const myPopupCircle = document.getElementById("myPopupCircle");
let ladoCuadrado = document.getElementById("lado");
let ladoCuadrado2 = document.getElementById("lado2");
let ladoCuadrado3 = document.getElementById("lado3");
let ladoCuadrado4 = document.getElementById("lado4");
let baseTriangulo = document.getElementById("medidab");
let alturaTriangulo = document.getElementById("medidah");
let lado1Triangulo = document.getElementById("medidal1");
let lado2Triangulo = document.getElementById("medidal2");
let radioCircle = document.getElementById("radio");

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

const toSquareSection = () => {
  main.style.display = "none";
  squareSection.style.display = "block";
  triangleSection.style.display = "none";
  circleSection.style.display = "none";
};

const toTriangleSection = () => {
  main.style.display = "none";
  squareSection.style.display = "none";
  triangleSection.style.display = "block";
  circleSection.style.display = "none";
};

const toCircleSection = () => {
  main.style.display = "none";
  squareSection.style.display = "none";
  triangleSection.style.display = "none";
  circleSection.style.display = "block";
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

calculateButton.addEventListener("click", calculateNow);
calculateTriangle.addEventListener("click", calculateTriangleNow);
calculateCircle.addEventListener("click", calculateCircleNow);
squareSelection.addEventListener("click", toSquareSection);
triangleSelection.addEventListener("click", toTriangleSection);
circleSelection.addEventListener("click", toCircleSection);
