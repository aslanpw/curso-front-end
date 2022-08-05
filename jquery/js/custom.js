// instancia jquery e evita conflitos
//jQuery (function($) {

jQuery(function($){

    $('.owl-carousel').owlCarousel();

    let titulos  = $('h4') // tag

    let itens = $('.featured-item') // class

    let destaques = $('#featured') // id

    console.log(titulos.first());

    // Configuração de produtos

    $('.featured-item a').addClass('btn btn-secondary stretch-link');

    $('.new h4').append('<span class="badge bg-secondary">Novo</span>');

    $('.featured-item h4').dblclick( function(){

        $(this).css({
            'color': '#f00',
            'background' : '#ff0',
            'font-weight' : '100',
        });

    });

    $('.featured-item .comprar').on('click', function(event){
        event.preventDefault();

        alert('Produto esgotado');

    });

})