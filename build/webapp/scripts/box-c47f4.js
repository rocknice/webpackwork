webpackJsonp([0],[,,,,,function(e,n,o){"use strict";function t(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}var u=function(){function e(e,n){for(var o=0;o<n.length;o++){var t=n[o];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}return function(n,o,t){return o&&e(n.prototype,o),t&&e(n,t),n}}();o(6),o(7),o(8),o(9);var i=function(){function e(n){t(this,e),this.elem=document.getElementById(n)}return u(e,[{key:"mouseDrag",value:function(){var e=this.elem,n=e.children,o=void 0,t=void 0,u=void 0,i=0;e.onmousedown=function(r){return r.preventDefault(),o=window.event||r,t=o.screenX+i,e.onmousemove=function(e){u=e.screenX,i=t-u,n[0].style.transform="rotateY("+i/2+"deg)"},e.onmouseleave=function(n){e.onmousemove=null,e.onmouseup=null},e.onmouseup=function(n){e.onmousemove=null,e.onmouseup=null},!1}}},{key:"touchDrag",value:function(){var e=this.elem,n=e.children,o=void 0,t=void 0,u=void 0,i=0;e.addEventListener("touchstart",function(e){e.preventDefault(),o=window.event||e,t=o.touches[0].screenX+i},!1),e.addEventListener("touchmove",function(e){e.preventDefault(),u=e.touches[0].screenX,i=t-u,n[0].style.transform="rotateY("+i+"deg)"})}},{key:"playAudio",value:function(){var e=document.getElementsByClassName("iconfont"),n=document.getElementById("audio");e[0].addEventListener("click",function(o){o.className;n.paused?(n.play(),e[0].className="iconfont icon-zanting"):(n.pause(),e[0].className="iconfont icon-play")},!1)}},{key:"browserUA",value:function(){var e=this.elem,n=window.navigator.userAgent;!0==(-1!=n.indexOf("Safari")&&-1!=n.indexOf("Version")&&-1==n.indexOf("Mobile"))&&(e.style.perspective="40rem",e.style.perspectiveOrigin="100% 2%")}}]),e}(),r=new i("box");r.mouseDrag(),r.touchDrag(),r.playAudio(),r.browserUA()},function(e,n){},function(e,n){},function(e,n){},function(e,n,o){e.exports=o.p+"audio/bgm.mp3"}],[5]);