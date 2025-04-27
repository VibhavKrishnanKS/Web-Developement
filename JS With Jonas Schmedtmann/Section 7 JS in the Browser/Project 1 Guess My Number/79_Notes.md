# Manipulating CSS Styles

We have to make the background to green colour if so the players wins the game by guessing the right number


Collected info's
1. For input tags, we use the below type in order to set the values
```JS
document.querySelector('.guess').value = 23;
```
2. In order to set the value for any element/or any class/or any ID, we use the below type from the **querySelector**
```JS
document.querySelector('.message').textContent = '🎉Correct Number!';
```
3. In order to add any **EventListener** when we click a button, we use the below type from the **querySelector**
```JS
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
So the above event will be called, when a **click action** is done

Suppose say you want to change the **background color** or anything like that using JS 
Then we do it like below
```JS
    }else if(guess === secretNumber){
        // If we guess the secret number correctly
        document.querySelector('.message').textContent = '🎉Correct Number!';
        // Also note we don't use background-color as the way we use for CSS Styles, instead we use Camel Case here
        document.querySelector('body').style.background = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        highScore += score;
        document.querySelector('.highscore').textContent = highScore;
    }
```
Also the styles that are appeared above are **inline styles**
![JS Inline Styles](./images/JS%20Inline%20Styles.png)
This will occur only when the button is clicked(**Only when the even is performed**)
We actually did two events below 
1. We changed the background color when the button is clicked
2. We changed the width of the box, when the button is clicked


