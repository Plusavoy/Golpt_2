$(document).ready(function(){
$('form').submit(function(e) {
    e.preventDefault();  //отмена перезагрузки странницы
    $.ajax({
      type: "POST",
      url: "mailer/smart.php",
      data: $(this).serialize()
    }).done(function() {
      $(this).find("input").val("");
      $('#consultation, #order').fadeOut();
      $('.overlay, #thanks').fadeIn('slow');


      $('form').trigger('reset');
    });
    return false;
  });

  const slider = tns({
    container: '.reviews__carucel_inner',
    items: 1,
    slideBy: 'page',
    autoplay: false,
    controls: false,
    nav: false,
  });
  document.querySelector('.prev').addEventListener('click', function () {
    slider.goTo('prev');
  });

  document.querySelector('.next').addEventListener('click', function () {
    slider.goTo('next');
  });
});

function opacity() {                                                // Расчет уровня достатка
  if (tns-item != active) {
      console.log ("if tns-item dont active");
  }else  {
      console.log ("Ошибочка...!");
  }
}

