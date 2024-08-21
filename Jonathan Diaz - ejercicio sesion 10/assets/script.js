$(document).ready(function(){
    let $text1 = $('#text1');
    let $text2 = $('#text2');
    let $caja2 = $('#caja2');
    let $img = $('#img');
    let $caja3 = $('#caja3');

    // Ocultar el div text2 añadiendo una clase
    $text2.addClass('hidden');

    // Agregar el evento mouseover para mostrar el text2
    $text1.on('mouseover', function() {
        $text2.removeClass('hidden');
    });

    // Ocultar el div text2 en mouseout
    $text1.on('mouseout', function() {
        $text2.addClass('hidden');
    });

    // Agregar el evento para agrandar la imagen añadiendo una clase
    $caja2.on('click', function() {
        $img.removeClass('small-width').addClass('full-width');
    });

    // Restaurar el tamaño de la imagen en mouseout
    $caja2.on('mouseout', function() {
        $img.removeClass('full-width').addClass('small-width');
    });

    // Agregar el evento para agrandar el texto del div caja3 añadiendo una clase
    $caja3.on('dblclick', function() {
        $caja3.removeClass('default-font').addClass('large-font');
    });

    // Restaurar el tamaño correcto del texto en mouseout
    $caja3.on('mouseout', function() {
        $caja3.removeClass('large-font').addClass('default-font');
    });
});