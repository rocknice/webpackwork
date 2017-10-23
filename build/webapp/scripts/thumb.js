'use strict';

var _index = require('./index.es');

var _index2 = _interopRequireDefault(_index);

require('./add.es');

require('../styles/index.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var d = new _index2.default(0, $('#container')); //这里给jquery写了一个插件
d.clickAction();