function getFields(DataTypes) {
    return {
        id: {
            type: DataTypes.BIGINT,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        surveyId: {
            type: DataTypes.BIGINT,
            allowNull: false
        },
        accountId: {
            type: DataTypes.BIGINT,
            allowNull: false
        },
        showTimes: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        status: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 1
        },
        utime: {
            allowNull: false,
            type: 'TIMESTAMP',
            defaultValue: Math.floor(Date.now() / 1000)
        },
        ctime: {
            allowNull: false,
            type: 'TIMESTAMP',
            defaultValue: Math.floor(Date.now() / 1000)
        }
    };
}

export default {
    getFields,
    define: function (sequelize, DataTypes) {
        return sequelize.define("survey", getFields(DataTypes), {
            tableName: "survey_record",
            timestamps: true,
            createdAt: 'utime',
            updatedAt: 'utime'
        });
    }
}