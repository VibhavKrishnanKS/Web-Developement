# 84. Working With Classes

```JS
for(let i = 0; i < btnsOpenModel.length; i++){
    btnsOpenModel[i].addEventListener('click', function(){
        console.log('Button clicked');
        modal.classList.remove('hidden'); // This is how you can remove classes from the list
    })
}
```
In the above code, basically the highlighted part is the place which helps us to remove classed during the **JS Runtime**

More heads up on the above concept
1. If so you want to add **Multiple Classes**
```JS
for(let i = 0; i < btnsOpenModel.length; i++){
    btnsOpenModel[i].addEventListener('click', function(){
        console.log('Button clicked');
        modal.classList.remove('hidden','qqqq'); // This is how you can remove classes from the list
    })
}
```
2. But the thing is that you have to keep in mind not to use **(.)** which we use only for the Selector **querySelector** (That is only used to Select the Query)
```JS
for(let i = 0; i < btnsOpenModel.length; i++){
    btnsOpenModel[i].addEventListener('click', function(){
        console.log('Button clicked');
        modal.classList.remove('.hidden','.qqqq'); // This is not a proper way of doing this
    })
}
```
3. **NOTE** - Under the classList, we can also **ADD** classes, we can also check whether an **Element contains a certain class (or) not**

A simple demonstartion screenshot on how the page exists **how the class hidden is dynamically removed at runtime**
```HTML
<div class="modal hidden">
      <button class="close-modal">&times;</button>
      <h1>I'm a modal window 😍</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
</div>
```
See as you can see above we have a list of classes (**close** , **modal**, ...)         
Given below is a screenshot on how the state will be before and after the **EventListener** is performed            
BEFORE      
![Initial State Before EventListener is performed](./images/Initial%20State%20of%20Hidden%20Class.png)      
AFTER              
![Disappearance of Hidden Class After the EventListener is performed](./images/DisAppearance%20of%20the%20Hidden%20Class.png)       
As you can see in the above image for the class **modal hidden**, after the **Event** is performed the **hidden class is vanished leaving only the model class**

```JS
for(let i = 0; i < btnsOpenModel.length; i++){
    btnsOpenModel[i].addEventListener('click', function(){
        console.log('Button clicked');
        modal.classList.remove('hidden'); // This is how you can remove classes from the list
        overlay.classList.remove('hidden');
    })
}
```
We also select the **querySelector** which has the **.overlay class** -> we also remove the **hidden value from the list of classes** for the **main class called overlay**

In order to get the below effect
![OverLay Effect for the class](./images/overlay%20class.png)

```JS
btnCloseModel.addEventListener('click', function(){
    modal.classList.add('hidden'); // This is how you can add classes to the list
    overlay.classList.add('hidden');
});
```





