import ParamsException from "../utils/ParamsException";
import {rspHelper} from "../utils/rsp";
import {getMCCConfig} from "../utils/mcc";

export default (app) => ({
    async findMaterials() {
        const { ctx, $service } = app;
        try {
            const { name, category, pageNum = 1, pageSize = 10 } = ctx.request.query
            // 构造查询参数
            let query = {}
            if (name) { query['name'] = 'name' }
            if (category) { query['category'] = 'category' }
            const data = await $service.material.findMaterials(
                query,
                {
                    pageNum: Number(pageNum),
                    pageSize: Number(pageSize),
                }
            );
            ctx.body = rspHelper({
                type: "SUCCESS",
                data: data,
            });
        } catch (error) {
            if (error instanceof ParamsException) {
                ctx.body = {...error};
            } else {
                throw Error(error);
            }
        }
    },
    async getMaterial() {
        const { ctx, $helper, $service } = app;
        try {
            const { id } = ctx.query
            const material = await $service.material.findMaterial(id);
            ctx.body = rspHelper({
                type: "SUCCESS",
                data: material
            });
        } catch (error) {
            if (error instanceof ParamsException) {
                ctx.body = {...error};
            } else {
                throw Error(error);
            }
        }
    },
    async deleteMaterial() {
        const { ctx, $helper, $service } = app;
        try {
            const { id } = ctx.query
            const material = await $service.material.deleteMaterial(id);
            // 删除对应的快照和场景
            await $service.snapshot.deleteSnapshotByMaterialId(id);
            await $service.scenes.deleteSceneByMaterialId(id);
            ctx.body = rspHelper({
                type: "SUCCESS",
                data: material
            });
        } catch (error) {
            if (error instanceof ParamsException) {
                ctx.body = {...error};
            } else {
                throw Error(error);
            }
        }
    },
    async saveMaterial() {
        const { ctx, $helper, $service } = app;
        const { name, id } = ctx.request.body

        try {
            // 当没有 id 为新增物料，先判断是否已存在组件 name
            if (!id) {
                if (name) {
                    const data = await $service.material.findMaterials(
                        { name },
                        {
                            pageNum: 1,
                            pageSize: 10,
                        }
                    );
                    if (data && data?.data?.length) {
                        return ctx.body = rspHelper({
                            type: "DATA_ALREADY_EXISTED",
                            data: data.data || [],
                        });
                    }
                }
            }
            const material = await $service.material.saveMaterial(
                {
                    ...ctx.request.body,
                    cname: ctx?.userInfo?.login || "yyfe"
                }
            );
            ctx.body = rspHelper({
                type: "SUCCESS",
                data: { id : material.id },
            });
        } catch (error) {
            if (error instanceof ParamsException) {
                ctx.body = {...error};
            } else {
                throw Error(error);
            }
        }
    },
    async businessType() {
        const { ctx } = app;
        try {
            const data = await getMCCConfig("vis.atom.material.business.type");
            ctx.body = rspHelper({
                type: "SUCCESS",
                data: JSON.parse(data || "[]") || [],
            });
        } catch(error) {
            if (error instanceof ParamsException) {
                ctx.body = {...error};
            } else {
                throw Error(error);
            }
        }
    }
});
