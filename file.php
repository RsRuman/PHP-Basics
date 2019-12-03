<?php
$myFile = fopen("file.txt", "r") or die("Unable To Open File!");

while(!feof($myFile)){
  echo fgets($myFile);
  echo "<br>";
}
fclose($myFile);


 ?>
