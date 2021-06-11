# Readings Class 39: Redux - Additional Topics

### What’s the best practice for “pre-loading” data into the store (on application start) in a Redux application?

[](https://stackoverflow.com/questions/39356517/correct-way-to-pre-load-component-data-in-reactredux)
Fire off the asynchronous action in the lifecycle method (probably componentWillMount) of a Higher Order Component that wraps your app. You will not use the results of the API call directly in that component - it needs to be handled with a reducer that puts it into your app store. This will require you to use some sort of a thunk middleware to handle the asynchronous action. Then you will use mapStateToProps to simply pass it down to the component that renders the data.

### When using a thunk/async action that dispatches the actual action, which do you export from your reducer?

[]()
You export the thunk (async) action, which then dispatches the actual action locally.

### Document the following Vocabulary Terms

### middleware

[]()
code that runs between two functions - in the case of redux, code that is wrapped between our createStore() function and our connect() function.

### thunk

[]()
a kind of middlware that evaluates an input and if that input is a function, runs the action with store.dispatch and store.getState as arguments, other wise just runs next with the action as parameter. CLEARTEXT - if its a function. run the function if its a regular object - hand off the object;

### Preview

- Which 3 things had you heard about previously and now have better clarity on?
  The redux toolkit, mobx are new concepts. I haven't heard or used them previously.
- Which 3 things are you hoping to learn more about in the upcoming lecture/demo?
  AUTH in redux/react
- What are you most excited about trying to implement or see how it works?
  More on the thunk and async functions in redux - AUTH in redux/react

### Preparation Materials

- [Redux Toolkit (RTK)](https://redux-toolkit.js.org/)
- [Tutorial](https://redux-toolkit.js.org/tutorials/intermediate-tutorial)

### Alternative State Managers

- [MobX](https://mobx.js.org/getting-started.html)
- [HookState](https://hookstate.js.org/)
