# Reading Class 31: Hooks API

### Why do we not need more .html pages in a multi-page React app?

react is a SPA single page application that renders a virtual DOM by attaching to Div id="root" and simply re renders individual pages/page components. It even manipoulates the History object of the browser to inject the generated path to the "html page visited".

### If we wanted a component to show up on every page, where would we put it and why?

### Outside the <BrowserRouter/>

Inside the <BrowserRouter />, outside a <Route />
Inside a <Route />
Inside the <BrowserRouter />, outside a <Route />. BrowserRouter wraps the whole page, so you would have recurring components like headers and footers in here along with some sort of app or main component that holds your 'subpages'

### What does props.children contain?

[source](https://www.semicolonworld.com/question/71475/what-is-this-props-children-and-when-you-should-use-it)
The React docs say that you can use props.children on components that represent ‘generic boxes’ and that don’t know their children ahead of time. this.props.children is used to display whatever you include between the opening and closing tags when invoking a component.

## Document the following Vocabulary Terms

### Composition

[source](https://formidable.com/blog/2021/react-composition/#:~:text=What%20Is%20React%20Composition%3F&text=In%20terms%20of%20refactoring%2C%20React,structure%20and%20complete%20your%20application.)
React composition is a pattern that can be used to break a complex component down to smaller components, and then composing those smaller components to structure and complete your application.

### Children / Child Components

[source](https://www.semicolonworld.com/question/71475/what-is-this-props-children-and-when-you-should-use-it)
The React docs say that you can use props.children on components that represent ‘generic boxes’ and that don’t know their children ahead of time. this.props.children is used to display whatever you include between the opening and closing tags when invoking a component.

### Hash Routing

[source](https://stackoverflow.com/questions/51974369/what-is-the-difference-between-hashrouter-and-browserrouter-in-react)
It uses the hash in the URL to render the component.

### Link Routing

[source](https://www.freecodecamp.org/news/react-router-tutorial/)
To add the link in the menu, use the <NavLink /> component by react-router-dom . The NavLink component provides a declarative way to navigate around the application. It is similar to the Link component, except it can apply an active style to the link if it is active.

## Preview

Skim the following materials in preparation for the upcoming lecture. Note the following as you browse the material, and be prepared to participate in discussions during lecture

- Which 3 things had you heard about previously and now have better clarity on?
  routing in react
- Which 3 things are you hoping to learn more about in the upcoming lecture/demo?
  hooks
- What are you most excited about trying to implement or see how it works?
  hooks

## Preparation Materials

- [making sense of hooks](https://medium.com/@dan_abramov/making-sense-of-react-hooks-fdbde8803889)
- [the state hook](https://reactjs.org/docs/hooks-state.html)
- [hooks api](https://reactjs.org/docs/hooks-overview.html)
- [hooks api reference](https://reactjs.org/docs/hooks-reference.html)
- [effects hook](https://reactjs.org/docs/hooks-effect.html)
