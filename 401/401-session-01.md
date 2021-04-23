Review, Research, and Discussion
In your reading notes page for this class, provide answers to the following prompts. Cite any external sources

### 1. Describe (in plain English) what Array.map() does

it is an array method that takes each individual element of the array and uses it as an argument in a callback function that we get to define (nameless, arrow or named function) - the return value gets put into a new Array that is returned.

### 2. Describe (in plain English) what Array.reduce() does

it is an array method that again operates a callback function on each element in the array but with the difference being that it has a accumulator that stores the continuous build up of the function performed on each element usually called currentValue. It optionally also can have a starting point defined (like 0, '', [], {}) thereby forcing the initialization of the shape of the data with the starting value.

### 3. Provide code snippets showing how to use superagent() to fetch data from a URL and log the result

- With normal Promise .then() syntax
  ```
  superagent
  .get('http://someURL.com')
  .then(result => {
  console.log(result);
  })
  ```
- Again with async / await syntax

```
  async function getSomeData() {
  const someData = await superagent.get('http://someURL.com');
  console.log(someData);
  }
```

### 4. Explain promises as though you were mentoring a Code 301 level student

Javascript is single threaded. Only one execution of command at a time. A Promise allows for a program to 'outsource' a function, usually an outside call like API, or DB, and keep on working on the following code. When the the callback of the promise returns it is then either resolved or rejected. Like when you place an order at a coffee shop, or in a bar/restaurant. You place your order and you can keep doing things (like chat with your friends, make a new newtorking contact or check your emails, while your order is being processed).

### 5. Are all callback functions considered to be Asynchronous? Why or Why Not?

[stackoverflow - https://stackoverflow.com/questions/21884258/are-all-node-js-callback-functions-asynchronous](https://stackoverflow.com/questions/21884258/are-all-node-js-callback-functions-asynchronous)
**_are all Node.js callback functions made asynchronous/non-blocking?_**

No. Only I/O (like external / API calls - or DB calls) is usually asynchronous, but many other callbacks are synchronous. **_Always check the docs._**. Callbacks invoke other functions whereas Asynchronous functions await a Promise that can either lead to being resolved or rejected.

Examples of async functions:

- Async Filesystem access (they have sync counterparts without callbacks, though)
- Timers (setTimeout)
- process.nextTick, setImmediate
- most database connections
- network connections
- Promises

Examples of sync callbacks:

- EventEmitter (depends on when the event is fired)
- Array iteration methods like forEach
- Array sort comparator callbacks
- String replace match callbacks
