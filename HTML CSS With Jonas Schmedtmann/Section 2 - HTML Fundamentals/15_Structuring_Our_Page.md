# 15. Structuring Our Project 


1. Here we learn the concept on how to use nav bar's
```HTML
  <nav>
    <a href="./blog.html">Blog</a>
    <a href="./blog.html">Challenges</a>
    <a href="./blog.html">Flexbox</a>
    <a href="./blog.html">CSS Grid</a>
  </nav>
```
The above code will be an **invisible box** a **nav bar** which contains the elements - it basically group the elements together

2. Grouping the **Navigation** and the **Heading** into an header element 
```HTML
  <header>
    <h1>📘 The Code Magazine</h1>
    <nav>
      <a href="./blog.html">Blog</a>
      <a href="./blog.html">Challenges</a>
      <a href="./blog.html">Flexbox</a>
      <a href="./blog.html">CSS Grid</a>
    </nav>
  </header>
```
Now what actually happens is that the **h1** and the **Navigation bar** will come under one pane which is called as the **header**

3. we place the rest of the contents inside the <article> tag in **HTML** 

4. We do have a <footer> element in HTML 5
```HTML
  <footer>
    Copyright &copy;
  </footer>
```
We don't need to add anything here because (Copyright &copy;), this is the only child element  
**&copy;** - This represents the **@C** 

4. What is the difference between **body tag**  and **article tag**  
    1. **body tag**: Think of the **body tag** as the container for everything you see on the webpage. It holds all the text, images, links, and any other parts of the page.  

    2. **article tag**: An **article tag** is like a box inside the body that holds one specific piece of content that can stand alone, like a blog post, news article, or a story. You can have many **article tags** inside the **body tag**.

    **Similarity:**    
    1. Both are used to put content on a webpage, but the **body tag** is the main wrapper for everything, while **article tag** is for a specific section of content that makes sense by itself.  
    Example:  Imagine a newspaper:  
        1. The **body tag** is the whole newspaper with all the pages.     
        2. An **article tag** is one specific news story inside the newspaper.     
