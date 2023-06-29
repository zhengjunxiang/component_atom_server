const app = require('./index')
const adapter = require('@fdfe/ecf-http-adapter')

module.exports.main = adapter(app, {
    injectLogger: true // 注入 Logger
})
