<?php
require('functions.php');

$title = 'Form tambah data';


if(isset($_POST['tambah'])){  


    if(tambah($_POST) > 0){
        echo "<script> 
        alert('data berhasil ditambahkan');
        document.location.href = 'admin.php';
        </script>";
    }else {
        echo"<script ('data gagal ditambahkan')></script>";
    }
    
}


require('views/tambah.view.php');