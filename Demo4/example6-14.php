<?php
$j = 23;
$temp = "Hello";
$address = "1 Old Street";
$age = 61;

print_r(compact(explode(' ','j temp address age')));
//compact: Noi lai voi nhau thanh mang
//explode : chia mang
?>