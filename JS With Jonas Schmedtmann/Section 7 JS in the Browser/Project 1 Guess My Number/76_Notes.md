# 76. Selecting and Manipulating Elements

In order to assign values to the respective elements in the HTML
we do it in JS in the below way,
```JS
document.querySelector('.message').textContent = '🎉Correct Number!';
``` 
We just select the concert class and then we analyze it using the textContent value
![Initializing Values using textContent](./images/Initializing%20Values%20using%20textContet.png)


If so we have an input field like below
```HTML
<input type="number" class="guess" />
```
Then in order to get the value property which is supplied to the above input element (we use the .value property in order to get the input which is passed to the HTML input element)
```JS
console.log(document.querySelector('.guess').value);
```
But we see a blank for **script.js:10** in the below image cause we haven't fed any value for the respective querySelector
![Value Attribute](./images/value%20attribute.png)

If you want to assign a **Static Value**, then we use the below way
```JS
document.querySelector('.guess').value = 23;
```
As given in the below screenshot, the above JS line assigns a static value for the (.guess) class which is selected
![Assigning a Static Value](./images/Assigning%20a%20Static%20Value.png)





