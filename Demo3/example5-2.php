<?php
echo fix_names("WILLIAM", "henry", "gatES");
echo $name[0] . " " . $name[1] . " " . $name[2];

function fix_names($n1, $n2, $n3){
    $n1 = ucfirst(strtolower($n1));
    $n2 = ucfirst(strtolower($n2));
    $n3 = ucfirst(strtolower($n3));

    return array($n1,$n2,$n3);
}
?>
