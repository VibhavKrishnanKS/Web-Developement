# 15. Understanding the style tag & Creating a .css file

**NOTE:- THE BODY IS ALSO TREATED AS AN ELEMENT**

1. One another approach is that you can create a style tag inside the header tag like below
```HTML
<head>
    <!-- Encoding which the HTML Follows -->
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>uHost</title>
    <link rel="shortcut icon" href="favicon.png">
    <style>
        section{
            background: #ff1b68;
        }
    </style>
</head>

<body>
    <main>
        <section>
            <h1>Get the freedom you deserve.</h1>
        </section>
        <section>
            <h1>Choose Your Plan.</h1>
        </section>
    </main>
</body>

```
Where you can add your CSS rules inside
While adding CSS inside the style tag that is created in the header section you want to add selectors which define to which element in your DOM inside of your body    
Now, what we mean from the above code snippet is that we look for all the section elements from our page and it would apply the respective CSS to all the found instances   
![Style Inside Head tag](./Images/Style%20Inside%20Head%20Tag.png)
**ADVANTAGE OF USING THE ABOVE METHOD**  
Here as you can see from the above image that body tag is applied to all the section tags, if so you use inline styles then you want to add the respective CSS rules to each section tag (which is tedious as compared to the present process which we are using)  
**DISADVANTAGE OF USING THE ABOVE METHOD** 
1. This would bloat your HTML file - and it also makes the reloading process of the webpage slower      
2. Also the Code length increases.              

1. One Another way of using the style tho - that is by using an external StyleSheet - where we have named it to be main.css (This is where we write our CSS Rules)
Here in the below code we tell our **index.html** to use our **main.css** file explicitly which is demonstrated in the below code snippet
```HTML
<!-- Given below is the index.html file where we use an external StyleSheet -->
<head>
    <!-- Encoding which the HTML Follows -->
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>uHost</title>
    <link rel="shortcut icon" href="favicon.png">
    <link rel="stylesheet" href="./main.css">
</head>
```
```CSS
/* Respective main.css file for the above index.html */
section{
    background: #ff1b68;
}
```

**NOTE:- The final way which we used is actually the Recommended Way**  

**ADVANTAGE OF USING EXTERNAL STYLESHEET**
1. We can have a clear separation of your HTML And CSS code
2. If you use the same stylesheet in multiple pages, then your browser can cache this stylesheet and reload it faster. There is no need to redownload it for every new page
3. That is why, it is recommended (or) it is better to use an external stylesheet, even though if we have only one CSS Rule