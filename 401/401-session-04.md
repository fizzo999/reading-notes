# Reading Notes Class 04 - Data Modeling

### + Name 3 advantages to Test Driven Development

[https://www.codica.com/blog/test-driven-development-benefits/](https://www.codica.com/blog/test-driven-development-benefits/)

1. Better program design and higher code quality
2. Detailed project documentation
3. TDD reduces the time required for project development

### + In what case would you need to use `beforeEach()` or `afterEach()` in a test suite?

[https://jestjs.io/docs/setup-teardown](https://jestjs.io/docs/setup-teardown)

They are methods to induce and remove through invoking a function call a change of your data and/or programming setup (put fake data, test it remove it - or put console.spy test and remove it). These methods are great when you need to do something repeatedly for lot’s of tests. You can invoke other functions inside a beforeEach or afterEach as a callback to test things asynchronously.

### + What is one downside of Test Driven Development

[https://subscription.packtpub.com/book/application_development/9781785880735/1/ch01lvl1sec12/disadvantages-of-tdd](https://subscription.packtpub.com/book/application_development/9781785880735/1/ch01lvl1sec12/disadvantages-of-tdd)

- TDD is time consuming and costly since a significant time is spend on refactoring and rewriting code.
- TDD focuses on passing tests which is not exactly the same as correctness. incorrect test setup can lead to bad results not being noticed (yay we passed the test, but the product doesnt meet requirements)
- Tests got to be maintained when requirements change

### + What’s the primary difference between ES6 Classes and Constructor/Prototype Classes?

[https://www.toptal.com/javascript/es6-class-chaos-keeps-js-developer-up](https://www.toptal.com/javascript/es6-class-chaos-keeps-js-developer-up)

A ES6 class defines a type that can be instantiated while prototype classes is an object instance. The best way to think of this is that the ES6 class will be the same same as its prototype, not a copy.

### + Why REST?

[https://www.mulesoft.com/resources/api/restful-api#:~:text=One%20of%20the%20key%20advantages,the%20correct%20implementation%20of%20hypermedia.](https://www.mulesoft.com/resources/api/restful-api#:~:text=One%20of%20the%20key%20advantages,the%20correct%20implementation%20of%20hypermedia.)

One of the key advantages of REST APIs is that they provide a great deal of flexibility. Data is not tied to resources or methods, so REST can handle multiple types of calls, return different data formats and even change structurally with the correct implementation of hypermedia. This flexibility allows developers to build an API that meets your needs while also meeting the needs of very diverse customers.

<hr>

### Document the following vocabulary words

### + functional programming:

[https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0](https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0)

process of building software by composing pure functions, avoiding shared state, mutable data, and side-effects.

### + object-oriented programming:

[https://www.educative.io/blog/object-oriented-programming](https://www.educative.io/blog/object-oriented-programming)

programming paradigm that relies on the concept of classes and objects. It is used to structure a software program into simple, reusable pieces of code blueprints (usually called classes), which are used to create individual instances of objects.

### + class:

[https://www.javascripttutorial.net/es6/javascript-class/](https://www.javascripttutorial.net/es6/javascript-class/)

abstract blueprint used to create more objects

### + super:

[https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/super](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/super)

Super is used to gain access and call functions on an object’s parent.

### + this:

[https://www.w3schools.com/js/js_this.asp](https://www.w3schools.com/js/js_this.asp)

This changes depending how a function is called. But typically refers to the object it belongs to.

### + Test Driven Development:

[https://www.codica.com/blog/test-driven-development-benefits/](https://www.codica.com/blog/test-driven-development-benefits/)

software development practice enabling developers to create proper specifications about how their code should be written and implemented.

### + jest:

[https://jestjs.io/](https://jestjs.io/)

framework used for testing

### + continuous integration:

[https://www.cloudbees.com/continuous-delivery/continuous-integration](https://www.cloudbees.com/continuous-delivery/continuous-integration)

This is where developers frequently integrate code into a shared repo. This can be done multiple times a day.

### + REST:

[https://en.wikipedia.org/wiki/Representational_state_transfer](https://en.wikipedia.org/wiki/Representational_state_transfer)

Representational state transfer. It is an application programming interface. GET, POST, PUT, DELETE

### + Data Model:

[https://en.wikipedia.org/wiki/Data_model](https://en.wikipedia.org/wiki/Data_model)

organizes elements of data and standardizes how they relate to one another and to the properties of real-world entities

<hr>

### Which 3 things had you heard about previously and now have better clarity on?

- TDD
- class, super
- REST, CRUD

### Which 3 things are you hoping to learn more about in the upcoming lecture/demo?

- MongoDB
- Functional programming

### What are you most excited about trying to implement or see how it works?

- **_MongoDb_**
- **_MongoDb - deployed with Atlas_**
- **_how to make ROUTES dynamic (so we don`t have to have a seperate page with pretty much the same code for different routes)_**

### SQL or NO SQL

- https://www.youtube.com/watch?v=ZS_kXvOeQ5Y

- https://www.youtube.com/watch?v=pWbMrx5rVBE

- https://www.thegeekstuff.com/2014/01/sql-vs-nosql-db/?utm_source=tuicool
- https://highlyscalable.wordpress.com/2012/03/01/nosql-data-modeling-techniques/
