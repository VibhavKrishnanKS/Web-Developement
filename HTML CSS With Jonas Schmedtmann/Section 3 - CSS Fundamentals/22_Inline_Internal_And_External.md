# 22. Inline, Internal and External 

###  Method 1 - Inline CSS  - but these types of styles should never be used 
  This basically refers to **writing the CSS inside the HTML element**
```HTML
  <h1 style="color: blue;">📘 The Code Magazine</h1> 
```
The **color of the content** changes to **blue** now 
> ### Note 
> * When you build your own webpages or websites please don't use this methods

### Method 2 - Internal CSS
* In this method we basicall add the CSS Styles which we are in need of inside the **head tag** as described below 
* So the entire page will be HTML but everything that is inside the **head->style** will be **CSS**
```HTML
<head>
  <meta charset="UTF-8" />
  <title>The Basic language of the Web:HTML</title>
  <!-- This is one way of writing - Internal CSS -->
  <style>
    h1 {
      color: blue;
    }
  </style>
</head>
```
> The method above is what we call as separation of concers 
> The Styles seperated above and the elements are separated below 
> ### NOTE
> One drawback here is that if we have a lot of CSS code using **Internal CSS** is not a good approach
> * If suppose take the case where you have a lot   of CSS, then it would bloat the programming code

### Method 3 - External CSS
Put all the CSS Code into an **external CSS File**

Create a new file named - **styles.css**
We need to tell our HTML file that there exist a file named - **style.css** which is responsible to add styles to our file 
For that we use the **link** element 
```HTML
  <!-- This is how you link a css stylesheet -->
  <link rel="stylesheet" href="style.css">
```
Writing all the styles inside a file called **style.css**
```CSS
h1 {
  color: blue;
}
```




