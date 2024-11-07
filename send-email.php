<?php
// code added now
// require __DIR__ . '/vendor/autoload.php';

// $dotEnv = Dotenv\Dotenv::createImmutable(__DIR__);
// $dotEnv->load();

// $DB_EMAIL = $_ENV['EMAIL_USER'];
// $DB_EMAIL_FROM = $_ENV['EMAIL_FROM'];

//code added end
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");


if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Get the raw POST data

    $json = file_get_contents('php://input');
    $data = json_decode($json, true);

    // Extract form data
    $name = $data['user_name'] ?? '';
    $email = $data['user_email'] ?? '';
    $message = $data['message'] ?? '';

    // Validate inputs
    if (empty($name) || empty($email) || empty($message)) {
        echo json_encode(['success' => false, 'message' => 'All fields are required']);
        exit;
    }

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo json_encode(['success' => false, 'message' => 'Invalid email format']);
        exit;
    }

    // Set email parameters
    // $to = $DB_EMAIL;
    $to = "mosheschwartzberg@gmail.com";
    $subject = "New Contact Form Submission - $email";
    $body = "Name: $name\n";
    $body .= "Email: $email\n\n";
    $body .= "Message:\n$message";

    // $headers = "From: $DB_EMAIL_FROM";
    $headers = "From: moshe.sch.idf@gmail.com";

    // Send email
    if (mail($to, $subject, $body, $headers)) {
        echo json_encode(['success' => true, 'message' => 'Message sent successfully']);
    } else {
        echo json_encode(['success' => false, 'message' => 'Failed to send message']);
    }
} else {
    echo json_encode(['success' => false, 'message' => 'Invalid request method']);
}
