"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var f = "";
//编译前的es6源代码
//父类PraiseButton

var PraiseButton = function PraiseButton(count, element) {
	_classCallCheck(this, PraiseButton);

	//实例属性
	this.count = count;
	this.element = element;
};
//子类Thumb


var Thumb = function (_PraiseButton) {
	_inherits(Thumb, _PraiseButton);

	function Thumb(count, element) {
		_classCallCheck(this, Thumb);

		return _possibleConstructorReturn(this, (Thumb.__proto__ || Object.getPrototypeOf(Thumb)).call(this, count, element));
	}
	//由于super指向父类的原型对象，所以定义在父类实例上的方法或属性，是无法通过super调用的。
	//ES6 规定，通过super调用父类的方法时，super会绑定子类的this。


	_createClass(Thumb, [{
		key: "clickAction",
		value: function clickAction() {
			var _this2 = this;

			this.element.click(function () {
				if (f) {
					clearTimeout(f);
				}
				f = setTimeout(function () {
					if (_this2.count < 10) {
						_this2.element.css('-webkit-filter', 'grayscale(0)');
						_this2.count = add(_this2.count);
						var num = _this2.count;
						var praise = _this2.element;
						$("#praise").css({
							"opacity": "1",
							"position": "relative",
							"top": "10px"
						}).text("+" + num);
						setTimeout(function () {
							$("#praise").css({
								"opacity": "0",
								"position": "relative",
								"top": "40px"
							});
						}, 700);
						axios.get('/index/update').then(function (response) {}).catch(function (error) {
							console.log(error);
						});
					} else {
						_this2.element.css('-webkit-filter', 'grayscale(1)');
						_this2.count = 0;
					}
					console.log(_this2.count);
				}, 500);
			});
		}
	}]);

	return Thumb;
}(PraiseButton);

exports.default = Thumb;