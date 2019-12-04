export class Game {
  constructor(collectionArray){
    this.score = 0;
    this.starterScore = 200;
    this.collectionArray = collectionArray;
    this.keys = {
      ctrl: 17,
      option: 18,
      command: 93,
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
  }
  countDown(){
    let copyCountDownInterval = setInterval(()=> {
      this.starterScore--;
      this.correctCopyAnswer(copyCountDownInterval);
      console.log(this.score);
    }, 1000);
  }
  //
  correctCopyAnswer(interval){
    if((this.collectionArray.includes(91) || this.collectionArray.includes(93)) && this.collectionArray.includes(67)){
      clearInterval(interval);
      this.addPoints();
      this.resetStarterScore();
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
    this.score += this.starterScore;
  }

  resetStarterScore(){
    //reset the starter score
    return this.starterScore = 200;
  }



}
