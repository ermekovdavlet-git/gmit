<?php





$c = (string) filter_input( INPUT_POST , "your-name", FILTER_SANITIZE_FULL_SPECIAL_CHARS);
$b = (string) filter_input( INPUT_POST , "your-phone", FILTER_SANITIZE_FULL_SPECIAL_CHARS);
$f = (string) filter_input( INPUT_POST , "your-project", FILTER_SANITIZE_FULL_SPECIAL_CHARS);

if(!(empty($c) || empty($b) || empty($f))){
 try {
    $dbcon = new PDO ("mysql:host=localhost;dbname=gmit", "davlet", "skyline34");
    $dbcon->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    echo "data base connect" . "<br>";
    $sql = "INSERT INTO applications(`names`, `phone_num`, `description`) VALUES (:names, :phone_num, :project)";
    $stmt = $dbcon->prepare($sql);
    $stmt->bindValue(":names", $c);
    $stmt->bindValue(":phone_num", $b);
    $stmt->bindValue(":project", $f);
    $affectedRowsNumber = $stmt->execute();

    if($affectedRowsNumber > 0){

    }
 }
 catch(PDOException $ex){
    
    header("Location: ./phppage/errorpage.php?er=$ex");
    return false;
 }
}else{
    $empty = true;
        header("Location: ./phppage/errorpage.php?" . $empty);
    return false;
}

 header('Location: index.html');


