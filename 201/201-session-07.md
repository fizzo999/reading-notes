## Domain Modeling
Domain modeling is the process of creating a conceptual model in code for a specific problem. A model describes the various entities, their attributes and behaviors, as well as the constraints that govern the problem domain. An entity that stores data in properties and encapsulates behaviors in methods is commonly referred to as an object-oriented model.

A domain model that's articulated well can verify and validate the understanding of a specific problem among various stakeholders. As a communication tool, it defines a vocabulary that can be used within and between both technical and business teams.

Define a constructor and initialize properties
To define the same properties between many objects, you'll want to use a constructor function. Below is a table that summarizes a JavaScript representation of an EpicFailVideo object.

Property	Data	Type
epicRating	1 to 10	Number
hasAnimals	true or false	Boolean
Here's an implementation of the EpicFailVideo constructor function.
```
var EpicFailVideo = function(epicRating, hasAnimals) {
  this.epicRating = epicRating;
  this.hasAnimals = hasAnimals;
}

EpicFailVideo.prototype.generateRandom = function(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

EpicFailVideo.prototype.dailyLikes = function() {
  var viewers, percentage;

  viewers = this.generateRandom(10, 30) * this.epicRating;

  if (this.hasAnimals) {
    percentage = 0.75;
  } else {
    percentage = 0.40;
  }

  return Math.round(viewers * percentage);
}

EpicFailVideo.prototype.weeklyLikes = function() {
  var total = 0;

  for (var i = 0; i < 7; i++) {
    total += this.dailyLikes();
  }

  return total;
}

var parkourFail = new EpicFailVideo(7, false);
var corgiFail = new EpicFailVideo(4, true);

console.log(parkourFail.weeklyLikes());
console.log(corgiFail.weeklyLikes());
```



This is object-oriented programming in JavaScript at its most fundamental level.

The new keyword instantiates (i.e. creates) an object.
The constructor function initializes properties inside that object using the this variable.
The object is stored in a variable for later use.


### Summary
+ Domain modeling is the process of creating a conceptual model for a specific problem. And a domain model that's articulated well can verify and validate your understanding of that problem.
+ Here's some tips to follow when building your own domain models.
+ When modeling a single entity that'll have many instances, build self-contained objects with the same attributes and behaviors.
+ Model its attributes with a constructor function that defines and initializes properties.
+ Model its behaviors with small methods that focus on doing one job well.
+ Create instances using the new keyword followed by a call to a constructor function.
+ Store the newly created object in a variable so you can access its properties and methods from outside.
+ Use the this variable within methods so you can access the object's properties and methods from inside.

## From the Duckett HTML book:

### Chapter 6: “Tables” (pp.126-145)
A table represents info in a grid format.

the `<table>` element is used to add tables to a webpage.
a tabble is drawn out row by row. Each row is created with the `<tr>` element.
inside each row there are a number of cells represented by the `<td>` element. (or`<th scope="col" OR +"row">` if its a header).
YOu can make cells of a table span more than one row or column using the `<td rowspan="2">` and `<td rowcolumn="2">` attribute.
for long tables U can split the table into a `<thead>`,`<tbody>` and `<tfoot>`.


## From the Duckett JS Book:

### Chapter 3: “Functions, Methods, and Objects” (pp.106-144)

remember earlier literal notation ?
var hotel = {};

#### Creating an Object   Constructor Notation
```
var hotel = new Object();
hotel.name: 'Quay';
hotel.rooms: 40;
hotel.booked: 25;
hotel.gym: true;
hotel.roomTypes: ['twin', 'double', 'suite'];
hotel.checkAvailability = function() {
    return this.rooms - this.booked;
  };

to update a property
hotel.name = 'Park'; OR
hotel['name'] = 'Park';
to delete a property
delete hotel.name;
hotel.name = ''; // to clear value
```

#### creating many objects constructor notation
```
function Hotel(name, rooms, booked) {
  this.name = name;
  this.rooms = rooms;
  this.booked = booked;
  this.checkAvailability = function() {
    return this.room - this.booked;
  };
}
var quayHotel = new Hotel('Quay', 40, 25);
var parkHotel = new Hotel('Park', 140, 55);
```

#### This - keyword
its scope and meaning depends on how it is used;
local inside a function, inside an object, or global.

#### storing Data
+ in Variables
+ Arrays
+ individual Objects
+ multiple objects (object creator function)

Arrays are objects with index numbers `[0]` as individual properties - ARRAYS SEQUENCE IS IMPORTANT / STORED

Arrays inside an object
Objects inside an Array

#### Built in Objects
+ Browser Object
+ Document Object DOM
+ Global Javascript Object

![Browser Object](228.png)

![Document Object DOM](229.png)

![Global Javascript Object](230.png)

![Window Object](231.png)

![Document Object ](232.png)

![Global Object STRING](233.png)

![Global Object NUMBER](234.png)

![Global Object MATH](235.png)

![Global Object DATE](236.png)

### The Browser Object Model: the Window Object

The window object represents the current browser window or tab. It is the topmost object in the Browser Object Model, and it contains other objects that tell about browser.

