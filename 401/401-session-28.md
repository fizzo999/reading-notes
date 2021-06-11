# Readings Class 28: Component Composition

### Can a parent component access the state of a child component?

[geeksforgeeks](https://www.geeksforgeeks.org/how-to-access-childs-state-in-react/)
Yes - we can access the childs state using Refs. You can assign a Refs for the child component in the parent component. then using Refs we can access the child’s state. You can also pass down a function to the child and the child calls the function with an argument from the child (data or state) and thereby float the data up to the parent.

### What can be passed along in a prop variable?

data (integers, arrays, objects, boolean) or functions/methods

### How can a child component “know” the state of another component?

[codecademy](https://discuss.codecademy.com/t/can-a-component-access-the-state-of-another-component/394157)
To obtain the state of another component, you can pass a component’s state to its child components as props. Also, you can have components share a common ancestor, and have them access the same state in a similar manner.

### Document the following Vocabulary Terms

### component props

[source](https://itnext.io/what-is-props-and-how-to-use-it-in-react-da307f500da0)
Props is a special keyword in React, which stands for properties and is being used for passing data from one component to another.

### component state

[w3schools](https://www.w3schools.com/react/react_state.asp#:~:text=React%20components%20has%20a%20built,%2C%20the%20component%20re%2Drenders.)
is managed within the component (similar to variables declared within a function). If a Component needs to alter one of its attributes at some point in time, that attribute should be part of its state, otherwise it should just be a prop for that Component. React components has a built-in state object. The state object is where you store property values that belongs to the component. When the state object changes, the component re-renders.

### application state

[stackoverflow](https://stackoverflow.com/questions/8102674/what-is-application-state/8102688)
state at which an application resides with regards to where in a program is being executed and the memory that is stored for the application. Application state refers to the current state of an application and is easily managed with the state management library, React. Redux is a useful tool to store global state for your application. Recently, application state management has been made even simpler with the addition of React hooks.

## Preview

Skim the following materials in preparation for the upcoming lecture. Note the following as you browse the material, and be prepared to participate in discussions during lecture

Which 3 things had you heard about previously and now have better clarity on?
props and state
Which 3 things are you hoping to learn more about in the upcoming lecture/demo?
react-if
What are you most excited about trying to implement or see how it works?
react if and testing

## Preparation Materials

- [react basics recap](https://medium.freecodecamp.org/these-are-the-concepts-you-should-know-in-react-js-after-you-learn-the-basics-ee1d2f4b8030)
- [props.children](https://codeburst.io/a-quick-intro-to-reacts-props-children-cb3d2fce4891)
- [composition vs inheritance](https://reactjs.org/docs/composition-vs-inheritance.html)
- [react testing library api example](https://testing-library.com/docs/react-testing-library/example-intro)

## Bookmark

- [react-if component](https://www.npmjs.com/package/react-if)
- [react-testing-library-async](https://testing-library.com/docs/dom-testing-library/api-async)
