<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Obtiene el contenido del cuadro de texto
    $contenido = $_POST['contenido'];

    // Validar que el contenido no esté vacío
    if (empty($contenido)) {
        echo "El cuadro de texto está vacío. Por favor, escribe algo.";
        exit;
    }

    // Destinatario
    $destinatario = "angie.cafe6@gmail.com"; // Cambia esto por tu dirección de correo

    // Asunto del correo
    $asunto = "Contenido del cuadro de texto";

    // Mensaje del correo
    $mensaje = "El contenido enviado es:\n\n" . $contenido;

    // Cabeceras del correo
    $headers = "From: angie.cafe6@gmail.com\r\n"; // Cambia esto por tu dirección de correo
    $headers .= "Reply-To: angie.cafe6@gmail.com\r\n"; // Cambia esto por tu dirección de correo

    // Enviar el correo
    if (mail($destinatario, $asunto, $mensaje, $headers)) {
        echo "Correo enviado exitosamente.";
    } else {
        echo "Error al enviar el correo.";
    }
} else {
    echo "Método no permitido.";
}
?>
