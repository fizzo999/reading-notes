# Readings Class 38: Redux - Asynchronous Actions

### How granular should your reducers be?

[source](https://reactkungfu.com/2016/11/how-granular-are-your-redux-actions/)
When a change of any of those attributes would trigger a separate kind of action such as CHANGE_EMAIL or CHANGE_NAME. And sometimes such granularity is good and sometimes it might be much easier for reducers if they can distinguish between those two particular use-cases.

### Pro or Con – multiple reducers can “fire” when a commonly named action is dispatched

[source](https://redux.js.org/faq/actions#should-i-dispatch-multiple-actions-in-a-row-from-one-action-creator)
This is a nono, you should avoid dispatching several times synchronously in a row in the places where you're concerned about performance. There are a number of addons and approaches that can batch up dispatches as well.

### Name a strategy for preventing the above

[source](https://redux.js.org/faq/performance#wont-calling-all-my-reducers-for-each-action-be-slow)
If you actually are concerned about reducer performance, you can use a utility such as redux-ignore or reduxr-scoped-reducer to ensure that only certain reducers listen to specific actions. You can also use redux-log-slow-reducers to do some performance benchmarking.

## Document the following Vocabulary Terms

### store

a single object tree that contains the state of the app.

### combined reducers

helper function turns an object whose values are different reducing functions into a single reducing function you can pass to createStore.

## Preview

- Which 3 things had you heard about previously and now have better clarity on?
  redux - and thunk
- Which 3 things are you hoping to learn more about in the upcoming lecture/demo?
  implementing asyn api calls
- What are you most excited about trying to implement or see how it works?
  implementing asyn api calls and AUTH

## Preparation Materials

- [async actions](https://redux.js.org/advanced/asyncactions)
- [thunk middleware](https://github.com/reduxjs/redux-thunk)
- [redux thunk](https://alligator.io/redux/redux-thunk/)
