$(function() {
  $('li').on('click', function() {
    $(this).animate({
      opacity: 0.0,
      paddingLeft: '+=400'
    }, 500, function() {
      $(this).remove();
    })
  })
})
