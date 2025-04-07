# 14. Hyperlinks 

1. We can create Links in two ways
    1. Links that points to pages that are inside our website 
    2. Links that points to pages that are outside our webiste
2. In order to create a HTML link/hyperlink - we use <a></a> - **Anchor Tag**
3. Difference between **HyperLink** and a **Link**
    1. **HyperLink** - A Clickable test or image that takes you to another page or website. Created using <a> tag in HTML 
    ``` HTML
    <a href="https://www.example.com" target="_blank">Visit Example</a>
    ```
    2. **Link** - Often used to mean the same as a hyperlink. Can also refer to the **<link>** tag, which connects your HTM to external resource like your CSS stylesheets
    ```HTML
    <link rel="stylesheet" href="styles.css">
    ```
4. In order to make the webpage open in a new tab you can use the **target=_blank**
```HTML
    <a href="https://www.example.com" target="_blank">Visit Example</a>
```
5. What makes an **anchor element** a **link** is because of the **href attribute** 
    1. If you don't assign the href attribute this will be a bolded text that's it

