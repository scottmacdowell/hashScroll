[hashScroll](http://www.scottwillcode.com/hashscroll/)
=================
A simple, lightweight JQuery plugin to add the slide-scroll effect to anchor links.

[Check out the demo here](http://www.scottwillcode.com/hashscroll/).

## Scroll to Anchors
When you click on an anchor link, hashScroll will slide-scroll down the page to the target position.

## Dependancies
hashScroll requires:
[JQuery](http://jquery.com/download/) & 
[scrollTo](https://github.com/flesler/jquery.scrollTo)

## Installation
Include script after the jQuery library, be sure to include scrollTo as well:
```html
<script src="/path/to/jquery.hashscroll.js"></script>
```

## Usage
Using hashScroll is easy, simply call the function on the main container of your menu. hashScroll will automatically apply itself to any link starting with a "#".

### Calling hashScroll
```html
$(function() { 
	$('.menuContainer').hashScroll(); 
});
```

### Linking to Anchors
```html
<ul class="menuContainer">
	<li><a href="#home">This will slide-scroll to home</a></li>
    <li><a href="news.html">hashScroll will ignore this</a></li>
</ul>
```

## Configuration

### scrollSpeed
Change how quickly or slowly the scroll occurs (default: 300).
```html
$(function() { 
	$('.menuContainer').hashScroll({
    	scrollSpeed: 200
    }); 
});
```
