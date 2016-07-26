$(function() {
  $('li:contains("pine")').text('pindakaas');
  $('li.hot').html(function() {
    return '<em>' + $(this).text() + '</em>';
  });
  $('li#four').remove();
});
