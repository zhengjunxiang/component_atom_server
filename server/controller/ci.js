/**
 * branch ci 相关
 * @param app
 * @returns {{corsproxy(): Promise<void>}}
 */
import { MATERIAL_STATUS, MATERIAL_TYPE } from "../utils/const/constant";
import { rspHelper } from "../utils/rsp";
const { getAllDocs } = require("@yyfe/ts-md");
const getAPI = require("@nibfe/talos-public-api");
const npath = require("path");
const fs = require("fs");
const axios = require("axios");
const clientId = "yiyao_atom";
const clientSecret = "a9c7eb0820e54997b767302dfc2905f1";
const interfacePath = "index.ts";
const talosId = 13319
const productionTalosCidNew = 101097; // 线上 发布模板
const prereleaseTalosCidNew = 98731; // beta 发布模板

// axios.defaults.headers.common['tenantToken'] = "1ANu4DCvQjQl67Qnd2LRag==";
// const instance = axios.create({
//     timeout: 10000
// })
/*
 * 检测文件夹是否存在
 * @param {string} path 路径
 **/

function getFileStat(path) {
    try {
        fs.statSync(path);
        return true;
    } catch (err) {
        return false;
    }
}

// 导出快照数据
const expotrSnapshotProps = async function(app, interfacePath, materialId) {
    const { $service } = app;
    try {
        // 获取上个版本的快照
        const lastSnapshotRes = await $service.snapshot.findSnapshots({ material_id: materialId }, { pageNum: 1, pageSize: 1 });
        const lastSnapshotSchema = JSON.parse((lastSnapshotRes?.data?.[0] || {}).schema || "{}") || {};

        if (fs.existsSync(interfacePath) && fs.lstatSync(interfacePath).isFile()) {
            const docs = await getAllDocs(interfacePath, "type,interface") || [];
            const props = [];
            const schemas = {};
            docs.forEach((doc, index) => {
                props[index] = {
                    title: doc.title,
                    desc: doc.description,
                    props: []
                };
                doc?.members?.forEach((member) => {
                    props[index]["props"].push({
                        name: member.name,
                        type: member.type,
                        default: member.default,
                        required: member.required,
                        option: member.option,
                        description: member.description,
                    });
                });
            })
            // 根据上个版本的快照更新 schemas
            docs?.[0]?.members?.forEach((member) => {
                const lastSnapshotSchemaProp = lastSnapshotSchema[member.name] || {};
                schemas[member.name] = {
                    component: lastSnapshotSchemaProp.component || "",
                    description: member.description,
                    default: member.default,
                    type: lastSnapshotSchemaProp.type || "",
                    label: lastSnapshotSchemaProp.label || "",
                    enum: lastSnapshotSchemaProp.enum || [],
                };
            })
            return {
                props: JSON.stringify(props),
                schema: JSON.stringify(schemas)
            };
        } else {
            throw new Error("save schema error");
        }
    } catch (e) {
        console.log("expotrSnapshotProps error:", e);
    }
};

// 下载 cdn 上的文件
async function downloadFile(url, filepath, name) {
    if (!fs.existsSync(filepath)) {
        fs.mkdirSync(filepath, { recursive: true });
    }
    const mypath = npath.resolve(filepath, name);
    const writer = fs.createWriteStream(mypath);
    const response = await axios({
        url,
        method: "GET",
        responseType: "stream",
    });
    response.data.pipe(writer);
    return new Promise((resolve, reject) => {
        writer.on("finish", resolve);
        writer.on("error", reject);
    });
}

