const Scene = app => {
    const { $model } = app;

    return {
        async saveScene(query) {
            const { id } = query
            if (id) return await $model.modify([ "scenes", { id }, query ]);
            else return await $model.create({ name: "scenes", data: query });
        },

        async findScene(id = 1) {
            return await $model.findByPk(["scenes", id]);
        },

        async findAll(query) {
            return await $model.get(["scenes", { query }]);
        },

        async deleteScene(id) {
            return await $model.remove(["scenes", { id }]);
        },

        async deleteScene(id) {
            return await $model.remove(["scenes", { id }]);
        },

        async deleteSceneByMaterialId(material_id) {
            return await $model.remove(["scenes", { material_id }]);
        }
    }
}

module.exports = Scene;
