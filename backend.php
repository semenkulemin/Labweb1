<?php

@session_start();
if (!isset($_SESSION["data"])) $_SESSION["data"] = array();
date_default_timezone_set('Europe/Moscow');
$mTime = microtime(1);
$x = (float)$_POST["x"];
$y = (float)$_POST["y"];
$r = (float)$_POST["r"];
$status = areaCheck($x, $y, $r);
$currentTime = date('Y-m-d H:i:s');
$benchmarkTime = round(microtime(1) - $mTime, 7) * 1000;
//строка таблицы
$message = "<tr><td>$x</td><td>$y</td><td>$r</td><td>$status</td><td>$currentTime</td><td>$benchmarkTime</td></tr>";
echo $message;

function areaCheck($x, $y, $r)
{
    if (($x <= 0 && $y >= 0 && $x >= -$r && $y <= $r * 0.5) || ($x >= 0 && $y >= 0 &&  $y <= -$x+$r) || ($x <= 0 && $y <= 0 && $x * $x + $y * $y <= $r * $r)) {return 'yes';}
    else {return 'no';}
}
