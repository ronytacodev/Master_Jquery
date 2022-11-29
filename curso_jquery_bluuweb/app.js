$(document).ready(function(){

    // console.log('functionando');
    $('h1').html('Etiqueta h1');
    $('.display-4').html('desde clase');
    $('#idh1').html('desde id');

    document.querySelector('h1').innerHTML = 'Etiqueta 1';
    document.querySelector('.display-4').innerHTML = 'desde clase';
    document.querySelector('#idh1').innerHTML = 'desde id';
});