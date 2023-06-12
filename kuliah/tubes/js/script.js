const cari = document.querySelector('.cari');
const keyword = document.querySelector('.keyword');
const container = document.querySelector('.container');


keyword.addEventListener('keyup', function(){

    const xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function(){
        if(xhr.readyState == 4 && xhr.status == 200){
            container.innerHTML = xhr.responseText;
        }
    }; 

    xhr.open('get', 'ajax/ajax_cari.php?keyword=' + keyword.value);
    xhr.send();
});