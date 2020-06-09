<?php
$paper = array('copier' => "Copier & Multipurpose",
                'inkjet' => "Inkjet Printer",
                'laser' => "Laser Printer",
                'photo' => "Photographic Paper"
    );
while(list($item, $desccription) = each($paper))
    echo "$item: $desccription<br>";
?>
