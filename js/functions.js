$(function(){

    //Para navegar no slide e só arrasta com a seta

    $('.vitrine-flex').slick({
        dots: false,
        arrows:false,//Essa opção colocando true vai aparecer botões
      infinite: false,//Aqui quando true vai deixar o slide infinito
      centerMode: false,
      speed:800,//Aqui e a velocidade que vai passar o slider como está automatico 1000 e igual a 1 segundo
      slidesToShow: 5,//Você vai dizer quantas imagens vão aparecer no desktop
          autoplay: false,//Sendo false o slide não vai passar automatico
          autoplaySpeed: 3000,
          pauseOnHover:false,//Se for true vai pausar o slider quando a ceta estiver em cima
            responsive: [
        {
          breakpoint: 768,//Aqui e pra quando entrar no mobile em 768px 
          settings: {
            slidesToShow: 3//Vai aparecer só 3 imagens
          }
      }]
        });

});