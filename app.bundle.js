!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=14)}([function(e,t){const n=document.getElementById("navbar"),r=document.getElementById("navbar-search"),o=document.getElementById("navbar-close");r.addEventListener("click",()=>{n.classList.remove("no-search"),n.classList.add("search")}),o.addEventListener("click",()=>{n.classList.remove("search"),n.classList.add("no-search")});e.exports={openHeader:e=>t=>{document.getElementById(e).classList.toggle("close")},loadingRender:(e,t="loader")=>({render:()=>{document.getElementById(e).innerHTML=`\n        <div class="${t}">\n          <i class="fas fa-spinner fa-spin"></i>\n        </div>\n      `}})}},function(e,t,n){var r,o;
/*!
 * JavaScript Cookie v2.2.0
 * https://github.com/js-cookie/js-cookie
 *
 * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
 * Released under the MIT license
 */!function(a){if(void 0===(o="function"==typeof(r=a)?r.call(t,n,t,e):r)||(e.exports=o),!0,e.exports=a(),!!0){var c=window.Cookies,i=window.Cookies=a();i.noConflict=function(){return window.Cookies=c,i}}}(function(){function e(){for(var e=0,t={};e<arguments.length;e++){var n=arguments[e];for(var r in n)t[r]=n[r]}return t}return function t(n){function r(t,o,a){var c;if("undefined"!=typeof document){if(arguments.length>1){if("number"==typeof(a=e({path:"/"},r.defaults,a)).expires){var i=new Date;i.setMilliseconds(i.getMilliseconds()+864e5*a.expires),a.expires=i}a.expires=a.expires?a.expires.toUTCString():"";try{c=JSON.stringify(o),/^[\{\[]/.test(c)&&(o=c)}catch(e){}o=n.write?n.write(o,t):encodeURIComponent(String(o)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),t=(t=(t=encodeURIComponent(String(t))).replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent)).replace(/[\(\)]/g,escape);var s="";for(var l in a)a[l]&&(s+="; "+l,!0!==a[l]&&(s+="="+a[l]));return document.cookie=t+"="+o+s}t||(c={});for(var d=document.cookie?document.cookie.split("; "):[],u=/(%[0-9A-Z]{2})+/g,f=0;f<d.length;f++){var p=d[f].split("="),g=p.slice(1).join("=");this.json||'"'!==g.charAt(0)||(g=g.slice(1,-1));try{var h=p[0].replace(u,decodeURIComponent);if(g=n.read?n.read(g,h):n(g,h)||g.replace(u,decodeURIComponent),this.json)try{g=JSON.parse(g)}catch(e){}if(t===h){c=g;break}t||(c[h]=g)}catch(e){}}return c}}return r.set=r,r.get=function(e){return r.call(r,e)},r.getJSON=function(){return r.apply({json:!0},[].slice.call(arguments))},r.defaults={},r.remove=function(t,n){r(t,"",e(n,{expires:-1}))},r.withConverter=t,r}(function(){})})},,function(e,t,n){e.exports=n.p+"1676d7490dfb39fe60e02346c5c7a62a.jpg"},function(e,t,n){"use strict";var r=n(1),o=n.n(r);const a={setItem:(e,t)=>localStorage.setItem(e,t),getItem:e=>localStorage.getItem(e)},c={setItem:(e,t)=>o.a.set(e,t),getItem:e=>o.a.get(e)};t.a=((e="lStorage")=>{return"undefined"!=typeof Storage?{lStorage:a,cookieStorage:c}[e]:e.cookieStorage})},function(e,t,n){},,,,function(e,t,n){"use strict";var r;!function(o){if("function"!=typeof a){var a=function(e){return e};a.nonNative=!0}const c=a("plaintext"),i=a("html"),s=a("comment"),l=/<(\w*)>/g,d=/<\/?([^\s\/>]+)/;function u(e,t,n){return p(e=e||"",f(t=t||[],n=n||""))}function f(e,t){return{allowable_tags:e=function(e){let t=new Set;if("string"==typeof e){let n;for(;n=l.exec(e);)t.add(n[1])}else a.nonNative||"function"!=typeof e[a.iterator]?"function"==typeof e.forEach&&e.forEach(t.add,t):t=new Set(e);return t}(e),tag_replacement:t,state:c,tag_buffer:"",depth:0,in_quote_char:""}}function p(e,t){let n=t.allowable_tags,r=t.tag_replacement,o=t.state,a=t.tag_buffer,l=t.depth,d=t.in_quote_char,u="";for(let t=0,f=e.length;t<f;t++){let f=e[t];if(o===c)switch(f){case"<":o=i,a+=f;break;default:u+=f}else if(o===i)switch(f){case"<":if(d)break;l++;break;case">":if(d)break;if(l){l--;break}d="",o=c,a+=">",n.has(g(a))?u+=a:u+=r,a="";break;case'"':case"'":d=f===d?"":d||f,a+=f;break;case"-":"<!-"===a&&(o=s),a+=f;break;case" ":case"\n":if("<"===a){o=c,u+="< ",a="";break}a+=f;break;default:a+=f}else if(o===s)switch(f){case">":"--"==a.slice(-2)&&(o=c),a="";break;default:a+=f}}return t.state=o,t.tag_buffer=a,t.depth=l,t.in_quote_char=d,u}function g(e){let t=d.exec(e);return t?t[1].toLowerCase():null}u.init_streaming_mode=function(e,t){let n=f(e=e||[],t=t||"");return function(e){return p(e||"",n)}},void 0===(r=function(){return u}.call(t,n,t,e))||(e.exports=r)}()},,,,,function(e,t,n){"use strict";n.r(t);n(5);var r=n(0),o=n(9),a=n.n(o),c=n(3),i=n.n(c);const s="https://api.tvmaze.com/",l=`${s}search/shows?q=`,d=`${s}shows`,u=()=>{let e=[];const t=({id:e,name:t,image:n,summary:r,principal:o,rating:c})=>`\n    <div id="card-${e}" class="card ${o?"principal":"secondary close"}">\n      <header class="card-header">\n        <a href="detail.html?id=${e}">\n          <h2>${t}</h2>\n        </a>\n      </header>\n      <div class="card-content">\n        <div class="card-content-image">\n          <img src="${n?n.medium.replace("http","https"):i.a}">\n        </div>\n        <div class="card-content-text">\n          <p>${a()(r)}</p>\n          <div class="rating-container">\n            ${(e=>{const t=3*e/10;return new Array(3).fill('\n      <button class="icon">\n        <i class="far fa-star"></i>\n      </button>\n    ').map((e,n)=>n<t?'\n          <button class="icon">\n            <i class="fas fa-star"></i>\n          </button>\n        ':e).join("")})(c.average)}\n          </div>\n        </div>\n      </div>\n    </div>\n  `,n=(e,n)=>{const o=n.slice(0,6).map((e,n)=>t(n<2?{...e,principal:!0}:{...e,principal:!1}));e.innerHTML=o.join(""),document.querySelectorAll(".card.secondary .card-header").forEach((e,t)=>{const n=e.parentNode.getAttribute("id");e.addEventListener("click",Object(r.openHeader)(n))})};return{renderDOMShows:async t=>{try{Object(r.loadingRender)("show-section","left-loader").render(),await(async t=>{try{const n=t?`${l}${t}`:d,r=await fetch(n);if((e=await r.json()).status)throw e;e=e.map(e=>e.show?e.show:e)}catch(e){console.log("Error getting shows",e)}})(t);const o=document.getElementById("show-section");n(o,e)}catch(e){console.log("Error",e)}},renderShows:n,shows:()=>e}};let f=null;const p=()=>(f||(f=u()),f);p().renderDOMShows();var g=p;const h=document.querySelectorAll(".filter-list button"),m=()=>{h.forEach(e=>e.classList.remove("selected"))};h.forEach(e=>{e.addEventListener("click",e=>{m();let t=g().shows();const n=e.target.dataset.filter;t=t.filter(e=>e.genres.includes(n));const r=document.getElementById("show-section");g().renderShows(r,t),e.target.classList.toggle("selected")})});var v=n(4);const b=Object(v.a)(),y=document.querySelector("#search-form"),w=document.querySelector(".input.search");((e="")=>{w.value=e,w.addEventListener("change",e=>{w.value=e.target.value,b.setItem("searchInput",e.target.value)}),y.addEventListener("submit",e=>{e.preventDefault(),""!==w.value&&(g().renderDOMShows(w.value),m())})})(b.getItem("searchInput")),console.log("Hello world")}]);