<?php
$host = 'localhost';
$user = 'root';
$password = '';
$dbname = 'galeri_seni';

$conn = new mysqli($host, $user, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "SELECT * FROM karya_seni";
$result = $conn->query($sql);

$gallery = [];
if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        $gallery[] = $row;
    }
}

echo json_encode($gallery);

$conn->close();
?>
