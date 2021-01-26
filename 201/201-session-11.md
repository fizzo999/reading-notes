# Chapter 16:  Audio, Video, Images (pp.406-427)

## Images

1. Controlling sizes of Images in CSS - use classes ON the image (class="medium",....etc)
```css
img.large {
  width: 500px;
  height: 500px;
}
img.medium{
  width: 250px;
  height: 250px;
}
img.small{
  width: 100px;
  height: 100px;
}
``` 
2. Aligning Images using CSS
float property can be used to move an element to the right or to the left of its containing block, allowing text to flow around it.
```css
img.align-left{
  float: left;
  margin-right: 10px;
}
img.align-right{
  float: right;
  margin-left: 10px;
}
``` 
3. Centering Images using CSS
By default images are inline elements. In order to center an image, it should be turned into a block-level element using the display property. */
Two commons ways image can be centered horizontally:
+ Using /text-align/ property
+ Using /margin/ property with setting values of the left anf right to AUTO */

```css
img.align-center{
  display: block;
  margin: 0px auto;
}
```
4. Background Images
The background-image allows to place an image behind any HTML element. By default, a background image will repeat to fill the entire box.

```css 
body {
  background-image: url('images/image.gif')
}
``` 
5. Repeating Images
The background-repeat property can have four values:
+ repeat - Background Images is repeated both horizontally and vertically
+ repeat-x / repeat-y - The images is repeated only horizontally / only vertically 
+ no-repeat - The image is only shown once
```css
body{
 background-image: url('images/image.gif')
 background-repeat: repeat-x;
}
```
The background-attachment property specifies whether a background image should stay in one position or move as the user scrolls up and down. Values:
+ fixed
+ scroll

```css
body{
background-image: url('images/image.gif')
background-repeat: no-repeat;
background-attachment: fixed;
}
``` 
6. Background Position
Background Position property used to specify where in the browser window the background image should be placed.
This property usually has a pair of values. The first represents the horizontal position and the second represents the vertical.
```css 
body{
background-image: url('images/image.gif')
background-repeat: no-repeat;
background-position: center top;
}
``` 
7. Gradients 
In order to create a linear gradient, we need to specify two colors (that the gradient is between) - depending on the browser (so specify for each one: Firefox, Chrome, Safari, Opera, Internet explorer, Edge)
```css 
body {
  background-image: linear-gradient (#336666, #66cccc)
}
``` 

## Search Engine Optimization (SEO) - Chapter 19: “Practical Information” (476-492)

1. **The Basics**
+ SEO is the practice of trying to help a website appear nearer the top of search engine results when people look for the topics that website covers.
2. **On-page Techniques**
+ Methods we can use on our webpages to improve their rating in search engines.
+ The main component of this is looking at keywords that people are likely to enter into a search engine, and then including these in the text and HTML code
3. **Off-pages Techniques** 
+ Getting other sites to link to you is just as important as on-page techniques. Search engines help determine how to rank your site by looking at the number of other sites that link to yours.  

### ON-PAGE SEO

In every page of website there are seven key places where keywords can appear in order to improve its findability.

1. **Page Title**
The page title appears at the top of the browser window or on the tab of a browser. Inside `<title> </title>` element.
2. **URL / Web Address**
The name of the file is part of the URL. Where possible, we need to use keywords in the file name
3. **Headings**
If the keywords are in a heading `<hn>` element then a search engine will know that this page is all about that subject and give it greater weight than other text.
4. **Text**
Where possible, it helps to repeat the keywords in the main body of the text at least 2-3 times.
5. **Link Text**
Use keywords in the text that creates links between pages (rather than using generic expressions such as "click here")
6. **Image Alt Text**
Provide accurate descriptions of images in the alt text. 
7. **Page Descriptions**
The page description also lives inside the `<head>` element and is specified using a `<meta>` tag. It should be a sentence that describes the content of the page.

## Google Analytics : Learning about your visitors 

1. How many people are coming to your Website?
+ _Visits_ (Number of times people have come to your site)
+ _Unique Visits_ (This is total number of people who have visited your site over the specified period)
+ _Page Views_ (Total number of pages all visitors viewed on your website)
+ _Pages per Visit_ (The average number of pages each visitor has looked at per visit)
+ _Average time on Site_ (The average amount of time each user has spent on the site per visit)
2. What are your visitors looking at?
+ _Pages_ (This tells you which pages your visitors are looking at the most and also which pages they are spending the most time on)
+ _Landing Pages_ (These are the pages that people arrive on when first visiting your site)
+ _Top exit pages_ (This shows which pages people most commonly leave from)
3. Where are your visitors coming from?
+ _Referrers_ (This shows the sites that have linked to you and the number of people who have come via those sites)
+ _Direct_ (This shows which page a user arrived on if they did not come via link on another site)
+ _Search Terms_ (This shows the terms users entered into a search engine to find your site) 

## Domain Names, Hosting, FTP upload
pages 487-490 

## Chapter 9: pages 201-206 only. Flash is no longer supported by many browsers but is an important part of history.

Javascript Libraries published in 2005 (jQuerry,..) made it easier for people to create animations in JS. iphone 2007 and ipad 2010 decided not to support flas. Flas content does not always support accessibility. 2008 HTML5 support of `<video> <audio>` tags 


Video and Audio:
The `<video>` and `<audio>` elements allow us to embed video and audio into web pages.
```
<video controls>
  <source src="rabbit320.mp4" type="video/mp4" />
  <source src="rabbit320.webm" type="video/webm" />
  <p>
    Your browser doesn't support HTML5 video. Here is a
    <a href="rabbit320.mp4">link to the video</a> instead.
  </p>
</video>
```
The `<source>` element allows us to present a video in different formats.
Part of the HTML5 spec, the HTMLMediaElement API provides features to allow you to control video and audio players programmatically — for example `HTMLMediaElement.play()`, `HTMLMediaElement.pause()`, etc. This interface is available to both `<audio>` and `<video>` elements, as the features you'll want to implement are nearly identical. Let's go through an example, adding features as we go.

Event handler functions associated with video/audio
```
playPauseMedia()
stopMedia()
mediaBackward()
mediaForward()
```

[Back to ReadMe](../README.md)