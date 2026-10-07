function dibujar() {
    const canvas = document.getElementById("canvas");

    if (canvas.getContext) {
        const ctx = canvas.getContext("2d");

        // Rectángulo
        ctx.strokeRect(30, 30, 70, 70);

        // Círculo
        ctx.beginPath();
        ctx.arc(150, 65, 35, 0, Math.PI * 2);
        ctx.stroke();

        // Líneas
        ctx.beginPath();
        ctx.moveTo(30, 130);
        ctx.lineTo(170, 130);
        ctx.moveTo(100, 30);
        ctx.lineTo(100, 170);
        ctx.stroke();
    }
}