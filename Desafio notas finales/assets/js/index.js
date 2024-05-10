var nombre = document.getElementById("nombre");
var carrera = document.getElementById("carrera");

nombre.innerHTML = prompt("Ingrese nombre: ");
carrera.innerHTML = prompt("Ingrese carrera: ");

var htmlNota1 = parseFloat(prompt("Ingrese nota 1 (HTML): "));
var htmlNota2 = parseFloat(prompt("Ingrese nota 2 (HTML): "));
var htmlNota3 = parseFloat(prompt("Ingrese nota 3 (HTML): "));

document.getElementById("htmlNota1").innerHTML = htmlNota1;
document.getElementById("htmlNota2").innerHTML = htmlNota2;
document.getElementById("htmlNota3").innerHTML = htmlNota3;

var htmlPromedio = (htmlNota1 + htmlNota2 + htmlNota3) / 3;

document.getElementById("htmlPromedio").innerHTML = htmlPromedio;

var cssNota1 = parseFloat(prompt("Ingrese nota 1 (CSS): "));
var cssNota2 = parseFloat(prompt("Ingrese nota 2 (CSS): "));
var cssNota3 = parseFloat(prompt("Ingrese nota 3 (CSS): "));

document.getElementById("cssNota1").innerHTML = cssNota1;
document.getElementById("cssNota2").innerHTML = cssNota2;
document.getElementById("cssNota3").innerHTML = cssNota3;

var cssPromedio = (cssNota1 + cssNota2 + cssNota3) / 3;

document.getElementById("cssPromedio").innerHTML = cssPromedio;

var jsNota1 = parseFloat(prompt("Ingrese nota 1 (JS): "));
var jsNota2 = parseFloat(prompt("Ingrese nota 2 (JS): "));
var jsNota3 = parseFloat(prompt("Ingrese nota 3 (JS): "));

document.getElementById("jsNota1").innerHTML = jsNota1;
document.getElementById("jsNota2").innerHTML = jsNota2;
document.getElementById("jsNota3").innerHTML = jsNota3;

var jsPromedio = (jsNota1 + jsNota2 + jsNota3) / 3;

document.getElementById("jsPromedio").innerHTML = jsPromedio;
