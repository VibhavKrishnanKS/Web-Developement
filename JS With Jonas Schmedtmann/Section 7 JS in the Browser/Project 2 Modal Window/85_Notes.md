# 85. Handling an "Esc" Click Event

1. Now **Keyboard Events** are so called **Global Events** because the do not happen on one specific element

There are three types of keyboard events that are possible
1. **keydown** -> As soon as we press down the key
2. **keypress** - > Fired continuously when we keep our finger on a certain key on the keyboard
3. **keyup** - > Fired only when we take up our finger from a specific key on the keyboard

```JS
// Below one is applied to the whole document, so it will work for all the buttons. No matter where they happen on the page. The Event handler will be called for all the buttons.
// The below function will be executed for any key press that happens
// Also the below function accepts an event as an argument
document.addEventListener('keydown', function (e) {
    // console.log('A Key was pressed!');
    console.log(e);
})
```
Okay so the above code basically helps us to get a JSON object when a key/button is pressed, which is shown in the below **screenshot**
![Output of Event Object](./images/Event%20Object.png)

What matters for us in the object is that, the key value in the JSON file which tells us the key which is being clicked   
So we read the key property which is pressed by tweaking the code a little    
For which the code is given below
```JS
// Below one is applied to the whole document, so it will work for all the buttons. No matter where they happen on the page. The Event handler will be called for all the buttons.
// The below function will be executed for any key press that happens
// Also the below function accepts an event as an argument
document.addEventListener('keydown', function (e) {
    // console.log('A Key was pressed!');
    console.log(e.key); // This will give the key that was pressed
})
```

A detailed code implementation in order to execute the Esc key functionality is given below
```JS
// Below one is applied to the whole document, so it will work for all the buttons. No matter where they happen on the page. The Event handler will be called for all the buttons.
// The below function will be executed for any key press that happens
document.addEventListener('keydown', function (e) {
    // console.log('A Key was pressed!');
    console.log(e.key); // This will give the key that was pressed

    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
        // This will check if the modal is not hidden and if the key pressed is Escape
        console.log('Escape was pressed!');
        // Also why we use (), because we need to execute the function, not just call it. If we don't use () it will just return the function and not execute it.
        // So we need to call the function to execute it. So we use () to call the function.
        closeModal();
    }
})
```




