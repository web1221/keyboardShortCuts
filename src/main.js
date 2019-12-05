import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import './src-noconflict/ace.js';
import './src-noconflict/theme-monokai.js';
import './src-noconflict/mode-javascript.js';
import { Game } from './game.js';

//For text editor --------------
var editor = ace.edit("editor");
editor.setTheme("ace/theme/monokai");
editor.session.setMode("ace/mode/javascript");

export function switchQuestions(game) {
  let goalPicker = (Math.floor(Math.random() * Math.floor(10))) + 1;
  if (goalPicker === 1) {
    game.copyCountDown();
    $("#goalPlace").text(`Goal: Copy`);
  } else if (goalPicker === 2) {
    game.pasteCountDown();
    $("#goalPlace").text(`Goal: Paste`);
  } else if (goalPicker === 3) {
    game.selectAllCountDown();
    $("#goalPlace").text(`Goal: Select all`);
  } else if (goalPicker === 4) {
    game.toggleCommentsCountDown();
    $("#goalPlace").text(`Goal: Toggle Comments`);
  } else if (goalPicker === 5) {
    game.cutCountDown();
    $("#goalPlace").text(`Goal: Cut`);
  } else if (goalPicker === 6) {
    game.deleteLineCountDown();
    $("#goalPlace").text(`Goal: Delete Line`);
  } else if (goalPicker === 7) {
    game.beginOfLineCountDown();
    $("#goalPlace").text(`Goal: Go to beginning of line`);
  } else if (goalPicker === 8) {
    game.cutEndOfLineCountDown();
    $("#goalPlace").text(`Goal: Cut to the end of line`);
  } else if (goalPicker === 9) {
    $("#goalPlace").text(`Goal: Select next match`);
    game.selectNextMatchCountDown();
  } else if (goalPicker === 10) {
    $("#goalPlace").text(`Goal: Save`);
    game.saveCountDown();
  }

}

function countDownTimer(game) {
  setInterval(() => {
    $('h1#countDown').text(`Timer: ${game.starterScore}`);
    $('.score').html(`Score: ${game.score}`);
  }, 1);
}

$(document).ready(function() {
  let game = new Game();
  let collectionArray = game.collectionArray;
  $('#game').show();
  countDownTimer(game);
  switchQuestions(game);
  // Collect on key press array.
  $(document).keydown(function(event) {
    event.preventDefault();
    collectionArray.push(event.keyCode);
  });
});

// For nav bars -------
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

// atom buttons that link to pop up banner
function noShowPointer(){
  $(".noShow").hide();
  $("#pointer").fadeIn();
}

// atom buttons that link to pop up banner
$("#moveCurrent").click(function(){
  noShowPointer();
  $("#shortcut1").fadeIn();
});

$("#selectNext").click(function(){
  noShowPointer();
  $("#shortcut2").fadeIn();
});

$("#selectAll").click(function(){
  noShowPointer();
  $("#shortcut3").fadeIn();
});

$("#shakeSelect").click(function(){
  noShowPointer();
  $("#shortcut4").fadeIn();
});
$("#multiple").click(function(){
  noShowPointer();
  $("#shortcut5_").fadeIn();
});
$("#duplicate").click(function(){
  noShowPointer();
  $("#shortcut6_").fadeIn();
});
$("#markdown").click(function(){
  noShowPointer();
  $("#shortcut7_").fadeIn();
});
$("#toggle").click(function(){
  noShowPointer();
  $("#shortcut8_").fadeIn();
});
$("#deleteLine").click(function(){
  noShowPointer();
  $("#shortcut9_").fadeIn();
});
$("#cutTo").click(function(){
  noShowPointer();
  $("#shortcut10_").fadeIn();
});
$("#moveTo").click(function(){
  noShowPointer();
  $("#shortcut11_").fadeIn();
});
$("#moveToTop").click(function(){
  noShowPointer();
  $("#shortcut12_").fadeIn();
});
$("#moveBottom").click(function(){
  noShowPointer();
  $("#shortcut13_").fadeIn();
});
$("#firstChar").click(function(){
  noShowPointer();
  $("#shortcut14_").fadeIn();
});
$("#lastChar").click(function(){
  noShowPointer();
  $("#shortcut15_").fadeIn();
});
$("#selectLine").click(function(){
  noShowPointer();
  $("#shortcut16_").fadeIn();
});
$("#upperCon").click(function(){
  noShowPointer();
  $("#shortcut17_").fadeIn();
});
$("#lowerCon").click(function(){
  noShowPointer();
  $("#shortcut18_").fadeIn();
});
$("#cursorMov").click(function(){
  noShowPointer();
  $("#shortcut19_").fadeIn();
});
$("#findCurrent").click(function(){
  noShowPointer();
  $("#shortcut19_").fadeIn();
});
$("#findAll").click(function(){
  noShowPointer();
  $("#shortcut19_").fadeIn();
});
$("#inSizeFont").click(function(){
  noShowPointer();
  $("#shortcut19_").fadeIn();
});
$("#deSizeFont").click(function(){
  noShowPointer();
  $("#shortcut19_").fadeIn();
});
$("#selectWord").click(function(){
  noShowPointer();
  $("#shortcut19_").fadeIn();
});
$("#selectUp").click(function(){
  noShowPointer();
  $("#shortcut19_").fadeIn();
});

