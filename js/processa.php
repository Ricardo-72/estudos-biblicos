<?php   include_once "conexao.php"; ?>

<?php
$id = $_POST['id_card'];
$nome = $_POST['classe'];
$sobrenome = $_POST['visitante'];
$celular = $_POST['ofertas'];
$email = $_POST['vis_matriculados'];
$cargo = $_POST['matriculados'];
$igreja = $_POST['presente'];
$senha = $_POST['tarefa'];
$senha = $_POST['pontualidade'];

$sql = "INSERT INTO cardeneta (classe, visitante, vis_matriculados, ofertas, matriculados, presente, tarefa, pontualidade) value ('$id','$nome', '$sobrenome', '$celular', '$email' '$cargo', '$igreja', '$senha')";

if (mysqli_query($conn, $sql)){

    header("location: cadastro.php");

} else{
    echo "Erro na conexão" . $sql . "<br>" . mysqli_error($conn);
    mysqli_close($conn);
}


?>