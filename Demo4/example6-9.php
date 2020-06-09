<?php
$paper = array('chinh'=> "đz",
    'hiếu'=> "ngu",
    'hoàng'=> "bò ",
    'tuấn'=> "oc");
//foreach ($paper as $item => $description)
//    echo "$item: $description<br>";
while (list($item, $description) = each($paper))
    echo "$item: $description<br>";
?>