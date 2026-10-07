// ============================================================
// VARIABLE GLOBAL
// ============================================================

// Guarda el número del ejercicio que se está mostrando.
let ejercicioActual = 0;


// ============================================================
// FUNCIÓN PRINCIPAL DRAW()
// ============================================================

// Esta función se encarga de decidir qué dibujo mostrar.
function draw() {

    // Obtiene el elemento canvas.
    const canvas = document.getElementById("canvas");

    // Obtiene el contexto de dibujo en 2 dimensiones.
    const ctx = canvas.getContext("2d");

    // Limpia completamente el área de dibujo.
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Según el ejercicio seleccionado se ejecuta una función.
    switch (ejercicioActual) {

        // Ejemplo inicial.
        case 0:
            drawEjemploInicial(ctx);
            break;

        // Rectángulo.
        case 1:
            drawRectangulo(ctx);
            break;

        // Triángulo.
        case 2:
            drawTriangulo(ctx);
            break;

        // Happy Face.
        case 3:
            drawHappyFace(ctx);
            break;

        // Líneas.
        case 4:
            drawLineas(ctx);
            break;

        // Arcos.
        case 5:
            drawArcos(ctx);
            break;

        // Curvas.
        case 6:
            drawCurvas(ctx);
            break;

        // Combinación de figuras.
        case 7:
            drawCombinacion(ctx);
            break;
    }
}


// ============================================================
// CAMBIAR DE EJERCICIO
// ============================================================

// Esta función cambia el ejercicio que se desea mostrar.
function mostrarEjercicio(numero) {

    // Guarda el número recibido.
    ejercicioActual = numero;

    // Obtiene el elemento donde se muestra el nombre.
    const texto = document.getElementById("ejercicio");

    // Cambia el texto dependiendo del ejercicio.
    switch (numero) {

        case 0:
            texto.textContent =
                "Ejemplo inicial: Rectángulo verde";
            break;

        case 1:
            texto.textContent =
                "Ejemplo 1: Rectángulo";
            break;

        case 2:
            texto.textContent =
                "Ejemplo 2: Triángulo";
            break;

        case 3:
            texto.textContent =
                "Ejemplo 3: Happy Face";
            break;

        case 4:
            texto.textContent =
                "Ejemplo 4: Líneas";
            break;

        case 5:
            texto.textContent =
                "Ejemplo 5: Arcos";
            break;

        case 6:
            texto.textContent =
                "Ejemplo 6: Curvas Bézier y cuadráticas";
            break;

        case 7:
            texto.textContent =
                "Ejemplo 7: Combinación de líneas y figuras";
            break;
    }

    // Ejecuta nuevamente la función draw().
    draw();
}


// ============================================================
// EJEMPLO INICIAL
// ============================================================

// Replica el ejemplo del cuadro verde.
function drawEjemploInicial(ctx) {

    // Define el color verde.
    ctx.fillStyle = "green";

    // Dibuja un rectángulo verde.
    ctx.fillRect(50, 50, 200, 100);
}


// ============================================================
// EJEMPLO 1 — RECTÁNGULO
// ============================================================

function drawRectangulo(ctx) {

    // Define el color del relleno.
    ctx.fillStyle = "#018ABE";

    // Dibuja un rectángulo.
    ctx.fillRect(150, 120, 300, 180);

    // Define el color del borde.
    ctx.strokeStyle = "#02457A";

    // Define el grosor del borde.
    ctx.lineWidth = 5;

    // Dibuja el borde del rectángulo.
    ctx.strokeRect(150, 120, 300, 180);
}


// ============================================================
// EJEMPLO 2 — TRIÁNGULO
// ============================================================

function drawTriangulo(ctx) {

    // Inicia una nueva ruta.
    ctx.beginPath();

    // Define el primer punto del triángulo.
    ctx.moveTo(300, 70);

    // Traza una línea hacia el segundo punto.
    ctx.lineTo(150, 350);

    // Traza una línea hacia el tercer punto.
    ctx.lineTo(450, 350);

    // Cierra automáticamente la figura.
    ctx.closePath();

    // Define el color del relleno.
    ctx.fillStyle = "#73C088";

    // Rellena el triángulo.
    ctx.fill();

    // Define el color del borde.
    ctx.strokeStyle = "#02457A";

    // Define el grosor del borde.
    ctx.lineWidth = 5;

    // Dibuja el contorno.
    ctx.stroke();
}


// ============================================================
// EJEMPLO 3 — HAPPY FACE
// ============================================================

function drawHappyFace(ctx) {

    // --------------------------------------------------------
    // CARA
    // --------------------------------------------------------

    // Inicia una nueva ruta.
    ctx.beginPath();

    // Dibuja un círculo para representar la cara.
    ctx.arc(
        300,
        225,
        150,
        0,
        Math.PI * 2
    );

    // Define el color amarillo.
    ctx.fillStyle = "#FFD93D";

    // Rellena la cara.
    ctx.fill();

    // Define el color del borde.
    ctx.strokeStyle = "#333";

    // Define el grosor del borde.
    ctx.lineWidth = 5;

    // Dibuja el borde.
    ctx.stroke();


    // --------------------------------------------------------
    // OJO IZQUIERDO
    // --------------------------------------------------------

    ctx.beginPath();

    ctx.arc(
        245,
        180,
        15,
        0,
        Math.PI * 2
    );

    ctx.fillStyle = "#222";

    ctx.fill();


    // --------------------------------------------------------
    // OJO DERECHO
    // --------------------------------------------------------

    ctx.beginPath();

    ctx.arc(
        355,
        180,
        15,
        0,
        Math.PI * 2
    );

    ctx.fill();


    // --------------------------------------------------------
    // SONRISA
    // --------------------------------------------------------

    ctx.beginPath();

    ctx.arc(
        300,
        225,
        85,
        0,
        Math.PI
    );

    ctx.strokeStyle = "#222";

    ctx.lineWidth = 8;

    ctx.stroke();
}


