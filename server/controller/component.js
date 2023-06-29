import ParamsException from "../utils/ParamsException";
import {rspHelper} from "../utils/rsp";
import { groupBy, orderBy } from 'lodash';
import { uploadPicToVenus } from '../utils/uploadPicToVenus';

export default (app) => ({
    async componentList() {
        const { ctx, $helper, $service } = app;
        try {
            const { pageNum, pageSize, category, label, url, sub_category, platform, status, tags, type, withoutPagination } = ctx.request.body
            // 构造查询条件
            let query = {}
            if (platform) {
                query['platform'] = platform
            }
            if (category) {
                query['category'] = category
            }
            if (sub_category) {
                query['sub_category'] = sub_category === '未分组' ? '' : sub_category
            }
            if (label) {
                query['label'] = { $like: `%${label}%`}
            }
            if (url) {
                query['url'] = { $like: `%${url}%`}
            }
            if (status !== undefined) {
                query['status'] = status
            }
            if (type) {
                query['type'] = type
            }
            const tagsArr = tags && tags.split(/[,，]/).map(i => i.trim())
            if (tagsArr && tagsArr.length) {
                const groups = tagsArr.map(i => {
                    return {
                        $regexp: i
                    }
                })
                query['tags'] = { 
                    $and: groups
                }
            }

            console.log('query:', query)
            let data;
            if (withoutPagination) {
                data = await $service.component.findComponentsWithoutPagination({query})
                data = data && data[0] && data[0].data
                console.log('data:', data)
            } else {
                data  = await $service.component.findComponents({
                    query, pageNum, pageSize })
            }
            ctx.body = rspHelper({
                type: "SUCCESS",
                data: withoutPagination ? data : {
                    data: data.data,
                    page: data.page
                }
            });
        } catch (error) {
            if (error instanceof ParamsException) {
                ctx.body = { ...error };
            } else {
                throw Error(error);
            }
        }
    },
    async saveComponent() {
        const { ctx, $helper, $service } = app;
        try {
            const { id = 0 } = ctx.request.body
            let data = {}
            if (id) {
                data = ctx.request.body
            } else {
                data = JSON.parse(ctx.request.body)
                // 对上传上来的图片进行处理
                if (data.image && data.image.startsWith('data:image')) {
                    let base64Image = data.image.split(';base64,').pop();
                    const url = await uploadPicToVenus(`${data.name}.jpg`, Buffer.from(base64Image, 'base64'))
                    data.image = url
                }
            }
            // 保存
            const component = await $service.component.saveComponent(
                {
                    ...data,
                    id: id === -1 ? 0 : id
                }
            );
            ctx.body = rspHelper({
                type: "SUCCESS",
                data: { id : component.id },
            });

        } catch (error) {
            if (error instanceof ParamsException) {
                ctx.body = {...error};
            } else {
                throw Error(error);
            }
        }
    },
    async getComponentInfo() {
        const { ctx, $helper, $service } = app;
        try {
            const { id = 0 } = ctx.query
            // 保存
            const component = await $service.component.findComponent(id);
            ctx.body = rspHelper({
                type: "SUCCESS",
                data: component
            });

        } catch (error) {
            if (error instanceof ParamsException) {
                ctx.body = {...error};
            } else {
                throw Error(error);
            }
        }
    },
    async deleteComponent() {
        const { ctx, $helper, $service } = app;
        try {
            const { id } = ctx.request.body
            // 保存应用信息
            const component = await $service.component.deleteComponent(id);
            ctx.body = rspHelper({
                type: "SUCCESS",
                data: component,
            });

        } catch (error) {
            if (error instanceof ParamsException) {
                ctx.body = {...error};
            } else {
                throw Error(error);
            }
        }
    },
    async patchEdit() {
        // "@post(/vis/api/save/components)";
        const { ctx, $helper, $service } = app;
        try {
            const { ids, category, sub_category, status, tags } = ctx.request.body
            if (!ids || !ids.length) {
                return rspHelper({
                    type: "MISSING_PARAMS",
                })
            }
            // 保存
            let query = {}
            if (category) {
                query.category = category
            }
            if (sub_category) {
                query.sub_category = sub_category
            }
            if (status) {
                query.status = status
            }
            if (tags) {
                query.tags = tags.split(/,，/)
            }
            let data = [];
            if (tags) {
                for (let id of ids) {
                    const res =  await $service.component.editComponent(id, query)
                    data.push(res)
                }
            } else {
                data = await $service.component.editComponents(ids, query)
            }
            ctx.body = rspHelper({
                type: "SUCCESS",
                data
            });

        } catch (error) {
            if (error instanceof ParamsException) {
                ctx.body = {...error};
            } else {
                throw Error(error);
            }
        }
    },
    // 物料状态修改
    async changeStatus() {
        const { ctx, $helper, $service } = app;
        try {
            const { ids, status } = ctx.request.body;
            if (!ids || !status) {
                return rspHelper({
                    type: "MISSING_PARAMS"
                })
            }
            const res = []
            for (let id of ids) {
                const resItem =  await $service.component.changeStatus({id, status});
                res.push(resItem);
            }
            ctx.body = rspHelper({
                type: "SUCCESS",
                data: res
            })
        } catch (error) {
            if (error instanceof ParamsException) {
                ctx.body = {...error};
            } else {
                throw Error(error);
            }
        }
    }
});
