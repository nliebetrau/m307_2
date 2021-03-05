<?php

$mysqli = new mysqli('m307nli','nliebetrau','AAAA1234',"m307") or die(mysqli_error($mysqli));

if (isset($_POST['save'])) {
    $name = $_POST['name'];
    $vorname = $_POST['vorname'];
    $mail = $_POST['mail'];
    $num = $_POST['num'];
    $kategorie = $_POST['kategorie'];
    $spez = $_POST['spez'];
    $fragen = $_POST['fragen'];

    $mysqli->query("INSERT INTO daten (name, vorname, mail, num, kategorie, spez, fragen) VALUES('$name, $vorname, $mail, $num, $kategorie, $spez, $fragen')") or
        die($mysqli->error);
}
