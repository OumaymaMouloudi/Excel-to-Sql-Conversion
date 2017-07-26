<?php

ini_set('max_execution_time',1000);

//get the json object from the script
$json = $_POST['data'];

//create a DB connection
try{
    $con=new PDO("mysql:host=localhost;dbname=databasename","user","password");
}
catch (PDOException $e){
    echo 'Echec de la connexion : ' . $e->getMessage();
    exit;
}
 
$result = json_decode($json,true);
foreach($result as $key => $value) {
    
    if($value) {

        //insert data in Database from json object
        $query = 'INSERT INTO pp VALUES ("'.$value['column1'].'","'.$value['column2'].'","'.$value['column3'].'","'.$value['column4'].'","'.$value['column5'].'")';
        $statement = $con->prepare($query);
        $res = $statement->execute();
        
    }
}