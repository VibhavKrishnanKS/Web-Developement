# CHALLENGE 1

Before implementing the change, we have to change one thing -> We don't need to show the correct answer initially in the box
![No Previous Appearance of the Answers](./images/No%20Previous%20Appearance%20of%20Answer.png)
1. We have to show the answer only after the user chooses the correct number       
2. The place where the number 10 appears right it should be (?) until the user finds the correct number

So in order to implement the above idealogy to our code
```JS
    }else if(guess === secretNumber){
        // If we guess the secret number correctly
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('.message').textContent = '🎉Correct Number!';
        document.querySelector('body').style.background = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        highScore += score;
        document.querySelector('.highscore').textContent = highScore;
    }
```
We have to add the secret number, only after the above if condition is passed,      
PLEASE REFER TO THE 78TH VIDEO NOTES IN ORDER FOR THE PREVIOUS STATE OF THE CODE, where we are able to view the text inside the box

```JS
document.querySelector('.again').addEventListener('click',function(){
    document.querySelector('.message').textContent = "Start guessing...";
    document.querySelector('.score').textContent = 20;
    document.querySelector('.highscore').textContent = 0;
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').textContent = secretNumber;
});
```
For the above code block, the **function()** which we declare here is an **anonymous function because it doesn't have a name**      
So this is an **Anonymous Handler Function**

Below given is the completed code for the initialization of values in order to play the game from the start  and the case on why we initialize the values
```JS
document.querySelector('.again').addEventListener('click',function(){
    // If you don't reassign the value of scores below, then the scores value won't be resetted, same as the case for the secretnumber
    score = 20;
    // Before adding the below line we actually change the variable from const -> let as we are initializing the variable again below
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    // Now Resetting the values
    document.querySelector('.message').textContent = "Start guessing...";
    document.querySelector('.score').textContent = score;
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
});
```

