# Class 1 Responsive Web Design, Floats, SMACCS

#### References:
1. Responsive Web Design
    - https://learn.shayhowe.com/advanced-html-css/responsive-web-design/
2. SMACSS Official Documentation
    - http://smacss.com/
3. Floats / Grids
    - https://css-tricks.com/dont-overthink-it-grids/
    - https://css-tricks.com/all-about-floats/
    - https://www.freecodecamp.org/news/css-floats-explained-by-riding-an-escalator-57fa55232333/  

## Responsive Web Design

- With the growth in mobile Internet usage comes the question of how to build websites suitable for all users. The industry response to this question has become responsive web design, also known as RWD

- Responsive web design is the practice of building a website suitable to work on every device and every screen size, no matter how large or small, mobile or desktop. Responsive web design is focused on providing an intuitive and gratifying experience for everyone.

- Responsive and adaptive web design are closely related, and often transposed as one in the same. 
    - Responsive generally means to react quickly and positively to any change, 
    - while adaptive means to be easily modified for a new purpose or situation, such as change

- Responsive web design is broken down into three main components, including 
    - flexible layouts,is the practice of building the layout of a website with a flexible grid, capable of dynamically resizing to any width
        - flexible grids are built using relative length units, most commonly percentages or em units
    - media queries, and 
    - flexible media


### Responsive vs. Adaptive vs. Mobile

1. Responsive
    - generally means to react quickly and positively to any change.
2. Adaptive
    - means to be easily modified for a new purpose or situation
3. Mobile 
    - means to build a separate website commonly on a new domain solely for mobile users.  


### Flexible Layouts


- CSS3 introduced some new relative length units, specifically related to the viewport size of the browser or device. These new units include vw, vh, vmin, and vmax. Overall support for these new units isn’t great, but it is growing. In time they look to play a large roll in building responsive websites
    - vw : viewport width
    - vmin : minimum of the viewports height and width
    - vh : viewport height
    - vmax : maximum of the viewport height and width

- an easy formula to help identify the proportions of a flexible layout using relative values
    - target / context = result

- broken down into three main components:

1. Flexible layouts 
    - is the practice of building the layout of a website with a flexible grid, capable of dynamically resizing to any width.
    - Flexible grids are built using relative length units, most commonly `percentages` or `em` units. 
    - These relative lengths are then used to declare common grid property values such as `width`, `margin`, or `padding`.
2. Media queries
    - provide the ability to specify different styles for individual browser and device circumstances.
    - There are a couple different ways to use media queries, using the `@media` rule inside of an existing style sheet, importing a new style sheet using the `@import` rule, or by linking to a separate style sheet from within the HTML document.
    - Each media query may include a media type followed by one or more expressions. (`all` / `screen` / `print` / `tv` / `braille`)
    - There are three different logical operators available for use within media queries, including _and_, _not_, and _only_.
    - Using the `and` logical operator within a media query allows an extra condition to be added, making sure that a browser or devices does both a, b, c, and so forth.
```css 
@media all and (min-width: 800px) and (max-width: 1024px) {...}
``` 
3. Flexible media
    - Images, videos, and other media types need to be scalable, changing their size as the size of the viewport changes.
    - quick way to make media scalable is by using the max-width property with a value of 100%. _Doing so ensures that as the viewport gets smaller any media will scale down according to its containers width._
    - To get embedded media to be fully responsive, the embedded element needs to be **absolutely** positioned within a parent element. The parent element needs to have a **width of 100%** and also needs to have a **height of 0**.

```css
figure {
  height: 0;
  padding-bottom: 56.25%; /* 16:9 */
  position: relative;
  width: 100%;
}
iframe {
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
}
``` 


### Media Queries

Media queries were built as an extension to media types commonly found when targeting and including styles. Media queries provide the ability to specify different styles for individual browser and device circumstances, the width of the viewport or device orientation for example. Being able to apply uniquely targeted styles opens up a world of opportunity and leverage to responsive web design

- There are a couple different ways to use media queries, 
    - using the @media rule inside of an existing style sheet, 
    - importing a new style sheet using the @import rule,  
    - linking to a separate style sheet from within the HTML document

- Each media query may include a media type followed by one or more expressions. Common media types include all, screen, print, tv, and braille. The HTML5 specification includes new media types, even including 3d-glasses. Should a media type not be specified the media query will default the media type to screen.

- There are three different logical operators available for use within media queries, including and, not, and only.

- The orientation media feature determines if a device is in the landscape or portrait orientation

- The resolution media feature specifies the resolution of the output device in pixel density, also known as dots per inch or DPI



#### Viewports 

