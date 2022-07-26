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
    } else if(time <= 18){
        message = "Good Afternoon!";
    } else if(time <= 24){
        message = "Good Night!";
    } else{
        message = "Good Day!";
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

function questionTwo () {
    let response = prompt ("Do I like cats?").toLowerCase();
    if (response === 'yes'|| response === 'y' ){
        alert('Correct! I have two kittens.');
        correctCount++;
        return;
    } alert('Incorrect, I love cats!');
}
    
questionTwo ();

function questionThree () {
    let response = prompt ("Is purple my favorite color?").toLowerCase();
    if (response === 'yes'|| response === 'y' ){
        alert('Correct! Specifically lavender :)');
        correctCount++;
        return;
    } alert('Incorrect!');
}
    
questionThree ();

function questionFour () {
    let response = prompt ("Am I older than 30?").toLowerCase();
    if (response === 'no'|| response === 'n' ){
        alert('Correct! I am 28 years old.');
        correctCount++;
        return;
    } alert('Incorrect, I am almost there though.');
}
    
questionFour ();

function questionFive () {
    let response = prompt ("Do I have experience in the tech field?").toLowerCase();
    if (response === 'no'|| response === 'n' ){
        alert('Correct! I am coming from the healthcare field.');
        correctCount++;
        return;
    } alert('Incorrect! I am coming from the healthcare field.');
}
    
questionFive ();

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