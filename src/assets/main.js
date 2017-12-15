let answer = document.getElementById('answer');
let attempt = document.getElementById('attempt');

function guess() {
    let input = document.getElementById('user-guess');
    if(answer.value == '' || attempt.value == '') {
      setHiddenFields
    }
    if(!validateInput(input.value)){
      return;
    }
    attempt.value++;
}
// Populates new hidden number, and resets counter
function setHiddenFields() {
    answer.value = Math.floor(Math.random()*10000).toString(); // Converted to string to make sure "0" in front of solution are shown
    while(answer.value.length < 4) {
      answer.vale = "0" + answer.value; //adds '0' to front of number
    }
    attempt.value = "0"
}
// Communication with user
function setMessage(){
  document.getElementById('message').innerHTML = message;
}
// Makes sure the user gives 4 digits for their guess to be valid
function validateInput(input) {
  if(input.length != 4) {
    setMessage("Your Guess must consist of exactly 4 digits");
    return false;
  }
  return true;
}
//implement new functions here
