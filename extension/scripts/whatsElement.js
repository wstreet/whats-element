!function(c,e){var q=c.document,t="whats-element",s=t+"-tip-container",u=t+"-tip-delete",f=t+"-copy",y=t+"-unique-container",h=t+"-unique-id",E=function(e){this.options=Object.assign({},{draw:!0,simpleId:!0},e),this.lastClick=q.body;var t=this;q.addEventListener("mousedown",function(e){t.lastClick=e.target,t.focusedElement!==t.lastClick&&C.clean()})},C=E.prototype;function m(){q.querySelectorAll("."+t+"-active").forEach(function(e){e.classList.remove(t+"-active")})}function g(e,t){var n=q.createElement(e||"div");return t&&(n.id=t),n}C.getUniqueId=function(e,t){if(!((e=e||this.lastClick)instanceof HTMLElement))return console.error("invalid input,not a HTML element"),null;var n={wid:"",type:""},i=e.id,o=e.name,r=e.tagName.toLowerCase(),a=e.type?e.type.toLowerCase():"",l="",d=e.classList||[];if(d.forEach(function(e){l+="."+e}),"body"!==r&&"html"!==r||(n.wid=r,n.type=r),i&&q.getElementById(i)===e){var p=new RegExp("^[a-zA-Z]+");!t&&this.options.simpleId?n.wid=i:p.test(i)&&(n.wid=r+"#"+i),n.type="document.getElementById()"}if(!n.wid&&o&&q.getElementsByName(o)[0]===e&&(n.wid=o,n.type="document.getElementsByName()"),!n.wid&&l&&q.querySelector(r+l)===e){n.wid=r+l,n.type="document.querySelector()";var c=d.length;if(2<c){for(var s=1,u=[];Math.pow(2,s)<c;)u.push(Math.pow(2,s)),s++;u.push(c);for(var f=0;f<u.length;f++)u[f]}}if("radio"===a){var y=r+"[value='"+e.value+"']";o&&(y+="[name='"+o+"']"),q.querySelector(y)===e&&(n.wid=y,n.type="document.querySelector()")}if(!n.wid){y=r;y=l?y+l:y,y=o?y+"[name='"+o+"']":y,C.getTarget(y)===e&&(n.wid=y,n.type="document.querySelector()")}if(!n.wid){y=r;y=l?y+l:y;var h=q.querySelectorAll(y);if(h&&0<h.length){for(var m=null,g=0;g<h.length;g++)if(e===h[g]){m=g+1;break}m&&(y=y+":nth-child("+m+")",q.querySelector(y)===e&&(n.wid=y,n.type="document.querySelector()"))}}if(!n.wid){if(!e.parentNode)return;var w=E.prototype.getUniqueId(e.parentNode,!0),x=w?w.wid:"";if(!x)return{wid:"",type:"NO_LOCATION"};var v=r;l&&(v+=l);y=x+">"+v;if(1<q.querySelectorAll(y).length){m=y=null;for(var b=0;b<e.parentNode.children.length;b++)if(e.parentNode.children[b]===e){m=b+1;break}if(1<=m)y=x+">"+v+":nth-child("+m+")",q.querySelector(y)!=e&&(y=null)}n.wid=y,n.type="document.querySelector()"}return this.focusedElement=C.getTarget(n.wid),!t&&this.options.draw&&E.prototype.draw(n),n},C.getTarget=function(e){return q.getElementById(e)||q.getElementsByName(e)[0]||q.querySelector(e)},C.draw=function(e){var t=C.getTarget(e.wid);if(t){var n=q.getElementById(s)?q.getElementById(s):g("aside",s);n.innerHTML="",n.addEventListener("mousedown",function(e){e.stopPropagation()});var i=g("div",u);i.innerText="x",i.onclick=function(e){e.stopPropagation(),E.prototype.clean()},n.appendChild(i);var o=g("div",y),r=g("input",h);r.readOnly=!0,r.className=e.type,r.value=e.wid;var a=g("div",f);a.setAttribute("query-type",e.type),a.innerText="复制",a.onclick=function(){r.select(),q.execCommand("Copy")},o.appendChild(r),o.appendChild(a),n.appendChild(o);var l=t.getBoundingClientRect().top+t.offsetHeight,d=t.getBoundingClientRect().left,p=d<100?d:d+t.offsetWidth/2-(240|n.offsetWidth)/2-q.body.getBoundingClientRect().left;n.style.left=p+"px",n.style.top=l+c.scrollY+10+"px",q.body.appendChild(n),m(),t.classList.add("whats-element-active")}else console.error("no this element:"+e.wid)},C.clean=function(){m();var e=q.getElementById(s);e&&(e.outerHTML="")},null!=c&&(c.whatsElement=E,c.whats=new E),null==c&&(this.whatsElement=E),"undefined"!=typeof module&&module.exports&&(module.exports=E),"function"==typeof define&&define(function(){return E});var n=g("style");n.innerText="#whats-element-tip-container{position:absolute;color:#8ed3fb;font-size:14px;z-index:1000;background-color:rgba(255, 255, 255,0.9);box-sizing:border-box;box-shadow:rgba(0, 0, 0, 0.2) 0px 1px 10px 3px;padding: 10px 20px;border-radius: 36px;}#whats-element-tip-delete{cursor:pointer;position:absolute;top:-10px;width:20px;height: 20px;left:calc(50% - 8px);text-align:center;clip-path: polygon(50% 0,100% 50%,50% 100%,0 50%);background:#fff;}#whats-element-tip-delete:hover{background:#fffbf0}#whats-element-unique-container{display:flex;justify-content:space-around;}#whats-element-unique-id{border:1px solid #d1d5da;box-shadow:inset 0 1px 2px rgba(27,31,35,0.075);text-indent:10px;}#whats-element-copy{background:aliceblue;cursor: pointer;}#whats-element-copy::after{position:absolute;z-index:1000000;padding: 0.1em 0.75em;color: #fff;text-align:center;text-shadow:none;text-transform:none;content:attr(query-type);background: #a88462;border-radius: 3px;opacity: 0;transition:all .5s}#whats-element-copy:hover:after{display:inline-block;opacity: 1;}.whats-element-active{outline:red 1px dashed !important}",q.head.appendChild(n)}(window);