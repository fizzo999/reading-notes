# Reading Class 27: Props and State

### Does a deployed React application require a server?

No, you can run npm build in a create-react-app in order to compile all react code into a build directory with a static index.html page.

### Why do we prefer to test a React application at the behavior rather than the unit level?

React being used to create a front end UI, it is better to test the application using behavior driven development. When developing a React application each functionality maybe important. However, being a UI it is possible to create a more user friendly application using behvaioral driven test which containts context or the starting state. Followed by the event which is what the user does and the outcome being the expected result.

### What does `npm run build` do?

[source](https://create-react-app.dev/docs/deployment#:~:text=You%20don't%20necessarily%20need,an%20existing%20server%20side%20app.)
Creates a build directory with a production build of your app.

### Describe the actual composition / architecture of a React application

[source](https://dzone.com/articles/a-detailed-study-of-flux-the-reactjs-application-a)
React - a popular front-end technology like AngularJS - is a Javascript framework, but it only works with the View layer, which means you have only the V in the MVC - Model-View-Controller - architecture. React gives you the template language and a few function hooks to render HTML.

## Document the following Vocabulary Terms

### BDD

[medium](https://medium.com/javascript-scene/behavior-driven-development-bdd-and-functional-testing-62084ad7f1f2)
Behaviour driven development is an agile software development process that encourages collaboration among developers, QA, and non-technical or business participants in a software project. It encourages teams to use conversation and concrete examples to formalize a shared understanding of how the application should behave

### Acceptance Tests

[wiki](https://en.wikipedia.org/wiki/Acceptance_testing)
testing with respect to user requirements, based on acceptance criteria

### mounting

[source](https://www.freecodecamp.org/news/how-to-understand-a-components-lifecycle-methods-in-reactjs-e1a609840630/)
Mounting is the phase in which our React component mounts on the DOM (i.e., is created and inserted into the DOM). This method is called just before a component mounts on the DOM or the render method is called. After this method, the component gets mounted.

### build

[source](https://create-react-app.dev/docs/deployment#:~:text=You%20don't%20necessarily%20need,an%20existing%20server%20side%20app.)
a static compilation of all files in a react project, minified and combined for deployment. npm run build creates a build directory with a production build of your app

## Preview

Skim the following materials in preparation for the upcoming lecture. Note the following as you browse the material, and be prepared to participate in discussions during lecture

- Which 3 things had you heard about previously and now have better clarity on?
  state and props
- Which 3 things are you hoping to learn more about in the upcoming lecture/demo?
  state props and functional components
- What are you most excited about trying to implement or see how it works?
  deploy on github pages ????

## Preparation Materials

- ### [setState explained](https://css-tricks.com/understanding-react-setstate/)
- ### [handling events](https://facebook.github.io/react/docs/handling-events.html)
- ### [forms](https://facebook.github.io/react/docs/forms.html)
- ### [state and lifecycle](https://facebook.github.io/react/docs/state-and-lifecycle.html)
- ### [components and props](https://facebook.github.io/react/docs/components-and-props.html)
- ### [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- ### [RTL Testing Example](https://thomlom.dev/beginner-guide-testing-react-apps/)

## Bookmark

- ### [Roles Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques#Roles)
