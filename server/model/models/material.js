function getFields(DataTypes) {
    return {
        id: {
            type: DataTypes.BIGINT,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        version: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: ""
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: ""
        },
        desc: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: ""
        },
        category: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: ""
        },
        status: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0
        },
        techType: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 1
        },
        git: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: ""
        },
        path: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: ""
        },
        images: {
            allowNull: true,
            type: DataTypes.STRING
        },
        ctime: {
            allowNull: false,
            type: 'TIMESTAMP',
            defaultValue: Math.floor(Date.now() / 1000)
        },
        cname: {
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
        },
        link: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: ""
        },
        author: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: ""
        },
        url_ui: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: ""
        },
        url_review: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: ""
        },
        extend: {
            type: DataTypes.TEXT,
            allowNull: true
        }
    };
}

export default {
    getFields,
    define: function (sequelize, DataTypes) {
        return sequelize.define("material", getFields(DataTypes), {
            tableName: "material",
            timestamps: true,
            createdAt: 'ctime',
            updatedAt: 'utime',
            deletedAt: 'deletedAt'
        });
    }
}
