<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  if (!empty($_POST['name']) && !empty($_POST['email']) && !empty($_POST['message'])) {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $phone = $_POST["phone"]; // Optional
    $message = $_POST["message"];

    // Set recipient email address
    $to = "trimankaur1905@gmail.com";
    $subject = "New Contact Form Submission";
    $body = "Name: $name\nEmail: trimankaur1905@gmail.com\nPhone: $phone\nMessage: $message";

    // Send email using PHP's mail() function
    mail($to, $subject, $body);
  }
}
?>