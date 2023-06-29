function getFields(DataTypes) {
    return {
        id: {
            type: DataTypes.BIGINT,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        formSchema: {
            type: DataTypes.JSON,
            allowNull: false,
        },
        status: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        showTimes: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        startTime: {
            type: 'TIMESTAMP',
            allowNull: true,
        },
        endTime: {
            type: 'TIMESTAMP',
            allowNull: true,
        },
        ctime: {
            allowNull: false,
            type: 'TIMESTAMP',
            defaultValue: Math.floor(Date.now() / 1000)
        },
        cname: {
            allowNull: true,
            type: DataTypes.STRING,
        }
    };
}

export default {
    getFields,
    define: function (sequelize, DataTypes) {
        return sequelize.define("surveySchema", getFields(DataTypes), {
            tableName: "survey_schema",
            timestamps: true,
            createdAt: 'ctime',
            updatedAt: 'ctime'
        });
    }
}