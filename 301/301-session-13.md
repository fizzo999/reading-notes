# Reading
[Sending Form Data - MDN](https://developer.mozilla.org/en-US/docs/Learn/HTML/Forms/Sending_and_retrieving_form_data)
### Additional Resources
[HTML5 Forms Reference](https://htmlreference.io/forms/)
Pay special attention to the “action” and “method” attributes.
### Videos
[Video Series on Styling HTML5 Forms](https://www.youtube.com/playlist?list=PL4cUxeGkcC9g5_p_BVUGWykHfqx6bb7qK)
Note that this video series is approximately 40 minutes long. You do not need to watch every video from the series, but should keep it handy for reference as you style your book app during lab time.

### Sending Form Data
The objective of this doc is to understand what happens to data in a form when you hit submit.

### Client > server architecture

Client (Browser) sends a request to a server using the HTTP protocol
Server answers request
Forms are a convenient way to configure HTTP requests and send data from the client to the server

## Forms in HTML5
Sending form data - MDN
On the client side: defining how to send the data
The <form> element defines how the data will be sent. All of its attributes are designed to let us configure the request to be sent when a user hits a submit button. The two most important attributes are action and method.


#### Most important form attributes are action and method

##### The action attribute
The action attribute defines where the data gets sent. Its value must be a valid relative or absolute URL. If this attribute isn't provided, the data will be sent to the URL of the page containing the form — the current page.
```html
<!-- the data is sent to an absolute URL  -->

<form action="https://example.com">

<!-- relative URL — the data is sent to a different URL on the same origin -->
<form action="/somewhere_else">
```
The names and values of the non-file form controls are sent to the server as name=value pairs joined with ampersands.
The action value should be a file on the server that can handle the incoming data, including ensuring server-side validation.
The server then responds, generally handling the data and loading the URL defined by the action attribute, causing a new page load (or a refresh of the existing page, if the action points to the same page).


##### Method attribute: most commonly GET and POST
The method attribute defines how data is sent. The HTTP protocol provides several ways to perform a request; HTML form data can be transmitted via a number of different methods, the most common being the GET method and the POST method.

##### The GET method
GET: hey server, get this data! Never use this for sending passwords

used by the browser to ask the server to send back a given resource.
if a form is sent using this method the data sent to the server is appended to the URL.

##### The POST method
method the browser uses to talk to the server when asking for a response that takes into account the data provided in the body of the HTTP request
if a form is sent using this method, the data is appended to the body of the HTTP request

POST: hey server, take a look at this data then send it back to me! Best for sending large amounts of data

To send files, take these extra steps:
+ set method to POST
+ set value of `enctype="multipart/form-data"`
+ include `<input type="file">`

Security is important when sending data to a server. Be suspicious. Don't trust user or user content. Always check and sanatize your data. Escape special characters. Limit the amount of incoming data. Only allow what is necessary
Sandbox uploaded files.



[Back to ReadMe](../README.md)