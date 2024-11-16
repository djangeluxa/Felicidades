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
    $destinatario = "tu_correo@ejemplo.com"; // Cambia esto por tu dirección de correo

    // Asunto del correo
    $asunto = "Contenido del cuadro de texto";

    // Mensaje del correo
    $mensaje = "El contenido enviado es:\n\n" . $contenido;

    // Cabeceras del correo
    $headers = "From: webmaster@tu_dominio.com\r\n"; // Cambia esto por tu dirección de correo
    $headers .= "Reply-To: webmaster@tu_dominio.com\r\n"; // Cambia esto por tu dirección de correo

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
