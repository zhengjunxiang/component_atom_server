import ParamsException from "../utils/ParamsException";
import {rspHelper} from "../utils/rsp";

export default (app) => ({
    async findScenes() {
        const { ctx, $helper, $service } = app;
        const query = ctx.request.query
        try {
            const data = await $service.scenes.findAll(query);
            ctx.body = rspHelper({
                type: "SUCCESS",
                data: data || [],
            });
        } catch (error) {
            if (error instanceof ParamsException) {
                ctx.body = {...error};
            } else {
                throw Error(error);
            }
        }
    },
    async saveScene() {
        const { ctx, $helper, $service } = app;
        try {
            // 先判断是否已存在场景 name
            /* const data = await $service.scenes.findAll({ name });
            if (data && data?.length) {
                ctx.body = rspHelper({
                    type: "DATA_ALREADY_EXISTED",
                    data: data || [],
                });
            } */
            const scene = await $service.scenes.saveScene(
                {
                    ...ctx.request.body,
                    cname: ctx.userInfo.login || "yyfe"
                }
            );
            ctx.body = rspHelper({
                type: "SUCCESS",
                data: { id : scene.id },
            });
        } catch (error) {
            if (error instanceof ParamsException) {
                ctx.body = {...error};
            } else {
                throw Error(error);
            }
        }
    },
    async updateScene() {
        const { ctx, $helper, $service } = app;
        try {
            const scene = await $service.scenes.saveScene(
                {
                    ...ctx.request.body,
                    cname: ctx.userInfo.login || "yyfe"
                }
            );
            ctx.body = rspHelper({
                type: "SUCCESS",
                data: { id : scene.id },
            });
        } catch (error) {
            if (error instanceof ParamsException) {
                ctx.body = {...error};
            } else {
                throw Error(error);
            }
        }
    },
    async deleteScene() {
        const { ctx, $helper, $service } = app;
        try {
            const { id } = ctx.query
            // 查询应用信息
            const developer = await $service.scenes.deleteScene(id);
            ctx.body = rspHelper({
                type: "SUCCESS",
                data: developer
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
