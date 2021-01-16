 # Duckett HTML book:

## Chapter 5: “Images” (pp.94-125)

images are subject to copyright. There are stock images you can use that are royalty free, though they often are overlayed with a watermark of the company that owns and distributes them.

You can link images directly from the internet. Or create a folder within the directory that also contains your HTML, CSS, etc. A simple "images" folder that you can store images within. This will help you with planning out your website too, as you can collect all the images you'll need beforehand and have them stored internally instead of having to track down URLs.

```html
<img src="ImageURL.com" alt="text to be displayed or read to the user if the image is unable to be displayed or seen" title="additional info displayed to the user when image is hovered over" />
<img src="images/me.jpg" width="500" height="500">
```
 
This example demonstrates both the internal pathing to pull an image from the folder you would ostensibly create for your own images. Also demonstrated are the height and width elements which as you could guess, control the height and width of the image when the website loads.
``` <img src="http:///www."> ``` tag does not need a closing tag.

You can place the box of the image element within the box of another element. Taking <p> paragraphs for example...

Inserting the image tag before the paragraph will insert the image in a block above the text block - because img tags are INLINE - so you either CSS grab and convert them to block or place them inside of a div.

When selecting images from the internet to save to your folder be careful to save them with the most efficient format. JPEG images are better for those with rich and varied color, while GIF and PNG are better for images with very simple color schemes.

## Chapter 11: “Color” (pp.246-263)

## CSS Color

6 main ways of value definition for color/background-color property:

+ color name, rgb, hex code;
+ rgb (256,256,256)
+ hex #333 or #3f3f3f
+ rgba (256,256,256,1) great trick for invisible border...
+ hsl (hue, sat, lightness) (360,100%,100%)
+ hsla + alpha/visiblity (360,100%,100%,1)

color names : coral, white, black,...

background-color or just background

color for text


## Chapter 12: “Text” (pp.264-299)

Typeface	Description	Font example
Serif	extra detail on the primary strokes of letters	Georgia, Times, Times New Roman
Sans-Serif	low-res and with straight strokes	Arial, Verdana, Helvetica
Monosapce	Each letter has the same width	Courier, Courier New
Cursive	Joining strokes or other stylistic similarities to cursive, Monotype Corsiva
##### Weight	Light, medium, bold, black	
##### Style	normal, italic, oblique	
##### Stretch	condensed, reguilar, extended	
To specify your desired typeface in CSS...

```p {font-family: Arial, Times, Comic; font-size: 10px;}```

Specifying a list of fonts in this manner acts as a failsafe. Meaning if the browser loading the page does not possess the first font it will use the next in line and so forth. font size is self explanatory, and can be changed by determining pixel size (12px;), Percentages (127%;),EMS (1,3em;) in which a single "EM" is the letter 'm' and scales text from there.

Other Formatting CSS	Description
+ ##### font-weight: bold	Bold text
+ ##### font-style: italic/oblique	Italic/Oblique text
+ ##### text-transform: uppercase/lowercase/capitalize	Forces text to upper or lowercase, or automatically makes the first word in every letter capitalized
+ ##### text-decoration: underline/overline/line-through/blink/none	Creates lines under, over or through the text. If you want to be annoying you can make your text flash with blink and none removes any already applied decoration
+ ##### line-height: 1.4em	alters space between lines of text
+ ##### letter-spacing: 0.2em	alters space between words
+ ##### text-align: left/right/center/justify	Alters the alignment of text Left/Right/Center. Justify makes every line in a body of text save the last take up the full with of it's box
+ ##### vertical-align: text-top/baseline/text-bottom	Used in conjunction with image elements to position the text relative to the image box
+ ##### text-indent: 10px	The first line of text will be indented by the specified value
+ ##### text-shadow: 1px -2px 3px #000000	creates a shadow on the text, positioned with the three pixel amounts and colored with a method of your choosing

#### PSEUDO-ELEMENTS	DECRIPTION
p.intro:first-letter { font-size: 200%}	Makes the first letter in a block of text the specified size
p.intro:first-line {font-size: 120%}	Makes the first line in a block of text the specified size
:visited {color: red}	Automatically makes a visited link turn the specified color
:hover {background-color: red}	Specified color is applied when user hovers over the element
:active{background-color: green}	Specified color is applied when the user "activates" an element like a button
:focus{color: blue}	Applies specified color to an element you want to draw focus to like an interactable element you don't want the user to miss