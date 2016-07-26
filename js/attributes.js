$(function() {
  $('li#one').removeClass('hot');
  $('li#four').addClass('hot');
  $('li.hot').addClass('favorite');
  $('ul').attr('id', 'group');
});
