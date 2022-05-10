'use strict';

let userName = prompt('What is your name?');
console.log('hey ' + userName + ' hey!');
alert(userName + ', welcome to my site. I\'ve got a few questions about me to start your experience.');

let answerOne = prompt('Do I have a dog?').toLowerCase();
if(answerOne === 'yes' || answerOne === 'y'){
  alert(userName + ', you are correct!');
} else if (answerOne === 'no' || answerOne === 'n'){
  alert('That\'s not correct');
}

let answerTwo = prompt('Was I born in in New York?').toLowerCase();
if(answerTwo === 'yes' || answerTwo === 'y'){
  alert('That\'s not right ' + userName);
} else if (answerTwo === 'no' || answerTwo === 'n'){
  alert(userName + ', you are correct!');
}

let answerThree = prompt('Did I serve in the Air Force?').toLowerCase();
if(answerThree === 'yes' || answerThree === 'y'){
  alert(userName + ', you are correct!');
} else if (answerThree === 'no' || answerThree === 'n'){
  alert('That\'s not correct');
}

let answerFour = prompt('Do I have a lot of experience with coding?').toLowerCase();
if(answerFour === 'yes' || answerFour === 'y'){
  alert('That\'s not correct!');
} else if (answerFour === 'no' || answerFour === 'n'){
  alert(userName + ', you are correct!');
}

let answerFive = prompt('Are the Mets my favorite team in the MLB?').toLowerCase();
if(answerFive === 'yes' || answerFive === 'y') {
  alert(userName + ', you are correct!');
} else if (answerFive === 'no' || answerFive === 'n') {
  alert('That\'s not correct');
}

alert('Thank you ' + userName + ', I hope you enjoy the rest of your time on my site.');