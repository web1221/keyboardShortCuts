import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import './src-noconflict/ace.js';
import './src-noconflict/theme-monokai.js';
import './src-noconflict/mode-javascript.js';
// import './src-noconflict/worker-javascript.js';
import {
  Game
} from './game.js';

var editor = ace.edit("editor");
editor.setTheme("ace/theme/monokai");
editor.session.setMode("ace/mode/javascript");

function switchQuestions(game) {
  let goalPicker = (Math.floor(Math.random() * Math.floor(10))) + 1;
// (Math.floor(Math.random() * Math.floor(10))) + 1;
  if (goalPicker === 1) {
    let goal = "Copy";
    game.copyCountDown();
    $("#goalPlace").text(`Goal: ${goal}`);
  } else if (goalPicker === 2) {
    let goal = "Paste";
    game.pasteCountDown();
    $("#goalPlace").text(`Goal: ${goal}`);
  } else if (goalPicker === 3) {
    let goal = "Select all"
    game.selectAllCountDown();
    $("#goalPlace").text(`Goal: ${goal}`);
  } else if (goalPicker === 4) {
    let goal = "Toggle Comments";
    game.toggleCommentsCountDown();
    $("#goalPlace").text(`Goal: ${goal}`);
  } else if (goalPicker === 5) {
    let goal = "Cut"
    game.cutCountDown();
    $("#goalPlace").text(`Goal: ${goal}`);
  } else if (goalPicker === 6) {
    let goal = "Delete Line";
    game.deleteLineCountDown();
    $("#goalPlace").text(`Goal: ${goal}`);
  } else if (goalPicker === 7) {
    let goal = "Go to beginning of line"
    game.beginOfLineCountDown();
    $("#goalPlace").text(`Goal: ${goal}`);
  } else if (goalPicker === 8) {
    let goal = "Cut to the end of line"
    game.cutEndOfLineCountDown();
    $("#goalPlace").text(`Goal: ${goal}`);
  } else if (goalPicker === 9) {
    let goal = "Select next match";
    $("#goalPlace").text(`Goal: ${goal}`);
    game.selectNextMatchCountDown();
  } else if (goalPicker === 10) {
    let goal = "Save";
    $("#goalPlace").text(`Goal: ${goal}`);
    game.saveCountDown();
  }

}

function showKeys(code) {
  let html = this.collectionArray.map(function() {
      $('.keys').html(html.join(`<div class="key">${code}</div>`));
    });
  }


function countDownTimer(game) {
  setInterval(() => {
    $('h1#countDown').text(`Timer: ${game.starterScore}`);
    $('.score').html(`Score: ${game.score}`);
  }, 1);
}

//setTimeout(switchQuestion, 10) --hoping this will make the function run 10 time for each question. but that would just make the loop do it's 10 loops, 10 times.

$(document).ready(function() {
  let game = new Game();
  let collectionArray = game.collectionArray;
  $('#game').show();
  countDownTimer(game);
  switchQuestions(game);
  for(i = 1; i === 10; i++){

  }
  // Collect on key press array.
  $(document).keydown(function(event) {
    event.preventDefault();
    collectionArray.push(event.keyCode);
    console.log(collectionArray);
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
$("#moveCurrent").click(function(event) {
  event.preventDefault();
  $(".noShow").hide();
  $("#pointer").fadeIn();
  $("#shortcut1").fadeIn();

})

$("#selectNext").click(function(event) {
  event.preventDefault();
  $(".noShow").hide();
  $("#pointer").fadeIn();
  $("#shortcut2").fadeIn();
})

$("#selectAll").click(function(event) {
  event.preventDefault();
  $(".noShow").hide();
  $("#pointer").fadeIn();
  $("#shortcut3").fadeIn();
})

$("#shakeSelect").click(function(event) {
  event.preventDefault();
  $(".noShow").hide();
  $("#pointer").fadeIn();
  $("#shortcut4").fadeIn();
})
// end atom buttons to pop up banner






// chrome buttons to pop up banner
$("#clearConsole").click(function(event) {
  event.preventDefault();
  $(".noShow").hide();
  $("#pointer").fadeIn();
  $("#shortcut5").fadeIn();

})

$("#openInspector").click(function(event) {
  event.preventDefault();
  $(".noShow").hide();
  $("#pointer").fadeIn();
  $("#shortcut6").fadeIn();

})

$("#newTab").click(function(event) {
  event.preventDefault();
  $(".noShow").hide();
  $("#pointer").fadeIn();
  $("#shortcut7").fadeIn();
})

$("#newWindow").click(function(event) {
  event.preventDefault();
  $(".noShow").hide();
  $("#pointer").fadeIn();
  $("#shortcut8").fadeIn();
})

// end chrome buttons to pop up banner





// general buttons to pop up banner
$("#copy").click(function(event) {
  event.preventDefault();
  $(".noShow").hide();
  $("#pointer").fadeIn();
  $("#shortcut9").fadeIn();

})

$("#paste").click(function(event) {
  event.preventDefault();
  $(".noShow").hide();
  $("#pointer").fadeIn();
  $("#shortcut10").fadeIn();

})

$("#pasteWithout").click(function(event) {
  event.preventDefault();
  $(".noShow").hide();
  $("#pointer").fadeIn();
  $("#shortcut11").fadeIn();
})

$("#select").click(function(event) {
  event.preventDefault();
  $(".noShow").hide();
  $("#pointer").fadeIn();
  $("#shortcut12").fadeIn();
})

// end general buttons to pop up banner
