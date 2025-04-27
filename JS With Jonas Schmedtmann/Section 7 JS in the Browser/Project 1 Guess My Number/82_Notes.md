# Refactoring Our Code - The DRY Principle

**DRY - Don't Repeat YourSelf**

In order to remove the redundant codes we do the below approach
```JS
else if(guess > secretNumber){
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
```
The above given code is actually repeating(i mean some block of the code is repeating so we have to optimize the above code)

**WHAT IS THE DISADVANTAGE OF HAVING A BOILERPLATE CODE**
1. If so we are performing any modification, then we have to do it at many places (for small codebases this is fine, but when we look at huge codebase this becomes a nightmare)

So the fist step of refactoring includes **the identification of duplicate code**

As we can see in the above code block, the below two lines are only different other than that everything is same
```JS
// The below one And.....
document.querySelector('.message').textContent = '📈Too high!';
// The below one
document.querySelector('.message').textContent = '📉Too low!';
```
So in order to refactor the above code
```JS
    }else if(guess !== secretNumber){
        if(score > 1){
            document.querySelector('.message').textContent = guess > secretNumber ? '📈Too high!' : '📉Too low!';
            score = score - 1;
            document.querySelector('.score').textContent = score;
        }else{
            document.querySelector('.message').textContent = '💥 You lost the game!';
            document.querySelector('.score').textContent = 0;
        }
    }
```
So we just optimized the code now using a **Ternary Operator**, so that we can remove all the below blocks **in order to remove the redundant code**

One More thing which we can Refactor is that
```JS
// Instead of writing the whole code below everytime, we can write a function for the below line and then when we want to change the element which is of the class name (message), we can use the function which is given in the below example
document.querySelector('.message').textContent = '🚫 No number!';
``` 
The above code can be refactored into below code    
```JS
const displayMessage = function(message){
    document.querySelector('.message').textContent = message;
}
if(!guess){
    displayMessage('🚫 No number!');
    // document.querySelector('.message').textContent = '🚫 No number!';
}
```
In a similar way we can do for all the functions if so we need it   
This improves the readability of the code, when you come back to this code in a later point in time and you want to understand this

Similarly we can refactor the code for the below case also 
```JS
    }else if(guess !== secretNumber){
        if(score > 1){
            document.querySelector('.message').textContent = guess > secretNumber ? '📈Too high!' : '📉Too low!';
            score = score - 1;
            document.querySelector('.score').textContent = score;
        }else{
            document.querySelector('.message').textContent = '💥 You lost the game!';
            document.querySelector('.score').textContent = 0;
        }
    }
```
The above thing can be refactored to the below code
```JS
    }else if(guess !== secretNumber){
        if(score > 1){
            // document.querySelector('.message').textContent = guess > secretNumber ? '📈Too high!' : '📉Too low!';
            displayMessage(guess > secretNumber ? '📈Too high!' : '📉Too low!'); // The code can be refactored like below
            score = score - 1;
            document.querySelector('.score').textContent = score;
        }else{
            document.querySelector('.message').textContent = '💥 You lost the game!';
            document.querySelector('.score').textContent = 0;
        }
    }
```
Similarly we can also implement the other repetitive calls in the code, in the similar way which we implemented above

Things to keep in mind while we refactor
1. **No much redundancy of code**   
2. Also **Ternary Operator** can be used as a choice in order for refactoring     
3. **Repetitive document object** calls can be **clubbed under a function**     





