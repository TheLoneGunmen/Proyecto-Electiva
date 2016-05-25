//Script para el menú responsive
(function() {
    var x = document.getElementById('main-nav');
    var menu = document.getElementById('menu');
    var contador = 0;

    x.addEventListener('click', function() {
        x.classList.toggle('mostrar');

        if (contador == 0) {
            contador = 1;
            menu.classList.add('menu-show');
            menu.classList.remove('menu-hide');
        } else {
            contador = 0;
            menu.classList.add('menu-hide');
            menu.classList.remove('menu-show');
        }
    });
})();

// Slider
(function() {
    var $slider = $('#slider');
    var $btnPrev = $('#btn-prev');
    var $btnNext = $('#btn-next');

    $('#slider section:last').insertBefore('#slider section:first');
    $slider.css('margin-left', '-' + 100 + '%');


    function moveRight() {
        $slider.animate({
            marginLeft: '-' + 200 + '%'
        }, 700, function() {
            $('#slider section:first').insertAfter("#slider section:last");
            $slider.css('margin-left', '-' + 100 + '%');
        });
    }

    function moveLeft() {
        $slider.animate({
            marginLeft: 0
        }, 700, function() {
            $('#slider section:last').insertBefore("#slider section:first");
            $slider.css('margin-left', '-' + 100 + '%');
        });
    }

    $btnNext.on('click', moveRight);
    $btnPrev.on('click', moveLeft);


    function autoPlay() {
        setInterval(function() {
            moveRight();
        }, 5000);
    }

    autoPlay();
})();


// Video Slider

(function(){

  var $video = $("#video-slider");
  var $imageVideo = $(".image-video");

  $imageVideo.each(function (index) {
    var enlace = $(this).data("enlace");
    $(this).on("click",function(e) {
      e.preventDefault();
      $video.attr("src",enlace);
    });
  });
})();
