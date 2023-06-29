const path = require('path')
const fs = require('fs')
const Router = require('koa-router');

//自动扫指定目录下面的文件并且加载
function scanFilesByFolder(dir, cb) {
	const _folder = path.resolve(__dirname, dir);
	if (!getFileStat(_folder)) return;
	try {
		const files = fs.readdirSync(_folder);
		files.forEach((file) => {
			const filename = file.replace('.js', '');
			const oFileCnt = require(_folder + '/' + filename);
			cb && cb(filename, oFileCnt.default ? oFileCnt.default : oFileCnt);
		})

	} catch (error) {
		console.log('文件自动加载失败...', error);
	}
}

// 检测文件夹是否存在
/**
 * @param {string} path 路径
 */
function getFileStat(path) {
	try {
		fs.statSync(path);
		return true;
	} catch (err) {
		return false;
	}
}

// 配置信息
const initConfig = function() {
	let config = {};
	scanFilesByFolder('../config', (filename, content) => {
		config = {...config, ...content};
	});
	return config;
};

// 初始化路由
const initRouter = function(app){
	const router = new Router();
	require('../router.js')({...app, router});
	return router;
}

// 初始化控制器
const initController = function(app){
	const controllers = {};
	scanFilesByFolder('../controller', (filename, controller)=>{
		controllers[filename] = controller(app);
	})
	return controllers;
}

//初始化service
function initService(app){
	const services = {};
	scanFilesByFolder('../service',(filename, service)=>{
		services[filename] = service(app);
	})
	return services;
}

// 初始化中间件middleware
function initMiddleware(app){
	const middleware = {}
	scanFilesByFolder('../middleware',(filename, middlewareConf)=>{
		middleware[filename] = middlewareConf(app);
	})
	//初始化配置中间件
	if (app.$config.middleware && Array.isArray(app.$config.middleware)) {
		app.$config.middleware.forEach(mid=>{
			if(middleware[mid]){
				app.$app.use(middleware[mid]);
			}
		})
	}
	return middleware;
}

// 初始化扩展
function initExtend(app) {
	scanFilesByFolder('../extend',(filename, extendFn)=>{
		app['$' + filename] = Object.assign(app['$' + filename] || {}, extendFn(app))
	})
}

module.exports = {
	initConfig,
	initController,
	initService,
	initRouter,
	initMiddleware,
	initExtend,
  getFileStat
}
