<?php
$object = new Subscriber;
$object -> name  = "Fred";
$object -> password = "pword";
$object -> phone    = "1223237723";
$object -> email = "hihi@gmail.com";
$object -> display();

class User{
    public $name , $password;
    function save_user(){
        echo "Save User code goes here";
    }
}

class Subscriber extends User{
    public $phone, $email;

    function display(){
        echo "Name: " . $this->name   . "<br>";
        echo "Pass: " . $this->password   . "<br>";
        echo "Phone: " . $this->phone   . "<br>";
        echo "Email: " . $this->email;

    }
}
?>