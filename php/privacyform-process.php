<?php
$errorMSG = "";

if (empty($_POST["name"])) {
    $errorMSG = "Campo Nome é obrigatório ";
} else {
    $name = $_POST["name"];
}

if (empty($_POST["email"])) {
    $errorMSG = "Campo Email é obrigatório ";
} else {
    $email = $_POST["email"];
}

if (empty($_POST["message"])) {
    $errorMSG = "Campo Mensagem é obrigatório";
} else {
    $message = $_POST["message"];
}

if (empty($_POST["terms"])) {
    $errorMSG = "É necessário aceitar os termos";
} else {
    $terms = $_POST["terms"];
}

$EmailTo = "filipe.x2016@gmail.com";
$Subject = "Mensagem vinda do site";

// prepare email body text
$Body = "";
$Body .= "Nome: ";
$Body .= $name;
$Body .= "\n";
$Body .= "Email: ";
$Body .= $email;
$Body .= "\n";
$Body .= "Menssagem: ";
$Body .= $message;
$Body .= "\n";
$Body .= "Aceitou os termos: ";
$Body .= $terms;
$Body .= "\n";

// send email
$success = mail($EmailTo, $Subject, $Body, "From:".$email);

// redirect to success page
if ($success && $errorMSG == ""){
   echo "success";
}else{
    if($errorMSG == ""){
        echo "Algo deu errado :(";
    } else {
        echo $errorMSG;
    }
}
?>