<?php

require_once __DIR__ . '../../vendor/autoload.php';
$settings = require_once __DIR__ .'/settings.php';
require_once __DIR__ . '/function.php';

$body = '<h1>Письмо с сайта</h1>\n
Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores deleniti distinctio ab, nesciunt cumque sequi itaque? Voluptatibus 
magnam ipsa unde est architecto facilis necessitatibus pariatur quam,
 officia consequatur culpa doloribus!';

$attachment = [
    __DIR__ .'../templates/home_page/index.html'
];

var_dump(send_mail($settings['mail_setings_prod'], ['ugarinko3@gmail.com'], subject:'Письмо с сайта', $body, $attachments));
