<?php   include_once "conexao.php"; ?>

<?php
$id = $_POST['us_id'];
$nome = $_POST['us_nome'];
$sobrenome = $_POST['us_sobrenome'];
$celular = $_POST['us_celular'];
$email = $_POST['us_email'];
$cargo = $_POST['us_cargo'];
$igreja = $_POST['us_igreja'];
$senha = $_POST['us_senha'];

$sql = "INSERT INTO tb_usuario (us_nome, us_sobrenome, us_celular, us_email, us_cargo, us_igreja, us_senha) value ('$id','$nome', '$sobrenome', '$celular', '$email' '$cargo', '$igreja', '$senha')";

if (mysqli_query($conn, $sql)){

    header("location: cadastro.php");

} else{
    echo "Erro na conexão" . $sql . "<br>" . mysqli_error($conn);
    mysqli_close($conn);
}


?>