// ============================================================
// EJEMPLO 4 — LÍNEAS
// ============================================================

function drawLineas(ctx) {

    // Define el color de las líneas.
    ctx.strokeStyle = "#02457A";

    // Define el grosor.
    ctx.lineWidth = 5;


    // --------------------------------------------------------
    // LÍNEA HORIZONTAL
    // --------------------------------------------------------

    ctx.beginPath();

    ctx.moveTo(50, 100);

    ctx.lineTo(550, 100);

    ctx.stroke();


    // --------------------------------------------------------
    // LÍNEA VERTICAL
    // --------------------------------------------------------

    ctx.beginPath();

    ctx.moveTo(100, 50);

    ctx.lineTo(100, 400);

    ctx.stroke();


    // --------------------------------------------------------
    // LÍNEA DIAGONAL
    // --------------------------------------------------------

    ctx.beginPath();

    ctx.moveTo(150, 350);

    ctx.lineTo(500, 80);

    ctx.stroke();


    // --------------------------------------------------------
    // LÍNEA EN ZIGZAG
    // --------------------------------------------------------

    ctx.beginPath();

    ctx.moveTo(100, 250);

    ctx.lineTo(200, 180);

    ctx.lineTo(300, 250);

    ctx.lineTo(400, 180);

    ctx.lineTo(500, 250);

    ctx.stroke();
}


// ============================================================
// EJEMPLO 5 — ARCOS
// ============================================================

function drawArcos(ctx) {

    // Define el color del borde.
    ctx.strokeStyle = "#018ABE";

    // Define el grosor.
    ctx.lineWidth = 6;


    // --------------------------------------------------------
    // PRIMER ARCO
    // --------------------------------------------------------

    ctx.beginPath();

    ctx.arc(
        170,
        225,
        100,
        0,
        Math.PI
    );

    ctx.stroke();


    // --------------------------------------------------------
    // SEGUNDO ARCO
    // --------------------------------------------------------

    ctx.beginPath();

    ctx.arc(
        430,
        225,
        100,
        Math.PI,
        Math.PI * 2
    );

    ctx.stroke();


    // --------------------------------------------------------
    // CÍRCULO COMPLETO
    // --------------------------------------------------------

    ctx.beginPath();

    ctx.arc(
        300,
        225,
        80,
        0,
        Math.PI * 2
    );

    ctx.stroke();
}


// ============================================================
// EJEMPLO 6 — CURVAS
// ============================================================

function drawCurvas(ctx) {

    // Define el color.
    ctx.strokeStyle = "#02457A";

    // Define el grosor.
    ctx.lineWidth = 5;


    // --------------------------------------------------------
    // CURVA CUADRÁTICA
    // --------------------------------------------------------

    ctx.beginPath();

    // Punto inicial.
    ctx.moveTo(50, 200);

    // Punto de control y punto final.
    ctx.quadraticCurveTo(
        300,
        20,
        550,
        200
    );

    // Dibuja la curva.
    ctx.stroke();


    // --------------------------------------------------------
    // CURVA BÉZIER
    // --------------------------------------------------------

    ctx.beginPath();

    // Punto inicial.
    ctx.moveTo(50, 350);

    // Dos puntos de control y punto final.
    ctx.bezierCurveTo(
        150,
        100,
        400,
        500,
        550,
        350
    );

    // Dibuja la curva.
    ctx.stroke();
}


// ============================================================
// EJEMPLO 7 — COMBINACIÓN DE FIGURAS
// ============================================================

function drawCombinacion(ctx) {

    // --------------------------------------------------------
    // RECTÁNGULO
    // --------------------------------------------------------

    ctx.fillStyle = "#73C088";

    ctx.fillRect(
        100,
        120,
        400,
        230
    );


    // --------------------------------------------------------
    // CÍRCULO
    // --------------------------------------------------------

    ctx.beginPath();

    ctx.arc(
        300,
        235,
        80,
        0,
        Math.PI * 2
    );

    ctx.fillStyle = "#FFD93D";

    ctx.fill();

    ctx.strokeStyle = "#02457A";

    ctx.lineWidth = 5;

    ctx.stroke();


    // --------------------------------------------------------
    // TRIÁNGULO
    // --------------------------------------------------------

    ctx.beginPath();

    ctx.moveTo(300, 80);

    ctx.lineTo(240, 160);

    ctx.lineTo(360, 160);

    ctx.closePath();

    ctx.fillStyle = "#018ABE";

    ctx.fill();

    ctx.stroke();


    // --------------------------------------------------------
    // LÍNEAS
    // --------------------------------------------------------

    ctx.beginPath();

    ctx.moveTo(100, 350);

    ctx.lineTo(500, 350);

    ctx.strokeStyle = "#02457A";

    ctx.lineWidth = 6;

    ctx.stroke();


    // --------------------------------------------------------
    // ARCO
    // --------------------------------------------------------

    ctx.beginPath();

    ctx.arc(
        300,
        235,
        45,
        0,
        Math.PI
    );

    ctx.stroke();
}