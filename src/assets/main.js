let answer = document.getElementById('answer');
let attempt = document.getElementById('attempt');

function guess() {
    let input = document.getElementById('user-guess');
    if(answer.value == '' || attempt.value == '') {
      setHiddenFields;
    }
    if(!validateInput(input.value)){
      return;
    }
    attempt.value++; //counter

    if getResults(input){
      setMessage('You Cracked the Code!');
    } else if(attempt.value > 9) {
      setMessage('You did not crack the code.  Game Over!');
    } else {
      setMessage("Nope!  Try again!");
    }
}
// Populates new hidden number, and resets counter
function setHiddenFields() {
    answer.value = Math.floor(Math.random()*10000).toString(); // Converted to string to make sure "0" in front of solution are shown
    while(answer.value.length < 4) {
      answer.vale = "0" + answer.value; //adds '0' to front of number
    }
    attempt.value = "0";
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

function getResults(input) {
  let html = '<div class="row"><span class="col-md-6">' + input + '</span><div class="col-md-6">';
  for(i = 0, i < input.length, i++){
    if(input.charAt(i) == answer.value.charAt(i)) {
      html += '<span class="glyphicon glyphicon-ok"></span>';
    } //Correct guess in Correct possition
    else if (answer.value.indexOf(input.charAt(i)) > -1) {
      html += '<span class="glyphicon glyphicon-transfer"></span>';
    } //Correct guess in incorrect possition
    else {
      html += '<span class="glyphicon glyphicon-remove"></span>';
    } //Incorrect Guess
  }
  html += '</div></div>'
  document.getElementById('results').innerHTML += html; //Add to page
  if(input == answer.value){
    return true; // Win Condition
  }
  return false;
}

function showAnswer(success) {
  let code = document.getElementById('code');
  if(success) {
    code.className += ' success';
  } else {
    code.className += ' failure';
  }
  code.innerHTML = answer.value;
}
//implement new functions here
