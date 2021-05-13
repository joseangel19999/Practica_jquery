$(document).ready(function() {

    $("#btnAceptar").click(function(e) {
        e.preventDefault();
        cambiarColor();
    });

    function cambiarColor() {
        let contenedor = $(".contenedor");
        let color = contenedor[0]["style"]["background"];
        if (color != "blue") {
            asignarColor(contenedor, "blue");
        } else {
            asignarColor(contenedor, "red");
        }
    }

    function asignarColor(content, color) {
        content.css({
            "background": color
        });
    }
});