# Readings Class 06: Authentication

- ### Explain what a “Singleton” is (in Computer Science terms).

[wikipedia](https://en.wikipedia.org/wiki/Singleton_pattern)

“A software design pattern that restricts the installation of a class to a single instance”

- ### Explain how the Singleton pattern can be used with Node modules, specifically with classes

A Singleton Class is defined as only one instance of the class is created in the complete execution of a program or project. It is used where only a single instance of a class is required to control the action throughout the execution. A singleton class shouldn’t have multiple instances in any case and at any cost.

- ### If you were tasked with building a middleware system like Express uses, what approach might you take to construct/operate it?

first figure out what I need my middleware to do. Authorization, Logging, data scrubbing,... Then whiteboard out a system.

<hr>

## Document the following Vocabulary Terms

- ### Router Middleware

[medium](https://medium.com/@selvaganesh93/how-node-js-middleware-works-d8e02a936113#:%7E:text=A%20middleware%20is%20basically%20a,once%20your%20middleware%20code%20completed.)

Router is used to manage incoming requests coming from the middleware. It routes your requests to the correct handler/code.

- ### Dynamic Module Loading

[wikipedia](https://en.wikipedia.org/wiki/Dynamic_loading#:~:text=Dynamic%20loading%20is%20a%20mechanism,unload%20the%20library%20from%20memory.)

“A mechanism by which a computer program can, run, load a library (or other binary) into memory, retrieve the addresses of functions and variables contained in the library, execute those functions or access those variables, and unload the library from memory.”

- ### Singleton Pattern

[wikipedia](https://en.wikipedia.org/wiki/Singleton_pattern#:~:text=In%20software%20engineering%2C%20the%20singleton,mathematical%20concept%20of%20a%20singleton.)

In software engineering, the singleton pattern is a software design pattern that restricts the instantiation of a class to one "single" instance. This is useful when exactly one object is needed to coordinate actions across the system. The term comes from the mathematical concept of a singleton

- ### CRUD -> REST Method Matches

Create -> POST
Read -> GET
Update -> PUT
Delete -> DELETE

- ### Mock Testing

[devopedia](https://devopedia.org/mock-testing#:~:text=Mock%20testing%20is%20an%20approach,behaviour%20of%20the%20real%20ones.)

an approach to unit testing that lets you make assertions about how the code under test is interacting with other system modules.

## Preview - Skim the following materials in preparation for the upcoming lecture. Note the following as you browse the material, and be prepared to participate in discussions during lecture

- ### Which 3 things had you heard about previously and now have better clarity on?
  singleton, crud, authorization
- ### Which 3 things are you hoping to learn more about in the upcoming lecture/demo?
  hashing, encrytption, authorization, password rest
- ### What are you most excited about trying to implement or see how it works?
  hashing, encrytption, authorization, password rest

<hr>

### Preparation Materials

- #### [Securing Passwords](https://thehackernews.com/2014/04/securing-passwords-with-bcrypt-hashing.html)
- #### [Basic Auth](https://en.wikipedia.org/wiki/Basic_access_authentication)
- #### [OWASP auth cheatsheet](https://cheatsheetseries.owasp.org/cheatsheets/Authentication_Cheat_Sheet.html)
- #### [bcrypt docs](https://www.npmjs.com/package/bcrypt)
