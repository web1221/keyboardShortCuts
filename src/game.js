import {switchQuestions} from './main.js';
export class Game {
  constructor() {
    this.score = 0;
    this.starterScore = 200;
    this.collectionArray = [];
  }
  //Copy command  Question 1---------
  copyCountDown() {
    let copyCountDownInterval = setInterval(() => {
      this.starterScore--;
      this.correctCopyAnswer(copyCountDownInterval);
    }, 1000);
  }
  //
  correctCopyAnswer(interval) {
    if ((this.collectionArray.includes(91) || this.collectionArray.includes(93)) && this.collectionArray.includes(67)) {
      this.collectionArray.length = 0;
      clearInterval(interval);
      this.addPointsReset();
    } else if (this.starterScore <= 0){
      this.collectionArray.length = 0;
      clearInterval(interval);
      this.addPointsReset();
    }
  }
  // Paste Command   Question 2 ----------
  pasteCountDown() {
    let pasteCountDownInterval = setInterval(() => {
      this.starterScore--;
      this.correctPasteAnswer(pasteCountDownInterval);
    }, 1000);
  }

  correctPasteAnswer(interval) {
    if ((this.collectionArray.includes(91) || this.collectionArray.includes(93)) && this.collectionArray.includes(86)) {
      this.collectionArray.length = 0;
      clearInterval(interval);
      this.addPointsReset();
    } else if (this.starterScore <= 0){
      this.collectionArray.length = 0;
      clearInterval(interval);
      this.addPointsReset();
    }
  }
  // Toggle Comments   Question 3 ---------------
  toggleCommentsCountDown() {
    let toggleCommentsCountDown = setInterval(() => {
      this.starterScore--;
      this.correctToggleCommentsAnswer(toggleCommentsCountDown);
    }, 1000);
  }

  correctToggleCommentsAnswer(interval) {
    if (this.collectionArray.includes(191) && (this.collectionArray.includes(93) || this.collectionArray.includes(91))) {
      this.collectionArray.length = 0;
      clearInterval(interval);
      this.addPointsReset();
    } else if (this.starterScore <= 0){
      this.collectionArray.length = 0;
      clearInterval(interval);
      this.addPointsReset();
    }
  }
  // Cut   Question 4 --------------
  cutCountDown() {
    let cutCountDownInterval = setInterval(() => {
      this.starterScore--;
      this.correctCutAnswer(cutCountDownInterval);
    }, 1000);
  }
  correctCutAnswer(interval) {
    if (this.collectionArray.includes(88) && (this.collectionArray.includes(93) || this.collectionArray.includes(91))) {
      this.collectionArray.length = 0;
      clearInterval(interval);
      this.addPointsReset();
    } else if (this.starterScore <= 0){
      this.collectionArray.length = 0;
      clearInterval(interval);
      this.addPointsReset();
    }
  }
  // Delete Line  Question 5---------
  deleteLineCountDown() {
    let deleteLineCountDownInterval = setInterval(() => {
      this.starterScore--;
      this.correctDeleteLineAnswer(deleteLineCountDownInterval);
    }, 1000);
  }

  correctDeleteLineAnswer(interval) {
    if (this.collectionArray.includes(17) && this.collectionArray.includes(16) && this.collectionArray.includes(75)) {
      this.collectionArray.length = 0;
      clearInterval(interval);
      this.addPointsReset();
    } else if (this.starterScore <= 0){
      this.collectionArray.length = 0;
      clearInterval(interval);
      this.addPointsReset();
    }
  }
  // Go to beginning Of line Question 6 -------
  beginOfLineCountDown() {
    let beginOfLineCountDownInterval = setInterval(() => {
      this.starterScore--;
      this.correctBeginOfLineAnswer(beginOfLineCountDownInterval);
    }, 1000);
  }

  correctBeginOfLineAnswer(interval) {
    if (this.collectionArray.includes(17) && this.collectionArray.includes(65)) {
      this.collectionArray.length = 0;
      clearInterval(interval);
      this.addPointsReset();
    } else if (this.starterScore <= 0){
      this.collectionArray.length = 0;
      clearInterval(interval);
      this.addPointsReset();
    }
  }
  // Cut to the end of the line  Question 7 -------
  cutEndOfLineCountDown() {
    let cutEndOfLineCountDownInterval = setInterval(() => {
      this.starterScore--;
      this.correctCutEndOfLineAnswer(cutEndOfLineCountDownInterval);
    }, 1000);
  }

  correctCutEndOfLineAnswer(interval) {
    if (this.collectionArray.includes(17) && this.collectionArray.includes(75)) {
      this.collectionArray.length = 0;
      clearInterval(interval);
      this.addPointsReset();
    } else if (this.starterScore <= 0){
      this.collectionArray.length = 0;
      clearInterval(interval);
      this.addPointsReset();

    }
  }
  // Selete next matching Question 8 -------
  selectNextMatchCountDown() {
    let selectNextMatchCountDown = setInterval(() => {
      this.starterScore--;
      this.correctSelectNextMatchAnswer(selectNextMatchCountDown);
    }, 1000);
  }

  correctSelectNextMatchAnswer(interval) {
    if (this.collectionArray.includes(68) && (this.collectionArray.includes(93) || this.collectionArray.includes(91))) {
      this.collectionArray.length = 0;
      clearInterval(interval);
      this.addPointsReset();
    } else if (this.starterScore <= 0){
      this.collectionArray.length = 0;
      clearInterval(interval);
      this.addPointsReset();

    }
  }
  //Save Question 9 ------
  saveCountDown(){
    let saveCountDownInterval = setInterval(()=> {
      this.starterScore--;
      this.correctSaveAnswer(saveCountDownInterval);
    }, 1000);
  }
  correctSaveAnswer(interval){
    if(this.collectionArray.includes(83) && (this.collectionArray.includes(93) || this.collectionArray.includes(91))){
      this.collectionArray.length = 0;
      clearInterval(interval);
      this.addPointsReset();
    } else if (this.starterScore <= 0){
      this.collectionArray.length = 0;
      clearInterval(interval);
      this.addPointsReset();

    }
  }
  //Select All Question 10 ----
  selectAllCountDown(){
    let selectAllCountDownInterval = setInterval(()=> {
      this.starterScore--;
      this.correctSelectAllAnswer(selectAllCountDownInterval);
    }, 1000);
  }

  correctSelectAllAnswer(interval){
    if(this.collectionArray.includes(65) && (this.collectionArray.includes(93) || this.collectionArray.includes(91))){
      this.collectionArray.length = 0;
      clearInterval(interval);
      this.addPointsReset();
    } else if (this.starterScore <= 0){
      this.collectionArray.length = 0;
      clearInterval(interval);
      this.addPointsReset();

    }
  }

  addPointsReset() {
    this.score += this.starterScore;
    this.starterScore = 200;
    switchQuestions(this);
  }

}
