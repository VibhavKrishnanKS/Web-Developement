# Implementing HighScores

we have to change the highscore in the below way
```JS
    }else if(guess === secretNumber){
        // If we guess the secret number correctly
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('.message').textContent = '🎉Correct Number!';
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        document.querySelector('.highscore').textContent = highScore;
        // The below code block is the one which helps us to set the highScores
        if(score > highScore){
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }
    }
```
We have to change the highscore, only if the **new value of the score is greater than the current highscore value**





