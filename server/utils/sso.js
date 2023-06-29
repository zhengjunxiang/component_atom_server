
/**
 * 登录验证
 * @return {null} null
 */
import { initMCC } from './mcc.js';
import ssoWhiteList from "../config/authWhiteList.js";
import authEpassportList from '../config/authEpassportList.js';
const KoaSSO = require('@mtfe/sso-client').KoaSSO;
const { thriftless } = require('@mtfe/thriftless');
const thrift = thriftless.create({
    appkey: 'com.sk.vis.atom'
})
thrift.preload({
  packageName: 'sjst-ecom-epassportservice',  // npm包包名，可以在Thrifthub的项目页面上查到（不含scope部分）
  version: '2.0.18'  // 版本号
}).then(() => {
    console.log('preload finish');
});

export function initSSO(app) {
    // SSO鉴权
    app.use(async (ctx, next) => {
        // 获取MCC配置
        await initMCC();
        // TODO talos发布回调的接口免SSO检查, 但是需要校验发布token一致性
        const merchantToken = ctx.cookies && ctx.cookies.get('bsid')
        const path = ctx.request.path
        const epassport = async () => {
            // 判断epassport登陆代码
            // https://docs.sk.com/mt/nib/epassport-docs/master/backend/thrift/#pagemodel
            let epassportRes;
            if (merchantToken) {
                epassportRes = await thrift('sjst-ecom-epassportservice@2.0.18/BizAccountInfoThriftService.getBizAccountByToken', {
                    req: {
                    token: merchantToken,
                    fields:{
                        id: true,
                        login: true,
                        name: true
                    }
                    }
                })
            }
            // epassport 状态值，见https://km.sk.com/page/21598650
            if (epassportRes && epassportRes.status && epassportRes.status.code === 0) {
                await next()
            } else {
                const code = epassportRes?.status?.code || 3001
                let resBody = {
                    status: 401,
                    data: {
                        message: "token失效，请回到主页面重新登陆",
                        code,
                    }
                };

                ctx.res.end(JSON.stringify(resBody));
                return { type: "info", typeCode: code, message: resBody.data.message }; // 如果没有特别需求,保留这行
            }
        }
        const ssoClient = KoaSSO({
            clientId: global.ssoClientId,
            secret: global.ssoSecretKey,
            accessEnv: global.ssoAccessEnv,
            checkMoreCookie: true,
            isDebug: true,
            async onRedirectingToOriginalUrl(req, res, ssoid) {
                const setCookieStrArr = [];
                const yourCostomeCookieName = "yyfe";
                const yourCostomeCookieStr = `${yourCostomeCookieName}=${ssoid}; path=/;`;
                setCookieStrArr.push(yourCostomeCookieStr);
                res.setHeader("Set-Cookie", setCookieStrArr);
            },
            /**
             * @see http://docs.sk.com/doc/it/node-sso-sdk/configuration/#onssologouted
             */
            async onSSOLogouted(req, res, userInfo) {
                // 清除 custom cookie 的示例
                const setCookieStrArr = [];
                const yourCostomeCookieName = "yyfe";
                const yourCostomeCookieStr = `${yourCostomeCookieName}=; path=/;`;
                setCookieStrArr.push(yourCostomeCookieStr);
                res.setHeader("Set-Cookie", setCookieStrArr);
            },
            async onApiUserAbnormal(user, req, res) {
                let resBody = {
                    status: 401,
                    data: {
                        message: "auth failed",
                        code: user.code
                    }
                };
                res.writeHead(200, {
                    "Cache-Control": "no-store",
                    "Content-Type": "application/json"
                });
                res.end(JSON.stringify(resBody));
                return { type: "info", typeCode: user.code, message: resBody.data.message }; // 如果没有特别需求,保留这行
            }
        })
        const inWhiteList = ssoWhiteList.findIndex(url => {
            return new RegExp(url).test(ctx.url)
        });
        const inEpassportList = authEpassportList.findIndex(url => {
            return new RegExp(url).test(ctx.url)
        })
        if (inEpassportList > -1) {
            await epassport();
        } else if (inWhiteList === -1) {
            await ssoClient(ctx, next);
        } else {
            await next();
        }
    })
}