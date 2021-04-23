# Reading Class 03: Express REST API

### + Name 3 real world use cases where you’d want to change the request with custom middleware

- timestamp on the request
- Authentication
- fetch details about user from databse

### + True or false: The route handler is middleware?

False, a route handler is the piece of code that makes an HTTP request, such as GET, POST, PUT, and DELETE. Whereas a middleware function (by definition is in the middle) steps in between to check and/or alter the request (and even the response) object. Its third parameter next() is a function call to pass the interpreter onto the next middleware function or the final route handler function.

### + In what ways can a middleware function end the process and send data to the browser?

If a user for example tries to get access to data that they dont have access to. The middleware could send that message back to the browser propmpting the user to change the request.

### + At what point in the request lifecycle can you “inject” middleware?

after the request is made and being sent to the server. Middleware is often sketched to be in the middle of the request (upper) loop. But since it is part of node.js/express it really starts with the server receiving the request.

### + What can cause express to error with “Request headers sent twice, cannot start a second response”

[endyourif.com/cant-set-headers-after-they-are-sent/]

- Calling res.writeHead to early
- Calling res.redirect then setting more data
- Calling next after response has been returned

<hr>

## Document the following Vocabulary Terms

### + Middleware

[https://en.wikipedia.org/wiki/Middleware]

Middleware is a type of computer software that provides services to software applications beyond those available from the operating system. It can be described as "software glue"

### + Request Object

[https://docs.microsoft.com/en-us/previous-versions/iis/6.0-sdk/ms524948(v=vs.90)]

The Request object retrieves the values that the client browser passed to the server during an HTTP request.

### + Response Object

[https://docs.microsoft.com/en-us/previous-versions/iis/6.0-sdk/ms525405(v=vs.90)]

The Response object sends info back to the client browser from the server during an HTTP request.

### + Application Middleware

[http://expressjs.com/en/guide/using-middleware.html#middleware.application]

Bind application-level middleware to an instance of the app object by using the app.use() and app.METHOD() functions, where METHOD is the HTTP method of the request that the middleware function handles (such as GET, PUT, or POST) in lowercase.

### + Routing Middleware

[https://expressjs.com/en/guide/using-middleware.html#middleware.router]

Router-level middleware works in the same way as application-level middleware, except it is bound to an instance of express.Router().

### + Test Driven Development

[https://en.wikipedia.org/wiki/Test-driven_development]

Test-driven development (TDD) is a software development process relying on software requirements being converted to test cases before software is fully developed, and tracking all software development by repeatedly testing the software against all test cases. This is opposed to software being developed first and test cases created later.

### + Behavioral Testing

[https://en.wikipedia.org/wiki/Behavior-driven_development]

In software engineering, behavior-driven development (BDD) is an Agile software development process that encourages collaboration among developers, QA, and non-technical or business participants in a software project.It encourages teams to use conversation and concrete examples to formalize a shared understanding of how the application should behave.It emerged from test-driven development (TDD). Behavior-driven development combines the general techniques and principles of TDD with ideas from domain-driven design and object-oriented analysis and design to provide software development and management teams with shared tools and a shared process to collaborate on software development.

<hr>

## Preview

- Review: ES6 Classes (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)
- Using Express Routing (https://expressjs.com/en/guide/routing.html)
- Express Routing (https://scotch.io/tutorials/learn-to-use-the-new-router-in-expressjs-4)

1. Which 3 things had you heard about previously and now have better clarity on?

Middleware, TDD, Req Objects, and Res Objects.

2. Which 3 things are you hoping to learn more about in the upcoming lecture/demo?

middleware
TDD vs BDD

3. What are you most excited about trying to implement or see how it works?

ES6 classes and middleware
