<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    // Adresse e-mail où vous souhaitez recevoir les messages
    $to = "alexis.mazars@epsi.fr";

    // Sujet du message
    $subject = "Nouveau message de contact";

    // Corps du message
    $body = "Nom: $name\n";
    $body .= "Email: $email\n";
    $body .= "Message: $message\n";

    // En-têtes de l'e-mail
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";

    // Envoi de l'e-mail
    if (mail($to, $subject, $body, $headers)) {
        echo "Le message a été envoyé avec succès.";
    } else {
        echo "Une erreur s'est produite lors de l'envoi du message.";
    }
}
?>