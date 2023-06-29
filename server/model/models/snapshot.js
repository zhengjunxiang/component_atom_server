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
            allowNull: false
        },
        version: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: ""
        },
        schema: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: ""
        },
        props: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: ""
        },
        styles: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: ""
        },
        events: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: ""
        },
        url: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: ""
        },
        url_demos: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: ""
        },
        status: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 1
        },
        type: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 1
        },
        uname: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: ""
        },
        utime: {
            allowNull: false,
            type: 'TIMESTAMP',
            defaultValue: Math.floor(Date.now() / 1000)
        },
        example: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: ""
        },
        extend: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: ""
        }
    };
}

export default {
    getFields,
    define: function (sequelize, DataTypes) {
        return sequelize.define("snapshot", getFields(DataTypes), {
            tableName: "material_snapshot",
            timestamps: true,
            createdAt: 'utime',
            updatedAt: 'utime'
        });
    }
}