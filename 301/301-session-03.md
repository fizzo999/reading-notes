# Templating with Mustache
## Reference: Mustache.js Official Documentation
+ https://1sherlynn.medium.com/javascript-templating-language-and-engine-mustache-js-with-node-and-express-f4c2530e73b2
+ https://github.com/janl/mustache.js

## Javascript Templating
Javascript templating is a fast and efficient technique to render client-side view templates with Javascript by using a JSON data source. The template is HTML markup, with added templating tags that will either insert variables or run programming logic.
The template engine then replaces variables and instances declared in a template file with actual values at runtime, and convert the template into an HTML file sent to the client.
Mustache


## Mustache
is a logic-less template syntax. It can be used for HTML, config files, source code — anything. It works by expanding tags in a template using values provided in a hash or object.
It is often referred to as “logic-less” because there are no if statements, else clauses, or for loops. Instead, there are only tags. Some tags are replaced with a value, some nothing, and others a series of values.
mustache.js is an implementation of the mustache template system in JavaScript. It is often considered the base for JavaScript templating. And, since mustache supports various languages, we don’t need a separate templating system on the server side.

`$ npm install mustache --save`


### wow need more explanation on all this ...

## A Guide to Flexbox
https://css-tricks.com/snippets/css/a-guide-to-flexbox/

### Properties for the Parent (flex container):
  - display: flex;
  - flex-direction: row | row-reverse | column | column-reverse;
  - flex-wrap: nowrap | wrap | wrap-reverse;
  - flex-flow: column wrap; shorthand for flex-direction and flex-wrap;
  - justify-content: flex-start | flex-end | center | space-between | space-around | space-evenly | start | end | left | right ... + safe | unsafe;
  - align-items: stretch | flex-start | flex-end | center | baseline | first baseline | last baseline | start | end | self-start | self-end + ... safe | unsafe;
  - align-content: flex-start | flex-end | center | space-between | space-around | space-evenly | stretch | start | end | baseline | first baseline | last baseline + ... safe | unsafe;

### Properties for the Children (flex items)
  - order: 5; /* default is 0 */
  - flex-grow: 4; /* default 0 */
  - flex-shrink: 3; /* default 1 */
  - flex-basis:  | auto; /* default auto */
  - flex: none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ] again short hand;
  - align-self: auto | flex-start | flex-end | center | baseline | stretch;


## Flexbox Froggy
- https://flexboxfroggy.com/
Complete all steps of this tutorial
Bookmark/Skim

[Back to ReadMe](../README.md)