# 23. Styling Text

**List of CSS Attributes that we learnt in this lecture**
1. **font-size** - This is to set the size of the font
2. **font-family** - This is to set the font-family(that we are using)
3. **text-transform**  - This is used to set the style of the text **(uppercase/lowercase/capitalize)**
4. **font-style** - Set whether our text must be **italic/bold/etc**
5. **line-height** - This is used to set the spaces between the lines
6. **text-align** - This is used to align the items **(centre/left/right)**

### 1. First Styling our main heading first 
```CSS
h1 {
  /* color: blue; */
  font-size: 26px;
  font-family: sans-serif; 
  text-transform: uppercase;
  font-style: italic;
}
```
#### NOTE
* The **text transform** has attributes  
  1. **capitalize** - This **capitalizes all the first letters** in the word
  2. **UpperCase** - This **capitalizes all the letters** within the h1 tag  
* After you make all the necessary changes your webpage will look like this 
![Styling the H1](./images/23_Styling_The_H1.png)
* with the help of **font-style**, you can make the text to be **italic/bold..etc..**

### 2. Setting the **h2 tag** here 
```CSS
h2 {
  font-size: 40px;
  font-family: sans-serif;
}
```
#### NOTE
* It is not necessary that h2 tag should be smaller than h1(Semantically it might be the case but it is not necessary)

### 3. Styling the **p tag**
```CSS
p {
  font-size: 22px;
  font-family: sans-serif;
  line-height: 1.5;
}
```
#### NOTE
* Here i have set the line-height to 1.5 (which conveys that **line height = 1.5 * (font-size)**)

### 4. Concept of **Inheritance**
1. We have to note a concept of inheritance here 
  * We didn't set the styles for **em(emphasize)/strong/bold** the html automatically takes the font size for the styles that are included with the **paragraph tag**

### 5. For the case of the element h4
```CSS
h4 {
  font-size: 20px;
  font-family: sans-serif;
  text-transform: uppercase;
  text-align: center;
}
```
#### NOTE
* The **text-align: center;** aligns the element which is inside the h4 tag to the center of the parent element within which it exists 

### 6. We don't actually style the ol/ul elements 
```CSS
li {
  font-size: 20px;
  font-family: sans-serif;
}
```
#### NOTE
1. Initially the **font-size** will be **16px** by default