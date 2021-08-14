// Código del cuadrado
console.group("Cuadrados");
// const ladoCuadrado = 5;
// console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

function perimetroCuadrado(lado) {
  return lado * 4;
}
// console.log("El perímetro del cuadrado es: " + perimetroCuadrado + "cm");

function areaCuadrado(lado) {
  return lado * lado;
}
// console.log("El área del cuadrado es: " + areaCuadrado + "cmˆ2");
console.groupEnd();


//...


// Código del triángulo
console.group("Triángulos");

// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;
// console.log(
//   "Los lados del triángulo miden: "
//   + ladoTriangulo1
//   + "cm, "
//   + ladoTriangulo2
//   + "cm, "
//   + baseTriangulo
//   + "cm"
// );

// const alturaTriangulo = 5.5;
// console.log("La altura del triángulo es de: " + alturaTriangulo + "cm");

function perimetroTriangulo(lado1, lado2, base) {
  return lado1 + lado2 + base;
}
// console.log("El perímetro del triángulo es: " + perimetroTriangulo + "cm");

function areaTriangulo(base, altura) {
  return (base * altura) / 2;
}
console.log("El área del triángulo es: " + areaTriangulo + "cmˆ2");

console.groupEnd();


//...


// Código del círculo
console.group("Círculos");

// Radio
// const radioCirculo = 4;
// console.log("El radio del círculo es: " + radioCirculo + "cm");

// Diámetro
function diametroCirculo(radio) {
  return radio * 2;
}

// PI
const PI = Math.PI;
console.log("PI es: " + PI);

// Circunferencia
function perimetroCirculo(radio) {
  const diametro = diametroCirculo(radio);
  return diametro * PI;
}

// Área
function areaCirculo(radio) {
  return (radio * radio) * PI;
}

console.groupEnd();


//....


// Aquí interactuamos con el HTML

/*__ C U A D R A D O __*/
function calcularPerimetroCuadrado() {
  const input = document.getElementById("InputCuadrado");
  const value = input.value;

  const perimetro = perimetroCuadrado(value);
  alert(perimetro);
}
function calcularAreaCuadrado() {
  const input = document.getElementById("InputCuadrado");
  const value = input.value;

  const area = areaCuadrado(value);
  alert(area);
}


/*__ T R I A N G U L O __*/

function calcularPerimetroTriangulo() {
  const input = document.getElementById("lado1");
  const lado1 = input.value;

  const input = document.getElementById("lado2");
  const lado2 = input.value;

  const input = document.getElementById("base");
  const base = input.value;

  const perimetro = perimetroTriangulo(lado1, lado2, base);
  alert(perimetro);
} 

function calcularAreaTriangulo() {
  const input = document.getElementById("altura");
  const altura = input.value;


  const input = document.getElementById("base");
  const base = input.value;

  const perimetro = areaTriangulo(base, altura);
  alert(perimetro);
}



/*__ C I R C U L O __*/
function calcularAreaCirculo(){
  const input = document.getElementById("InputCircle");
  const value = input.value;

  const area = areaCirculo(value);
  alert(area);
}

function calcularPerimetroCirculo() {
  const input = document.getElementById("InputCircle");
  const value = input.value;

  const area = perimetroCirculo(value);
  alert(area);
}