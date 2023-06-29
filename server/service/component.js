const Component = app => {
    const { $model } = app;
    return {
        async findComponents({ query, pageNum = 1, pageSize = 10 }) {
            const list = await $model.get([
                "component",
                { query },
                {pageNum: Number(pageNum), pageSize: Number(pageSize)},
            ]);
            return list;
        },
        async findComponentsWithoutPagination({ query }) {
            const filterQueryStr = Object.keys(query).map(key => `${key}="${query[key]}"`).join(' and ')
            const sqlString = `select
                id,
                label,
                category,
                image,
                url,
                tags
                platform,
                configs,
                effects,
                status,
                sub_category,
                standard,
                type
            from component
            where ${filterQueryStr}`
            const res = await $model.sql(sqlString);
            return res;
        },
        async saveComponent(query) {
            const { id, name } = query
            if (id) {
                return await $model.modify([
                    "component",
                    { id },
                    query
                ]);
            } else {
                const Component = await $model.create({
                    name: "component",
                    data: query
                });
                return Component
            }
        },

        async findComponent(id) {
            return await $model.findByPk([
                "component",
                id
            ]);
        },

        async deleteComponent(id) {
            return await $model.remove(["component", {id: id}]);
        },

        async editComponents(ids, query) {
            return await $model.modify([
                "component",
                {
                    id: {
                        $in: ids
                    }
                },
                query
            ])
        },

        async editComponent(id, query) {
            const record = await $model.findByPk([
                "component",
                id
            ])
            const newTags = query.tags || []
            return await $model.modify([
                "component",
                { id },
                {
                    ...record,
                    ...query,
                    tags: [...(record?.tags || []), ...newTags]
                }
            ])
        },

        async saveConfigs({id, data, type}) {
            const record = await $model.findByPk([
                "component",
                id
            ])
            const oldConfigs = record?.configs || {}
            const configs = {
                ...oldConfigs,
                [type]: data
            }
            return await $model.modify([
                "component",
                { id },
                {
                    configs
                }
            ])
        },

        async changeStatus({id, status}) {
            return await $model.modify([
                "component",
                { id },
                {
                    status
                }
            ])
        }
    }
}
module.exports = Component;
