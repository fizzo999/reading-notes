## Duckett HTML book:

#### Chapter 4: Ch.4 “Links” (pp.74-93)
+ links are created using the `<a>` tag/element.
+ the `<a>` tag/element uses the href="" attribute to indicate the page you are linking.
+ If you are linking to a page within your own site, it is best 2 use relative links (eg style.css) rather than qualified urls(http://www.mysite.com).
+ Links 2 open email programs with an email address in the 'to' fiels (href="mailto:fizzo@fizzopannosch.com).
+ use ID attribute (#) to target elements within a page (href="#about" to target id="about" on the same page).
+ remember a tags are inline
+ remember a:hover
+ remember to check for style/property changes (especially margin and padding) to make it work.
+ remember u can use an rgba border on a button a tag that has an a value of 0 ie invisible to not move the elements around once you hover.


#### Chapter 15: “Layout” (pp.358-404)
Controlling the position of elements.
+ normal flow, relative position, absolute position, floats.
Creating site layouts.
+ professional layouts using a gridsystem of colums. Fixed values to arrange elements. frameworks with ID# keywords available.
Designing for different screen sizes.
+ fixed width vs liquid(in percentage value) layout.


`<div>` elements are often used as containing elements 2 group 2gether sections of a page.
Browsers display pages in normal flow, unless u specify:
+ relative
+ absolute
+ fixed positioning.

the float display property moves content to the left or right of the page and can be used to create multi column layout. (floated items require a defined width) .

pages can be defined fixed width (pixels, rem, em) or liquid(width, margin, padding all in %).

designers keep pages 960-1200px wideand have the main content in the top 600px (instant absorb w/o scrolling).
grids help 2 create professional layouts.
css frameworks provide rules for common tasks (have to be included in stylesheet link in head)
multiple css files (your own and frameworks)

## Duckett JS book:

#### Chapter 3 (first part): “Functions, Methods, and Objects” (pp.86-99 ONLY)
Article: “6 Reasons for Pair Programming”


functions - group a series of statements 2 perform specific task
use function 2 repeat part of script - no re write code
example insert new text into an html - by grabbing onto an ID


#### declaring a function:
```function sayHello() {document.write('Hello you');}```


#### calling a function
```sayHello();```


#### declaring functions that need more info
```function getArea(width,height) {return width * height;}```


#### calling functions that need info
```getArea(3,5);``` **or**
```width = 3;```
```height = 5;```
```getArea(width, height);```


#### getting a single value out of a function
```function calcArea(width, height) {```
```var area = width * height;```
```return area;```
makes the script stop and return to where it was
```var wall_1 = calcArea(3, 5);```
```var wall_2 = calcArea(8, 5);```


#### getting multiple values out of a function
```function getSize(width, height, depth) {```
```  var area = width * height;```
```  var volume = width * height * depth;```
```  var sizes = [area, volume];```
```  return sizes;```
```}```
```var area51 = getSize(3,2,4)[0];```
```var volume51 = getSize(3,2,4)[1];```

## function declaration and function expression
```function area(width, height) {```
```  return width * height;```
```}```
```var size = area(3, 4);```


compared to


```var area = function(width, height) {```
```  return width * height;```
```};```
```var size = area(3, 4);```


first one (function declaration) can be called before script runs over it 
where as the second one (function expression) cannot.

### Declaring a Function
To create a function, you give it a name and then write the statements neede to achieve its task inside the curly braces.
This is known as a function declaration
#### Calling a Function
Having declared the function, you can then execute all of the statements between its curly braces with just one line of code. This is known as calling a function.
#### Declaring Functions that need information
Sometimes a function needs specific information to perform its task. In such cases, when you declare the function you give it parameters. Inside the function, the parameters act like variables
When you call a function that has paramters, you specify the values it should use in the parentheses that follow its name. The values are called arguments, and they can be provided as values or variables.
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
Learning from fellows students
Social skills
Job interview readiness
Work environment readiness