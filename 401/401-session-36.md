# Reading Class 36: Application State with Redux

### What are the advantages of storing tokens in “Cookies” vs “Local Storage”

[thank you Dan Engel for such a brilliant concise summary !!!]()

1. Local Storage

- Pros:
  It’s convenient.
  It’s pure JavaScript and it’s convenient. If you don’t have a back-end and you’re relying on a third-party API, you can’t always ask the third-party API to set a specific cookie for your site.
  Works with APIs that require you to put your access token in the header, like this: Authorization Bearer ${access_token}.
- Cons:
  It’s vulnerable to XSS attacks.
  An XSS attack happens when an attacker can run JavaScript on your website. This means that the attacker can take the access token that you stored in your localStorage. An XSS attack can happen from a third-party JavaScript code included in your website like React, Vue, jQuery, Google Analytics, etc. It's almost impossible not to include any third-party libraries on your site.

2. Cookies

- Pros:
  The cookie is not accessible via JavaScript; hence, it is not as vulnerable to XSS attacks as localStorage.
  If you’re using httpOnly and secure cookies this means that your cookies cannot be accessed using JavaScript so even if an attacker can run JS on your site, they can't read your access token from the cookie.
  It’s automatically sent in every HTTP request to your server.
- Cons:
  Depending on the use case, you might not be able to store your tokens in the cookies.
  Cookies have a size limit of 4KB. Therefore, if you’re using a big JWT Token, storing in the cookie is not an option.
  There are scenarios where you can’t share cookies with your API server or the API requires you to put the access token in the authorization header. In this case, you won’t be able to use cookies to store your tokens.

### Explain 3rd party cookies.

[]()
Third-party cookies are cookies that are set by a website other than the one you are currently on. For example, you can have a "Like" button on your website which will store a cookie on a visitor's computer, that cookie can later be accessed by Facebook to identify visitors and see which websites they visited.

### How do pixel tags work?

[]()
A tag (or often called a pixel) is a short snippet of javascript (code) that does something on your website. In the context of marketing/advertising tags and pixels, they are often collecting some information about the visitor to a website and their behavior on the site.

### Document the following Vocabulary Terms

### cookies

[resource](https://resources.marketingeffectiveness.nielsen.com/blog/cookies-tags-pixels-tracking-customer-engagement)
They are pieces of code that web servers use to put information on a user’s browser, and then retrieve that information at a later time for various uses.

### authorization

It’s a process of granting or denying access to resources. Mostly it happens after authentication.

### access control

[resource](https://medium.com/teamzerolabs/rbac-vs-abac-in-node-js-backend-321a426faae2#:~:text=Role%2DBased%20Access%20Control%20is,can%20edit%20their%20own%20post.)
Access Control is a way of controlling what resources a user can create/read/update/delete given their role(s)

### conditional rendering

[resource](https://www.digitalocean.com/community/tutorials/7-ways-to-implement-conditional-rendering-in-react-applications)
The ability to render different user interface (UI) markup if a condition is true or false. In React, it allows us to render different elements or components based on a condition. This concept is applied often in the following scenarios: Rendering external data from an API

## Preview

- Which 3 things had you heard about previously and now have better clarity on?
  conditional rendering
- Which 3 things are you hoping to learn more about in the upcoming lecture/demo?
  cookies and tokens in react/redux
- What are you most excited about trying to implement or see how it works?
  cookies and tokens in react/redux

## Preparation Materials

- [Dan Abramov Redux Tutorials](https://egghead.io/courses/getting-started-with-redux)
- [Bookmark](https://medium.freecodecamp.org/understanding-redux-the-worlds-easiest-guide-to-beginning-redux-c695f45546f6)
- [worlds easiest guide to redux](https://medium.freecodecamp.org/understanding-redux-the-worlds-easiest-guide-to-beginning-redux-c695f45546f6)
- [testing reducers](https://medium.com/@netxm/testing-redux-reducers-with-jest-6653abbfe3e1)
- [Redux Docs](https://redux.js.org/)
