# Implementing the Game Logic

We do have three scenarios over here
1. When the number is correct
2. When the number is too high
3. When the number is too low

We have to define the **secret number outside the button handler function**, if so we declare it inside then for each click we will get a new secret number which would make no sense at all

```JS
// Implementing the Game logic here, below
const number = Math.trunc(Math.random() * 20) + 1;
```
**Math** - Basically an object which JavaScript uses, under which we have different methods. One of them is **random** - If we don't pass any parameter it gives us a number between 0 and 1

What is the difference between          
1. 
```JS
Math.trunc(Math.random() * 20)
```
The above command gives you a number between the range 0 - 19 (why? because the above command at the max can genrate the number **19.99** truncates to 19), in order to overcome this issue we add 1 to the above command in order to fit between the range 1-20
AND     

2.
```JS
Math.trunc(Math.random() * 20) + 1;
```
Now the above command helps us to **fit between the range 1-20**

```JS
// Implementing the Game logic here, below
const secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess,typeof guess);

    // No Number at all
    if(!guess){
        document.querySelector('.message').textContent = '🚫 No number!';
    }else if(guess === secretNumber){
        // If we guess the secret number correctly
        document.querySelector('.message').textContent = '🎉Correct Number!';
    }else if(guess > secretNumber){
        // If guess a number that is higher than what is expected
        document.querySelector('.message').textContent = '📈Too high!';
        const value = document.querySelector('.score').textContent;
        console.log(value);
        value -= 1;
        document.querySelector('.score').value = value;
    }else if(guess < secretNumber){
        // If guess a number that is lower than what is expected
        document.querySelector('.message').textContent = '📉Too low!';
        const value = document.querySelector('.score').value;
    }
});
```
So now we have written a code above in order to print whether the guessed number is correct or not 

Now in order to decrease the score, we can implement the logic in 2 ways

1. Assign the value of the score to a variable, decrease the value post which reassign the value to the respective element again - This is not a wise idea to read the variable each and everytime from the DOM and then decrement it (our application would have no idea of knowing the score at all points)       
2. So it is always good to actually keep a variable which holds the data in our code and not just rely on the DOM to hold the data

```JS
    }else if(guess > secretNumber){
        // If guess a number that is higher than what is expected
        if(score > 1){
            document.querySelector('.message').textContent = '📈Too high!';
            score = score - 1;
            document.querySelector('.score').textContent = score;
        }else{
            document.querySelector('.message').textContent = '💥 You lost the game!';
            document.querySelector('.score').textContent = 0;
        }
    }
```
So for the if condition why do we keep the score to be greater than 1, because at the moment when we reach the below situation  
![Why set the Score Variable to a value greater than 1](./images/Why%20Set%20the%20Score%20Variable%20to%20Greater%20Than%201.png)
For the below situration, if the button is clicked now, then the score variable won't be decreased it will still be greater than 0, and also it won't even execute the if condition, because the score is getting decremented once it enters the if block only. For this case if so the score is greater than 0, initially it will have the value 1 it will be decremented to 0 only after the if block is called 

Also if we assign the (score > 0), then we have to double click when it is at score 1 in order for the message to get displayed
cause it has to get implemented to 0 first by executing the if block then for the next iteration only it will execute the else block
(In order to overcome the above problem, we initially assign the condition to have a score value that is greater than 1)


Below is the final code which holds the base logic of the game
```JS
// Implementing the Game logic here, below
const secretNumber = Math.trunc(Math.random() * 20) + 1;
// Cause a constant variable is immutable, whereas the let variable below can be changed
let score = 20; // This variable is also called as the state variable cause it holds the state of the application(all the data that is relevant to the application)
let highScore = 0;

document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess,typeof guess);

    // No Number at all
    if(!guess){
        document.querySelector('.message').textContent = '🚫 No number!';
    }else if(guess === secretNumber){
        // If we guess the secret number correctly
        document.querySelector('.message').textContent = '🎉Correct Number!';
        highScore += score;
        document.querySelector('.highscore').textContent = highScore;
    }else if(guess > secretNumber){
        // If guess a number that is higher than what is expected
        if(score > 1){
            document.querySelector('.message').textContent = '📈Too high!';
            score = score - 1;
            document.querySelector('.score').textContent = score;
        }else{
            document.querySelector('.message').textContent = '💥 You lost the game!';
            document.querySelector('.score').textContent = 0;
        }
    }else if(guess < secretNumber){
        // If guess a number that is lower than what is expected
        if(score > 1){
        document.querySelector('.message').textContent = '📉Too low!';
        score = score - 1;
        document.querySelector('.score').textContent = score;
        }else{
            document.querySelector('.message').textContent = '💥 You lost the game!';
            document.querySelector('.score').textContent = 0;
        }
    }
});
```


