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
        var sQuemsomos = $('section#quem-somos').offset().top;
       
        //Adiciona o animate css aos serviços.
        if (wScroll >= 300) {

            $('#servicos article').each(function () {
                $(this).addClass('animated slideInUp');
            });
        }
        
         //ADICIONA O EFEITO DA FRASE DO PARALLAX 2
        if (wScroll > 1100) {
            $('div.frase-paralax').css('display','block').addClass('animated fadeInRight');
        }
        
        //Adiciona o animate css aos quem samos.
        if (wScroll >= 1600) {
            $('section#quem-somos').find('.bloco1').css('display','block').addClass('animated slideInLeft');
            $('section#quem-somos').find('.bloco2').css('display','block').addClass('animated slideInRight');
        }
        
        //Adiciona o animate css aos perssonal.
        if (wScroll >= 2100) {
            $('section#nosso-time').find('article').addClass('animated flipInX');
        }
        
        //Galeria.
        $('section#galeria img').on('mouseover', function () {
            $(this).addClass('animated pulse');
        });
        
       
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