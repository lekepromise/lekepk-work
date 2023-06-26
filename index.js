$(document).ready(function() {
    // Add 'hovered' class on mouseenter
    $(".con2a").mouseenter(function() {
      $(this).addClass('nuhu');
    });
  
    // Remove 'hovered' class on mouseleave
    $('.con2a').mouseleave(function() {
      $(this).removeClass('nuhu');
    });
  });
  
  $(document).ready(function() {
    $(".con2b").mouseenter(function() {
      $(this).addClass('nuhu');
    });
    $('.con2b').mouseleave(function() {
      $(this).removeClass('nuhu');
    });
  });

  $(document).ready(function() {
    $(".con2c").mouseenter(function() {
      $(this).addClass('nuhu');
    });
    $('.con2c').mouseleave(function() {
      $(this).removeClass('nuhu');
    });
  });

  $(".con2a").mouseenter(function() {
    $(".con2a a").css("color", "white");
  });
  $(".con2a").mouseleave(function() {
    $(".con2a a").css("color", "red");
  });

  $(".con2b").mouseenter(function() {
    $(".con2b a").css("color", "white");
  });
  $(".con2b").mouseleave(function() {
    $(".con2b a").css("color", "red");
  });

  $(".con2c").mouseenter(function() {
    $(".con2c a").css("color", "white");
  });
  $(".con2c").mouseleave(function() {
    $(".con2c a").css("color", "red");
  });