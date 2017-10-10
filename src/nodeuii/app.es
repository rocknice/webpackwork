import koa from 'koa';
import initController from './controllers/initController';
import config from './config/config.js';
import bebel_po from 'babel-polyfill';
import bebel_co from 'babel-core';
import router from 'koa-simple-router';
import co from 'co';
import render from 'koa-swig';
import server from 'koa-static';
const app = new koa();

initController.init(app,router);


app.context.render = co.wrap(render({     //3、启动swig模版引擎  koa-swig
	root: config.get("viewsDir"),  //引入模版   //等于path.join(__dirname, 'views') 
	autoescape: true,
	cache: 'memory', // disable, set to false 
	ext: 'html',
	writeBody: false
}));
app.use(server(config.get('staticDir')));
app.listen(config.get('port'));