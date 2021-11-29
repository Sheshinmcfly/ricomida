
/* Activar tooltip */
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
})


/* Mensaje al enviar correo */
$(document).ready(function () {
    $('#enviarCorreo').click(function () {
        alert("El correo fue enviado correctamente...")
    })
})

/* Cambiar color de título al hacer doble click */
$(document).ready(function () {
    $('#recetas h4').on('dblclick', function () {
        $(this).css({ "color": "#DC3545" });
    })
})


/* Mostrar u ocultar todo el contenido de las card */
$(document).ready(function () {
    $("#recetasRelacionadas .card-title").click(function () {
        $(".card-text").toggle(function () { });
        $(".card-img-top").toggle(function () { });
    });
})

