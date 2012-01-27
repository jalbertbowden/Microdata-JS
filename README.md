# Implementation of the HTML5 Microdata specification

[spec](http://www.whatwg.org/specs/web-apps/current-work/multipage/microdata.html)
[Demo](http://jsfiddle.net/cakz8/)

## Features

 - Live "properties" property (turn it on manualy window.microdata_liveProperties = true)
 - Implementation of PropertyNodeList and HTMLPropertiesCollection prototypes
 - Extending DocumentFragment.prototype with getItems function
 - Extending PropertyNodeList and HTMLPropertiesCollection prototypes with toJSON functions
 - IE < 8 support and maybe need some extra work

## Microdata JS API

 - Element.itemValue
 - Element.itemProp
 - Element.itemScope
 - Element.itemId
 - Element.itemType
 - Element.itemRef
 - Element.properties
 - window.microdata_liveProperties = 
	`true` - for auto update Element.properties value
	`false` (default) - for cached Element.properties value

## Browsers support

 - Opera < 12, Google Chrome, Safary, FireFox, IE8 and IE < 8 support, and maybe others
 - for IE < 8 support:
    1. Set the window.$$ to your function(selector, root){return Array.from(root.querySelectorAll(selector))} function (window.$$ must return Array)
    2. Add "microdata-js.ielt8.js" script to <head> section on youre page and put "microdata-js.ielt8.htc" in root or edit "__PATH_TO_BEHAVIOR" var in "microdata-js.ielt8.js"
    3. Add js implimentation of functions below (you can get it from "a.js", "a.ielt8.js" and "a.ielt8.htc" files in examples) :
   
        - window.Array.prototype.filter
        - window.Array.prototype.indexOf
        - window.Array.prototype.forEach
        - window.Array.prototype.some
        - window.Function.prototype.bind

## LIMITATION

 1. Require Utils.Dom.DOMStringCollection (DOMSettableTokenList like object) (created in https://github.com/termi1uc1/ES5-DOM-SHIM/)
 2. [microdata-js.ielt8.js] due to https://github.com/h5bp/html5-boilerplate/issues/378 i can't detection IE by @cc. Temporary add a dependence of window._ielt8_Element_proto object, wich is created in https://github.com/termi1uc1/ES5-DOM-SHIM/
 3. Opera >= 12:
  - PropertyNodeList.values, PropertyNodeList.toJSON and HTMLPropertiesCollection.toJSON propertys will be available only after window.onload event

## TODO

 1. Live HTMLElement.prototype without window.microdata_liveProperties option
 2. Improvement speed of selecting Microdata ilements in IE < 8
 3. Delete code adding "values" property if it not compliance with FINALE Microdata specification
