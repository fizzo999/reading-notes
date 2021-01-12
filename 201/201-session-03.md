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
where as the second one (function expression) cannot