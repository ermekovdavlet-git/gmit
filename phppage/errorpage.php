<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .container{
            max-width: 1280px;
            text-align: center;
            margin: 0 auto;
        }
    </style>
</head>
<body>
    <div class="container">
        error
        <?php

        $err = ($_GET["empty"]);
        if(empty($err)){
            echo "<h1>Error: Чтобы оставить заявку вам необходимо заполнить все поля</h1>";
        }
    
?>

        <a href="../index.html">Вернутся на главную страницу</a>
    </div>
</body>
</html>