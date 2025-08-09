// jquery-scripts.js
$(function(){
  // change navbar style on scroll
  $(window).on('scroll', function(){
    if ($(this).scrollTop() > 50) {
      $('.site-header').addClass('scrolled');
    } else {
      $('.site-header').removeClass('scrolled');
    }
  });

  // hero floating card fade
  $('.floating-card').css({opacity:0, transform:'translateY(10px)'}).animate({opacity:1, translateY:0}, {duration:700, step:function(now,fx){ /* no-op to smooth */ }});

  // destination hover lift
  $('.destination-card').hover(function(){
    $(this).css({transform:'translateY(-8px)', transition:'all .25s ease'});
  }, function(){
    $(this).css({transform:'translateY(0)'});
  });

  // testimonial indicators
  $('.ind').on('click', function(){
    $('.ind').removeClass('active');
    $(this).addClass('active');
  });

  // language select
  $('.lang-select').on('click', function(e){
    e.preventDefault();
    var lng = $(this).data('lang') || $(this).text();
    $('#langBtn').text(lng);
  });

  // reveal on scroll simple
  function reveal(){
    $('.service-card, .destination-card, .trip-card, .testimonial-card').each(function(){
      var top = $(this).offset().top;
      var win = $(window).scrollTop() + $(window).height();
      if (win > top + 60) $(this).css({opacity:1, transform:'translateY(0)', transition:'all .6s ease'});
    });
  }
  $('.service-card, .destination-card, .trip-card, .testimonial-card').css({opacity:0, transform:'translateY(20px)'});
  reveal();
  $(window).on('scroll resize', reveal);
});
