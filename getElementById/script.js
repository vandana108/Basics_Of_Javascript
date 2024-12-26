
// JavaScript to change the content of the paragraph
function changeContent() {
  document.getElementById("demo").innerHTML = "Hello JavaScript!";
}
// function turnOnLight() {
//   document.getElementById('myImage').src = 'pic_bulbon.gif';
// }

// function turnOffLight() {
//   document.getElementById('myImage').src = 'pic_bulboff.gif';
// }

function bulbOn(){
  document.getElementById('myImage').src='pic_bulbon.gif';
}

function bulbOff(){
  document.getElementById("myImage").src="pic_bulboff.gif";
}


function wrongAnswer(){
  document.getElementById('question').src="https://www.w3schools.com/js/exercise.asp?x=xrcise_intro1d";
}
function correctAnswer(){
  document.getElementById('question').src="https://www.w3schools.com/js/exercise.asp?x=xrcise_intro1";
}