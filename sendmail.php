<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'phpmailer/src/Exception.php';
require 'phpmailer/src/PHPMailer.php';

$mail = new PHPMailer(true);
$mail->CharSet = 'UTF-8';
$mail->setLanguage('ru', 'phpmailer/language/');
$mail->IsHTML(true);


$mail->setFrom('sandalspa@сандалспа.рф');     //   Email, с которого будет происходить отправка
$mail->addAddress('Info@glavled.ru');     //   Email собственника Info@glavled.ru
$mail->Subject = 'Заявка на обратный звонок';

$body = '<h1> Заявка на обратный звонок </h1>';
$body.='<p> Имя: '.$_POST['name'].'</p>';
$body.='<p> Телефон: '.$_POST['tel'].'</p>';

$mail->Body = $body;

if (!$mail->send()) {
    $message = 'Ошибка';
} else {
    $message = 'Отправлено';
}

$response = ['message' => $message];

header('Content-type: application/json');
echo json_encode($response);

?>