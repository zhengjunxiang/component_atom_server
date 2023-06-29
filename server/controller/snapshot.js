/**
 * snapshot 物料快照相关接口
 * @param app
 * @returns {{corsproxy(): Promise<void>}}
 */
import ParamsException from "../utils/ParamsException";
import {rspHelper} from "../utils/rsp";
module.exports = app => ({
	/**
	 * 新增快照
	 * @returns {Promise<void>}
	 */
	async createSnapshot () {
        const { ctx, $helper, $service } = app;
        try {
            const body = ctx.request.body
            if (!body) {
                return ctx.body = rspHelper({
                    type: "PARAMS_ERROR",
                    data: '请求参数不为空'
                });
            }
            const { material_id, version = "" } = body
            const snapshots = await $service.snapshot.findSnapshots({
                material_id,
                version
            }, {
                pageNum: 1,
                pageSize: 50
            });
            let snapshotRes
            if (snapshots.data.length > 0) {
                const curSnapshot = snapshots.data[0]
                snapshotRes = await $service.snapshot.updateSnapshot(curSnapshot.id, {
                    ...{
                        ...curSnapshot,
                        ...body
                    },
                    uname: ctx.userInfo && ctx.userInfo.login || "yyfe"
                })
            } else {
                snapshotRes = await $service.snapshot.createSnapshot({
                    ...body,
                    uname: ctx.userInfo && ctx.userInfo.login || "yyfe"
                })
            }

            ctx.body = rspHelper({
                type: "SUCCESS",
                data: { ...snapshotRes },
            });
        } catch(e) {
            console.log('error:', e)
        }
    },
    /**
	 * 查询快照
	 * @returns {Promise<void>}
	 */
    async findMaterialSnapshots() {
        const { ctx, $helper, $service } = app;
        try {
            const { id, pageNum, pageSize, version } = ctx.query
            if (!id) {
                return ctx.body = rspHelper({
                    type: "PARAMS_ERROR",
                    data: '请求参数id不为空'
                });
            }
            const query = { material_id: id };
            if (version) query.version = version
            const data = await $service.snapshot.findSnapshots(query, {
                pageNum: Number(pageNum) || 1,
                pageSize: Number(pageSize) || 50
            });
            ctx.body = rspHelper({
                type: "SUCCESS",
                data: data
            });

        } catch (error) {
            if (error instanceof ParamsException) {
                ctx.body = {...error};
            } else {
                throw Error(error);
            }
        }
    },
    /**
     * 修改快照数据
     */
    async updateNaterialSnapshots() {
        const { ctx, $helper, $service } = app;
        try {
            const body = ctx.request.body
            if (!body) {
                return ctx.body = rspHelper({
                    type: "PARAMS_ERROR",
                    data: '请求参数不为空'
                });
            }
            const { material_id, version } = ctx.query
            const snapshots = await $service.snapshot.findSnapshots({
                material_id,
                version
            }, {
                pageNum: 1,
                pageSize: 50
            });
            let snapshotRes = [], newData = {}
            Object.keys(body || {}).forEach(key => {
                if (body[key] && ['status', 'schema', 'props', 'events', 'styles', 'url', 'type'].indexOf(key) > -1) {
                    newData[key] = body[key]
                }
            })
            if (snapshots && snapshots.data && snapshots.data.length > 0) {
                for (const curSnapshot of snapshots?.data) {
                    const itemRes = await $service.snapshot.updateSnapshot(curSnapshot.id, {
                        ...{
                            ...curSnapshot,
                            ...newData
                        },
                        uname: ctx.userInfo && ctx.userInfo.login || "yyfe"
                    })
                    snapshotRes.push(itemRes)
                }
            } else {
                return ctx.body = rspHelper({
                    type: "PARAMS_ERROR",
                    data: '没有符合条件的快照'
                });
            }

            ctx.body = rspHelper({
                type: "SUCCESS",
                data: { ...snapshotRes },
            });
        } catch(e) {
            console.log('error:', e)
        }
    },
    /**
	 * 删除快照
	 * @returns {Promise<void>}
	 */
    async deleteMaterialSnapshots() {
        const { ctx, $service } = app;
        try {
            const { id } = ctx.query

            console.log('deleteMaterialSnapshots-id', id)
            if (!id) {
                return ctx.body = rspHelper({
                    type: "PARAMS_ERROR",
                    data: '请求参数id不为空'
                });
            }
            await $service.snapshot.deleteSnapshotByMaterialId(id);
            ctx.body = rspHelper({
                type: "SUCCESS",
                data: id
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