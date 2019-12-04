
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import './src-noconflict/ace.js';
import './src-noconflict/theme-monokai.js';
import './src-noconflict/mode-javascript.js';
import './src-noconflict/worker-javascript.js';
import { Game } from './game.js'

var editor = ace.edit("editor");
editor.setTheme("ace/theme/monokai");
editor.session.setMode("ace/mode/javascript");

$(document).ready(function(){
  let collectionArray = [];
  let game = new Game(collectionArray);
  $(document).keyup(function (event) {
    collectionArray.push(event.keyCode);
    console.log(collectionArray);
  });
});
