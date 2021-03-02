# jQuery, Events, and The DOM

## Resources
+ 'JavaScript and jQuery'  by Jon Duckett  pages 293-301, 306-331 and 354-357
+ Jquery course by SoloLearn https://www.sololearn.com/ 

### jQuery
+ iQuerry is a Javascript file/library you include in your pages;
+ once included, it makes writing code fastere and easier;
  - by using CSS style selectors 2 collect 1 or more nodes from the DOM;
  - by using jQuerrys builtin methods to work with these elements that were selected;
+ jQuerry's CSS style selector syntax makes it easier to select elements 2 work with. It also has methods that make it easier to travers the DOM;
+ jQuerry makes it easier to handle events, because the event handlers work across all browsers;
+ jQuerry offers methods that make it quick and simple to achieve a range of tasks that Javascript programmers commonly need to perform;
+ offers a simple way to achieve a variety of common JavaScript tasks quickly and consistently.
1. Select Elements
    - It is simpler to access elements using jQuery's CSS-style selectors than it is using DOM queries.
2. Perform Tasks
    - jQuery methods let update the DOM tree, animate elements into and out of view, and loop through a set of elements, all ine one line of code.
3. Handle Events 
    - jQuery includes methods that allow to attach event listeners to selected elements without having to write any fallback code to support older browsers.


| JS  |  JQuery |
|---|---|
| var el = document.getElementById('whateverIdSelector') | $('#whateverIdSelector').html('WriteSomeTextHere');
| el.innerHTML = 'WriteSomeTextHere';

  

### Getting Started

It's good practice to wait for the HTML document to be fully loaded and ready before working with it.  
1. Link jQuery in HTML file 
```html 
<body>



  <script src = "https://code.jquery.com..."></script>
</body>
``` 
2. Make HTML document to be fully loaded and ready before working with it
```javascript 
$(document).ready(function(){
  // jQuery code goes here
});
//shortcut 
$(function(){
  //jQuery code goes here
})
``` 
3. Basic Syntax
    - `$("selector").action()`
    - **$** accesses jQuery.
    - **(selector)** finds HTML elements.
    - **action()** is then performed on the element(s).

### Selectors 

```javascript 
$("div")  // selects all <div> elements
$("#someID") // select the element with the id="someID"
$(".someClass") //selects all elements with class="someClass"
$("div.someClass")  // all <div> elements with class="someClass"
$("p:first")  // the first <p> element
$("h1, p") // all <h1> and all <p> elements
$("*")  // all elements of the DOM
``` 
### Get & Set Attribute Values

We can manipulate attributes (`href`, `src`, `id`, `class`, `style`) assigned to HTML elements easily through jQuery. 

**The _attr()_ method is used for getting value of an attribute.**

```html 
<a href = "www.google.com">Click Here</a>
```

```javascript 
$(function(){
  var value = $('a').attr('href');
  alert(value);
});
//alerts "www.google.com"
``` 

**The _attr()_ method also allows to set a value for an attribute by specifying it as the second parameter.**

```javascript 
$(function(){
  $('a').attr('href', 'https://www.amazon.com')
})
``` 

**_removeAttr()_ method is used for removing any attribute of an element.**

```javascript 
$(function(){
  $('table').removeAttr('class');
})
``` 
**GET / SET Content**

**.html() method is used to get the content of HTML elements, including the HTML markup.**

**.text() method is used to get only text content**  

**The same `.html()` and `.text()` methods can be used to change content of HTML elements.**

```javascript 

$(function(){
  $('#test').text('hello!')
})
``` 

### Adding Content

jQuery has methods that are used to add new content to a selected element without deleting the existing content:

+ `append()` - inserts content at the end of the selected elements.
+ `prepend()` - inserts content at the beginning of the selected elements.
+ `after()` - inserts content after the selected elements.
+ `before()` - inserts content before the selected elements.  
They can also be used to add newly created elements. 

```html 
<p id="demo">Hello</p>

```
```javascript 
$(function() {
    var txt = $("<p></p>").text("Hi");
    $("#demo").after(txt);
});

//  inserts the newly created <p> element after the #demo paragraph.
```

## Manipulating CSS  

- jQuery has several methods for CSS manipulation.

1. `addClass()`
    - adds one or more classes to the selected elements.
2. `removeClass()`
    - removes one or more class names from the selected elements.
3. `toggleClass()`
    - toggles between adding/removing classes from the selected elements (if the specified class exists for the element, it is removed, and if it does not exist, it is added). 

## Manipulating DOM  

| Method  |  What It Returns |
|---|---|
| `parent`  | direct parent element of the selected element  |
| `parents()`  | all ancestor elemnts of the selected element  |
| `children()`  | all direct children of the selected element  |
| `siblings()`  | all siblings elements  |
| `next()`/`nextAll()`  | next / all next sibling element/s  |
| `prev()`/`prevAll()`  | previous/all previous sibling elementof the selected element  |
| `eq()`  | element with a specific index number of the selected elements  |

```javascript
// The eq() method can be used to select a specific element from multiple selected elements.
// For example, if the page contains multiple div elements and we want to select the third one

$("div").eq(2);

``` 

### Remove Elements

**`remove()` method**

```html 
<p style="color:red">Red</p>
<p style="color:green">Green</p>
<p style="color:blue">Blue</p>
```

```javascript 
$(function() {
    $("p").eq(1).remove();
});

// removes Green, the second paragraph element. 
```

**`empty()`method**  

- used to remove the child elements of the selected element(s).

```html 
<div>
   <p style="color:red">Red</p>
   <p style="color:green">Green</p>
   <p style="color:blue">Blue</p>
</div>
```
```javascript 
$(function() {
    $("div").empty();
});
// removes all the three child elements of the div, leaving it empty.
``` 



### Ways to include jQuerry
+ load from a CDN (Content Delivery Network)
+ uses a `src="//"` syntax (instead of `https://`)
+ often followed by a 2nd script tag that has `||` or operator in it
+ fallback option writes a script tag into the html page to load jQuerry from same server that the content comes from
`document.write('<script src=js/jquerry-1.10.2.js"></script>')`;

### placement of the script
is important as to let all the DOM elements load first
also to pay mind to other js libraries that might be loading
before the closing body tag (not in the head and not in the page);

### Article: “6 Reasons for Pair Programming”
#### How does it work
pair programming commonly involves two roles: the Driver and the Navigator. The Driver is the programmer who is typing and the only one whose hands are on the keyboard.
Handling the "mechanics" of coding, the Driver manages the text editor, swithcing files, version control, and of course writing code.
The Navigator thinks about the big picture, what comes next, how an algorithm might be converted in to code, while scanning for typos or bugs.
The Navigator might also utlize their computer as a second screen to look up solutions and documentation, but should not be writing any code.
#### Why pair program
Pair programming touches on all four skills: developers explain out loud what the code should do, listen to others' guidance, read code that others have written, and write code themselves.
Greater Effiency
Engaged Collaboration
Learning from fellow students
Social skills
Job interview readiness
Work environment readiness

### JavaScript and jQuery book by Jon Duckett pages 332-335

### JavaScript and jQuery book by Jon Duckett pages 302-305

[Back to ReadMe](../README.md)