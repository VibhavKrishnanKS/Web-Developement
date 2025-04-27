# 85. Handling an "Esc" Click Event

1. Now **Keyboard Events** are so called **Global Events** because the do not happen on one specific element

There are three types of keyboard events that are possible
1. **keydown** -> As soon as we press down the key
2. **keypress** - > Fired continuously when we keep our finger on a certain key on the keyboard
3. **keyup** - > Fired only when we take up our finger from a specific key on the keyboard

```JS
// Below one is applied to the whole document, so it will work for all the buttons. No matter where they happen on the page. The Event handler will be called for all the buttons.
// The below function will be executed for any key press that happens
document.addEventListener('keydown', function (e) {
    // console.log('A Key was pressed!');
    console.log(e);
})
```
Okay so the above code basically helps us to get a JSON object when a key/button is pressed, which is shown in the below **screenshot**
![Output of Event Object](./images/Event%20Object.png)



