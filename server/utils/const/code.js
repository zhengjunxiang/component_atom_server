/**
 * 业务自定义相关CODE：https://km.sk.com/page/388058184
 */
export const SUCCESS = {
    code: 0,
    msg: '请求成功'
}

export const INTERRUPT = {
    code: 0,
    msg: "请求中断"
}

export const EXCEPTION = {
    code: -1,
    msg: "服务端异常，请重试"
}

export const PARAMS_TYPE_ERROR = {
    code: 10001,
    msg: '参数类型错误'
}

export const MISSING_PARAMS = {
    code: 10002,
    msg: '参数缺失'
}

export const PARAMS_ERROR = {
    code: 10003,
    msg: '参数异常'
}

export const SSO_TOKEN_INVALID = {
    code: 401,
    msg: 'sso token 失效'
}

export const MISSING_TENANT_TOKEN = {
    code: 403,
    msg: '缺少租户token'
}

export const PERMISSION_IS_NOT_ALLOWED = {
    code: 20001,
    msg: '当前用户暂无权限'
}

export const DATA_ALREADY_EXISTED = {
    code: 30001,
    msg: '数据已存在',
}

export const DATA_NOT_FOUND = {
    code: 30002,
    msg: '数据不存在',
}

export const DATA_HAS_BEEN_CREATED = {
    code: 0,
    msg: '数据已创建',
}

export const DATA_HAS_BEEN_UPDATED = {
    code: 0,
    msg: '数据已更新',
}

export const DATA_HAS_BEEN_DELETED = {
    code: 0,
    msg: '数据已删除',
}

export const DATA_NOT_DELETED = {
    code: 30007,
    msg: '数据删除失败',
}

export const DATA_INVALID = {
    code: 30008,
    msg: '当前数据无效',
}

export const PUBLISH_IS_RUNNING = {
    code: 40001,
    msg: '当前组件或页面正在发布',
}

export const UPLOAD_FILE_FAIL = {
    code: 50001,
    msg: '文件上传错误',
}

export const MICROSERVICE_EXCEPTION = {
    code: 50002,
    msg: '微服务调用异常',
}

export const DELETE_PAGE_TPL_ERROR = {
    code: 50003,
    msg: '页面模版删除异常',
}

export const MIME_ERROR = {
    code: 50004,
    msg: '媒体类型错误'
}

export const CALLBACK_ERROR = {
    code: 99912,
    msg: 'Talos 发布回调错误'
}

export default {
    SUCCESS,
    INTERRUPT,
    EXCEPTION,
    PARAMS_TYPE_ERROR,
    MISSING_PARAMS,
    PARAMS_ERROR,
    SSO_TOKEN_INVALID,
    MISSING_TENANT_TOKEN,
    PERMISSION_IS_NOT_ALLOWED,
    DATA_ALREADY_EXISTED,
    DATA_NOT_FOUND,
    DATA_HAS_BEEN_CREATED,
    DATA_HAS_BEEN_UPDATED,
    DATA_HAS_BEEN_DELETED,
    DATA_NOT_DELETED,
    PUBLISH_IS_RUNNING,
    DATA_INVALID,
    UPLOAD_FILE_FAIL,
    MICROSERVICE_EXCEPTION,
    DELETE_PAGE_TPL_ERROR,
    MIME_ERROR
}
