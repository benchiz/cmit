<?php
require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';

$mail = new PHPMailer\PHPMailer\PHPMailer();

$title = "Курс";

try {

$mail->isSMTP();
$mail->CharSet = "UTF-8";
$mail->setFrom('info@tsmit.ru', 'ЦМИТ Нейротех');
$mail->addAddress('trigubov.art@gmail.com');

if(trim(!empty($_POST['userName']))){
    $body.='<p><strong>Имя:</strong>  '.$_POST['userName'].'</p>';
}

if(trim(!empty($_POST['userMail']))){
    $body.='<p><strong>E-mail:</strong>  '.$_POST['userMail'].'</p>';
}

if(trim(!empty($_POST['userTel']))){
    $body.='<p><strong>Номер телефона:</strong>  '.$_POST['userTel'].'</p>';
}

$mail->isHTML(true);
$mail->Subject = $title;

if (!$mail->send()) {
    $result = "Ошибка";
} else {
    $result = "Успех";
}
} catch (Exception $e) {
    $result = "error";
    echo "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}

echo json_encode(["result" => $result]);
?>