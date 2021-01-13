(function() {
    'use strict';

    // MENU FIJO


    $(window).scroll(function() {
        var alturaMenu = $('.menu').outerHeight(true);
        var alturaBarra = $('.barra').outerHeight(true);

        if ($(window).scrollTop() > alturaMenu) {
            $('.barra').addClass('fixed');
            $('.header').css('margin-top', (alturaMenu) + 'px');
            $('.imagen-header').addClass('logo-fijo');
        } else {
            $('.header').css('margin-top', '0px');
            $('.imagen-header').removeClass('logo-fijo');
        }
    });


    // CURSOS OFRECIDOS

    $('.capacitacion .info-curso:first').show();

    $('.pagina-curso a:last').on('click', function() {
        $('#cursos2').removeClass('ocultar');
        $('#cursos').addClass('ocultar');

        var enlace = $(this).attr('href');
        $(enlace).fadeIn(1000);

        document.getElementById("texto-pagina").innerHTML = "Pagina 2/3";

        return false;

    });

    $('.pagina-curso a:first').on('click', function(){
        $('#cursos2').addClass('ocultar');
        $('#cursos').removeClass('ocultar');

        document.getElementById("texto-pagina").innerHTML = "Pagina 1/3";

        return false;
    })


    // PRUEBA DE IMAGENES QUE APARECEN CON SCROLL


    let animacion = document.querySelectorAll(".animado");

    function mostrarElementos() {
        let scrollTop = document.documentElement.scrollTop;

        for (var i=0; i < animacion.length; i++){
            let alturaAnimacion = animacion[i].offsetTop;

            if(alturaAnimacion - 500 < scrollTop) {
                $(animacion[i]).addClass('animate__fadeInLeft');
                $(animacion[i]).removeClass('ocultar-importante');
            }
        }
    }

    window.addEventListener('scroll', mostrarElementos);


})();









