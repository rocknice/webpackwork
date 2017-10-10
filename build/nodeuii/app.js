'use strict';

var _koa = require('koa');

var _koa2 = _interopRequireDefault(_koa);

var _initController = require('./controllers/initController');

var _initController2 = _interopRequireDefault(_initController);

var _config = require('./config/config.js');

var _config2 = _interopRequireDefault(_config);

var _babelPolyfill = require('babel-polyfill');

var _babelPolyfill2 = _interopRequireDefault(_babelPolyfill);

var _babelCore = require('babel-core');

var _babelCore2 = _interopRequireDefault(_babelCore);

var _koaSimpleRouter = require('koa-simple-router');

var _koaSimpleRouter2 = _interopRequireDefault(_koaSimpleRouter);

var _co = require('co');

var _co2 = _interopRequireDefault(_co);

var _koaSwig = require('koa-swig');

var _koaSwig2 = _interopRequireDefault(_koaSwig);

var _koaStatic = require('koa-static');

var _koaStatic2 = _interopRequireDefault(_koaStatic);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = new _koa2.default();

_initController2.default.init(app, _koaSimpleRouter2.default);

app.context.render = _co2.default.wrap((0, _koaSwig2.default)({ //3、启动swig模版引擎  koa-swig
	root: _config2.default.get("viewsDir"), //引入模版   //等于path.join(__dirname, 'views') 
	autoescape: true,
	cache: 'memory', // disable, set to false 
	ext: 'html',
	writeBody: false
}));
app.use((0, _koaStatic2.default)(_config2.default.get('staticDir')));
app.listen(_config2.default.get('port'));