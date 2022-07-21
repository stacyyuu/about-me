'use strict';

function getFirstName (){
    let firstName = prompt("What is your name?");
    return firstName;
}

function timeOfDay(){
    let time = prompt("What hour is it (0-24)?");
    let message = "";
    
    if(time <= 11){
        message = "Good Morning!";
        //console.log("Good Morning!");
    } else if(time <= 18){
        message = "Good Afternoon!";
        //console.log("Good Afternoon!");
    } else if(time <= 24){
        message = "Good Night!";
        //console.log("Good Night!");
    } else{
        message = "Good Day!";
        //console.log("Have a great day!");
    }
    return message;
}

function generateGreeting(){
    let firstName = getFirstName();
    let message = timeOfDay();
    document.write('<p style =\'color: white; background-color: palegoldenrod; font-size: 3rem; text-align: center;\'>Hello ' + firstName + ', ' + message + '</p>');
    alert(`Hello ${firstName}, ${message} Welcome to my guessing game. Please respond with valid answers of yes, no, or # of years.`);
}

generateGreeting();

let correctCount = 0;

function questionOne () {
    let response = prompt ("Do I live in Washington?").toLowerCase()
    if (response === 'yes'|| response.toLowerCase() === 'y' ){
        alert('Correct! I live in Renton, WA!');
        correctCount++;
        return;
    } alert('Incorrect, I live in Renton, WA.');
}

questionOne ();


// let answer1 = prompt('Do I live in Washington?')
// console.log(answer1);

// answer1 = answer1.toLowerCase();
// console.log(answer1);

// if (answer1 === 'yes' || answer1 === 'y') {
//     alert('Correct! I live in Renton, WA.');
//     correctCount++;
// } else if (answer1 === 'no' || answer1 === 'n') {
//     alert('Incorrect, I live in Renton, WA!')
// } else {
//     alert('I currently reside in Renton, WA.');
// }

function questionTwo () {
    let response = prompt ("Do I like cats?").toLowerCase();
    if (response === 'yes'|| response === 'y' ){
        alert('Correct! I have two kittens.');
        correctCount++;
        return;
    } alert('Incorrect, I love cats!');
}
    
questionTwo ();


// // let answer2 = prompt('Do I like cats?');
// // console.log(answer2);

// // answer2 = answer2.toLowerCase();
// // console.log(answer2);

// // if (answer2 === 'yes' || answer2 === 'y') {
// //     alert('Yes! I have two kittens!');
// //     correctCount++;
// // } else if (answer2 === 'no' || answer2 === 'n') {
// //     alert('False. I love cats!')
// // } else {
// //     alert('I love cats!')
// // }

function questionThree () {
    let response = prompt ("Is purple my favorite color?").toLowerCase();
    if (response === 'yes'|| response === 'y' ){
        alert('Correct! Specifically lavender :)');
        correctCount++;
        return;
    } alert('Incorrect!');
}
    
questionThree ();

// // let answer3 = prompt('Is purple my favorite color?');
// // console.log(answer3);

// // answer3 = answer3.toLowerCase();
// // console.log(answer3);

// // if (answer3 === 'yes' || answer3 === 'y') {
// //     alert('Yes, specifically lavender ;)');
// //     correctCount++;
// // } else if (answer3 === 'no' || answer3 === 'n') {
// //     alert('Nope! Purple is my favorite color.')
// // } else {
// //     alert('I have many favorite colors, but my favorite is purple.')
// // }

function questionFour () {
    let response = prompt ("Am I older than 30?").toLowerCase();
    if (response === 'no'|| response === 'n' ){
        alert('Correct! I am 28 years old.');
        correctCount++;
        return;
    } alert('Incorrect, I am almost there though.');
}
    
questionFour ();


// // let answer4 = prompt('Am I older than 30?');
// // console.log(answer4);

// // answer4 = answer4.toLowerCase();
// // console.log(answer4);

