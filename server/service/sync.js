import { isObject } from 'lodash';
const Sync = app => {
    const { $model } = app;
    return {
        async syncData(modelName, data, overvide) {
            try {
                const { id } = data
                // 判断数据是否存在
                const row = await $model.findByPk([
                    modelName,
                    id
                ]);
                // 处理JSON字段
                const newData = Object.keys(data).reduce((result, next) => {
                    const fieldsMap = $model.models[modelName].fields
                    const filed = fieldsMap[next] || {}
                    if (filed.type && filed.type.key === 'JSON') {
                        try {
                            result[next] = data[next] ? JSON.parse(data[next]) : {}
                        } catch {
                            result[next] = data[next]
                        }
                    } else {
                        result[next] = data[next]
                    }
                    return result
                }, {})
                if (row && row.id) {
                    if (overvide) {
                        delete newData['id']
                        const oldRow = await $model.modify([
                            modelName,
                            { id },
                            newData
                        ]);
                        return oldRow
                    }
                    return { err: 'data exist!!!'}
                } else {
                    const newRow = await $model.create({
                        name: modelName,
                        data: newData
                    });
                    return newRow
                }
            } catch(err) {
                return { err: err }
            }
        }
    }
}
module.exports = Sync;
