let answer = document.getElementById('answer');
let attempt = document.getElementById('attempt');

function guess() {
    let input = document.getElementById('user-guess');
    if(answer.value == '' || attempt.value == '') {
      setHiddenFields
    }
}

function setHiddenFields() {
    answer.value = Math.floor(Math.random()*10000).toString;
    while(answer.value.length < 4) {
      answer.vale = "0" + answer.value;
    }
    attempt.value = "0"
}

function setMessage(){
  document.getElementById('message').innerHTML = message;
}

function validateInput(input) {

}
//implement new functions here