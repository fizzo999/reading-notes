# Readings: EJS embedded Javascript

+ [Watch EJS tutorial from WalkThroughCode on YouTube, Videos 1-5](https://www.youtube.com/playlist?list=PL7sCSgsRZ-slYARh3YJIqPGZqtGVqZRGt)
+ Reference: [Google Books API Docs](https://developers.google.com/books/docs/v1/using#WorkingVolumes)

Specifically the section about working with Volumes. Review the sample request and response. Practice making requests using Postman and consider the possible properties of the response that you may want to include in your book application.

Reference: [EJS Docs](http://ejs.co/)

Bookmark/Skim
Skim: [EJS Tutorial](https://scotch.io/tutorials/use-ejs-to-template-your-node-application)
Skim: [Source Code for the EJS Tutorial](https://github.com/scotch-io/node-ejs)
Review the code that goes along with the tutorial

# EJS embedded Javascript

+ Fast compilation and rendering
+ Simple template tags: `<% %>`
+ Custom delimiters `(e.g., use [? ?] instead of <% %>)`
+ Sub-template includes
+ Ships with CLI
+ Both server JS and browser support
+ Static caching of intermediate JavaScript
+ Static caching of templates
+ Complies with the Express view system

### Tags

+ `<%` 'Scriptlet' tag, for control-flow, no output
+ `<%_` ‘Whitespace Slurping’ Scriptlet tag, strips all whitespace before it
+ `<%=` Outputs the value into the template (HTML escaped)
+ `<%-` Outputs the unescaped value into the template
+ `<%#` Comment tag, no execution, no output
+ `<%%` Outputs a literal '<%'
+ `%>` Plain ending tag
+ `-%>` Trim-mode ('newline slurp') tag, trims following newline
+ `_%>` ‘Whitespace Slurping’ ending tag, removes all whitespace after it

[Back to ReadMe](../README.md)