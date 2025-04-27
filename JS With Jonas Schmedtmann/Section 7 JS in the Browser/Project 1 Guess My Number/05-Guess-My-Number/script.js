'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = '🎉Correct Number!';
// console.log(document.querySelector('.message').textContent);

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

// document.querySelector('.check').addEventListener('click', function(){
//     const guess = Number(document.querySelector('.guess').value);
//     console.log(guess, typeof guess);

//     // Suppose if there is not input passed to the field, them we get a 0 right which we convert
//     // to a boolean value below and then we check it with an if condition
//     if(!guess){
//         document.querySelector('.message').textContent = '🚫 No number!';
//     }
// });

// Implementing the Game logic here, below
let secretNumber = Math.trunc(Math.random() * 20) + 1;
// Cause a constant variable is immutable, whereas the let variable below can be changed
let score = 20; // This variable is also called as the state variable cause it holds the state of the application(all the data that is relevant to the application)
let highScore = 0;

// document.querySelector('.number').textContent = secretNumber;

const displayMessage = function(message){
    document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess,typeof guess);

    // No Number at all
    if(!guess){
        displayMessage('🚫 No number!');
        // document.querySelector('.message').textContent = '🚫 No number!';
    }else if(guess === secretNumber){
        // If we guess the secret number correctly
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('.message').textContent = '🎉Correct Number!';
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        document.querySelector('.highscore').textContent = highScore;
        if(score > highScore){
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }
    }else if(guess !== secretNumber){
        if(score > 1){
            // document.querySelector('.message').textContent = guess > secretNumber ? '📈Too high!' : '📉Too low!';
            displayMessage(guess > secretNumber ? '📈Too high!' : '📉Too low!');
            score = score - 1;
            document.querySelector('.score').textContent = score;
        }else{
            // document.querySelector('.message').textContent = '💥 You lost the game!';
            displayMessage('💥 You lost the game!');
            document.querySelector('.score').textContent = 0;
        }
    }
    // else if(guess > secretNumber){
    //     // If guess a number that is higher than what is expected
    //     if(score > 1){
    //         document.querySelector('.message').textContent = '📈Too high!';
    //         score = score - 1;
    //         document.querySelector('.score').textContent = score;
    //     }else{
    //         document.querySelector('.message').textContent = '💥 You lost the game!';
    //         document.querySelector('.score').textContent = 0;
    //     }
    // }else if(guess < secretNumber){
    //     // If guess a number that is lower than what is expected
    //     if(score > 1){
    //     document.querySelector('.message').textContent = '📉Too low!';
    //     score = score - 1;
    //     document.querySelector('.score').textContent = score;
    //     }else{
    //         document.querySelector('.message').textContent = '💥 You lost the game!';
    //         document.querySelector('.score').textContent = 0;
    //     }
    // }
});


document.querySelector('.again').addEventListener('click',function(){
    // If you don't reassign the value of scores below, then the scores value won't be resetted, same as the case for the secretnumber
    score = 20;
    // Before adding the below line we actually change the variable from const -> let as we are initializing the variable again below
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    // Now Resetting the values
    // document.querySelector('.message').textContent = "Start guessing...";
    displayMessage("Start guessing...");
    document.querySelector('.score').textContent = score;
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
});


