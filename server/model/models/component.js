function getFields(DataTypes) {
    return {
        id: {
            type: DataTypes.BIGINT,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        category: {
            type: DataTypes.STRING,  // 业务分类
            allowNull: false,
            defaultValue: ""
        },
        sub_category: {
            type: DataTypes.STRING,  // 功能分组
            allowNull: false,
            defaultValue: ""
        },
        platform: {
            type: DataTypes.STRING,  // 商家端/运营端
            allowNull: false,
            defaultValue: ""
        },
        type: {
            type: DataTypes.INTEGER,
            allowNull: true,
            defaultValue: 0
        },
        label: {
            type: DataTypes.STRING,  // 物料名称（从label中抽取）
            allowNull: false,
            defaultValue: ""
        },
        dom: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        image: {
            type: DataTypes.TEXT,   // 截图
            allowNull: true
        },
        tags: {
            type: DataTypes.JSON,
            allowNull: true
        },
        url: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        cookie: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        configs: {
            type: DataTypes.JSON,  // 评审相关的配置
            allowNull: true
        },
        effects: {
            type: DataTypes.JSON,   // UI/效果图， 数组
            allowNull: true
        },
        standard: {   // 0: 非标准  1: 标准认证
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0
        },
        status: {   // 0: 已采集 1: 已归类
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0
        },
        create_time: {
            allowNull: false,
            type: 'TIMESTAMP',
            defaultValue: DataTypes.NOW,
        },
        update_time: {
            allowNull: false,
            type: 'TIMESTAMP',
            defaultValue: DataTypes.NOW,
        }
    };
}

export default {
    getFields,
    define: function (sequelize, DataTypes) {
        return sequelize.define("component", getFields(DataTypes), {
            tableName: "component",
            timestamps: true,
            createdAt: 'create_time',
            updatedAt: 'update_time',
            deletedAt: "deletedAt",
        });
    }
}
