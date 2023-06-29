module.exports = app => ({
    async findSurveyRecord(query, pager) {
        const {ctx, $model} = app
        const { pageNum = 1, pageSize = 10 } = pager
        const list = await $model.get([
            "survey",
            { query },
            { pageNum, pageSize },
        ]);
        return list;
    },
    async findAll(query) {
        const {ctx, $model} = app
        return await $model.get([
            "survey",
            { query }
        ]);
    },
    async createSurveyRecord(query) {
        const {ctx, $model} = app
        const { id } = query
        if (id) {
            return await $model.modify([
                "survey",
                { id },
                {
                    ...query,
                }
            ]);
        } else {
            const surveyRecord = await $model.create({
                name: "survey",
                data: {
                    ...query,
                },
            });
            return surveyRecord
        }
    },
    async createSurveyResult(query) {
        console.log('query::::', query)
        const {ctx, $model} = app
        const { id } = query
        if (id) {
            return await $model.modify([
                "surveyResult",
                { id },
                {
                    ...query,
                }
            ]);
        } else {
            const survey = await $model.create({
                name: "surveyResult",
                data: {
                    ...query,
                },
            });
            return survey
        }
    },
    async getAllSurveyResult(query) {
        const {$model} = app
        const { questionIds, surveyId} = query;
        const sqlString = `SELECT questionId, content, COUNT(*) as count
        FROM survey_result
        WHERE questionId IN (${questionIds.join(',')}) AND surveyId = ${surveyId}
        GROUP BY content
        ORDER BY questionId`;
        const list = await $model.sql(sqlString);
        return list;
    },
    // 按问题查客观题统计结果
    async getQuestionSubjectResultWithSubkey(query) {
        const { $model } = app
        const { questionId, surveyId } = query
        const sqlString = `SELECT label, content, COUNT(*) as count
        FROM survey_result
        WHERE questionId = ${questionId}
        AND surveyId = ${surveyId}
        AND subKey = 'value'
        GROUP BY content, label
        ORDER BY label`;
        const list = await $model.sql(sqlString);
        return list;
    },
    // 按问题查客观题统计结果
    async getQuestionSubjectResult(query, type = 'count') {
        const { $model } = app
        const { questionId, surveyId } = query;
        const statisticsType = type === 'weighting' ? 'SUM(content) as sum, COUNT(*) as count': 'COUNT(*) as count'
        const groupType = type === 'weighting' ? 'label': 'content'
        const sqlString = `SELECT label, content,  ${statisticsType}
        FROM survey_result
        WHERE questionId = ${questionId}
        AND surveyId = ${surveyId}
        GROUP BY ${groupType}`;
        const list = await $model.sql(sqlString);
        return list;
    },
    async getObjectQuestionSurveyResult(query) {
        const {$model} = app
        const { questionId, surveyId, label } = query;
        const labelSqlStr = label ? `AND label = "${label}" AND subKey = 'addition'
        ORDER BY label` : '';
        
        const sqlString = `SELECT label, content
        FROM survey_result
        WHERE questionId = ${questionId}
        AND surveyId = ${surveyId}
        ${labelSqlStr}
        `;
        const list = await $model.sql(sqlString);
        return list;
    },
    async getObjectiveQuestionResult(query) {
        const { $model } = app
        return await $model.get([
            "surveyResult",
            { query }
        ]);
    },
    // 查询问卷schema
    async findSchema(query) {
        const {$model} = app
        return await $model.get([
            "surveySchema",
            { query }
        ]);
    },
    // 生成/修改问卷schema
    async createSurveySchema(query) {
        const {ctx, $model} = app
        const { id } = query
        if (id) {
            return await $model.modify([
                "surveySchema",
                { id },
                {
                    ...query,
                    cname: app.ctx?.userInfo?.login
                },
            ]);
        } else {
            const schemaRecord = await $model.create({
                name: "surveySchema",
                data: {
                    ...query,
                    cname: app.ctx?.userInfo?.login
                },
            });
            return schemaRecord
        }
    },
    async getSurveySchemaById(id = 1) {
        return await app.$model.findByPk(["surveySchema", id]);
    },
    async surveySchemaList(pager) {
        const { pageNum = 1, pageSize = 10 } = pager
        const list = await app.$model.get([
            "surveySchema",
            { },
            { pageNum, pageSize },
        ]);
        return list;
    },
    async downloadSurveyResult(id) {
        const sqlString = `select 
            accountId,
            questionId, 
            label,
            subKey,
            content,
            formSchema,
            accountType
        from survey_result
        where surveyId=${id}`
        const res = await app.$model.sql(sqlString);
        return res;
    }
});
