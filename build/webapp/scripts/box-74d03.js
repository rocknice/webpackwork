webpackJsonp([0],[,,,,,function(e,n,t){"use strict";function o(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}var i=function(){function e(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(n,t,o){return t&&e(n.prototype,t),o&&e(n,o),n}}();t(6),t(7),t(8),t(9);var a=!0;window.addEventListener("deviceorientation",function(e){var n=e.gamma;if(Math.abs(n)>1){a=!1;document.getElementsByClassName("container")[0].style.transform="rotateY("+n+"deg)"}else a=!0},!1);var u=function(){function e(n){o(this,e),this.elem=document.getElementById(n)}return i(e,[{key:"mouseDrag",value:function(){var e=this.elem,n=e.children,t=void 0,o=void 0,i=void 0,a=0;e.onmousedown=function(u){return u.preventDefault(),t=window.event||u,o=t.screenX+a,e.onmousemove=function(e){i=e.screenX,a=o-i,n[0].style.transform="rotateY("+a/2+"deg)"},e.onmouseleave=function(n){e.onmousemove=null,e.onmouseup=null},e.onmouseup=function(n){e.onmousemove=null,e.onmouseup=null},!1}}},{key:"touchDrag",value:function(){var e=this.elem,n=e.children,t=void 0,o=void 0,i=void 0,u=0;e.addEventListener("touchstart",function(e){e.preventDefault(),t=window.event||e,o=t.touches[0].screenX+u},!1),e.addEventListener("touchmove",function(e){a&&(e.preventDefault(),i=e.touches[0].screenX,u=o-i,n[0].style.transform="rotateY("+u+"deg)")})}},{key:"playAudio",value:function(){var e=document.getElementsByClassName("iconfont"),n=document.getElementById("audio");e[0].addEventListener("click",function(t){t.className;n.paused?(n.play(),e[0].className="iconfont icon-zanting"):(n.pause(),e[0].className="iconfont icon-play")},!1)}},{key:"browserUA",value:function(){var e=this.elem,n=window.navigator.userAgent;!0==(-1!=n.indexOf("Safari")&&-1!=n.indexOf("Version")&&-1==n.indexOf("Mobile"))&&(e.style.perspective="40rem",e.style.perspectiveOrigin="100% 2%")}}]),e}(),r=new u("box");r.mouseDrag(),r.touchDrag(),r.playAudio(),r.browserUA()},function(e,n){},function(e,n){},function(e,n){},function(e,n,t){e.exports=t.p+"audio/bgm.mp3"}],[5]);