let precioFinal;
let valorCupon;

let currentDate = "2021/07/06";
let blackFriday = "2021/10/10";

const bonoNuevo = 10;
const bonoCompraMayor = 15;
const bonoBlackFriday = 20;
let descuentoBonos;
let userData;

const buttonCalculate = document.getElementById("ButtonCalculate");
const usuariosCreados = [
  {
    id: 001,
    fullName: "Raul Villamizar",
    email: "raul.villami@platzi.com",
    creacion: "2018/01/30",
  },
  {
    id: 002,
    fullName: "Andrés Martinez",
    email: "andres.martinez@platzi.com",
    creacion: "2021/07/06",
  },
  {
    id: 003,
    fullName: "Rafael Torres",
    email: "rafael.torres@platzi.com",
    creacion: "2021/07/05",
  },
];

const calcularDescuento = (precio, descuento) => {
  precioFinal = (precio * (100 - descuento)) / 100;
  return precioFinal;
};

const encontrarDatos = () => {
  const inputUserEmail = document.getElementById("InputUserEmail");
  const emailValue = inputUserEmail.value;
  userData = usuariosCreados.find((elemento) => elemento.email === emailValue);
  console.log(userData);
};

validarCuponNuevo = (userData) => {
  if (userData.creacion === currentDate) {
    let bono1 = bonoNuevo;
    console.log(`Tienes un bono de $${bono1} por ser un nuevo usuario`);
    return bono1;
  } else {
    let bono1 = 0;
    console.log("No tiene bono de nuevo usuario");
    return bono1;
  }
};

const validarCuponCompra = (priceValue) => {
  if (priceValue >= 300) {
    let bono2 = bonoCompraMayor;
    console.log(`Tienes un bono de $${bono2} por compras mayores a $300`);
    return bono2;
  } else {
    let bono2 = 0;
    console.log("No tiene bono de compras superiores a $300");
    return bono2;
  }
};

const validarCuponBlackFriday = () => {
  if (currentDate === blackFriday) {
    let bono3 = bonoBlackFriday;
    console.log(`Tienes un bono de $${bono3} por que hoy es black friday`);
    return bono3;
  } else {
    let bono3 = 0;
    console.log("No tiene bono de black friday");
    return bono3;
  }
};
const calculate = () => {
  const inputPrice = document.getElementById("InputPrice");
  const priceValue = inputPrice.value;

  const inputDiscount = document.getElementById("InputDiscount");
  const discountValue = inputDiscount.value;

  const precioConDescuento = calcularDescuento(priceValue, discountValue);

  encontrarDatos();
  let bono1 = validarCuponNuevo(userData);
  let bono2 = validarCuponCompra(priceValue);
  let bono3 = validarCuponBlackFriday();

  const resultP = document.getElementById("ResultPrice");
  resultP.innerText = `El precio con descuento es de: $${precioConDescuento}, y tus cupones son por un valor de ${
    bono1 + bono2 + bono3
  }, es decir el precio te quedará en $${
    precioConDescuento - bono1 - bono2 - bono3
  }`;
};
buttonCalculate.addEventListener("click", calculate);
