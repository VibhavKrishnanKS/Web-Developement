# Project 2. Modal Window

**DRAWBACK OF querySelector**
Suppose say we have given 3 elements for a class like below 
```HTML
    <button class="show-modal">Show modal 1</button>
    <button class="show-modal">Show modal 2</button>
    <button class="show-modal">Show modal 3</button>
```
And if we try to select the above class (show-model), we will be able to select only the **first element** not the **List of elements which has the class**
Only the **FIRST ONE** will get selected

If we want to **Overcome this problem** -> We need to use the **querySelectorAll()**
```JS
const btnsOpenModel = document.querySelectorAll('.show-modal')
console.log(btnsOpenModel);
```
If we use the above **querySelectorAll()** then it will select all the elements of the below class which looks like below 
![Use of querySelectorAll()](./images/Usage%20of%20querySelector().png)

If you want to print the values which are inside the elements, then we access them using a for loop in the below way
```JS
const btnsOpenModel = document.querySelectorAll('.show-modal')
console.log(btnsOpenModel);

for(let i = 0; i < btnsOpenModel.length; i++){
    console.log(btnsOpenModel[i].textContent);
}
```
Now if we use the above approach we would be able to **access a group of elements** for a specific class which are accessed using the **querySelectorAll()**





