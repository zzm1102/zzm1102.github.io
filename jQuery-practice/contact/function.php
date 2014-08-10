<?php

$f = fopen( 'save.txt', 'write' );
fwrite( $f, $_POST['name']);
fclose($f);
