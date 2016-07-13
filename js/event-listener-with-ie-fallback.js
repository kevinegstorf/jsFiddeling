var elUsername = document.getElementById('username');      //get user input
var elMsg = document.getElementById('feedback');


function checkUsername(minLength) {                                  //declare function
  if (elUsername.value.length < minLength) {                              //if username is too short
    elMsg.textContent = 'Username must be 5 chars or more'; //Set msg
  } else {                                                  //Oterwise
    elMsg.textContent = '';                                 //msg is empty string
  }
}

if (elUsername.addEventListener) {
  elUsername.addEventListener('blur', function () {
    checkUsername(5);
  }, false);
} else {
  elUsername.attachEvent('onblur', function() {
    checkUsername(5);
  })
}
