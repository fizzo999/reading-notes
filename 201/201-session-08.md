## Duckett HTML book:

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



# CSS Layout

## Float CSS

Float is a CSS positioning property. To understand its purpose and origin, we can look to print design. In a print layout, images may be set into the page such that text wraps around them as needed. This is commonly and appropriately called “text wrap”.  

In web design, page elements with the CSS float property applied to them are just like the images in the print layout where the text flows around them. Floated elements remain a part of the flow of the web page. This is distinctly different than page elements that use absolute positioning. Absolutely positioned page elements are removed from the flow of the webpage, like when the text box in the print layout was told to ignore the page wrap. Absolutely positioned page elements will not affect the position of other elements and other elements will not affect them, whether they touch each other or not.

### Position

The position property can help to manipulate the location of an element.  

**Values**:

1. static
    -  every element has a static position by default, so the element will stick to the normal page flow. So if there is a left/right/top/bottom/z-index set then there will be no effect on that element.
2. relative
    -  an element’s original position remains in the flow of the document, just like the static value. But now left/right/top/bottom/z-index will work. The positional properties “nudge” the element from the original position in that direction.
3. absolute 
    - the element is removed from the flow of the document and other elements will behave as if it’s not even there whilst all the other positional properties will work on it.
4. fixed 
    - the element is removed from the flow of the document like absolutely positioned elements. In fact they behave almost the same, only fixed positioned elements are always relative to the document, not any particular parent, and are unaffected by scrolling.
5. sticky 
    - the element is treated like a relative value until the scroll location of the viewport reaches a specified threshold, at which point the element takes a fixed position where it is told to stick.
6. inherit 
    - the position value doesn’t cascade, so this can be used to specifically force it to, and inherit the positioning value from its parent.
7. Z-index
    - determines the layer of the element. The higher the number the further on top and guaranteed visible.


### Summary
`<div>` elements are often used as containing elements 2 group 2gether sections of a page.
Browsers display pages in normal flow, unless u specify:
+ relative
+ absolute
+ fixed positioning
+ float

the float display property moves content to the left or right of the page and can be used to create multi column layout. (floated items require a defined width) .

pages can be defined fixed width (pixels, rem, em) or liquid(width, margin, padding all in %).

designers keep pages 960-1200px wideand have the main content in the top 600px (instant absorb w/o scrolling).
grids help 2 create professional layouts.
css frameworks provide rules for common tasks (have to be included in stylesheet link in head)
multiple css files (your own and frameworks)

[Back to ReadMe](../README.md)