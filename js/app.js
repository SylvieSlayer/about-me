'use strict'

function havePets(){
  let prompt1 = prompt('do you have any pets?');
}
havePets();

function getNumber(){
  let prompt2 = prompt ('How many?');
  
  alert ('Awesome!');
}
getNumber();

function faveBook(){
  let prompt3 = prompt ('What is your favorite book?');
  
  alert ('I will read it!');
}
faveBook();

function faveMusic(){
  let prompt4 = prompt ('Whats Your favorite album');

  alert ("I love that one");
}
faveMusic();

function faveFilm(){
  let prompt5 = prompt ('what is youre favorite film?');

  alert ('mine is texas chain saw massacre'); 

  let answer1 = prompt('Do you like to read?');
  if (answer1 === 'yes') {
  
    console.log('Excellent!');

  } else {
    console.log('why not?');
  }
}
faveFilm();

function guessNum(){
  let answer = prompt('Guess a Number');
  if (answer === 'yes') {
  console.log('Good Job!');
 
  } else { 
    console.log('Please try again');
  }
}
guessNum();
