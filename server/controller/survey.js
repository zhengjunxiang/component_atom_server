import ParamsException from "../utils/ParamsException";
import {rspHelper} from "../utils/rsp";
import _ from 'lodash';
const xlxs = require('node-xlsx')
const QUESTION_TYPE = {
    '主观题': 1,
    '客观题': 2,
    '复合题': 3
}

function processSurveyRes(item) {
    const type = typeof item
    if (type === 'object') {
        const _revert = _.invert(item)
        const _list = Object.keys(_revert).sort((a, b) => Number(a.split(',')?.[0] || 0) >  Number(b.split(',')?.[0] || 0))
        const keys = _list.map(i => _revert[i]).join('<')
        return keys
    } else if (type === 'boolean') {
        return item ? '是': '否'
    } else {
        return item
    }
}

export default (app) => ({
    async saveSurveyResult() {
        const { ctx, $service } = app;
        try {
            const { accountId, surveyId, data, accountType } = ctx.request.body;
            if (!accountId) {
                ctx.body = rspHelper({
                    type: "PARAMS_ERROR",
                    data: 'accountId不为空'
                });
                return;
            }
            if (!surveyId) {
                ctx.body = rspHelper({
                    type: "PARAMS_ERROR",
                    data: 'surveyId不为空'
                });
                return;
            }
            if (!Array.isArray(data)) {
                ctx.body = rspHelper({
                    type: "PARAMS_ERROR",
                    data: 'data不为数组'
                });
                return;
            }
            let result = [];
            for (const item of data) {
                console.log('>>>>', _.isObject(item.value) && !_.isEmpty(item.value))
                if (!_.isObject(item.value && item.value)) {
                    const res = await $service.survey.createSurveyResult({
                        accountId,
                        surveyId,
                        questionId: item.id,
                        content: item.value ? JSON.stringify(item.value) : '',
                        formSchema: item.formSchema,
                        formKey: item.formKey || '',
                        accountType: accountType || null
                    });
                    result.push(res);
                } else if (_.isObject(item.value) && !_.isEmpty(item.value)) {
                    Object.keys(item.value).forEach(async label => {
                        if (_.isObject(item.value[label])) {
                            Object.keys(item.value[label]).forEach(async subKey => {
                                console.log('content subkey:', subKey, item.value[label][subKey])
                                const res = await $service.survey.createSurveyResult({
                                    accountId,
                                    surveyId,
                                    questionId: item.id,
                                    content: item.value[label][subKey] ? JSON.stringify(item.value[label][subKey]) : '',
                                    formSchema: item.formSchema,
                                    formKey: item.formKey || '',
                                    accountType: accountType || null,
                                    label,
                                    subKey,
                                });
                                result.push(res);
                            })
                        } else {
                            console.log('排序：', label, item.value[label]);
                            const res = await $service.survey.createSurveyResult({
                                accountId,
                                surveyId,
                                questionId: item.id,
                                content: item.value[label] ? JSON.stringify(item.value[label]) : '',
                                formSchema: item.formSchema,
                                formKey: item.formKey || '',
                                accountType: accountType || null,
                                label
                            });
                            result.push(res);
                        }
                    }) 
                }
            }
            console.log('result: ', result)
            ctx.body = rspHelper({
                type: "SUCCESS",
                data: result,
            });
        } catch (error) {
            console.log('error: ', error)
            if (error instanceof ParamsException) {
                ctx.body = {...error};
            } else {
                throw Error(error);
            }
        }
    },

    async getQuestionResult() {
        const { ctx, $service, $helper } = app;
        try {
            let res = {};
            const { surveyId, questionId, questionType, statisticsType } = ctx.request.query;
            if (!surveyId || !questionId) { 
                ctx.body = rspHelper({
                    type: "MISSING_PARAMS",
                });
            }
            console.log('questionType:', questionType, questionType === QUESTION_TYPE.复合题)
            if (Number(questionType) === QUESTION_TYPE.复合题) {
                const subjectData = await $service.survey.getQuestionSubjectResultWithSubkey({
                    surveyId,
                    questionId: questionId
                }, );
                const subjectDataObj = _.keyBy(subjectData, (o) => o.label)
                const labels = subjectData.map(i => i?.label);
                for (const label of labels) {
                    const objectData = await $service.survey.getObjectQuestionSurveyResult({
                        surveyId,
                        questionId: questionId,
                        label,
                        subKey: 'addition'
                    })
                    const list = objectData.map(i => i.content);
                    _.set(res, [questionType, label], {
                        list,
                        count: (subjectDataObj[label] && subjectDataObj[label].count) || 0
                    })
                }
            } else if (Number(questionType) === QUESTION_TYPE.主观题) {
                const data = await $service.survey.getObjectQuestionSurveyResult({
                    surveyId,
                    questionId,
                })
                const list = data?.map(i => i.content);
                _.set(res, [questionType], list);
            } else if (Number(questionType) === QUESTION_TYPE.客观题) {
                const data = await $service.survey.getQuestionSubjectResult({
                    surveyId,
                    questionId,
                }, statisticsType);
                let list = {}, total = 0
                for(const i of data) {
                    if (statisticsType === 'weighting') {
                        _.set(list, [i.label], i.sum);
                        total += i.count
                    } else {
                        _.set(list, [i.content], i.count);
                    }
                }
                _.set(res, [questionType], list);
                _.set(res, 'total', total)
            }
            ctx.body = rspHelper({
                type: "SUCCESS",
                data: res,
            });
        } catch (error) {
            if (error instanceof ParamsException) {
                ctx.body = {...error};
            } else {
                throw Error(error);
            }
        }
    },

    async getSurveyResult() {
        const { ctx, $service } = app;
        try {
            ctx.body = rspHelper({
                type: "SUCCESS",
                data: {},
            });
        } catch (error) {
            if (error instanceof ParamsException) {
                ctx.body = {...error};
            } else {
                throw Error(error);
            }
        }
    },

    async getSurveyRecord() {
        const { ctx, $service, $helper } = app;
        try {
            const { surveyId, accountId } = ctx.request.query
            // 构造查询参数
            let query = {}
            if (surveyId) { query['surveyId'] = surveyId }
            if (accountId) { query['accountId'] = accountId }
            const data = await $service.survey.findAll(
                query,
            );
            ctx.body = rspHelper({
                type: "SUCCESS",
                data: data,
            });
        } catch (error) {
            if (error instanceof ParamsException) {
                ctx.body = {...error};
            } else {
                throw Error(error);
            }
        }
    },

    async updateSurveyRecord() {
        const { ctx, $service } = app;
        try {
            const res = await $service.survey.createSurveyRecord(ctx.request.body);
            ctx.body = rspHelper({
                type: "SUCCESS",
                data: res,
            });
        } catch (error) {
            if (error instanceof ParamsException) {
                ctx.body = {...error};
            } else {
                throw Error(error);
            }
        }
    },

    async getAllSurveyResult() {
        const { ctx, $service, $helper } = app;
        try {
            let res = {};
            const { surveyId } = ctx.request.query;
            if (!surveyId) { 
                ctx.body = rspHelper({
                    type: "MISSING_PARAMS",
                });
            }

            const objectiveQuestions = [3, 5, 7, 9, 11, 13, 15, 17, 19];
            const subjectiveQuestions = [1, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20]
            const data = await $service.survey.getAllSurveyResult({
                surveyId,
                questionIds: subjectiveQuestions
            });
            subjectiveQuestions.forEach(questionId => {
                const questionData = data.filter(item => {
                    return item.questionId === questionId;
                }) || [];
                res = {
                    ...res,
                    [questionId]: questionData
                }
            });
            const obecttiveRes = await Promise.all(objectiveQuestions.map(questionId => $service.survey.getObjectiveQuestionResult({
                surveyId,
                questionId,
            })))
            objectiveQuestions.forEach((questionId, index) => {
                res = {
                    ...res,
                    [questionId]: obecttiveRes[index]
                }
            })

            ctx.body = rspHelper({
                type: "SUCCESS",
                data: res,
            });
        } catch (error) {
            console.log('error:', error)
            if (error instanceof ParamsException) {
                ctx.body = {...error};
            } else {
                throw Error(error);
            }
        }
    },

    async getSurveySchema() {
        const { ctx, $service } = app;
        try {
            const { id } = ctx.request.query
            if (!id) { 
                ctx.body = rspHelper({
                    type: "MISSING_PARAMS",
                });
                return
            }
            const data = await $service.survey.findSchema({
                ...ctx.request.query
            });
            ctx.body = rspHelper({
                type: "SUCCESS",
                data: data?.[0],
            });
        } catch (error) {
            if (error instanceof ParamsException) {
                ctx.body = {...error};
            } else {
                throw Error(error);
            }
        }
    },

    async copySurveySchema() {
        const { ctx, $service} = app;
        try {
            const { id, name, title } = ctx.request.body;
            if (!id) { 
                return rspHelper({
                    type: 'MISSING_PARAMS'
                })
            }
            const copiedRecord = await $service.survey.getSurveySchemaById(id);
            console.log('copiedRecord:', copiedRecord);
            if (!copiedRecord) {
                return rspHelper({
                    type: 'PARAMS_ERROR'
                })
            }
            const _record = _.omit(copiedRecord || {}, ['id', 'ctime', 'title'])
            const createData = {
                ..._record,
                name: name || '',
                title: title || ''
            }
            const res = await $service.survey.createSurveySchema(createData);
            ctx.body = rspHelper({
                type: "SUCCESS",
                data: res,
            });
        } catch (error) {
            if (error instanceof ParamsException) {
                ctx.body = {...error};
            } else {
                throw Error(error);
            }
        }
    },

    async createSurveySchema() {
        const { ctx, $service } = app
        try {
            const { formSchema, status, id } =  ctx.request.body

            const record = id && await $service.survey.getSurveySchemaById(id);

            if (!id && !formSchema) {
                return ctx.body = rspHelper({
                    type: "PARAMS_ERROR",
                    data: "formSchema不为空"
                })
            }
            if (id && (!record || !record.id)) {
                return ctx.body = rspHelper({
                    type: "PARAMS_ERROR",
                    data: "id不存在"
                })
            }
            if (id && record.cname && app.ctx?.userInfo?.login !== record.cname) {
                return ctx.body = rspHelper({
                    type: "PERMISSION_IS_NOT_ALLOWED",
                    data: "非schema创建人"
                })
            }
            const query = record ? {
                ...record,
                ...ctx.request.body
            } : {
                ...ctx.request.body,
                status: status || 0
            }
            console.log('query:', query);
            const res = await $service.survey.createSurveySchema(query);
            ctx.body = rspHelper({
                type: "SUCCESS",
                data: res,
            });
        } catch (error) {
            if (error instanceof ParamsException) {
                ctx.body = {...error};
            } else {
                throw Error(error);
            }
        }
    },

    async surveySchemaList() {
        const { ctx, $service } = app;
        const { pageNum, pageSize } = ctx.request.query
        try {
            const data = await $service.survey.surveySchemaList({
                pageNum: pageNum || 0,
                pageSize: pageSize || 10
            })
            ctx.body = rspHelper({
                type: 'SUCCESS',
                data: data,
            })
        } catch (error) {
            if (error instanceof ParamsException) {
                ctx.body = {...error}
            } else {
                throw Error(error)
            }
        }
    },

    async downloadSurveyResult() {
        const { ctx, $service } = app
        const { id } = ctx.request.query
        if (!id) { 
            ctx.body = rspHelper({
                type: "MISSING_PARAMS",
            });
            return
        }
        try {
            const currentSchema = await $service.survey.findSchema({ id })
            const surveyResult = await $service.survey.downloadSurveyResult(id)
            let res = {}, dataList = [], valuePath = {}, title = ['账号ID', '账号类型']
            const properties = _.get(currentSchema?.[0], ['formSchema', 'schema', 'properties', 'layout', 'properties']) || {}
            const mapProperties = _.mapKeys(properties, (item) => item.id) || {}
            Object.keys(mapProperties).forEach(key => {
                if (key && key !== 'undefined') {
                    const xProps = mapProperties[key]?.['x-component-props'] || {}
                    const xCompon = mapProperties[key]?.['x-component'] || ''
                    if (xCompon === 'importance') {
                        title.push('排序')
                        _.set(valuePath, ['排序'], [key])
                    } else if (xCompon === 'RatingGroup' || xCompon === 'CheckBoxInput') {
                        const configs = xProps?.labels || xProps.configs || [] 
                        const type = xCompon === 'RatingGroup' ? '批量评分': '多选'
                        configs.forEach(label => {
                            title.push(`${type}-${label}`)
                            _.set(valuePath, [`${type}-${label}`], [key, label])
                        })
                    } else {
                        title.push(`内容${key}`)
                        _.set(valuePath, [`内容${key}`], [key])
                    }
                }
            })
            dataList.push(title)
            for (const item of surveyResult) {
                const { accountId, questionId, label, subKey, content, accountType } = item
                if (!_.has(res, [accountId])) {
                    _.set(res, [accountId], { accountType })
                }
                if (!_.has(res, [accountId, questionId])) {
                    _.set(res, [accountId, questionId], {})
                }
                if (questionId && label && subKey) {
                    const existContent = _.get(res, [accountId, questionId, label]) ? `${_.get(res, [accountId, questionId, label])}`: ''
                    _.set(res, [accountId, questionId, label], subKey === 'addition' ? `${existContent}:${content}`: `${content}${existContent}`)
                } else if (questionId && label) {
                    const newContent = _.get(res, [accountId, questionId, label]) ? `${_.get(res, [accountId, questionId, label])}${content}`: `${content}`
                    _.set(res, [accountId, questionId, label], newContent)
                } else {
                    _.set(res, [accountId, questionId], content)
                } 
            }
            Object.keys(res).forEach(accountId => {
                const answerItem = res[accountId]
                let rows = []
                title.forEach((t, index) => {
                    const path = valuePath[t]
                    let value
                    if (t === '账号ID') {
                        value = accountId
                    } else if (t === '账号类型') {
                        value = _.get(answerItem, ['accountType'])
                    } else {
                        value = processSurveyRes(_.get(answerItem, path))
                    }
                    _.set(rows, [index], value)
                })
                if (rows?.length > 0) {
                    dataList.push(rows)
                }
            })
            // 生成 excel 对应的 buffer 二进制文件
            const excelFile = xlxs.build([{name: "firstSheet", data: dataList}])
            // 设置文件名相关的响应首部字段
            ctx.set("Content-Disposition", `attachment;filename=survey.xlsx;filename*=UTF-8`)
            // 返回给前端
            ctx.body = excelFile
            // ctx.body = rspHelper({
            //     type: "SUCCESS",
            //     data: res
            // })
        } catch (error) {
            if (error instanceof ParamsException) {
                ctx.body = {...error}
            } else {
                throw Error(error)
            }
        }
        

    }
})