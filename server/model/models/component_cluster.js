function getFields(DataTypes) {
    return {
        id: {
            type: DataTypes.BIGINT,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,  // 物料名
            allowNull: false,
            defaultValue: ""
        },
        description: {
            type: DataTypes.STRING,  // 物料描述
            allowNull: false,
            defaultValue: ""
        },
        category: {
            type: DataTypes.STRING,  // 类别分组
            allowNull: true,
            defaultValue: ""
        },
        sub_category: {
            type: DataTypes.STRING,  // 组件名
            allowNull: true,
            defaultValue: ""
        },
        componentIds: {
            type: DataTypes.JSON,  // 关联componentIds
            allowNull: true,
            defaultValue: []
        },
        images: {
            type: DataTypes.JSON,  // 组件urls
            allowNull: true
        },
        urls: {
            type: DataTypes.JSON,  // 组件来源
            allowNull: true
        },
        platform: {
            type: DataTypes.STRING,  // 商家端/运营端
            allowNull: true,
            defaultValue: ""
        },
        material_id: {
            type: DataTypes.INTEGER, // 标准物料ID
            allowNull: true
        },
        effects: {
            type: DataTypes.JSON, // UI效果图
            allowNull: true
        },
        configs: {
            type: DataTypes.JSON, // 评审结果
            allowNull: true
        },
        tags: {
            type: DataTypes.JSON, // 标签
            allowNull: true
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
        },
        status: {
            type: DataTypes.INTEGER, // 1已分类， 2（分类确认）待评审，3（评审通过）待设计， 4（设计完成）待开发， 5（开发完成）待验收， 6验收完成
            allowNull: false,
            defaultValue: 0,
        },
        dom: {
            type: DataTypes.STRING, // DOM节点
            allowNull: true
        },
        cname: {
            type: DataTypes.STRING, // 创建人
            allowNull: false,
            defaultValue: 0
        },
        rd_owner: {
            type: DataTypes.STRING, 
            allowNull: true
        },
        ui_owner: {
            type: DataTypes.STRING,
            allowNull: true
        },
        pm_owner: {
            type: DataTypes.STRING,
            allowNull: true
        }
    };
}

export default {
    getFields,
    define: function (sequelize, DataTypes) {
        return sequelize.define("component_cluster", getFields(DataTypes), {
            tableName: "component_cluster",
            timestamps: true,
            createdAt: 'create_time',
            updatedAt: 'update_time',
            deletedAt: "deletedAt",
        });
    }
}
