## Duckett HTML book:

#### Chapter 3: “Lists” (pp.62-73)
3 types of html lists
+ ordered ol use numbers
+ unordered ul use bullets (list-style: none)
+ definition lists to define terminology
``` <dl>      <dt>       <dd>       CLOSING TAGS EACH```

Lists can be nested inside each other

#### Chapter 13: “Boxes” (pp.300-329)
CSS treats each HTML element as if it has its own box;
you can use CSS 2 control the dimensions of the box;
U can also control the borders, margins, padding for each w CSS;
You can hide elements using display and visibility properties AND opacity;
block level boxes can b made inline and inline into block;
legibility can be improved by controlling the width of boxes containing text;
create image borders and rounded borders (love these);



## Duckett JS book:

#### Review from Reading 02 - Chapter 2: “Basic JavaScript Instructions” (pp.70-73)
Arrays store >1 value (lists of it);
``` colors = ['white', 'black', 'custom']; ```
var itemThree = colors[2]; index is calling the 3rd file from list;
``` var numColors = colors.length ----- returns how many items in the list   ```

#### Chapter 4: “Decisions and Loops” from switch statements on (pp.162-182)


+ conditional statements allow your code 2 make decisions about wht 2 do next;
+ comparison operators (===,!==, ==, !=, <, >, <=, =>)
are used to compare 2 operands;
+ logical operators allow u 2 combine more than 1 set of comparison operators;
+ if....else statements allow you 2 run one set of code if a condition is true and another if it is false;
```Javascript
 if (score > 50) {
    alert('Congrats');
}   else {
    alert('you got this - try again');
} 
```
+ switch statements allow you 2 compare a value against possible outcomes (and also provides a default option if none match); page 164

+ data types can be coerced from one type to another;
+ all values evaluate to either truthy or falsy;
all values 0, empty, NaN, no assignment, or traditional false = falsey;
traditional true, numbers, string w content, fractions, 'true', '0', 'false'(strings) = truthy;

+ there are 3 types of loop:  
  +   for - when you know how many times the loop will run;

  +   while - loop will run for as long as a condition is true;
  +   do...while - will run the loop at least once - think re incarnation;

each repeats a set of statements;
+ keywords:
  + break - to stop the script and return where it came from;
  + continue ....?
+ loops & arrays
var colorsLength = colors.length; - the function length returns the number of items inside the array of colors [3];
I can then use a for loop to print/displayy/manipulate each item in the array/list (variable colors);
for loops use a counter that is initialized, checked for a condition, and updated - to then run a script/method/function/action
```Javascript
for (var i=0; i < 10; i++) {
  document.write(i+1);
} ======= 12345678910 - remember it starts at 0
```
loops consume resources - the interpreter stops loading the page and runs the loop-
issues of slow page load;
issues of infinite loop;
variables inside the loop updated with each iteration - so keep as much of them outside the loop (if they dont need to be updated);

