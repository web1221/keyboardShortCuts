
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import './src-noconflict/ace.js';
import './src-noconflict/theme-monokai.js';
import './src-noconflict/mode-javascript.js';
import './src-noconflict/worker-javascript.js';

var editor = ace.edit("editor");
editor.setTheme("ace/theme/monokai");
editor.session.setMode("ace/mode/javascript");

let answerArray = [93, 67];
let collectionArray = [];

document.addEventListener("keydown", function(event) {
  // console.log(event.which);
  // console.log(event.repeat);
  if (event.repeat === false) {
    collectionArray.push(event.which);
    console.log(event.which);
  }
  let collectionArrayString = collectionArray.toString();
  let answerArrayString = answerArray.toString();
  // console.log(collectionArray);
  // console.log(answerArrayString);
  if (collectionArrayString === answerArrayString) {
    console.log("success!");
    collectionArray = [];
  }
  else {
    if (collectionArray.length === answerArray.length) {
      console.log("nope!");
      collectionArray = [];
      // console.log(collectionArray);
    }

  }
});
