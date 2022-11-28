conexao bd com MYSQL

<?php

$host = "localhost";
$user = "root";
$pass = "";
$dbname ="ebd";
$port = "3306";

$conn = new PDO("mysql:host=$host;port;dbname=" . $dbname, $user, $´pass);

No index.php

<?php
include_once 'conexao.php';
?>

<!DOCTYP html>
<html lang ="pt-br">
<head>
	<meta charset="UTF-8">
	<title>TITULO DA PG</title>
</head>