<?php

$myFile = fopen("newfile.txt", "w") or die("Unable to open file1");
$txt = "Hello file. What's up?\n";
fwrite($myFile, $txt);
$txt = "Hey! I am another line.\n";
fwrite($myFile, $txt);
fclose($myFile);

 ?>
