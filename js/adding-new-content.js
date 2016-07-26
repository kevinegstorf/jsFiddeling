$(function() {
  $('ul').before('<p class="notice">Just Updated</p>');
  $('li.hot').prepend('- ');
  $('li#four').prepend('+ ');
  var $newListItem = $('<li><em>Hutte</em> Kase</li>');
  $('li:last').after($newListItem);
})
