function checkUsername() {                                  //declare function
  var elMsg = document.getElementById('feedback');          //get feedback element
  if (this.value.length < 5) {                              //if username is too short
    elMsg.textContent = 'Username must be 5 chars or more'; //Set msg
  } else {                                                  //Oterwise
    elMsg.textContent = '';                                 //msg is empty string
  }
}

var elUsername = document.getElementById('username');      //get user input
elUsername.onblur = checkUsername;  //when it loses focus call checkUsername()
