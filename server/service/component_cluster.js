const ComponentCluster = app => {
    const { $model } = app;
    return {
        async findComponentClusters ({ query, pageNum = 1, pageSize = 10 }) {
            const list = await $model.get([
                "component_cluster",
                { query },
                { pageNum: Number(pageNum), pageSize: Number(pageSize) },
            ]);
            return list;
        },
        async editClusterComponents(ids, query) {
            return await $model.modify([
                "component_cluster",
                {
                    id: {
                        $in: ids
                    }
                },
                query
            ])
        },
        async findComponentCluster(id) {
            return await $model.findByPk([
                "component_cluster",
                id
            ]);
        },
        async saveConfigs({id, data, type}) {
            const record = await $model.findByPk([
                "component_cluster",
                id
            ])
            const oldConfigs = record?.configs || {}
            const configs = {
                ...oldConfigs,
                [type]: data
            }
            const res = await $model.modify([
                "component_cluster",
                { id },
                {
                    configs
                }
            ])
            return res
        },
        async createComponentCluster(query) {
            const { id } = query
            if (id) {
                return await $model.modify([
                    "component_cluster",
                    { id },
                    query
                ]);
            } else {
                const record = await $model.create({
                    name: "component_cluster",
                    data: query
                });
                return record
            }
        },

        async findComponentCategory() {
            return await $model.sql(`select id, category, name from component_cluster`);
        },

        async deleteComponentCluster(id) {
            return await $model.remove(["component_cluster", {id: id}]);
        }
    }
}


module.exports = ComponentCluster;