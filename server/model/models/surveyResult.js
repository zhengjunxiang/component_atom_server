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
        questionId: {
            type: DataTypes.BIGINT,
            allowNull: false
        },
        content: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        formSchema: {
            type: DataTypes.JSON,
            allowNull: false,
        },
        formKey: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        accountType: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        label: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        subKey: {
            type: DataTypes.STRING,
            allowNull: true,
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
        return sequelize.define("surveyResult", getFields(DataTypes), {
            tableName: "survey_result",
            timestamps: true,
            createdAt: 'ctime',
            updatedAt: 'ctime'
        });
    }
}