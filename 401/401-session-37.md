# Readings Class 37: Redux - Combined Reducers

### Why choose Redux instead of the Context API for global state?

[source](https://betterprogramming.pub/why-use-redux-when-we-have-context-api-95be70581148)
Redux works around the idea of having a central state called a store. To change the state, a component has to dispatch an action. The action is then passed on to the reducer, which changes the state of our application. Honestly they are comperable in my small experience so dfar. I think contextAPI is easier to use (dont have to write action functions and reducers for it...)

### What is the purpose of a reducer?

[source](https://css-tricks.com/understanding-how-reducers-are-used-in-redux/#:~:text=A%20reducer%20is%20a%20function,so%20that%20they%20behave%20consistently.)
A reducer is a function that determines changes to an application’s state. It uses the action it receives to determine this change. We have tools, like Redux, that help manage an application’s state changes in a single store so that they behave consistently

### What does an action contain?

[source](https://www.tutorialspoint.com/redux/redux_actions.htm)
An action carries a payload of information from your application to store. An action is an OBJECT with a type and a payload. It comes in the form of a function that can be called with an argument to set the payload of the object that then gets passed to the reducer to change the state and that gets passed to the store and from there to the Provider and through that as store=store to all the components who still have to import it through connect and mapSateToProps

### Why do we need to copy the state in a reducer?

[source](https://www.pluralsight.com/guides/how-to-write-redux-reducer)
The reducer uses a switch statement to determine which type of action it’s dealing with. If there is an unknown action, then it should return the state, so that the application doesn’t lose its current state.

### Document the following Vocabulary Terms

### immutable state

[source]()
Immutable state is state that cannot be changed. You only make a copy (and modify that copy of the state.) and with that you can time travel.

### time travel in redux

[source](https://medium.com/the-web-tub/time-travel-in-react-redux-apps-using-the-redux-devtools-5e94eba5e7c0)
The Redux DevTools records dispatched actions and the state of the Redux store at every point in time. This makes it possible to inspect the state and travel back in time to a previous application state without reloading the page or restarting the app.

### action creator

[source](https://www.educative.io/courses/building-teslas-battery-range-calculator-with-react-and-redux/7nVVPYOGVPr)
An action creator is a function that literally creates an action object. In Redux, action creators simply return an action object and pass the argument value if necessary.

### reducer

[source](https://css-tricks.com/understanding-how-reducers-are-used-in-redux/#:~:text=A%20reducer%20is%20a%20function,receives%20to%20determine%20this%20change.&text=Redux%20relies%20heavily%20on%20reducer,to%20execute%20the%20next%20state.)
A reducer is a function that determines changes to an application’s state.

### dispatch

[source](https://react-redux.js.org/using-react-redux/connect-mapdispatch#:~:text=dispatch%20is%20a%20function%20of,connect%20does%20it%20for%20you.)
Dispatch is a function of the Redux store. You call store. dispatch to dispatch an action. This is the only way to trigger a state change.

## Preview

Skim the following materials in preparation for the upcoming lecture. Note the following as you browse the material, and be prepared to participate in discussions during lecture

- Which 3 things had you heard about previously and now have better clarity on?
  action, reducer and dispatch function
- Which 3 things are you hoping to learn more about in the upcoming lecture/demo?
  implementation of the reducer for auth
- What are you most excited about trying to implement or see how it works?
  implementation of the reducer for auth

## Preparation Materials

- [Multiple Reducers Example](https://www.youtube.com/watch?v=gBER4Or86hE)
- [Redux Docs: Using Combined Reducers](https://redux.js.org/recipes/structuring-reducers/using-combinereducers/)
- [Redux Docs: Combined Reducer Syntax](https://redux.js.org/api/combinereducers/)
