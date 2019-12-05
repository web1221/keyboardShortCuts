export class Game {
  constructor(){
    this.score = 0;
    this.starterScore = 200;
    this.collectionArray = [];
  }
  //Copy command ---------
  copyCountDown(){
    let copyCountDownInterval = setInterval(()=> {
      this.starterScore--;
      this.correctCopyAnswer(copyCountDownInterval);
    }, 1000);
  }
  //
  correctCopyAnswer(interval){
    if((this.collectionArray.includes(91) || this.collectionArray.includes(93)) && this.collectionArray.includes(67)){
      this.collectionArray.length = 0;
      clearInterval(interval);
      this.addPoints();
      this.resetStarterScore();
      this.pasteCountDown();
    }
  }
  // Paste Command ----------
  pasteCountDown(){
    console.log(this.collectionArray);
    let pasteCountDownInterval = setInterval(()=> {
      this.starterScore--;
      this.correctPasteAnswer(pasteCountDownInterval);
    }, 1000);
  }

  correctPasteAnswer(interval){
    if((this.collectionArray.includes(91) || this.collectionArray.includes(93)) && this.collectionArray.includes(86)){
      this.collectionArray.length = 0;
      clearInterval(interval);
      this.addPoints();
      this.resetStarterScore();
      this.selectNextMatchCountDown();
    }
  }

  selectNextMatchCountDown(){
    console.log(this.collectionArray);
    let selectNextMatchCountDown = setInterval(()=> {
      this.starterScore--;
      this.correctSelectNextMatchAnswer(selectNextMatchCountDown);
    }, 1000);
  }

  correctSelectNextMatchAnswer(interval){
    if(this.collectionArray.includes(68) && (this.collectionArray.includes(93) || this.collectionArray.includes(91))){
      this.collectionArray.length = 0;
      clearInterval(interval);
      this.addPoints();
      this.resetStarterScore();
      this.cutCountDown();
    }
  }
  cutCountDown(){
    console.log(this.collectionArray);
    let cutCountDownInterval = setInterval(()=> {
      this.starterScore--;
      this.correctCutAnswer(cutCountDownInterval);
    }, 1000);
  }
  correctCutAnswer(interval){
    if(this.collectionArray.includes(88) && (this.collectionArray.includes(93) || this.collectionArray.includes(91))){
      this.collectionArray.length = 0;
      clearInterval(interval);
      this.addPoints();
      this.resetStarterScore();
      this.saveCountDown();
    }
  }
  saveCountDown(){
    console.log(this.collectionArray);
    let saveCountDownInterval = setInterval(()=> {
      this.starterScore--;
      this.correctCutAnswer(saveCountDownInterval);
    }, 1000);
  }

  correctSaveAnswer(interval){
    if(this.collectionArray.includes(83) && (this.collectionArray.includes(93) || this.collectionArray.includes(91))){
      this.collectionArray.length = 0;
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
