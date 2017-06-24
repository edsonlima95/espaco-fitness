$(function () {

    Shadowbox.init();

    //EFEITO TOPO.
    $('footer').find('.topo').click(function () {
        $('html, body').animate({scrollTop: '0'}, 1000);
    });


    //EFEITO ANCORA
    $('a.ancora').on('click', function () {
        $('html, body').animate({scrollTop: $(this.hash).offset().top - 60}, 1000);
        return false;
    });

    //Efeito do menu e serviços
    $(window).scroll(function () {
        var wScroll = $(this).scrollTop();
        var sArticle = $('#servicos article').offset().top;
        //Coloca o background na barra.
        if (wScroll >= 100) {
            $('nav#menu-desk').css('background', 'rgba(0,0,0,1)');
        } else {
            $('nav#menu-desk').css('background', 'rgba(0,0,0,0)');
        }

        //Adiciona o animate css aos serviços.
        if (wScroll >= 300) {

            $('#servicos article').each(function () {
                $(this).addClass('animated slideInUp');
            });
        }
        
        //ADICIONA O EFEITO DA FRASE DO PARALLAX 2
        if (wScroll > 1100) {
            $('div.frase-paralax').css('display', 'block').addClass('animated fadeInRight');
        }
    });

    //adiciona a imagem ao paralax.
    $('.img1').parallax({imageSrc: 'img/bg-about.png'});
    $('.img2').parallax({imageSrc: 'img/paralax1.jpg'});

    //EFEITO QUEM SOMOS.
    $('#nosso-time').find('article figure').on('mouseover', function () {
        $(this).find('.per-dados').css('display', 'block');
    }).on('mouseout', function () {
        $('#nosso-time').find('.per-dados').css('display', 'none');
    });

});