<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $contenido = $_POST['contenido'];

    // Destinatario
    $destinatario = "tu_correo@ejemplo.com"; // Cambia esto por tu dirección de correo

    // Asunto
    $asunto = "Contenido del cuadro de texto";

    // Mensaje
    $mensaje = "El contenido enviado es:\n\n" . $contenido;

    // Cabeceras
    $headers = "From: webmaster@tu_dominio.com"; // Cambia esto por tu dirección de correo

    // Enviar correo
    if (mail($destinatario, $asunto, $mensaje, $headers)) {
        echo "Correo enviado exitosamente.";
    } else {
        echo "Error al enviar el correo.";
    }
} else {
    echo "Método no permitido.";
}
?>
