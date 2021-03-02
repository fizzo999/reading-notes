# What Is Node.js?

***resources***
https://www.sitepoint.com/an-introduction-to-node-js/

Node.js® is a JavaScript runtime built on Chrome’s V8 JavaScript engine.

Node.js is an event-based, non-blocking, asynchronous I/O runtime that uses Google’s V8 JavaScript engine and libuv library.

## Node Is Built on Google Chrome’s V8 JavaScript Engine
The V8 engine is the open-source JavaScript engine that runs in Google Chrome and other Chromium-based web browsers, including Brave, Opera, and Vivaldi. It was designed with performance in mind and is responsible for compiling JavaScript directly to native machine code that your computer can execute.

However, when we say that Node is built on the V8 engine, we don’t mean that Node programs are executed in a browser. They aren’t. Rather, the creator of Node ***(Ryan Dahl)*** took the V8 engine and enhanced it with various features, such as a file system API, an HTTP library, and a number of operating system–related utility methods.

This means that Node.js is a program we can use to execute JavaScript on our computers. In other words, it’s a JavaScript runtime.

Node.js Has Excellent Support for Modern JavaScript

#### Introducing npm, the JavaScript Package Manager
As I mentioned earlier, Node comes bundled with a package manager called npm. To check which version you have installed on your system, type npm -v.

#### Installing a Package Globally
Open your terminal and type the following:

`npm install -g jshint`

#### Installing a Package Locally
We can also install packages locally to a project, as opposed to globally, on our system. Create a test folder and open a terminal in that directory. Next type this:

`npm init -y`
This will create and auto-populate a package.json file in the same folder. Next, use npm to install the lodash package and save it as a project dependency:

`npm install lodash --save`

#### Working with the package.json File
If you look at the contents of the test directory, you’ll notice a folder entitled `node_modules`. This is where npm has saved lodash and any libraries that lodash depends on. The node_modules folder shouldn’t be checked in to version control, and can, in fact, be re-created at any time by running `npm install` from within the project’s root.

If you open the `package.json` file, you’ll see lodash listed under the dependencies field. By specifying your project’s dependencies in this way, you allow any developer anywhere to clone your project and use npm to install whatever packages it needs to run.

#### What Is Node.js Used For?
Now that we know what Node and npm are and how to install them, we can turn our attention to the first of their common uses: installing (via npm) and running (via Node) various build tools — designed to automate the process of developing a modern JavaScript application.

These build tools come in all shapes and sizes, and you won’t get far in a modern JavaScript landscape without bumping into them. They can be used for anything from bundling your JavaScript files and dependencies into static assets, to running tests, or automatic code linting and style checking.

#### Node.js Lets Us Run JavaScript on the Server
Next we come to one of the biggest use cases for Node.js — running JavaScript on the server. This isn’t a new concept, and was first attempted by Netscape way back in 1994. Node.js, however, is the first implementation to gain any real traction, and it provides some unique benefits, compared to traditional languages. Node now plays a critical role in the technology stack of many high-profile companies. Let’s have a look at what those benefits are.

#### The Node.js Execution Model
In very simplistic terms, when you connect to a traditional server, such as Apache, it will spawn a new thread to handle the request. In a language such as PHP or Ruby, any subsequent I/O operations (for example, interacting with a database) block the execution of your code until the operation has completed. That is, the server has to wait for the database lookup to complete before it can move on to processing the result. If new requests come in while this is happening, the server will spawn new threads to deal with them. This is potentially inefficient, as a large number of threads can cause a system to become sluggish — and, in the worst case, for the site to go down. The most common way to support more connections is to add more servers.

Node.js, however, is single-threaded. It’s also event-driven, which means that everything that happens in Node is in reaction to an event. For example, when a new request comes in (one kind of event) the server will start processing it. If it then encounters a blocking I/O operation, instead of waiting for this to complete, it will register a callback before continuing to process the next event. When the I/O operation has finished (another kind of event), the server will execute the callback and continue working on the original request. Under the hood, Node uses the libuv library to implement this asynchronous (that is, non-blocking) behavior.

Node’s execution model causes the server very little overhead, and consequently it’s capable of handling a large number of simultaneous connections. The traditional approach to scaling a Node app is to clone it and have the cloned instances share the workload. Node.js even has a built-in module to help you implement a cloning strategy on a single server.

Let’s have a quick look at a “Hello, World!” example HTTP server:

```Javascript
const http = require('http');

http.createServer((request, response) => {
  response.writeHead(200);
  response.end('Hello, World!');
}).listen(3000);

console.log('Server running on http://localhost:3000');
```

To run this, copy the code into a file named hello-world-server.js and run it using node hello-world-server.js. Open up a browser and navigate to `http://localhost:3000` to see “Hello, World!” displayed in the browser.

Now let’s have a look at the code.

We start by requiring Node’s native HTTP module. We then use its createServer method to create a new web server object, to which we pass an anonymous function. This function will be invoked for every new connection that’s made to the server.

The anonymous function is called with two arguments (request and response). These contain the request from the user and the response, which we use to send back a 200 HTTP status code, along with our “Hello World!” message.

Finally, we tell the server to listen for incoming requests on port 3000, and output a message to the terminal to let us know it’s running.

Obviously, there’s a lot more to creating even a simple server in Node (for example, it’s important to handle errors correctly).




[Back to ReadMe](../README.md)