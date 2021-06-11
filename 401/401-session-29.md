# Readings Class 29: Routing

### Do child components have direct access to props/state from the parent?

Yes, child components have direct access to props/state passed from the parent component, but only when the parent passes them down to the child component

### When a component “wraps” another component, how does the child component’s output get rendered?

```html
<main>
  <content />
</main>
```

The child component will be rendered where it is being rendered within the parent component.[credit: Ellis Yoo ]

```
class Parent extends React.Component {
  render(){
    return (
      <div className = "wrapper">
        <h1>{this.props.title}</h1>
        {this.props.child}
      </div>
    )
  }
}

class Child extends React.Component {
  render(){
    return (
      <p>{this.props.body}</p>
    )
  }
}

class App extends React.Component {
  render(){
    return (
      <>
        <Parent title="this is parent"}>
          <Child body="this is child/>
        </Parent>
      </>
    )
  }
}
The following code above produces this markup

<div class="wrapper">
  <h1>this is parent</h1>
  <p>this is child</p>
</div>
```

### Can a component, such as <Content />, which is a child also be used as a standalone component elsewhere in the application?

Yes, you can have reuse components in other places in your application.

### What trick can a parent use to share all props with it’s children

[medium](https://medium.com/coding-at-dawn/how-to-pass-all-props-to-a-child-component-in-react-bded9e38bb62)
You can use ..., which is the spread operator to pass all props to the child .

## Document the following Vocabulary Terms

### props.children

[source](https://codeburst.io/a-quick-intro-to-reacts-props-children-cb3d2fce4891)
used to display whatever you include between the opening and closing tags when invoking a component.

### composition

[source](https://formidable.com/blog/2021/react-composition/)
development pattern based on React's original component model where we build components from other components using explicit defined props or the implicit children prop.

## Preview

Skim the following materials in preparation for the upcoming lecture. Note the following as you browse the material, and be prepared to participate in discussions during lecture

- Which 3 things had you heard about previously and now have better clarity on?
  props and functions to hoist data from children to parent
- Which 3 things are you hoping to learn more about in the upcoming lecture/demo?
  this.props.children
- What are you most excited about trying to implement or see how it works?
  routing

## Preparation Materials

- [browser router tutorial](https://blog.pshrmn.com/entry/simple-react-router-v4-tutorial/)
- [browser router api docs](https://reacttraining.com/react-router/web/api)

## Bookmark

- [react-if component](https://www.npmjs.com/package/react-if)
- [react testing library queries](https://testing-library.com/docs/dom-testing-library/api-queries)
- [aria roles](https://www.w3.org/TR/html-aria/)
