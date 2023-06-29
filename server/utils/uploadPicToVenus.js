import axios from 'axios';
import crypto from "crypto";
import FormData from 'form-data';
const instance = axios.create({
    timeout: 10000
})
// DOC https://km.sk.com/custom/onecloud/page/262088421
export function uploadPicToVenus(filename, fileStream) {

    function meituanBasicAuth({ client_id, client_secret }) {
        return function ({ REQUEST_URI, method = 'GET', date = new Date() }) {
            // method 大写
            method = method.toUpperCase();
            // url  pathname
            date = date.toGMTString();
            let stringToSign = method + ' ' + REQUEST_URI + '\n' + date,
                /**
                 * 以sha1算法加密,创建hash实例：crypto.createHmac('sha1', config.client_secret)
                 * update()将后面的字符串拼接到hash实例。
                 * digest('base64')以base64的形式返回，返回加密后的字符串
                 */
                signature = crypto.createHmac('sha1', client_secret).update(stringToSign).digest('base64'),
                authorization = 'MWS ' + client_id + ':' + signature;
            return {
                'Date': date,
                'Authorization': authorization,
            };
        }
    }

    let auth = meituanBasicAuth({
        client_id: global.venusClientId,
        client_secret: global.venusSecretKey
    });

    let authData = auth({
        REQUEST_URI: '/storage/tiny',
        method: 'POST'
    });

    return new Promise((resolve, reject) => {
        const form = new FormData()
        form.append('file', fileStream, filename);
        const formHeaders = form.getHeaders();
        instance.post(global.venusHost, form, { headers: { ...authData, ...formHeaders } }).then(res => {
            console.log('venus 上传结果res', res)
            resolve(res.data.data.originalLink)
        }).catch(err => {
            reject(err)
        })
    })
}
