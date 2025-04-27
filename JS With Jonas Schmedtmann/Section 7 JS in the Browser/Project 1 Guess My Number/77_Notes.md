# 77. Handling Click Events 

**CONCEPT OF EVENT LISTENERS**
    With a certain event listener, we can wait for reactions/certain events to happen and then react to it  

**IN ORDER TO LISTEN TO EVENTS**    
    1. We need to first select the element, where the event should happen   
    2. Here for our case the **CHECK BUTTTON** is where the event happens   
    3. Okay so if we look at out HTML page, we need to choose the class which is more **specific to the CHECK BUTTON**                  
    A. Here the **btn** is more specific and it applies to all the buttons that are in the **HTML webpage**     
    B. So we need to choose the name **check** which is specific to the check button    

```JS
document.querySelector('.check').addEventListener('click', function(){
    console.log(document.querySelector('.guess').value);
});
```
Above given is a basic way on how we can handle the, Click Events in JS
1. **addEventListener()** -> This method we pass the 'click' as the first argument which defines that it is a click method  
2. **Second Parameter** -> Defines what the respective event must do when we click on the method, by defining a function    
**NOTE** - The function which is defined inside the **addEvent Listener** will be executed only when the **Click Event happens** not when the **JS page is rendered**

```JS
document.querySelector('.check').addEventListener('click', function(){
    console.log(document.querySelector('.guess').value);
    document.querySelector('.message').textContent = '🎉Correct Number!';
    document.querySelector('.number').textContent = document.querySelector('.guess').value;
});
```
1.  This is a little elaboration of the above method, where we add the below features   
    A. We print the value to the console    
    B. We then change the message which holds the class name **message**    
    C. We then change the **textContent** of the number which holds the class name **number**  
All the concepts above combined together will look like below 
![Demonstration of Combined Click Events](./images/Click%20Events.png)


```JS
document.querySelector('.check').addEventListener('click', function(){
    const guess = document.querySelector('.guess').value;
    console.log(guess);
    console.log(typeof guess);
});
``` 
Whenever we get something from the **USER INTERFACE** in the **INPUT FIELD** -> It is normally a **STRING**
![Input values from UI](./images/Input%20Values%20fom%20UI.png)     
As we can see from the above image, we use **type of** in order to know the value of the input value which is retrieved from the UI, and it is a **STRING**

**So Now for implementing our logic, we have to convert the numbers which we retrived form the GUI to a number post which only we can perform the comparing operation**

In order to convert to a number, we use the **Number method** which is in JS
```JS
document.querySelector('.check').addEventListener('click', function(){
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess);
    console.log(typeof guess);
});
```
```JS
document.querySelector('.check').addEventListener('click', function(){
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    // Suppose if there is not input passed to the field, them we get a 0 right which we convert
    // to a boolean value below and then we check it with an if condition
    if(!guess){
        document.querySelector('.message').textContent = '🚫 No number!';
    }
});
```
We have started to implement our game logic above, first we tried to handle the failure case when there is no number fed to the input field where we print a message,