// end atom buttons to pop up banner

// chrome buttons to pop up banner
$("#clearConsole").click(function(){
  noShowPointer();
  $("#shortcut5").fadeIn();
});
$("#openInspector").click(function(){
  noShowPointer();
  $("#shortcut6").fadeIn();
});
$("#newTab").click(function(){
  noShowPointer();
  $("#shortcut7").fadeIn();
});

$("#newWindow").click(function(){
  noShowPointer();
  $("#shortcut8").fadeIn();
});
$("#newIncog").click(function(){
  noShowPointer();
  $("#shortcut_9").fadeIn();
});
$("#openClosed").click(function(){
  noShowPointer();
  $("#shortcut_10").fadeIn();
});
$("#bookmark").click(function(){
  noShowPointer();
  $("#shortcut_11").fadeIn();
});
$("#mini").click(function(){
  noShowPointer();
  $("#shortcut_12").fadeIn();
});
$("#refresh").click(function(){
  noShowPointer();
  $("#shortcut_13").fadeIn();
});

// end chrome buttons to pop up banner

// general buttons to pop up banner
$("#copy").click(function(){
  noShowPointer();
  $("#shortcut9").fadeIn();
});

$("#paste").click(function(){
  noShowPointer();
  $("#shortcut10").fadeIn();
});

$("#pasteWithout").click(function(){
  noShowPointer();
  $("#shortcut11").fadeIn();
});

$("#select").click(function(){
  noShowPointer();
  $("#shortcut12").fadeIn();
});

$("#cut").click(function(){
  noShowPointer();
  $("#shortcut13").fadeIn();
});

$("#openSet").click(function(){
  noShowPointer();
  $("#shortcut14").fadeIn();
});

$("#indent").click(function(){
  noShowPointer();
  $("#shortcut15").fadeIn();
});

$("#deIndent").click(function(){
  noShowPointer();
  $("#shortcut16").fadeIn();
});

$("#zoomIn").click(function(){
  noShowPointer();
  $("#shortcut17").fadeIn();
});

$("#zoomOut").click(function(){
  noShowPointer();
  $("#shortcut18").fadeIn();
});

$("#find").click(function(){
  noShowPointer();
  $("#shortcut19").fadeIn();
});

$("#save").click(function(){
  noShowPointer();
  $("#shortcut20").fadeIn();
});

$("#saveAs").click(function(){
  noShowPointer();
  $("#shortcut22").fadeIn();
});

$("#open").click(function(){
  noShowPointer();
  $("#shortcut23").fadeIn();
});

$("#bold").click(function(){
  noShowPointer();
  $("#shortcut24").fadeIn();
});

$("#italics").click(function(){
  noShowPointer();
  $("#shortcut25").fadeIn();
});
$("#underline").click(function(){
  noShowPointer();
  $("#shortcut26").fadeIn();
});
$("#create").click(function(){
  noShowPointer();
  $("#shortcut27").fadeIn();
});
$("#quit").click(function(){
  noShowPointer();
  $("#shortcut28").fadeIn();
});
$("#forceQuit").click(function(){
  noShowPointer();
  $("#shortcut29").fadeIn();
});
$("#hide").click(function(){
  noShowPointer();
  $("#shortcut30").fadeIn();
});
