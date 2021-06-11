# Reading: `<Login />` and `<Auth />`

### Why is the Context API useful?

[source](https://www.loginradius.com/blog/async/react-context-api/#:~:text=The%20React%20Context%20API%20is,to%20state%20management%20using%20Redux.)
It is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.

### Can a component outside of a provider get its context?

[source](https://www.taniarascia.com/using-context-api-in-react/)
The most common way to access Context from a class component is via the static contextType . If you need the value from Context outside of render , or in a lifecycle method, you'll use it this way. The traditional way to retrieve Context values was by wrapping the child component in the Consumer

### What are some common use cases for using the Context API?

[source](https://blog.bitsrc.io/why-you-should-consider-the-new-context-api-in-react-a-deep-dive-d588b66c57b5)
Themes: setting UX themes; Multilingual applications; Authorization: setting user role and info

### Describe “Context Hell”

[source](https://reactjs.org/docs/react-api.html#cloneelement)
When you have too many nested contexts... This is similar to callback hell. Can be addressed with the 'React.cloneElement()' function which returns a new element using the initial 'element' as a starting point.

## Document the following Vocabulary Terms

### global state

[source](https://codeburst.io/global-state-with-react-hooks-and-context-api-87019cc4f2cf)
state which is declared at the app-level.

### global context

[source](https://reactjs.org/docs/context.html)
Context that is designed to share data that can be considered “global” for a tree of React components, such as the current authenticated user, theme, or preferred language.

### provider

[source](https://reactjs.org/docs/context.html#contextprovider)
component that allows consuming components to subscribe to context changes.

### consumer

[source](https://reactjs.org/docs/context.html#contextconsumer)
A React component that subscribes to context changes.

## Preview

Skim the following materials in preparation for the upcoming lecture. Note the following as you browse the material, and be prepared to participate in discussions during lecture

- Which 3 things had you heard about previously and now have better clarity on?
  context provider and consumer
- Which 3 things are you hoping to learn more about in the upcoming lecture/demo?
  auth in react, cookies, more on context provider and consumer
- What are you most excited about trying to implement or see how it works?
  auth in react, cookies, more on context provider and consumer

## Preparation Materials

### [what is role based access control?](https://digitalguardian.com/blog/what-role-based-access-control-rbac-examples-benefits-and-more)

### [react-cookies component](https://www.npmjs.com/package/react-cookies)

### [react-cookie library](https://www.npmjs.com/package/react-cookie)
