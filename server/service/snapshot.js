module.exports = app => {
    const { $model } = app;
    return {
        async findSnapshots(query, pager) {
            const { pageNum = 1, pageSize = 10 } = pager
            return await $model.get([ "snapshot", { query }, { pageNum, pageSize } ]);
        },
        async createSnapshot(query) {
            const { id } = query
            if (id) return await $model.modify(["snapshot", { id }, query]);
            return await $model.create({ name: "snapshot", data: query });
        },
        async updateSnapshot(id, query) {
            return await $model.modify(["snapshot", { id }, query]);
        },
        async findSnapshot(id = 1) {
            return await $model.findByPk(["snapshot", id]);
        },
        async findAll(query) {
            return await $model.get([ "snapshot", { query } ]);
        },
        async deleteSnapshot(id) {
            return await $model.remove(["snapshot", { id }]);
        },
        async deleteSnapshotByMaterialId(material_id) {
            return await $model.remove(["snapshot", { material_id }]);
        }
    }
};
