
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import './src-noconflict/ace.js';
import './src-noconflict/theme-monokai.js';
import './src-noconflict/mode-javascript.js';
// import './src-noconflict/worker-javascript.js';
import { Game } from './game.js';

var editor = ace.edit("editor");
editor.setTheme("ace/theme/monokai");
editor.session.setMode("ace/mode/javascript");

function switchQuestions(game){
  //hide previous questions
  //show new
  //should switch questions if answer is correct or time runs out on this.starterScore;
  for(i = 1; i <= 10; i++){
    $(`#${i}`).show();
  }
}


function countDownTimer(game){
  let displayCounter = setInterval(() => {
    $('h1#countDown').text(`Timer: ${game.starterScore}`);
    $('.score').html(`Score: ${game.score}`);
  }, 10);
}
function returnScore(game){
  $('.score').html(`Score: ${game.score}`);
}
//setTimeout(switchQuestion, 10) --hoping this will make the function run 10 time for each question. but that would just make the loop do it's 10 loops, 10 times.

$(document).ready(function(){
  let collectionArray = [];
  let game = new Game(collectionArray);
  $('#game').show();
  console.log(game);
  countDownTimer(game);
  game.copyCountDown();
  returnScore(game);
  $(document).keyup(function (event) {
    collectionArray.push(event.keyCode);
    console.log(collectionArray);
  });
});

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}