- Using the viewport meta tag with either the height or width values will define the height or width of the viewport respectively. Each value accepts either a positive integer or keyword. For the height property the keyword device-height value is accepted, and for the width property the keyword device-width is accepted. Using these keywords will inherit the device’s default height and width value.

- To control how a website is scaled on a mobile device, and how users can continue to scale a website, use the minimum-scale, maximum-scale, initial-scale, and user-scalable properties.
    - Using an integer above 1 will zoom the website to be larger than the default scale. Generally speaking, this value will most commonly be set to 1.

##### viewport resolution

- When more control is needed, specifically over the resolution of a device, the target-density dpi value may be used. The target-density dpi viewport accepts a handful of values including device-dpi, high-dpi, medium-dpi, low-dpi, or an actual DPI number.

### Flexible Media

The final, equally important aspect to responsive web design involves flexible media. As viewports begin to change size media doesn’t always follow suit. Images, videos, and other media types need to be scalable, changing their size as the size of the viewport changes

- One quick way to make media scalable is by using the max-width property with a value of 100%. Doing so ensures that as the viewport gets smaller any media will scale down according to its containers width

- Unfortunately the max-width property doesn’t work well for all instances of media, specifically around iframes and embedded media
    - To get embedded media to be fully responsive, the embedded element needs to be absolutely positioned within a parent element. The parent element needs to have a width of 100% so that it may scale based on the width of the viewport. The parent element also needs to have a height of 0 to trigger the hasLayout mechanism within Internet Explorer

## All About Floats 

### What is a float?

- Float is a CSS positioning property
- In page layout programs, the boxes that hold the text can be told to honor the text wrap, or to ignore it. Ignoring the text wrap will allow the words to flow right over the image like it wasn’t even there. This is the difference between that image being part of the flow of the page (or not). Web design is very similar.

- There are four valid values for the float property. Left and Right float elements those directions respectively. None (the default) ensures the element will not float and Inherit which will assume the float value from that elements parent element.

**Floated elements _remain a part of the flow of the web page_.**  

Values: 

+ **none**: the element does not float. This is the initial value.
+ **left**: floats the element to the left of its container.
+ **right:** floats the element to the right of its container.
+ **Inherit**: the element inherits the float direction of its parent. 


### What are floats used for?

- Aside from the simple example of wrapping text around images, floats can be used to create entire web layouts.

- Clearing the Float
    - float's sister property is clear

    - Clear has four valid values as well. Both is most commonly used, which clears floats coming from either direction. Left and Right can be used to only clear the float from one direction respectively. None is the default, which is typically unnecessary unless removing a clear value from a cascade. Inherit would be the fifth, but is strangely not supported in Internet Explorer. Clearing only the left or right float, while less commonly seen in the wild, definitely has its uses.

### Techniques for Clearing the Floats

An element that has the clear property set on it will not move up adjacent to the float like the float desires, but will move itself down past the float. 


```css 
#footer {
   clear: both;
}
``` 

- If you are in a situation where you always know what the succeeding element is going to be, you can apply the clear: both;

- The Empty Div Method is, quite literally, an empty div. <div style="clear: both;"></div>. Sometimes you’ll see a <br> element or some other random element used, but div is the most common because it has no browser default styling, doesn’t have any special function, and is unlikely to be generically styled with CSS.

- The Overflow Method relies on setting the overflow CSS property on a parent element. If this property is set to auto or hidden on the parent element, the parent will expand to contain the floats, effectively clearing it for succeeding elements

- The Easy Clearing Method uses a clever CSS pseudo selector (:after) to clear floats. Rather than setting the overflow on the parent, you apply an additional class like “clearfix” to it



## SMACSS | Scalable and Modular Architecture for CSS

At the very core of SMACSS is categorization. By categorizing CSS rules, we begin to see patterns and can define better practices around each of these patterns.  

There are five types of categories:

1. Base
    - default rules.
2. Layout
    - divides the page into sections. Layouts hold one or more modules together.
3. Modules 
    - reusable, modular parts of design. They are the callouts, the sidebar sections, the product lists and so on.
4. State
    - ways to describe how modules or layouts will look when in a particular state. Is it hidden or expanded? Is it active or inactive? They are about describing how a module or layout looks on screens that are smaller or bigger. They are also about describing how a module might look in different views like the home page or the inside page.
5. Theme
    - similar to state rules in that they describe how modules or layouts might look. Most sites don’t require a layer of theming but it is good to be aware of it.  



## CSS Grid Layout  

CSS Grid Layout is a 2-dimensional system, meaning it can handle both columns and rows, unlike `flexbox` which is largely a 1-dimensional system.  


[Back to ReadMe](../README.md)