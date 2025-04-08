# 72. PROJECT #1: Guess My Number!

In this video we just establish a connection between our code and the user interface        

**REMEMBER - IF WE HAVE MULTIPLE (.) OPERATORS THEN THEY ARE EXECUTED FROM LEFT TO RIGHT**

How to Select an Element in Javascript  	    
```JS
// If it is a class
document.querySelector('.message')
// If it is an ID
document.querySelector('#message')
```
1. **querySelector()** -> A Method that is available on the document object          
2. We need to pass a Selector as the parameter to the method, and the selector which is passed as parameter is similar and same to the CSS Selector which we use        
3. The output of the above querySelector() -> is that it selects the respective element and diplay it       
```JS   
console.log(document.querySelector('.message'));        
```
OUTPUT
```HTML
<p class="message">Start guessing...</p>        
```
Okay so the **querySelector()** basically fetches the respective element that is associated with the class           
In order to view the content that is inside the element     
we describe them in the below way       
```JS
console.log(document.querySelector('.message').textContent);
```
OUTPUT
```TXT
Start guessing...      
```
The (.textContent) -> is used to view the Text that is inside the respective element that is selected