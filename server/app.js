/**
* koa mvc基础架构初始化工作
*/
const Koa = require('koa');
const cors = require('koa2-cors');
const { initConfig, initController, initService, initRouter, initMiddleware, initExtend }  = require('./core/loader');
const bodyParser = require('koa-bodyparser');
import { initSSO } from './utils/sso';
import model from './model/index'
const app = new Koa();

app.use(bodyParser());
app.use(
    cors({
        origin: function(ctx) { //设置允许来自指定域名请求
            return ctx.request.header.origin
            // const whiteList = ['http://yi_yao.shangou.test.sk.com','http://localhost:3030', 'https://yi_yao.mmtt.com']; //可跨域白名单
            // if(whiteList.includes(url)){
            //     return url;
            // }
            // return 'http://localhost:3030' //默认允许本地请求3000端口可跨域
        },
        maxAge: 15, // 指定本次预检请求的有效期，单位为秒。
        credentials: true, //是否允许发送Cookie
        allowMethods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], //设置所允许的HTTP请求方法
        allowHeaders: ['Content-Type', 'Authorization', 'Accept'], //设置服务器支持的所有头信息字段
        exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'] //设置获取其他自定义字段
    })
);

const koaApp = {
    $app: app
}
// SSO 中间件
initSSO(koaApp.$app);
koaApp.$model = model
// 初始化config
koaApp.$config = initConfig(koaApp);
// 初始化controller
koaApp.$controller = initController(koaApp);
// 初始化service
koaApp.$service = initService(koaApp);
// 初始化middleware
koaApp.$middleware = initMiddleware(koaApp);
// 初始化router
koaApp.$router = initRouter(koaApp);
// 初始化扩展
initExtend(koaApp);

// 将ctx注入到koaApp上
app.use(async (ctx, next) => {
	koaApp.ctx = ctx;
	await next()
})
app.use(koaApp.$router.routes());

// 启动服务
function start(port = 8080) {
    app.listen(port, ()=>{
        console.log('server is starting........!', port);
    });
}

process.env.NODE_ENV === "local" && start()

module.exports = app;