module.exports = (app) => ({
    /**
     * （改造）CI 低代码流水线流水线触发
     */
    async triggerCiNew() {
        const { ctx } = app;
        const { user_name, branchname, title, from } = ctx.request.body;
        console.log('triggerCi：user_name, branchname, title:', user_name, branchname, title);

        try {
            const { publish } = getAPI.default({ clientId, clientSecret, env: "production" });
            let projectRoot = '', componentName = '', npmDistTag;

            if (/feature\/([^\/\-\_]*)/.test(from)){
                componentName = RegExp.$1.trim();
            }

            if (!componentName) {
                ctx.body = rspHelper({
                    type: "PARAMS_ERROR",
                    data: '分支命名不规范'
                });
            }

            projectRoot = `components/${componentName}`

            switch(branchname) {
                case 'master':
                    npmDistTag = 'latest';
                    break;
                default:
                    npmDistTag = 'beta';
                    break;
            }

            let typeFromCommit = 'patch', npmVersionType, cid = branchname === 'master' ? productionTalosCidNew : prereleaseTalosCidNew;

            if (/[\(\（]([^:：]*)[\)\）][:：]/.test(title)) typeFromCommit = RegExp.$1.trim();
            if (branchname === 'master') {
                npmVersionType = ["major", "minor", "patch"].includes(typeFromCommit) ? typeFromCommit : 'patch'
            } else {
                npmVersionType = ["premajor", "preminor", "prepatch", "prerelease"].includes(typeFromCommit) ? typeFromCommit : 'prerelease'
            }

            console.log('npmVersionType，npmDistTag，cid，projectRoot: ', npmVersionType, npmDistTag, cid, projectRoot);

            // 触发发布start
            const result = await publish({
                id: talosId, cid,
                // 发布的发布说明
                comment: {
                    note: `${branchname} 分支触发 CI/CD`,
                },
                // 发布提供的环境变量，最终的环境变量 = { ...当前模板中的环境变量, ...envs }
                envs: [
                    {
                        key: "AWP_CLEAN_NODE_MODULES",
                        value: "true",
                    },
                    {
                        key: "projectRoot",
                        value: `./${projectRoot}`,
                    },
                    {
                        key: "projectSub",
                        value: `@yyfe/${componentName}`
                    },
                    {
                        key: 'npmDistTag',
                        value: npmDistTag
                    },
                    { // onlyPushProdVersion 设置为 true 时，只推送 latest 标签的 npm version 改动及 tag 到 git  仓库
                        key: 'onlyPushProdVersion',
                        value: branchname !== 'master'
                    },
                    {
                        key: 'npmVersionType',
                        value: npmVersionType
                    }
                ],
                // 设定发布人的 mis 号，如果有审批插件，可以通过 mis 号找到 tl
                op: user_name,
                // 注意：环境变量不要放在 config 的属性中，统一放在上方 envs 中；
                config: {
                    refType: "branch", // 如果不使用模板默认的分支，而是触发的时候自定义分支，这里声明使用分支发布还是 tag 发布
                    branch: branchname, // 分支名
                    // 这里指定发布插件参数，插件 id 是多少，可以在 http://talos.sk.com/#/plugin 查看，
                    // id 在插件详细信息页面的 url 上可以获得，如：http://talos.sk.com/#/plugin/28/detail 的 28
                    pluginsConfig: {
                        [talosId]: {
                            mis: user_name,
                            qrcode: "true",
                        },
                    },
                    projectRoot: `./${projectRoot}`,
                },
                projectRoot: `./${projectRoot}`
            });
            const { message, flow_id } = result;
            // 触发发布end
            ctx.body = rspHelper({
                type: "SUCCESS",
                status: "success",
                params: {
                    appendLog: message,
                    cid, flow_id
                },
            });
        } catch (e) {
            console.error("e: ", e)
        }
    },
    /**
     * 推送分支处理
     * @returns {Promise<void>}
    */
    async pushBranch() {
        // console.log("pushBranch")
        // const params = {
        //     materialId: 4755,
        //     keywords: "keywords",
        //     operator: "zhengjunxiang",
        //     name: "zjxTest01",
        //     label: "master",
        //     author: "zhengjunxiang",
        //     previewMode: 0,
        //     operUser: "zhengjunxiang",
        //     publishTplId: 1078,
        //     git: "ssh://git@git.sk.com/health/yiyao_fe_components.git",
        //     branch: "master"
        // };
        // instance.post("http://zero.fe.test.sk.com/zero/api/tenant/material/basic/update", params).then(res => {
        //     console.log('res', res)
        // }).catch(err => {
        //     reject("err", err)
        // })
        // return
        const { ctx, $service } = app;
        const { flowId, pluginId, op, publishConfig } = ctx.request.body;
        const { branch = "master" } = publishConfig;
        let materialNameG = "";

        ctx.body = rspHelper({
            type: "SUCCESS",
            data: { params: { log: "--- 物料发布开始 ---" } },
            status: "pending",
        });
        ctx.userInfo = { login: op }

        const { serviceCallback, getResources } = getAPI.default({ clientId, clientSecret, env: "production" });

        try {
            (async () => {
                const { resources } = await getResources(flowId);
                const tempPath = npath.resolve(process.cwd(), "temp");
                const packageRegExp = /\/([^\/]*)\/[^\/]*\/package\.json/;
                const packageUrl = resources.find(url => packageRegExp.test(url));

                if (!packageUrl) {
                    // 当获取不到 package.json 文件进行报错处理
                    console.error("无法获取 package.json 资源文件");
                    return serviceCallback({
                        flowId, pluginId, status: "fail",
                        params: {
                            appendLog: "物料发布失败: 无法获取 package.json 资源文件",
                            description: "无法获取 package.json 资源文件"
                        },
                    });
                }
                // 初始化 temp 目录
                !getFileStat(tempPath) && fs.mkdirSync(tempPath);
                // 获取 resources 中的其中一个 package.json 资源
                packageRegExp.test(packageUrl)
                // 获取物料名称
                const materialName = RegExp.$1.trim()
                await downloadFile(
                    packageUrl,
                    npath.resolve(tempPath, materialName),
                    "package.json"
                );

                let umdUrl = "", umdUrlDemos = "";
                const downloadTasks = ["index.umd.js", "index.ts", "example.tsx", "indexDemos.umd.js"].map(async fileName => {
                    const curUrl = resources.find((url) => {
                        if (url.includes(fileName) && url.includes(materialName)) {
                            if (fileName === "index.umd.js") {
                                umdUrl = url
                            } else if (fileName === "indexDemos.umd.js") {
                                umdUrlDemos = url
                            };
                            return true;
                        }
                        return false;
                    });
                    if (curUrl) {
                        return downloadFile(
                            curUrl,
                            npath.resolve(tempPath, materialName),
                            fileName
                        );
                    }
                })
                // 下载所有资源文件
                await Promise.all(downloadTasks);

                // 读取获取 package.json，获取 version
                const packageConcent = fs.readFileSync(npath.resolve(tempPath, materialName, "package.json"), "utf8");
                const { version = "0.1.0 ", name} = JSON.parse(packageConcent || "{}");
                materialNameG = name;
                if (!name) {
                    console.error("无法获取物料名称");
                    return serviceCallback({
                        flowId, pluginId, status: "fail",
                        params: {
                            appendLog: "物料发布失败: 无法获取 package.json 里的物料名称",
                            description: "无法获取物料名称"
                        },
                    });
                }
                // 通过物料名获取物料信息
                const materials = await $service.material.findMaterials({ name });
                const materialData = materials.data && materials.data[0] || null
                if (!materialData) {
                    console.error(`请确认物料 ${name} 是否已注册`);
                    return serviceCallback({
                        flowId, pluginId, status: "fail",
                        params: {
                            appendLog: `物料发布失败: 请确认物料 ${name} 是否已注册`,
                            description:  "物料未注册"
                        },
                    });
                }
                const { id } = materialData;
                const { schema = "", props = "" } = await expotrSnapshotProps(
                    app, npath.join(tempPath, materialName, interfacePath), id
                ) || {};
                const snapshotData = {
                    material_id: id, version, url: umdUrl, url_demos: umdUrlDemos, type: MATERIAL_TYPE[branch === "master" ? "RELEASE" : "BETA"],
                    schema, props: props, uname: op || "yyfe", status: MATERIAL_STATUS.ONLINE, // 待讨论
                }
                // 读取获取 example.tsx，获取示例代码
                if (getFileStat(npath.resolve(tempPath, materialName, "example.tsx"))) {
                    snapshotData.example = fs.readFileSync(npath.resolve(tempPath, materialName, "example.tsx"), "utf8") || "";
                }
                // 生产新快照
                await $service.snapshot.createSnapshot(snapshotData);
                // 同步物料 version 字段
                await $service.material.saveMaterial({ id, version, uname: op });
                // 插件回调
                serviceCallback({
                    flowId, pluginId, status: "success",
                    params: {
                        appendLog: `物料 ${name} 发布完成`,
                        description: "物料发布完成"
                    },
                });
            })()
        } catch (e) {
            serviceCallback({
                flowId, pluginId, status: "fail",
                params: {
                    appendLog: `物料 ${materialNameG} 发布失败`,
                    description: "物料发布失败"
                }
            });
            console.error(e);
        }
    },
});
