'use strict';

let answer1 = prompt('Do I live in Washington?')
console.log(answer1);

answer1 = answer1.toLowerCase();
console.log(answer1);

if (answer1 === 'yes' || answer1 === 'y') {
    alert('Correct! I live in Renton, WA.');
} else if (answer1 === 'no' || answer1 === 'n') {
    alert('Incorrect, I live in Renton, WA!')
} else {
    alert('I currently reside in Renton, WA.');
}

let answer2 = prompt('Do I like cats?');
console.log(answer2);

answer2 = answer2.toLowerCase();
console.log(answer2);

if (answer2 === 'yes' || answer2 === 'y') {
    alert('Yes! I have two kittens!');
} else if (answer2 === 'no' || answer2 === 'n') {
    alert('False. I love cats!')
} else {
    alert('I love cats!')
}

let answer3 = prompt('Is purple my favorite color?');
console.log(answer3);

answer3 = answer3.toLowerCase();
console.log(answer3);

if (answer3 === 'yes' || answer3 === 'y') {
    alert('Yes, specifically lavender ;)');
} else if (answer3 === 'no' || answer3 === 'n') {
    alert('Nope! Purple is my favorite color.')
} else {
    alert('I have many favorite colors, but my favorite is purple.')
}

let answer4 = prompt('Am I older than 30?');
console.log(answer4);

answer4 = answer4.toLowerCase();
console.log(answer4);

if (answer4 === 'yes' || answer4 === 'y') {
    alert('No, but I am pretty dang close!');
} else if (answer4 === 'no' || answer4 === 'n') {
    alert('You are right, I am 28!')
} else {
    alert('I am 28, reaching 30.')
}

let answer5 = prompt('Do I have any experience in the tech field?');
console.log(answer5);

answer5 = answer5.toLowerCase();
console.log(answer5);

if (answer5 === 'yes' || answer5 === 'y') {
    alert('No, I am just beginning my journey at Code Fellows :)');
} else if (answer5 === 'no' || answer5 === 'n') {
    alert('Correct. I am switching over from the healthcare field!')
} else {
    alert('I am mostly just beginning my journey at Code Fellows and coming from the healthcare field!')
}


let firstName = prompt("What is your name?");

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
  
document.write('<p style =\'color: white; background-color: palegoldenrod; font-size: 3rem; text-align: center;\'>Hello ' + firstName + ', ' + message + '</p>');
console.log('Hello ' + firstName + ', ' + message);




// switch (answer2) {
//     case 'idk':
//         alert('Think about it more.');
//         break;
//     case 'dogs are better':
//         alert('Dogs are cute too.');
//         break; 
//     default:
//         alert('You entered something unexpected.');
// }