function checkLength(e, minLength){
  var el, elMsg;
  if(!e){
    e = window.event;
  }
  el = e.target || e.srcElement;
  elMsg = el.NextSibling;

  if (el.value.length < minLength){
    elMsg.innerHTML = 'Username must be' + minLength + 'characaters or more';
  } else {
    elMsg.innerHTML = '';
  }
}

var elUsername = document.getElementById('udername');
if (elUsername.addEventListener) {
  elUsername.addEventListener('blur', function(e){
    checkUsername(e, 5);
  }, false);
} else {
  elUsername.attachEvent('onblur', function(e){
    checkUsername(e, 5);
  });
}