// // if (answer4 === 'yes' || answer4 === 'y') {
// //     alert('No, but I am pretty dang close!');
// // } else if (answer4 === 'no' || answer4 === 'n') {
// //     alert('You are right, I am 28!')
// //     correctCount++;
// // } else {
// //     alert('I am 28, reaching 30.')
// // }


function questionFive () {
    let response = prompt ("Do I have experience in the tech field?").toLowerCase();
    if (response === 'no'|| response === 'n' ){
        alert('Correct! I am coming from the healthcare field.');
        correctCount++;
        return;
    } alert('Incorrect! I am coming from the healthcare field.');
}
    
questionFive ();


// // let answer5 = prompt('Do I have any experience in the tech field?');
// // console.log(answer5);

// // answer5 = answer5.toLowerCase();
// // console.log(answer5);

// // if (answer5 === 'yes' || answer5 === 'y') {
// //     alert('No, I am just beginning my journey at Code Fellows :)');
// // } else if (answer5 === 'no' || answer5 === 'n') {
// //     alert('Correct. I am switching over from the healthcare field!')
// //     correctCount++;
// // } else {
// //     alert('I am mostly just beginning my journey at Code Fellows and coming from the healthcare field!')
// // }

    
function questionSix () {
    for (let i = 3; i >= 0; i--){
        let response = prompt (`How many years have I been practicing as a Dental Hygienist? You have ${i+1} guesses.`);
            if (response == 3){
                alert('Correct!~');
                correctCount++;
                return;
            } else if (response < 3){
                alert('Too low!');
            } else if (response > 3){
                alert('Too high!');
            } 
    }
}

questionSix ();

// // let answer6 = prompt('How many years have I been practicing as a Dental Hygienist? You have 4 guesses.'); 
// // let chances = 3;

// // while(answer6 != 3 && chances > 0){
// //     if(answer6 < 3 ){
// //         alert('Too low!');
// //     } else if(answer6 > 3) {
// //         alert('Too high!');
// //     }
// //     chances--;
// //     answer6 = prompt(`How many years have I been practicing as a Dental Hygienist? You have ${chances + 1} chances left to guess.`);
// // } 

// // if(answer6 != 3){
// //     alert('Incorrect. I have been practicing for 3 years.');
// // }

// // if(answer6 == 3){
// //     alert('Correct!');
// //     correctCount++;
// // }

let toVisit = ['japan', 'korea', 'thailand', 'philipines'];
function questionSeven () {
    for (let i = 5; i >= 0; i--){
        let response = prompt (`What is a country I want to visit? You have ${i+1} guesses.`).toLowerCase();
        if (toVisit.indexOf(response) != -1){  
            alert('Yes!');
            correctCount++;
            return;
        } else {
            alert('That sounds cool, but not on my list currently.');
        } 
    }
}

questionSeven ();

alert('You got ' + correctCount + ' out of 7 answers right.');


// // let answer7 = prompt('What is a country I want to visit? You have 6 guesses.');
// // answer7 = answer7.toLowerCase();
// // let chances2 = 5;
// // let toVisit = ['japan', 'korea', 'thailand', 'philipines'];
// // while(toVisit.indexOf(answer7) == -1 && chances2 > 0){
// //     alert('That sounds cool, but not on my list currently.');
// //     chances2--;
// //     answer7 = prompt(`What is a country I want to visit? You have ${chances2 + 1} chances left to guess.`);
// // } 

// // if(toVisit.indexOf(answer7) == -1){
// //     alert('Incorrect. The countries I still want to visit are Japan, Korea, Thailand, and Philipines.');
// // } 

// // if(toVisit.indexOf(answer7) != -1){
// //     alert('Yes!');
// //     correctCount++;
// // }

// // alert('You got ' + correctCount + ' out of 7 answers right.');

// // // switch (answer2) {
// // //     case 'idk':
// // //         alert('Think about it more.');
// // //         break;
// // //     case 'dogs are better':
// // //         alert('Dogs are cute too.');
// // //         break; 
// // //     default:
// // //         alert('You entered something unexpected.');
// // // }