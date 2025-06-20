let numtabla;
function multiplicar() {
    numtabla = prompt("¿Qué tabla de multiplicar quieres ver? (ingresa un número del 1 al 10)");
    if (numtabla >= 10) {
        alert("No hay tablas de multiplicar mayores a 10");
    } else if (numtabla <= 0) {
        alert("No hay tablas de multiplicar menores a 1");
    } else {
        document.write("<h1>Tabla del " + numtabla + "</h1>");
        for (let i = 1; i <= 10; i++) {
            document.write(numtabla + " x " + i + " = " + (numtabla * i) + "<br>");
        }
    }
}


window.onload = multiplicar;


