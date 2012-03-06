(function(m){"use strict";var f=null;function q(a){for(var b=$$("[itemscope]",this),c=[],a=(a||"").trim().split(/\s+/),d,h=-1;d=b[++h];){var i=d.getAttribute("itemtype")||"",g=i.split(/\s+/),n,i=!(i&&!d.getAttribute("itemprop")&&(!("itemScope"in d)||d.itemScope));for(;!i&&(n=g.pop());)(i=~a.indexOf(n))&&c.push(d)}return c}function l(a,b){a._||(a._={});var c=a.getAttribute(b),d=a._._mcrdt_||(a._._mcrdt_={}),h=d[b];h?c!==f&&h+""!==c&&h.update(c):h=d[b]=new r(c,function(){a.setAttribute(b,this+"")});return h}var r=m.Utils.Dom.DOMStringCollection,
o="AUDIO,EMBED,IFRAME,IMG,SOURCE,TRACK,VIDEO".split(","),p=["A","AREA","LINK"],s={get:function(){var a=this.nodeName;return this.getAttribute("itemscope")!==f?this:this.getAttribute("itemprop")===f?f:"META"===a?this.content:~o.indexOf(a)?this.src:~p.indexOf(a)?this.href:"OBJECT"===a?this.data:"TIME"===a&&this.getAttribute("datetime")?this.dateTime:"textContent"in this?this.textContent:this.innerText},set:function(a){var b=this.nodeName;if(this.getAttribute("itemprop")===f)throw a=Object.create(DOMException.prototype),
a.code=DOMException.INVALID_ACCESS_ERR,a.message="INVALID_ACCESS_ERR: DOM Exception "+a.code,a;return this["META"===b?"content":~o.indexOf(b)?"src":~p.indexOf(b)?"href":"OBJECT"===b?"data":"TIME"===b&&this.getAttribute("datetime")?"dateTime":"innerHTML"]=a}},t={get:function(){return l(this,"itemtype")},set:function(a){return this.setAttribute("itemtype",a+"")}};(!document.getItems?function(a){if(!a.PropertyNodeList){var b=a.PropertyNodeList=function(){this.length=0;this.values=[]};b.prototype._push=
function(g,a){this[this.length++]=g;this.values.push(a)};b.prototype.namedItem=function(){};b.prototype.values=void 0;b.prototype.getValues=function(){for(var g=[],a=-1,b;b=this[++a];)g.push(b.itemValue);return this.values=g};b.prototype.toString=function(){return"[object PropertyNodeList]"}}if(!a.HTMLPropertiesCollection){var c=a.HTMLPropertiesCollection=function(){this.length=0;this.names=[]};c.prototype.a=function(){for(var g in this)this[g]instanceof b&&(this[g]=f,delete this[g]);this.length=
0;this.names=[]};c.prototype._push=function(g,a,e){this[this.length++]=g;~this.names.indexOf(e)||this.names.push(e);(this[e]||(this[e]=new b))._push(g,a)};c.prototype.namedItem=function(a){return this[a]instanceof b?this[a]:new b};c.prototype.toString=function(){return"[object HTMLPropertiesCollection]"};c.prototype.item=b.prototype.item=function(a){isNaN(a)&&(a=0);return this[a]||f}}var d=a.HTMLElement&&a.HTMLElement.prototype||a.Element&&a.Element.prototype;d&&Object.defineProperties(d,{itemValue:s,
itemProp:{get:function(){return l(this,"itemprop")},set:function(a){return this.setAttribute("itemprop",a)}},itemScope:{get:function(){return this.getAttribute("itemscope")!==f},set:function(a){a?this.setAttribute("itemscope",""):this.removeAttribute("itemscope");return a}},itemId:{get:function(){var a=(this.getAttribute("itemid")||"").trim();a&&!/\w+:(\/\/)?[\w][\w.\/]*/.test(a)&&(a=location.href.replace(/\/[^\/]*$/,"/"+escape(a)));return a},set:function(a){return this.setAttribute("itemid",a+"")}},
itemType:t,itemRef:{get:function(){return l(this,"itemref")},set:function(a){return this.setAttribute("itemref",a+"")}},properties:{get:function(){this._||(this._={});var b=this._._mcrdt_||(this._._mcrdt_={}),d=b.b;if(d)if(a.microdata_liveProperties)d.a();else return d;else d=b.b=new c;for(var e=[],b=[],h=[],j,i=-1,k;k=this.childNodes[++i];)1===k.nodeType&&e.push(k);this.getAttribute("itemref")&&(h=this.getAttribute("itemref").trim().split(/\s+/),h.forEach(function(a){(a=document.getElementById(a))&&
e.push(a)}));e=e.filter(function(a,b){var d=f,c=a,g=[];if(e.indexOf(a)!==b&&-1!==e.indexOf(a,b))return!1;if(a.id&&-1!==h.indexOf(a.id))return!0;for(;(c=c.parentNode)!==f&&1===c.nodeType;)if(g.push(c),c.getAttribute("itemscope")!==f){d=c;break}return d!==f?-1!==e.indexOf(d)?!1:!g.some(function(a){var b=-1,c=f;if(-1!==(b=e.indexOf(a))){for(a=e[b];(a=a.parentNode)!==f&&1===a.nodeType;)if(a.getAttribute("itemscope")!==f){c=a;break}if(c===d)return!0}return!1}):!0});for(e.sort(function(a,b){return 3-(b.compareDocumentPosition(a)&
6)});j=e.pop();)if(j.getAttribute("itemprop")&&b.push(j),j.getAttribute("itemscope")===f)for(i=j.childNodes.length;k=j.childNodes[--i];)1===k.nodeType&&e.push(k);b.forEach(function(a){i=-1;for(j=a.itemProp;k=j[++i];)d._push(a,a.itemValue,k)});return d}}});try{var h=document.createElement("EMBED");h.itemProp="t";h.itemValue+="1"}catch(i){}document.getItems=q}:!1)(m)})(window,!1);