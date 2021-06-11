# Reading Class 33: Context API

### Describe use cases for useMemo() and useReducer()

[source](https://maxrozen.com/understanding-when-use-usememo)
`useMemo()`You're noticing a component's render is frustratingly slow, and you're passing a calculation to an unknowable number of children, such as when rendering children using Array.map()... or Your app often becomes unresponsive because you're fetching a large amount of data, and having to transform it into a usable format

[source](https://reactjs.org/docs/hooks-reference.html#usereducer)
`useReducer()`is usually preferable to useState when you have complex state logic that involves multiple sub-values or when the next state depends on the previous one. useReducer also lets you optimize performance for components that trigger deep updates because you can pass dispatch down instead of callbacks.

### Why do custom hooks need the use prefix?

[source](https://reactjs.org/docs/hooks-custom.html)
So that you can tell at a glance that the rules of Hooks apply to it

### What do custom hooks usually do?

[source](https://www.wix.engineering/post/custom-react-hook-when-software-design-meets-react-hooks#:~:text=Custom%20hooks%20allow%20us%20to,use%20cases%20to%20reusable%20hooks.)
Custom hooks allow us to have cleaner functional components, remove logic from the UI layer, and prevent code duplication by bringing common use cases to reusable hooks.

### Using any list of custom hooks, research and name one that you think will be useful in your applications

[source]()
`useLocalStorage`,`useArray`, `useReducer`

### Describe how a hook that fetches API data might work

[source - Julien Edwards - go Julien ]()
need to set a loading state to flag when teh async is done - useEffect doesn't play with async -

## Document the following Vocabulary Terms

### reducer

[source](https://css-tricks.com/understanding-how-reducers-are-used-in-redux/#:~:text=A%20reducer%20is%20a%20function,so%20that%20they%20behave%20consistently.)
a function that determines changes to an application's state. It uses the action it receives to determine this change.

## Preview

Skim the following materials in preparation for the upcoming lecture. Note the following as you browse the material, and be prepared to participate in discussions during lecture

- Which 3 things had you heard about previously and now have better clarity on?
  custome hooks
- Which 3 things are you hoping to learn more about in the upcoming lecture/demo?
  useReducer
- What are you most excited about trying to implement or see how it works?
  useReducer

## Preparation Materials

- [context api](https://reactjs.org/docs/context.html)
- [hooks and context example](https://medium.com/swlh/snackbars-in-react-an-exercise-in-hooks-and-context-299b43fd2a2b)
- [react context links](https://github.com/diegohaz/awesome-react-context)
