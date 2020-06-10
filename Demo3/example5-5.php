<?php
//$object = new User;
//$object -> name = "Joe";
//$object-> password = "mypass";
//print_r($object); echo "<br>";
//$object -> save_user();
//class User{
//    public $name, $password;
//    function save_user(){
//        echo "Save User code goes here";
//    }


$object1 = new User1;
$object2 =  $object1;
echo "object1 name = " . $object1 -> name = "Hanh" . "<br>";
echo "object1 password = " . $object1 -> password = "123" . "<br>";
echo "object2 name = " . $object2 -> name = "Haha";
class User1{
    public $name;
    public $password;
}
?>
