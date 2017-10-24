webpackJsonp([0],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(6);

__webpack_require__(7);

__webpack_require__(8);

__webpack_require__(9);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var flag = true;
//flag叫标志量，用来作为控制一段语句是否运行的标志。这段语句里，当flag为true时，可以执行自动旋转，且设置flag为false，所以不能执行触摸动作，当gamma角度小于1时，flag为true，可以执行触摸动作。

var Rotate = function () {
	function Rotate(id) {
		_classCallCheck(this, Rotate);

		this.elem = document.getElementById(id);
	}
	//鼠标拖拽


	_createClass(Rotate, [{
		key: 'mouseDrag',
		value: function mouseDrag() {
			var elem = this.elem;
			var box = elem.children;
			var ev = void 0,
			    down_x = void 0,
			    move_x = void 0;
			var dist = 0;
			elem.onmousedown = function (e) {
				e.preventDefault();
				ev = window.event || e;
				down_x = ev.screenX - dist; //down_x表示初始点x坐标，减前一次的移动距离。
				elem.onmousemove = function (e) {
					move_x = e.screenX;
					dist = move_x - down_x; //move_x随着鼠标移动变化，down_x不变，偏移量dist始终等于新的偏移量加前一次的偏移量，前一次的偏移量dist也由鼠标松开的时候固定。
					box[0].style.transform = "rotateY(" + dist / 2 + "deg)";
				};
				elem.onmouseleave = function (e) {
					elem.onmousemove = null;
					elem.onmouseup = null;
				};
				elem.onmouseup = function (e) {
					elem.onmousemove = null;
					elem.onmouseup = null;
				};
				return false;
			};
		}
		//触屏拖拽

	}, {
		key: 'touchDrag',
		value: function touchDrag() {
			var elem = this.elem;
			var box = elem.children;
			var ev = void 0,
			    touch_x = void 0,
			    move_x = void 0;
			var dist = 0;
			elem.addEventListener("touchstart", function (e) {
				e.preventDefault();
				ev = window.event || e;
				touch_x = ev.touches[0].screenX - dist; //down_x表示初始点x坐标，减前一次的移动距离。
			}, false);
			elem.addEventListener("touchmove", function (e) {
				if (flag) {
					e.preventDefault();
					move_x = e.touches[0].screenX;
					dist = move_x - touch_x;
					box[0].style.transform = "rotateY(" + dist + "deg)";
				} else {
					return false;
				}
			});
		}
		//陀螺仪：

	}, {
		key: 'autoRotate',
		value: function autoRotate() {
			window.addEventListener('deviceorientation', function (event) {
				var gamma = event.gamma;
				if (Math.abs(gamma) > 1) {
					flag = false;
					box[0].style.transform = "rotateY(" + gamma * 3 + "deg)";
				} else {
					flag = true;
				}
			});
		}
		//播放音乐

	}, {
		key: 'playAudio',
		value: function playAudio() {
			var playbtn = document.getElementsByClassName("iconfont");
			var elem = document.getElementById("audio");
			playbtn[0].addEventListener("click", function (e) {
				var classname = e.className;
				if (elem.paused) {
					elem.play();
					playbtn[0].className = "iconfont" + " " + "icon-zanting";
				} else {
					elem.pause();
					playbtn[0].className = "iconfont" + " " + "icon-play";
				}
			}, false);
		}
		//3d样式兼容safari

	}, {
		key: 'browserUA',
		value: function browserUA() {
			var elem = this.elem;
			var ua = window.navigator.userAgent;
			var isSafari = ua.indexOf("Safari") != -1 && ua.indexOf("Version") != -1;
			if (isSafari === true) {
				elem.style.perspective = "40rem";
				elem.style.perspectiveOrigin = "100% 2%";
			}
		}
	}]);

	return Rotate;
}();

var f = new Rotate("box");
f.mouseDrag();
f.touchDrag();
f.autoRotate();
f.playAudio();
f.browserUA();

/***/ }),
/* 6 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 7 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 8 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "audio/bgm.mp3";

/***/ })
],[5]);