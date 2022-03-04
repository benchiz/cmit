<?php 
require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

$name = $_POST['userName'];
$phone = $_POST['userTel'];
$email = $_POST['userMail'];

$mail->isSMTP();
$mail->Host = 'smtp.yandex.ru';
$mail->SMTPAuth = true;                       
$mail->Username = 't3stmailpetrov@yandex.ru';
$mail->Password = 'U75pUBdPc$.CT99';
$mail->SMTPSecure = 'ssl';
$mail->Port = 465;

$mail->setFrom('t3stmailpetrov@yandex.ru');
$mail->addAddress('trigubov.art@gmail.com');

$mail->isHTML(true);

$mail->Subject = 'Заявка с тестового сайта';
$mail->Body    = '' .$name . ' оставил заявку, его телефон: ' .$phone. '<br>Почта этого пользователя: ' .$email;
$mail->AltBody = '';

if(!$mail->send()) {
    echo = 'Error';
} else {
	echo 'Success';
}
?>