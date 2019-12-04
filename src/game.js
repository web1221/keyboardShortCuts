export class Game{
  construtor(collectionArray){
    this.score = 0;
    this.starterScore = 200;
    this.collectionArray = collectionArray;
    this.keys = {
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
    //Might want to think about making this into functions instead of storing more objects in construtor.
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
    };
  }
  copyCountDown(){
    let copyCountDownInterval = setInterval(()=> {
      this.starterScore--;
      this.correctCopyAnswer(countDownInterval);
    }, 10);
  }
  //
  correctCopyAnswer(interval){
    this.copyCode = [this.key.command, this.keys.c];
    if(this.copyCode.includes(17) && (this.copyCode.includes(93) || this.copyCode.includes(91))){
      clearInterval(interval)
      resetStarterScore();
      addPoints()
    }
  }
  correctPasteAnswer(interval){
    this.pasteCode = [this.key.command, this.keys.v];
    if(this.pasteCode.includes(86) && (this.pasteCode.includes(93) || this.pasteCode.includes(91))){
      clearInterval(interval)
      resetStarterScore();
      addPoints()
    }
  }
  correctPasteNoFormatAnswer(interval){
    this.pasteNoFormatCode = [this.key.command, this.keys.v, this.keys.shift];
    if(this.pasteNoFormatCode.includes(86) && this.pasteNoFormatCode.includes(16) && (this.pasteNoFormatCode.includes(93) || this.pasteNoFormatCode.includes(91))){
      clearInterval(interval)
      resetStarterScore();
      addPoints()
    }
  }
  correctSelectAllAnswer(interval){
    this.selectAllCode = [this.key.command, this.keys.a];
    if(this.selectAllCode.includes(65) && (this.selectAllCode.includes(93) || this.selectAllCode.includes(91))){
      clearInterval(interval)
      resetStarterScore();
      addPoints()
    }
  }
  correctCutAnswer(interval){
    this.cutCode = [this.key.command, this.keys.x];
    if(this.cutCode.includes(88) && (this.cutCode.includes(93) || this.cutCode.includes(91))){
      clearInterval(interval)
      resetStarterScore();
      addPoints()
    }
  }
  correctSaveAnswer(interval){
    this.saveCode = [this.key.command, this.keys.s];
    if(this.saveCode.includes(83) && (this.saveCode.includes(93) || this.saveCode.includes(91))){
      clearInterval(interval)
      resetStarterScore();
      addPoints()
    }
  }
  correctSaveAsAnswer(interval){
    this.saveAsCode = [this.key.command, this.keys.s, this.key.shift];
    if(this.saveAsCode.includes(83) && this.saveAsCode.includes(16) && (this.saveAsCode.includes(93) || this.saveAsCode.includes(91))){
      clearInterval(interval)
      resetStarterScore();
      addPoints()
    }
  }
  correctFindAnswer(interval){
    this.findCode = [this.key.command, this.keys.f];
    if(this.fidnCode.includes(70) && (this.findCode.includes(93) || this.findCode.includes(91))){
      clearInterval(interval)
      resetStarterScore();
      addPoints()
    }
  }
  addPoints(){
    // add to the end of a correct function
    return this.score += this.starterScore;
  }

  resetStarterScore(){
    //reest the starter score
    this.startScore = 200;
  }

}
