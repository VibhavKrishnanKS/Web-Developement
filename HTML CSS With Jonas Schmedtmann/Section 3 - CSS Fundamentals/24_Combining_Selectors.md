# 24. Combining Selectors 

### 1. Now looking at our CSS File 
```CSS
/* Style.css */
h1 {
  /* color: blue; */
  font-size: 26px;
  font-family: sans-serif;
  text-transform: uppercase;
  font-style: italic;
}

h2 {
  font-size: 40px;
  font-family: sans-serif;
}

h3 {
  font-size: 30px;
  font-family: sans-serif;
}

h4 {
  font-size: 20px;
  font-family: sans-serif;
  text-transform: uppercase;
  text-align: center;
}

p {
  font-size: 22px;
  font-family: sans-serif;
  line-height: 1.5;
}

li {
  font-size: 20px;
  font-family: sans-serif;
}
```
### NOTE
* We define the **font-family** for each and every element it is not needed right everything is comming in order to avoid this we come up with an approach

### 2. Now what we do is, we combine the styles that are commmon - This concept is called as combining selectors 
```CSS
h1,
h2,
h3,
h4,
p,
l1 {
  font-family: sans-serif;
}
```

### 3. Another way to combine the Selectors  - The concept of **Descendant Selector**
```CSS
footer p {
  font-size: 16px;
}
```
#### NOTE
* The above CSS Style will apply for all the elements that are inside **footer->p**


### 4. Suppose say the above method leads to a false case - what happens
```HTML
    <header>
      <h2>The Basic Language of the Web: HTML</h2>
      <img src="img/laura-jones.jpg" alt="This is a post image" width="50" height="50">
      <p>Posted by <strong>Laura Jones</strong> on Monday, June 21st 2027</p>
      <!-- We reduce the image to half the original dimension 
    Because the original is - 1000 x 400 -->
      <img src="img/post-img.jpg" alt="This is a post image" width="500" height="200">
    </header>
```
### NOTE
* In the above code, we have a **p tag** inside the **header tag** suppose say i want to style this
```CSS
header p {
  font-style: italic;
}
```
### NOTE 
* Please note that for some reason the above code works fine but there is a problem 
* Now Suppose say i have it like this
```HTML
  <header>
    <!-- This is one way of writing CSS - Inline CSS -->
    <!-- <h1 style="color: blue;">📘 The Code Magazine</h1> -->
    <h1>📘 The Code Magazine</h1>
    <nav>
      <a href="./blog.html">Blog</a>
      <a href="./blog.html">Challenges</a>
      <a href="./blog.html">Flexbox</a>
      <a href="./blog.html">CSS Grid</a>
      <p>Test Paragraph</p>
    </nav>
  </header>
```
* Here the **Test Paragraph** is also inside the header->p this leads to a problem
* To overcome this problem, we can do one thing seeing the below HTML
```HTML
  <article>
    <header>
      <h2>The Basic Language of the Web: HTML</h2>
      <img src="img/laura-jones.jpg" alt="This is a post image" width="50" height="50">
      <p>Posted by <strong>Laura Jones</strong> on Monday, June 21st 2027</p>
      <!-- We reduce the image to half the original dimension 
    Because the original is - 1000 x 400 -->
      <img src="img/post-img.jpg" alt="This is a post image" width="500" height="200">
    </header>
```
* As we can see from the above code the **Header tag** is below the **Article Tag** so we can change the CSS style in a way like below
```CSS
article header p {
  font-style: italic;
}
```



