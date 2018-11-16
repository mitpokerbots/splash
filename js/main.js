jQuery.fn.rotate = function(degrees) {
    $(this).css({'transform' : 'rotate('+ degrees +'deg)'});
    return $(this);
};

$(function() {
  $('#arrow').click(function(e) {
    e.preventDefault();
    $([document.documentElement, document.body]).animate({
      scrollTop: $("#info").offset().top
    }, 500);
  });

  $(window).scroll(function(e) {
    var rotation = $(this).scrollTop() / $("#info").offset().top * 135;
    $("#logo").rotate(rotation);
  });
});
