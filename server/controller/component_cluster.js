import ParamsException from "../utils/ParamsException";
import {rspHelper} from "../utils/rsp";
import { groupBy, orderBy, omit } from 'lodash';
export default (app) => ({
    async findComponentClusterList() {
        const { ctx, $helper, $service } = app;
        try {
            const { pageNum, pageSize, name, category, label, url, platform, status, tags, type, ui_owner, pm_owner, rd_owner, ...reset } = ctx.request.body
            // 构造查询条件
            let query = {}
            if (platform) {
                query['platform'] = platform
            }
            if (category) {
                query['category'] = category
            }
            if (name) {
                query['name'] = name
            }
            if (label) {
                query['label'] = { $like: `%${label}%`}
            }
            if (url) {
                query['url'] = { $like: `%${url}%`}
            }
            if (status) {
                query['status'] = status
            }
            if (type) {
                query['type'] = type
            }
            if (ui_owner) {
                query['ui_owner'] = ui_owner
            }
            if (pm_owner) {
                query['pm_owner'] = pm_owner
            }
            if (rd_owner) {
                query['rd_owner'] = rd_owner
            }
            query = { ...query, ...(reset || {})}
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

            const data = await $service.component_cluster.findComponentClusters({
                query, pageNum, pageSize })
            ctx.body = rspHelper({
                type: "SUCCESS",
                data: {
                    data: orderBy(data.data, ['update_time', 'status'], ['desc', 'desc']),
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
    // 物料集合状态修改
    async changeClusterStatus() {
        const { ctx, $helper, $service } = app;
        try {
            const { ids, status } = ctx.request.body;
            if (!ids || !status) {
                return rspHelper({
                    type: "MISSING_PARAMS"
                })
            }
            const query = {
                status,
            }
            const data = await $service.component_cluster.editClusterComponents(ids, query)
            ctx.body = rspHelper({
                type: "SUCCESS",
                data: data
            })
        } catch (error) {
            if (error instanceof ParamsException) {
                ctx.body = {...error};
            } else {
                throw Error(error);
            }
        }
    },
    // 统计分类各状态总数量
    async getClusterStats() {
        const { ctx, $helper, $service } = app;
        try {
            // 查询所有分类，按照status进行聚合
            const statusMap = {
                1: 'init',
                2: 'review',
                3: 'design',
                4: 'develop',
                5: 'check',
                6: 'checked'
            }
            const { data: clusters } = await $service.component_cluster.findComponentClusters({
                query: {
                    status: {
                        $in: Object.keys(statusMap)
                    }
                }, pageNum: 1, pageSize: 1000 })
            // 查询cluster关联的components
            const { data: components } = await $service.component.findComponents({ query: { status: 0}, pageNum:1, pageSize: 1000})
            // 聚合数据
            const groups = groupBy(clusters, 'status')
            const stats = Object.keys(groups).reduce((result, next) => {
                const key = statusMap[next]
                result[key] = groups[next] ? groups[next].length : 0
                return result
            }, {})

            ctx.body = rspHelper({
                type: "SUCCESS",
                data: { ...stats, collected: components.length }
            });

        } catch (error) {
            if (error instanceof ParamsException) {
                ctx.body = {...error};
            } else {
                throw Error(error);
            }
        }
    },
    // 获取物料集合详情
    async getComponentInfo() {
        const { ctx, $helper, $service } = app;
        try {
            const { id = 0 } = ctx.query
            // 保存
            const cluster = await $service.component_cluster.findComponentCluster(id);
            // 查询cluster关联的components
            const { data: scenes } = await $service.component.findComponents({ query: { id: { $in: cluster.componentIds}}, pageNum:1, pageSize: 1000})
            ctx.body = rspHelper({
                type: "SUCCESS",
                data: { ...cluster, scenes }
            });

        } catch (error) {
            if (error instanceof ParamsException) {
                ctx.body = {...error};
            } else {
                throw Error(error);
            }
        }
    },
    // 物料评审
    async review() {
        const { ctx, $helper, $service } = app;
        try {
            const { data, id, type } = ctx.request.body;
            if (!id) {
                return rspHelper({
                    type: "MISSING_PARAMS"
                })
            }
            const res = await $service.component_cluster.saveConfigs({id, data, type});
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
    },
    // 对收集回的物料进行归类，生成一条component_cluster 记录
    async createComponentCluster() {
        const { ctx, $helper, $service } = app;
        try {
            const data = ctx.request.body;
            const { componentIds = [], name, tags = [], urls = [], images = [], category, description = ''} = data;
            let curComponent = await $service.component_cluster.findComponentClusters({query: {name}})
            curComponent = curComponent && curComponent.data && curComponent.data[0]
            let createData;
            if (curComponent && curComponent.id) {
                const resistData = omit(curComponent, ['create_time', 'update_time'])
                const newData = {
                    ...resistData,
                    tags: [...(curComponent.tags || []), ...tags],
                    images: [...(curComponent.images || []), ...images],
                    urls: [...(curComponent.urls || []), ...urls],
                    description: (curComponent.description || '') + description,
                    componentIds: [...(curComponent.componentIds || []), ...componentIds]
                }
                createData = await $service.component_cluster.editClusterComponents([curComponent.id], newData)
            } else {
                createData = await $service.component_cluster.createComponentCluster(data);
            }
            const updateData = await $service.component.editComponents(componentIds, {
                status: 1 // 进入规范流程
            })
            ctx.body = rspHelper({
                type: "SUCCESS",
                data: {
                    createData,
                    updateData
                }
            })
        } catch (error) {
            if (error instanceof ParamsException) {
                ctx.body = {...error};
            } else {
                throw Error(error);
            }
        }
    },
    async componentCategory() {
        const { ctx, $helper, $service } = app;
        try {
            // 构造查询条件
            // 查询所有组件的分类信息, 返回组名称
            const res = await $service.component_cluster.findComponentCategory()
            const categoryMap = groupBy(res.map(item => {
                if (!item.category) {
                    item.category = '未分类'
                }
                return item
            }), 'category')
            const categotyList = Object.keys(categoryMap).reduce((result, next) => {
                const children = categoryMap[next] || []
                const groupMap = groupBy(children.map(item => {
                    if (!item.sub_category) {
                        item.sub_category = '未分组'
                    }
                    return item
                }), 'name');
                const groups = Object.keys(groupMap).reduce((r, n) => {
                    const items= groupMap[n] || []
                    r.push({
                        title: `${n}`,
                        key: next + '/' + n,
                        // children: items.map(child => {
                        //     return {
                        //         title: child.label,
                        //         key: next + '/' + n + '/' + child.id
                        //     }
                        // }),
                        count: items.length,
                        name: n
                    })
                    return r;
                }, [])
                const categoryCount = groups.reduce((r, n) => r + n.count, 0)
                const node = { title: `${next}(${categoryCount})`, key: next, children: groups, name: next }
                result.push(node)
                return result
            }, [])
            ctx.body = rspHelper({
                type: "SUCCESS",
                data: categotyList
            });
        } catch (error) {
            if (error instanceof ParamsException) {
                ctx.body = { ...error };
            } else {
                throw Error(error);
            }
        }
    },
    async editComponents() {
        const { ctx, $helper, $service } = app;
        try {
            const data = ctx.request.body
            const query = omit(data, ['ids'])
            // 保存
            const component = await $service.component_cluster.editClusterComponents(
                data.ids,
                query
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
    async deleteComponent() {
        const { ctx, $helper, $service } = app;
        try {
            const { id } = ctx.request.body
            // 保存应用信息
            const component = await $service.component_cluster.deleteComponentCluster(id);
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
    }
});
