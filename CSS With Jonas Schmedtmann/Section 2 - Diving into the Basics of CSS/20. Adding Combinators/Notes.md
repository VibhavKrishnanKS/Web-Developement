# 20. Adding Combinators

**NOTE - Don't Mistake the below concept with inheritance because the above CSS rule is not passed down automatically because we are explicitly selecting it**

Now suppose say we do have the below CSS,
```CSS
body {
    font-family: "Montserrat", sans-serif;
}
#product-overview {
    background: #ff1b68;
  }
  
.section-title {
    color: #2ddf5c;
}
  
h1 {
    color: white;
    font-family: "Anton", sans-serif;
}
  
```
And we have the below HTML
```HTML
<body>
  <main>
    <section id="product-overview">
      <h1>Get the freedom you deserve.</h1>
    </section>
    <section id="plans">
      <h1 class="section-title">Choose Your Plan.</h1>
      <p>Make sure you get the most for your money</p>
    </section>
  </main>
</body>
```

What if we don't want the h1 tag(where the class section-title is applied) to take the default Rule of h1 tags, we use a rule which is defined below

```CSS
.section-title {
    color: #2ddf5c;
    font-family: inherit;
}
```
This will take care of inheriting the style which is declared for the body class to the respective (section-title class) -> Which is clearly demonstrated in the below image  
![Inherit CSS Rule](./images/Inherit%20CSS%20Rule.png)  

**But the above method is not necessarily the best way,**
The issue is that, what if suppose we have another h1 tag, which has a different class but we need to use the default font-family on that h1 tag then we need to use that above rule(**font-family: inherit;**) in each and every case. Which is not that much a good and efficient process   

So what we can do is, we can write a CSS Style in a way saying that, the below commented one should be the only h1 tag that should get the CSS Rule (**font-family: "Anton", sans-serif;**)   

1. One way of doing the above command would be simply assigning a class/Id to the respective element (h1 tag or anything), This would increase the users work (Or) the above one would be a tedious process 

In the above cases we use something called as **Combinators** -> which allows us to be more precise on what we want to select
```HTML
    <section id="product-overview">
      <h1>Get the freedom you deserve.</h1>
    </section>
```
Suppose say, we have the above HTML code -> we can style of CSS in way that, the **h1 tags** which are inside the **id(product-overview)** - A Specific style will be applied here
```CSS
#product-overview h1 {
    color: white;
    font-family: "Anton", sans-serif;
}
```
The above concept is called as a **Combinator** -> Where we combine multiple selectors...       
So the above CSS could be read as, any style inside the **id(product-overview)** with the element h1 will take the specific rules that are applied to the above combinator    
```HTML
    <section id="product-overview">
        <div>
            <h1>Get the freedom you deserve.</h1>
        </div>
    </section>
```
You can also have your h1 tag inside a div tag also the respective style will be applied        

Also if you remove the previously written **inherit property** also, that's not an issue -> the respective **Anton font-family** will be applied to the tags which are inside the **id(product-overview)**    
![Adding Combinators Inside ID 1](./images/Adding%20Combinators%20for%20h1%20inside%20ID%201.png) 
As we can see from the above image, the **Anton Font Style** is applied for the **specific h1 tag that is inside the respective id**
![Adding Combinators Inside ID 2](./images/Adding%20Combinators%20for%20h1%20inside%20ID%202.png) 
But for the above image, as we didn't use combinator for the element that is selected the **Default font-family is used** (the one that is declared under the **body element**)   

### Advantages of Using a Combinator
1. You create a higher specificity    

2. #product-overview h1 > h1     
Higher specficity         Than h1 tag       
Cause we narrowed down to which h1 tag we want to apply the respective style. And also the combinator has more specific information         
So the **Rule with more information** > **The Rule with less information**

















