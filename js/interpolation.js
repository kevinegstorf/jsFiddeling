var texts = ["text1", "text2", "text2", "text3", "text4", "text5"]
var textNumber = Math.round(Math.random() * texts.length) ;
var text = texts[textNumber];
$('#textArea').html('<p>' + text + '<p>');

// filter select

$(document).ready(function(){
 $('#input').change(function(){
  var filter = $(this).val();
  $('option').each(function(){
   if ($(this).val() == filter) {
    $(this).show();
   } else {
    $(this).hide();
   }
  $('select').val(filter);
});
 });
});
