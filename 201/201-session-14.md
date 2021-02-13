# What Google Learned From Its Quest to Build the Perfect Team

## New research reveals surprising truths about why some work groups thrive and others falter.

[New York Times Magazine - Feb 25 2016](https://www.nytimes.com/2016/02/28/magazine/what-google-learned-from-its-quest-to-build-the-perfect-team.html)

Great article about Google internal research what makes teams successful. 

`Team intelligence >>> sumOf(individual intelligence)`

Research project Aristotle - after studying 100s of teams with data - finding that 2 main characteristics stand out for successful teams:

+ ‘‘conversational turn-taking’’ - allowing and encouraging everyone to speak their mind;
+ ‘‘above average social sensitivity’’ - being sensitive to each others emotional states and needs;

***Within psychology, researchers sometimes colloquially refer to traits like ‘‘conversational turn-taking’’ and ‘‘average social sensitivity’’ as aspects of what’s known as psychological safety — a group culture that the Harvard Business School professor Amy Edmondson defines as a ‘‘shared belief held by members of a team that the team is safe for interpersonal risk-taking.’’ Psychological safety is ‘‘a sense of confidence that the team will not embarrass, reject or punish someone for speaking up,’’ Edmondson wrote in a study published in 1999. ‘‘It describes a team climate characterized by interpersonal trust and mutual respect in which people are comfortable being themselves.’’***

Most of all, employees had talked about how various teams felt. ‘‘And that made a lot of sense to me, maybe because of my experiences at Yale,’’ Rozovsky said. ‘‘I’d been on some teams that left me feeling totally exhausted and others where I got so much energy from the group.’’ Rozovsky’s study group at Yale was draining because the norms — the fights over leadership, the tendency to critique — put her on guard. Whereas the norms of her case-competition team — enthusiasm for one another’s ideas, joking around and having fun — allowed everyone to feel relaxed and energized.

For Project Aristotle, research on psychological safety pointed to particular norms that are vital to success. There were other behaviors that seemed important as well — like making sure teams had clear goals and creating a culture of dependability. But Google’s data indicated that psychological safety, more than anything else, was critical to making a team work.

‘‘We had to get people to establish psychologically safe environments,’’ Rozovsky told me. But it wasn’t clear how to do that. ‘‘People here are really busy,’’ she said. ‘‘We needed clear guidelines.’’

However, establishing psychological safety is, by its very nature, somewhat messy and difficult to implement. 
You can tell people to take turns during a conversation and to listen to one another more. You can instruct employees to be sensitive to how their colleagues feel and to notice when someone seems upset. But the kinds of people who work at Google are often the ones who became software engineers because they wanted to avoid talking about feelings in the first place.

The paradox, of course, is that Google’s intense data collection and number crunching have led it to the same conclusions that good managers have always known. In the best teams, members listen to one another and show sensitivity to feelings and needs.

The fact that these insights aren’t wholly original doesn’t mean Google’s contributions aren’t valuable. In fact, in some ways, the ‘‘employee performance optimization’’ movement has given us a method for talking about our insecurities, fears and aspirations in more constructive ways. It also has given us the tools to quickly teach lessons that once took managers decades to absorb. Google, in other words, in its race to build the perfect team, has perhaps unintentionally demonstrated the usefulness of imperfection and done what Silicon Valley does best: figure out how to create psychological safety faster, better and in more productive ways.
And have the data to support that theory/claim/ageold wisdom.

Like in ***the speed of trust*** what matters most to people - and they thrive and flourish when the group culture is as such to be able to trust and open up. Live their true self instead of the waited energy of putting on the facade and holding back out of fear of beind reprimanded or ridiculed. In order for people to thrive, the group culture has to be implemented/changed or just encouraged to be ***LOVE*** instead of ***FEAR***.

### Read this article on CSS Transforms
### Read this article on CSS Transitions & Animations
### 8 simple CSS3 transitions that will wow your users
### 6 Buttons animated
### CSS3 Animations: Keyframes
### 404
### Pure CSS Bounce Animation


https://learn.shayhowe.com/advanced-html-css/css-transforms/
http://www.webdesignerdepot.com/2014/05/8-simple-css3-transitions-that-will-wow-your-users
https://codepen.io/retyui/pen/ByoaXV
https://codepen.io/akshaychauhan/pen/oAfae
https://codepen.io/kieranfivestars/pen/MYdQxX
https://codepen.io/dp_lewis/pen/gCfBv

### CSS Transforms
The transform property comes in two different settings, two-dimensional and three-dimensional. Each of these come with their own individual properties and values.

transform: scale(1.5);

Elements may be distorted, or transformed, on both a two-dimensional plane or a three-dimensional plane

Two-dimensional transforms work on the x and y axes, known as horizontal and vertical axes
Three-dimensional transforms work on both the x and y axes, as well as the z axis
The rotate value provides the ability to rotate an element from 0 to 360 degrees

The default point of rotation is the center of the element, 50% 50%, both horizontally and vertically

Using the scale value within the transform property allows you to change the appeared size of an element

The default scale value is 1, therefore any value between .99 and .01 makes an element appear smaller while any value greater than or equal to 1.01 makes an element appear larger.

It is possible to scale only the height or width of an element using the scaleX and scaleY values

The translate value works a bit like that of relative positioning, pushing and pulling an element in different directions without interrupting the normal flow of the document

Using the translateX value will change the position of an element on the horizontal axis while using the translateY value will change the position of an element on the vertical axis
The last transform value in the group, skew, is used to distort elements on the horizontal axis, vertical axis, or both

Using the skewX value distorts an element on the horizontal axis while the skewY value distorts an element on the vertical axis
The transform-origin property can accept one or two values

change this default origin position
The perspective of an element can be set in two different ways.

he perspective value within the transform property on individual elements
the other includes using the perspective property on the parent element residing over child elements being transformed
The perspective value can be set as none or a length measurement

The none value turns off any perspective
while the length value will set the depth of the perspective.
The same values used for the transform-origin property may also be used with the perspective-origin property

With three-dimensional transforms we can rotate an element around any axes. To do so, we use three new transform values, including rotateX, rotateY, and rotateZ.

By using the scaleZ three-dimensional transform elements may be scaled on the z axis

Elements may also be translated on the z axis using the translateZ value

A negative value here will push an element further away on the z axis, resulting in a smaller element
Skew is the one two-dimensional transform that cannot be transformed on a three-dimensional scale.

### transitions
for a transition to take place, an element must have a change in state, and different styles must be identified for each state. The easiest way for determining styles for different states is by using the :hover, :focus, :active, and :target pseudo-classes

There are four transition related properties in total, including transition-property, transition-duration, transition-timing-function, and transition-delay. Not all of these are required to build a transition, with the first three are the most popular

The transition-property property determines exactly what properties will be altered in conjunction with the other transitional properties.

only the properties identified within the transition-property value will be affected by any transitions
If multiple properties need to be transitioned they may be comma separated within the transition-property value. Additionally, the keyword value all may be used to transition all properties of an element.

The duration in which a transition takes place is set using the transition-duration property. The value of this property can be set using general timing values, including seconds (s) and milliseconds (ms). These timing values may also come in fractional measurements, .2s for example

The transition-timing-function property is used to set the speed in which a transition will move. Knowing the duration from the transition-duration property a transition can have multiple speeds within a single duration. A few of the more popular keyword values for the transition-timing-function property include linear, ease-in, ease-out, and ease-in-out

you can also set a delay with the transition-delay property

### animations
, the animation-name property is used with the animation name, identified from the @keyframes rule, as the property value

also need to declare an animation-duration property

A timing function and delay can be declared using the animation-timing-function and animation-delay properties respectively

animation-iteration-count property may be used

include either an integer or the infinite keyword
Values for the animation-direction property include normal, reverse, alternate, and alternate-reverse.

The animation-play-state property allows an animation to be played or paused using the running and paused keyword values respectively.

The animation-fill-mode property identifies how an element should be styled either before, after, or before and after an animation is run

### Fade in
Having things fade in is a fairly common request from clients. It’s a great way to emphasize functionality or draw attention to a call to action.

Fade in effects are coded in two steps: first, you set the initial state; next, you set the change, for example on hover

### color change
Animating a change of color used to be unbelievably complex, with all kinds of math involved in calculating separate RGB values and then recombining them. Now, we just set the div’s class to “color” and specify the color we want in our CSS:

### Grow & Shrink
To grow an element, you used to have to use its width and height, or its padding. But now we can use CSS3’s transform to enlarge

### Rotate elements
CSS transforms have a number of different uses, and one of the best is transforming the rotation of an element. Give your div the class “rotate” and add the following to your CSS:

### Square to circle
A really popular effect at the moment is transitioning a square element into a round one, and vice versa. With CSS, it’s a simple effect to achieve, we just transition the border-radius property.


### 3D shadow
3D shadows were frowned upon for a year or so, because they weren’t seen as compatible with flat design, which is of course nonsense, they work fantastically well to give a user feedback on their interactions and work with flat, or fake 3D interfaces
Inset border