| PROPERTY  | DESCRIPTION  |
|---|---|
| `window.innerHeight`  | Height of window (excluding browser chrome/user interface) (in pixels)  |
| `window.innerWidth` | Width of window (excluding browser chrome/user interface) (in pixels)  |
| `window.pageXOffset`  | Distance document has been scrolled horizontally (in pixels)  |
| `window.pageYOffset`  | Distance document has been scrolled vertically (in pixels)  |
| `window.screenX`  | X-coordinate of pointer, relative to top left corner of screen (in pixels)  |
| `window.screenY`  | Y-coordinate of pointer, relative to top left corner of screen (in pixels)|
| `window.location`  | Current URL of window object (or local file path)  |
| `window.document`  | Reference to document object, which is used to represent the current page contained in window  |
| `window.history`  | Reference to history object for browser window or tab, which contains details of the pages that have been viewed in that window or tab  |
|`window.history.length`| Number of items in hi story object for browser window or tab  |
| `window.screen` | Reference to screen object  |
| `window.screen.width`  | Accesses screen object and finds value of its width property (in pixels)  |
| `window.screen.height`  |Accesses screen object and finds value of its height property (in pixels)   |


| METHOD  | DESCRIPTION  |
|---|---|
| `window.a1ert()`  | Creates dialog box with message (user must click OK button to close it)  |
| `window.open()`  | Opens new browser window with URL specified as parameter|
| `window.print()`  | Tells browser that user wants to print contents of current page (acts like user has clicked a print option in the browser's user interface) |

### The Document Object Model: the Document Object   

Here are some properties of the document object, which tell you about the current page

| PROPERTY  | DESCRIPTION  |
|---|---|
| `document.title` | Title of current document  |
| `document.lastModified`  | Date on which document was last modified  |
| `document.URL`  | Returns string containing URL of current document  |
| `document.domain`  | Returns domain of current document  |  

The following are few of the methods that select content or update the content of a page 
| METHOD  | DESCRIPTION  |
|---|---|
| `document.write()`  | Writes text to document   |
| `document.getElementByld()`  | Returns element, if there is an element with the value of the id attribute that matches   |
| `document.querySe1ectorAll()`  | Returns list of elements that match a CSS selector, which is specified as a parameter  |
| `document.createElement()`  | Creates new element  |
| `document.createTextNode()`  | Creates new text node  |


### Global Objects: String Object   

These properties and methods are often used to work with text stored in variables or objects.

| METHOD  | DESCRIPTION  |
|---|---|
| `toUpperCase()`  |Changes string to uppercase characters   |
| `toLowerCase()`  | Changes string to lowercase characters  |
| `charAt()`  | Takes an index number as a parameter, and returns the character found at that position  |
| `indexOf()`  | Returns index number of the first time a character or set of characters is found within the string  |
| `lastIndexOf()`  | Returns index number of the last time a character or set of characters is found within the string  |
| `substring()`  | Returns characters found between two index numbers where the character for the first index number is included and the character for the last index number is not included  |
| `split()`  | When a character is specified, it splits the string each time it is found, then stores each individual part ih an array  |
| `trim()`  |Removes whitespace from start and end of string   |
| `replace()`  |Like find and replace, it takes one value that should be found, and another to replace it (by default, it only replaces the first match it finds)   |

### Global Objects: Math Object

The Math object has properties and methods for mathematical constants and functions.

| PROPERTY / METHOD  | DESCRIPTION  |
|---|---|
| `Math.PI` | Returns pi (approximately 3.14159265359)  |
| `Math.round()`  | Rounds number to the nearest integer  |
| `Math.sqrt(n)`  | Returns square root of positive number, e.g., Math.sqrt(9) returns 3  |
| `Math.ceil()` |Rounds number up to the nearest integer   |
| `Math.floor()`  | Rounds number down to the nearest integer  |
| `Math.random()`  | Generates a random number between 0 (inclusive) and 1(not inclusive)  |  

### GlobalObjects: Date Object (and Time)

In order to work with dates, we create an instance of the Data object.  

To create Data object, we can use the `Data()`object constructor. The syntax is the same for creating any object with a constructor function.  

By default, when we create a Data object it will hold today's date and the current time.

| METHOD  | DESCRIPTION  |
|---|---|
| `getDate()`/ `setDate()`  | Returns / sets the day of the month  |
| `getDay()`  | Returns the day of the week (0-6)  |
| `getFullYear()` / `setFullYear()`  | Returns / sets the year (4 digits)  |
| `getHours()`/ `setHours()`  | Returns / sets the hour (0-23)  |
| `getMilliseconds()`/ `setMilliseconds()`  | Returns / sets the milliseconds(0-999)  |
| `getMinutes()`/ `setMinutes()`  | Returns / sets the minutes(0-59)  |
| `getMonth()`/ `setMonth()`  | Returns / sets the month (0-11)  |
| `getSeconds()`/ `setSeconds()`  | Returns / sets the seconds (0-59)  |
| `getTime()` / `setTime()`  |Number of milliseconds since January 1, 1970, 00:00:00 UTC (coordinated Universal Time) and a negative number for any time before  |
| `getTimezoneOffset()`  |Returns time zone offset in mins for locale   |
| `toDateString()` | Returns "date" as a human-readable string  |
| `toTimeString()`  | Returns "time" as a human-readable string  |
| `toString()`  | Returns astring representing the specified date  |  

### Summary

+ Functions allow you to group a set of related statements together that represent a single task.
+ Functions can take parameters (info required to do their job) and may return a value.
+ An object is a series of variables and functions that represent sth from the world around you. The selection of their describing keys is about whats important to store/define/know/use and use on a webpage.
+ In an object variables are known as properties of the object, functions are known as methods of the object.
+ Web browsers implement objects that represent both the browserwindow and the document loaded into the browser window.
+ JavaScript has several built in objects, such as String, Number, Math, Date. Their properties and methods offer functionality that helps you write scripts. List on page 128ff.
+ Arrays and Objects can be used to create complex data sets and both can contain each other.
