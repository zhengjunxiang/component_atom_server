/**
 * mcc 相关函数
 */
import { getKeyByName } from '@dp/node-kms'
import appkey from "../config/appkey"
import { ConfigClient, FileConfigClient } from "@mtfe/mt-config"
// 参考文档 https://npm.sk.com/v2/pkg/detail?name=%40mtfe%2Fmt-config
const configClient = new ConfigClient({ appkey });
// 支持file操作
const fileConfigClient = new FileConfigClient({ appkey });

export async function getMCCConfig(key) {
    return new Promise((resolve, reject) => {
        configClient.get(key)
            .then(val => {
                resolve(val)
            })
            .catch(err => {
                reject(err)
            })
    })
}

export async function setMCCConfig(key, value) {
    return new Promise((resolve, reject) => {
        configClient.set(key, value)
            .then(val => {
                resolve(val)
            })
            .catch(err => {
                reject(err)
            })
    })
}

export async function getFileMCCConfig(filename) {
    return new Promise((resolve, reject) => {
        fileConfigClient.get(filename)
            .then(val => {
                resolve(val)
            })
            .catch(err => {
                reject(err)
            })
    })
}

export async function setFileMCCConfig(filename, value) {
    return new Promise((resolve, reject) => {
        fileConfigClient.set(key, value)
            .then(val => {
                resolve(val)
            })
            .catch(err => {
                reject(err)
            })
    })
}

export async function initMCC() {
    global.ssoClientId = await getMCCConfig("vis.atom.sso.client_id")
    global.ssoAccessEnv = await getMCCConfig("vis.atom.sso.access_env")
    global.ssoSecretKey = await getKeyByName(appkey, "vis.atom.sso.secret")
    global.venusClientId = await getMCCConfig("atom.venus.client_id");
    global.venusSecretKey = await getKeyByName(appkey, "atom.venus.client_secret");;
    global.venusHost = await getMCCConfig("atom.venus.host");
}