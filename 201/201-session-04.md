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

### Key concepts in positioning elements
Key concepts in positioning elements
Key concepts in positioning elements
Building Blocks
CSS treats each HTMl element as if it is in its own its own boc. This box will will either be a block-level box or an inline block.
Containig Elements
If one block-level element sits inside another block-level element then the outer box is kown as the containing or parent elements.
Controlling the position of the elements
Css has the following positioning schemes that allow you to control the layout of a page: normal flow, relative postitioning, and abosulte positioning. You can specify the positioning scheme using the position property in CSS. You can also float elements using the float property.
To indicate where a box should be positioned, you may also need to use box offest properties to tell the browser how far from the top or bottom and left or right it should be placed.
Normal flow
Every block-level element appeats on a new line, causing each item to appear lower down the page than the previous one.
Even if you specify the width of the boxed and there is space for two elements to sit side by side, they will not appear nect to each other.
This is the default behavior
Relative Postioning
The moves an element from the position it would be in normal flow, shifting it to the top, right, bottom, or left where it would have been placed.
This does not affect the position of surrounding elements; they stay in the position they would be in in normal flow.
Absolute Positioning
This positions the element in relation to its containing element.
It is taken out of normal flow m meaning that it does not affect the position of any surrounding elements.
Absolute positioned elemtnts move as users scroll up and down the page.
Fixed Positioning
This is a form of absolute positioning that postions the elemnt in relation to the browser window, as opposed to the containing element.
Elements with fixed positioning do not affect the position of surrounding elements and they do not move when the user scrools up or down the page
Floating elements
Floating an element allows you to take that element out of normal flow and position it to the far left or right of a containing box.
The floated element becomes a block-level element around which other content can flow.
When you move any element from normal flowm boxes can overlap. The z-index property allows you to control which box appears on top.
#### Normal Flow
Position:static
In normal flow, each block-level elements sits on top of the nect one.
Since this is the default way in which browsers treat HTML elements, you do not need a CSS property to indicate that elemtns should appear in normal flow, but the syntax would be - postion: static;
Position:relative
Relative positioning moves an element in relation to where it would have beeb in normal flow
Position:absolute
When the position property is given a value of absolute, the box is taken out of nromal flow and no longer affects the position of other elements on the page.
postiion:fixed
Fixed postioning is a type of absolute positioning that requires the position property to have a value of fixed.
#### Overlapping Elements
z-index
When you use relative, fixed, or absolute positioning, boxes can overlap. if boxed so overlap, the elements that appear later in the HTML code sit on top those that earlier in the page.
#### Floating Elements
float
The float property allows you to take an element in normal flow and place it as far to the left or right of the containing element as possible.
a lot of layouts place boxes next to each other. The float property is commonly used to achieve this.
When elements are floated, the height of the boxes can affec whwre the following elements sit.
#### Clearing Floats
clear
The clear property allows you to say that no element should touch the left or right hand sides of a box. it can take the following values:
left, right, both, none
#### Parents of Floated Elements
Problem
If a contianing element only contains floated elements, some browsers will treat is as if it is zero pixels tall
Solution
Traditionally, developers got around this problem by adding an extra element the last floated box.
A CSS rule would be applied to this additonal element setting the clear property to have a value of both. But this meant that an extra element was aded to the HTML just to fix the height of the containing element.
More recently, developers have opted for a purely CSS-based solution because it menas that there is no need to added to the HTML just to fix the height of the containg elements.
The pure CSS solution adds two CSS rules to the containing element.
#### Creating Multi-Column Layouts With Floats
Many web pages use multiple columns in their design. This is achieved by using a
element to represent each column. T
The following three CSS properties are used to postion the columns next to each other:
Width: This sets the width of the columns
Float: This potions the columns next to each other
Margin: This creates a gap between the columns
#### Screen Sizes
Different visitors to your site will have different sized screens that show different amounts of information, so your design needs to be able to work on a range differnt sized screens.
Resolution refers to the number of dots a screene shows per inch. Some devices have a higher resolution than desktop computers and most operating systems allows users to adjust the resolution of their screens.
#### Page Sizes
Because scren sizes and display resolutions vary so much, web deisgners often try to create pages of around 960-1000 pixels wide.
#### Fixed Width Layouts
Fixed width layout designs do not change size as the user increases or decreases the size of their browser window. Measurements tend to be given in pixels.
To create a fixed width layout, the width of the main boxes on a page will usually be specified in pixels.
#### Liqiud Layouts
Liquid layouts designs stretch and contract as the user increases or decreases the size of their browser window. They tend user percentages.
#### Layout Grids
Composition in any visual art is the placement or arrangement of visual elements -- how they are organized on page. Many designers use a grid structure to help them position items on apge, and the same is true for web designers.
#### CSS Framework
CSS frameworks aim to make your life easier by providing the code for common tasks, such as creating layout grids, styling forms, creating printer-friendly versions of pages and so on. You can include the CSS framework code in your projects rather than writing the CSS from scratch.Building Blocks
CSS treats each HTMl element as if it is in its own its own boc. This box will will either be a block-level box or an inline block.
Containig Elements
If one block-level element sits inside another block-level element then the outer box is kown as the containing or parent elements.
Controlling the position of the elements
Css has the following positioning schemes that allow you to control the layout of a page: normal flow, relative postitioning, and abosulte positioning. You can specify the positioning scheme using the position property in CSS. You can also float elements using the float property.
To indicate where a box should be positioned, you may also need to use box offest properties to tell the browser how far from the top or bottom and left or right it should be placed.
Normal flow
Every block-level element appeats on a new line, causing each item to appear lower down the page than the previous one.
Even if you specify the width of the boxed and there is space for two elements to sit side by side, they will not appear nect to each other.
This is the default behavior
Relative Postioning
The moves an element from the position it would be in normal flow, shifting it to the top, right, bottom, or left where it would have been placed.
This does not affect the position of surrounding elements; they stay in the position they would be in in normal flow.
Absolute Positioning
This positions the element in relation to its containing element.
It is taken out of normal flow m meaning that it does not affect the position of any surrounding elements.
Absolute positioned elemtnts move as users scroll up and down the page.
Fixed Positioning
This is a form of absolute positioning that postions the elemnt in relation to the browser window, as opposed to the containing element.
Elements with fixed positioning do not affect the position of surrounding elements and they do not move when the user scrools up or down the page
Floating elements
Floating an element allows you to take that element out of normal flow and position it to the far left or right of a containing box.
The floated element becomes a block-level element around which other content can flow.
When you move any element from normal flowm boxes can overlap. The z-index property allows you to control which box appears on top.
#### Normal Flow
Position:static
In normal flow, each block-level elements sits on top of the nect one.
Since this is the default way in which browsers treat HTML elements, you do not need a CSS property to indicate that elemtns should appear in normal flow, but the syntax would be - postion: static;
Position:relative
Relative positioning moves an element in relation to where it would have beeb in normal flow
Position:absolute
When the position property is given a value of absolute, the box is taken out of nromal flow and no longer affects the position of other elements on the page.
postiion:fixed
Fixed postioning is a type of absolute positioning that requires the position property to have a value of fixed.
#### Overlapping Elements
z-index
When you use relative, fixed, or absolute positioning, boxes can overlap. if boxed so overlap, the elements that appear later in the HTML code sit on top those that earlier in the page.
#### Floating Elements
float
The float property allows you to take an element in normal flow and place it as far to the left or right of the containing element as possible.
a lot of layouts place boxes next to each other. The float property is commonly used to achieve this.
When elements are floated, the height of the boxes can affec whwre the following elements sit.
#### Clearing Floats
clear
The clear property allows you to say that no element should touch the left or right hand sides of a box. it can take the following values:
left, right, both, none
#### Parents of Floated Elements
Problem
If a contianing element only contains floated elements, some browsers will treat is as if it is zero pixels tall
Solution
Traditionally, developers got around this problem by adding an extra element the last floated box.
A CSS rule would be applied to this additonal element setting the clear property to have a value of both. But this meant that an extra element was aded to the HTML just to fix the height of the containing element.
More recently, developers have opted for a purely CSS-based solution because it menas that there is no need to added to the HTML just to fix the height of the containg elements.
The pure CSS solution adds two CSS rules to the containing element.
#### Creating Multi-Column Layouts With Floats
Many web pages use multiple columns in their design. This is achieved by using a
element to represent each column. T
The following three CSS properties are used to postion the columns next to each other:
Width: This sets the width of the columns
Float: This potions the columns next to each other
Margin: This creates a gap between the columns
#### Screen Sizes
Different visitors to your site will have different sized screens that show different amounts of information, so your design needs to be able to work on a range differnt sized screens.
Resolution refers to the number of dots a screene shows per inch. Some devices have a higher resolution than desktop computers and most operating systems allows users to adjust the resolution of their screens.
#### Page Sizes
Because scren sizes and display resolutions vary so much, web deisgners often try to create pages of around 960-1000 pixels wide.
#### Fixed Width Layouts
Fixed width layout designs do not change size as the user increases or decreases the size of their browser window. Measurements tend to be given in pixels.
To create a fixed width layout, the width of the main boxes on a page will usually be specified in pixels.
#### Liqiud Layouts
Liquid layouts designs stretch and contract as the user increases or decreases the size of their browser window. They tend user percentages.
#### Layout Grids
Composition in any visual art is the placement or arrangement of visual elements -- how they are organized on page. Many designers use a grid structure to help them position items on apge, and the same is true for web designers.
#### CSS Framewprk
CSS frameworks aim to make your life easier by providing the code for common tasks, such as creating layout grids, styling forms, creating printer-friendly versions of pages and so on. You can include the CSS framework code in your projects rather than writing the CSS from scratch.Building Blocks
CSS treats each HTMl element as if it is in its own its own boc. This box will will either be a block-level box or an inline block.
#### Containig Elements
If one block-level element sits inside another block-level element then the outer box is kown as the containing or parent elements.
Controlling the position of the elements
Css has the following positioning schemes that allow you to control the layout of a page: normal flow, relative postitioning, and abosulte positioning. You can specify the positioning scheme using the position property in CSS. You can also float elements using the float property.
To indicate where a box should be positioned, you may also need to use box offest properties to tell the browser how far from the top or bottom and left or right it should be placed.
#### Normal flow
Every block-level element appeats on a new line, causing each item to appear lower down the page than the previous one.
Even if you specify the width of the boxed and there is space for two elements to sit side by side, they will not appear nect to each other.
This is the default behavior
#### Relative Postioning
The moves an element from the position it would be in normal flow, shifting it to the top, right, bottom, or left where it would have been placed.
This does not affect the position of surrounding elements; they stay in the position they would be in in normal flow.
#### Absolute Positioning
This positions the element in relation to its containing element.
It is taken out of normal flow m meaning that it does not affect the position of any surrounding elements.
Absolute positioned elemtnts move as users scroll up and down the page.
#### Fixed Positioning
This is a form of absolute positioning that postions the elemnt in relation to the browser window, as opposed to the containing element.
Elements with fixed positioning do not affect the position of surrounding elements and they do not move when the user scrools up or down the page
#### Floating elements
Floating an element allows you to take that element out of normal flow and position it to the far left or right of a containing box.
The floated element becomes a block-level element around which other content can flow.
When you move any element from normal flowm boxes can overlap. The z-index property allows you to control which box appears on top.
#### Normal Flow
Position:static
In normal flow, each block-level elements sits on top of the nect one.
Since this is the default way in which browsers treat HTML elements, you do not need a CSS property to indicate that elemtns should appear in normal flow, but the syntax would be - postion: static;
Position:relative
Relative positioning moves an element in relation to where it would have beeb in normal flow
Position:absolute
When the position property is given a value of absolute, the box is taken out of nromal flow and no longer affects the position of other elements on the page.
postiion:fixed
Fixed postioning is a type of absolute positioning that requires the position property to have a value of fixed.
#### Overlapping Elements
z-index
When you use relative, fixed, or absolute positioning, boxes can overlap. if boxed so overlap, the elements that appear later in the HTML code sit on top those that earlier in the page.
#### Floating Elements
float
The float property allows you to take an element in normal flow and place it as far to the left or right of the containing element as possible.
a lot of layouts place boxes next to each other. The float property is commonly used to achieve this.
When elements are floated, the height of the boxes can affec whwre the following elements sit.
#### Clearing Floats
clear
The clear property allows you to say that no element should touch the left or right hand sides of a box. it can take the following values:
left, right, both, none
#### Parents of Floated Elements
Problem
If a contianing element only contains floated elements, some browsers will treat is as if it is zero pixels tall
Solution
Traditionally, developers got around this problem by adding an extra element the last floated box.
A CSS rule would be applied to this additonal element setting the clear property to have a value of both. But this meant that an extra element was aded to the HTML just to fix the height of the containing element.
More recently, developers have opted for a purely CSS-based solution because it menas that there is no need to added to the HTML just to fix the height of the containg elements.
The pure CSS solution adds two CSS rules to the containing element.
Creating Multi-Column Layouts With Floats
Many web pages use multiple columns in their design. This is achieved by using a
element to represent each column. T
The following three CSS properties are used to postion the columns next to each other:
Width: This sets the width of the columns
Float: This potions the columns next to each other
Margin: This creates a gap between the columns
Screen Sizes
Different visitors to your site will have different sized screens that show different amounts of information, so your design needs to be able to work on a range differnt sized screens.
Resolution refers to the number of dots a screene shows per inch. Some devices have a higher resolution than desktop computers and most operating systems allows users to adjust the resolution of their screens.
Page Sizes
Because scren sizes and display resolutions vary so much, web deisgners often try to create pages of around 960-1000 pixels wide.
Fixed Width Layouts
Fixed width layout designs do not change size as the user increases or decreases the size of their browser window. Measurements tend to be given in pixels.
To create a fixed width layout, the width of the main boxes on a page will usually be specified in pixels.
Liqiud Layouts
Liquid layouts designs stretch and contract as the user increases or decreases the size of their browser window. They tend user percentages.
Layout Grids
Composition in any visual art is the placement or arrangement of visual elements -- how they are organized on page. Many designers use a grid structure to help them position items on apge, and the same is true for web designers.
CSS Framewprk
CSS frameworks aim to make your life easier by providing the code for common tasks, such as creating layout grids, styling forms, creating printer-friendly versions of pages and so on. You can include the CSS framework code in your projects rather than writing the CSS from scratch.

### Summary
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