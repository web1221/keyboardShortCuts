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
    };
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

  addPoints(){
    this.score += this.starterScore;
  }

  resetStarterScore(){
    //reset the starter score
    return this.starterScore = 200;
  }



}
