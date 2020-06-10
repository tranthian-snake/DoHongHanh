<?php
$object = new Son;
$object -> test1();
$object -> test2();

class Dad{
    function test(){
        echo "[Class Dad] I am your Father <br>";
    }
}
class Son extends Dad{
    function test1(){
        echo "[Class Son] I am Luke <br>";
    }

    function test2(){
        parent::test();
    }
}
?>