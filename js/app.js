'use strict';
let score = 0;
let userName = prompt('What is your name?');
console.log('hey ' + userName + ' hey!');
alert(userName + ', welcome to my site. I\'ve got a few questions about me to start your experience.');


function quDog() {

  let answerOne = prompt('Do I have a dog?').toLowerCase();
  if (answerOne === 'yes' || answerOne === 'y') {
    // console.log(userName + ', you are correct!');
    alert(userName + ', you are correct!');
    score++;
    console.log(answerOne + ' - ' + score + '\'s questions right');
  } else if (answerOne === 'no' || answerOne === 'n') {
    // console.log('That\'s not correct ' + userName);
    alert('That\'s not correct ' + userName);
  }
}

quDog();

function quNY() {

  let answerTwo = prompt('Was I born in in New York?').toLowerCase();
  if (answerTwo === 'yes' || answerTwo === 'y') {
    // console.log('That\'s not correct ' + userName);
    alert('That\'s not right ' + userName);
  } else if (answerTwo === 'no' || answerTwo === 'n') {
    // console.log(userName + ', you are correct!');
    alert(userName + ', you are correct!');
    score++;
    console.log(answerTwo + ' - ' + score + ' questions right');
  }
}

quNY();

function quAF() {

  let answerThree = prompt('Did I serve in the Air Force?').toLowerCase();
  if (answerThree === 'yes' || answerThree === 'y') {
    // console.log(userName + ', you are correct!')
    alert(userName + ', you are correct!');
    score++;
    console.log(answerThree + ' - ' + score + '\'s questions right');
  } else if (answerThree === 'no' || answerThree === 'n') {
    // console.log('That\'s not correct ' + userName);
    alert('That\'s not correct');
  }
}

quAF();

function quCode() {

  let answerFour = prompt('Do I have a lot of experience with coding?').toLowerCase();
  if (answerFour === 'yes' || answerFour === 'y') {
    // console.log('That\'s not correct ' + userName);
    alert('That\'s not correct!');
  } else if (answerFour === 'no' || answerFour === 'n') {
    // console.log(userName + ', you are correct!')
    alert(userName + ', you are correct!');
    score++;
    console.log(answerFour + ' - ' + score + ' questions right');
  }
}

quCode();

function quMets() {

  let answerFive = prompt('Are the Mets my favorite team in the MLB?').toLowerCase();
  if (answerFive === 'yes' || answerFive === 'y') {
    console.log(userName + ', you are correct!');
    score++;
    console.log(answerFive + ' - ' + score + ' questions right');
    alert(userName + ', you are correct!');
  } else if (answerFive === 'no' || answerFive === 'n') {
    // console.log('That\'s not correct ' + userName);
    alert('That\'s not correct');
  }
}

quMets();

let attempts = 4;
let correctAnswer = Math.floor(Math.random() * 100);
console.log(correctAnswer);
let userAnswer = null;

function quCities() {
  while (userAnswer !== correctAnswer) {
    if (attempts === 0) {
      alert('The correct answer was ' + correctAnswer + ' too bad, so sad.');
      break;
    }
    userAnswer = parseInt(prompt('How many cities have I lived in?'));
    if (userAnswer > correctAnswer) {
      alert('That\'s too high, ' + userName + ', try again');
    } else if (userAnswer < correctAnswer) {
      alert('That\'s too low, ' + userName + ', try again');
    } else if (userAnswer === correctAnswer) {
      alert('You guessed right, ' + userName + '!');
      score++;
      console.log(userAnswer + ' - ' + score + ' questions right');
      break;
    }
    attempts = (attempts - 1);
  }
}

quCities();

let countries;
countries = ['france', 'england', 'italy', 'djibouti'];
let userCountry = null;
let newAttempts = 6;

function quCountry() {
  while (userCountry !== countries[0] || userCountry !== countries[1] || userCountry !== countries[2] || userCountry !== countries[3]) {
    if (newAttempts === 0) {
      alert('The countries I\'ve visited are ' + countries[0] + ', ' + countries[1] + ', ' + countries[2] + ', and ' + countries[3]);
    }
    userCountry = prompt('What countries have I been to?').toLowerCase();
    if (userCountry === countries[0]) {
      alert('That\'s right. I have been to ' + countries[0]);
      score++;
      console.log(userCountry + ' - ' + score + ' questions right');
      break;
    } else if (userCountry === countries[1]) {
      alert('That\'s right. I have been to ' + countries[1]);
      score++;
      console.log(userCountry + ' - ' + score + ' questions right');
      break;
    } else if (userCountry === countries[2]) {
      alert('That\'s right. I have been to ' + countries[2]);
      score++;
      console.log(userCountry + ' - ' + score + ' questions right');
      break;
    } else if (userCountry === countries[3]) {
      alert('That\'s right. I have been to ' + countries[3]);
      score++;
      console.log(userCountry + ' - ' + score + ' questions right');
      break;
    } else {
      alert('I\'ve never been to ' + userCountry + '.');
    }
    newAttempts = (newAttempts - 1);
  }
}

quCountry();

alert('Thank you ' + userName + ', you scored ' + score + ' of 7 possible points. I hope you enjoy the rest of your time on my site.');
