<?php
$product = array(
    'paper' => array(
        'copier' => "Copier & Multipurpose",
        'inkjet' => "Inkjet Printer",
        'laser' => "Laser Printer",
        'photo' => "Photographic Paper"
    ),
    'pen' => array(
        'ball' => "Ball Point",
        'hilite' => "HighLighters",
        'market' => "Markers"
    ),
    'misc' => array(
        'tape' => "Sticky Tape" ,
        'glue' => "Adhesives" ,
        'clips' => "Paperclips" ,
    ),
);

echo "<pre>";

foreach($product as $section => $item)
    foreach($item as $key => $value)
        echo "$section:\t$key:\t($value)<br>";



?>
