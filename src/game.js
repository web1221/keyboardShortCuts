export class Game{
  construtor(score){
    //A construtor for game-play.  Could contain score, collection array.
    this.score = 0;
    this.metaKeys = {
      ctrl: 17,
      option: 18,
      commandRight: 93,
      commandLeft: 91,
      shift: 16,
      comma: 188,
      tab: 9,
      a: 65,
      c: 67,
      f: 70,
      o: 79,
      s: 83,
      q: 81,
      v: 86,
      x: 88,
    }
    this.gameControlObject = {
      copy: [91, 67],
      paste: [91, 83],
      pasteNoFormat: [93, 16, 86],
      selectAll: [93, 65],
      cut: [93, 88],
      quit: [93, 81],
      open: [93, 79],
      save: [93, 83],
      saveAs: [93, 16, 83],
      find: [93, 70]
    } ;
    this.answerArray = [];
  }
  commandKey(){
    if(91 || 93){
      return true;
    }
  }
  keydownFunction(){
    document.addEventListener("keydown", function(event){
      if (event.repeat === false) {
        this.collectionArray.push(event.which);
      }
    });
  }
  arrayToString(){
    this.collectionArray.toString();
    this.
  }
  resetArray(){

  }
}
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
  else if(collectionArray.length === answerArray.length){
    console.log("nope!");
    collectionArray = [];
    // console.log(collectionArray);
  }

});
