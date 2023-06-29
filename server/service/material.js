const Material = app => {
    const { $model } = app;
    return {
        async findMaterials(query, pager = {}) {
            const { pageNum = 1, pageSize = 10 } = pager
            const list = await $model.get([
                "material",
                { query },
                { pageNum, pageSize },
            ]);
            return list;
        },

        async saveMaterial(query) {
            const { id, uname } = query
            if (id) {
                return await $model.modify([
                    "material",
                    { id },
                    { ...query, uname: uname || app.ctx && app.ctx?.userInfo?.login || "yyfe" }
                ]);
            } else {
                return await $model.create({
                    name: "material",
                    data: query
                });
            }
        },

        async findMaterial(id = 1) {
            return await $model.findByPk([
                "material",
                id
            ]);
        },

        async findAll(query) {
            return await $model.get([
                "material",
                { query }
            ]);
        },

        async deleteMaterial(id) {
            return await $model.remove(["material", { id }]);
        }
    }
}

module.exports = Material;
