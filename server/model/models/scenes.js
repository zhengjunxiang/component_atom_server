function getFields(DataTypes) {
    return {
        id: {
            type: DataTypes.BIGINT,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        material_id: {
            type: DataTypes.BIGINT,
            allowNull: false,
            defaultValue: ""
        },
        max_version: {
            type: DataTypes.BIGINT,
            allowNull: false,
            defaultValue: ""
        },
        min_version: {
            type: DataTypes.BIGINT,
            allowNull: false,
            defaultValue: ""
        },
        sort: {
            type: DataTypes.BIGINT,
            allowNull: false,
            defaultValue: ""
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: ""
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: ""
        },
        props: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: ""
        },
        type: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: ""
        },
        status: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: ""
        },
        snapshot_url: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: ""
        },
        utime: {
            allowNull: false,
            type: 'TIMESTAMP',
            defaultValue: Math.floor(Date.now() / 1000)
        },
        uname: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: ""
        }
    };
}

export default {
    getFields,
    define: function (sequelize, DataTypes) {
        return sequelize.define("scenes", getFields(DataTypes), {
            tableName: "material_scene",
            timestamps: true,
            createdAt: 'utime',
            updatedAt: 'utime'
        });
    }
}
