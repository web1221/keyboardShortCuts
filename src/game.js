export class Game{
  construtor(score){
    this.score = 0;
    this.starterScore = 200;
    this.metaKeys = {
      ctrl: 17,
      option: 18,
      command: 93 || 91,
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
  doCopy(){
    set interval
    this.starterScore --
    doneCopy()
  }
  doneCopy(){
    if(this.metaKeys.command && this.metaKeys.c){
      clear
    }
  }
}
