import {logger_s_sql, logger_s_error} from "../config/logger";
import appkey from "../config/appkey";
import {filterRedundancyFields} from "../utils/validParams";

const path = require('path');
const fs = require('fs');
const { ZebraSequelizeFactory, Sequelize } = require('@fdfe/zebra-sequelize-client');
const Op = Sequelize.Op;
const operatorsAliases = {
    $eq: Op.eq,
    $ne: Op.ne,
    $gte: Op.gte,
    $gt: Op.gt,
    $lte: Op.lte,
    $lt: Op.lt,
    $not: Op.not,
    $in: Op.in,
    $notIn: Op.notIn,
    $is: Op.is,
    $like: Op.like,
    $notLike: Op.notLike,
    $iLike: Op.iLike,
    $notILike: Op.notILike,
    $regexp: Op.regexp,
    $notRegexp: Op.notRegexp,
    $iRegexp: Op.iRegexp,
    $notIRegexp: Op.notIRegexp,
    $between: Op.between,
    $notBetween: Op.notBetween,
    $overlap: Op.overlap,
    $contains: Op.contains,
    $contained: Op.contained,
    $adjacent: Op.adjacent,
    $strictLeft: Op.strictLeft,
    $strictRight: Op.strictRight,
    $noExtendRight: Op.noExtendRight,
    $noExtendLeft: Op.noExtendLeft,
    $and: Op.and,
    $or: Op.or,
    $any: Op.any,
    $all: Op.all,
    $values: Op.values,
    $col: Op.col,
    $substring: Op.substring
};
const envs = {
    local: 'yyfe_atom_test',
    development: 'yyfe_atom_test',
    test: 'yyfe_atom_test',
    staging: 'healthfrontend_atom_product',
    production: 'healthfrontend_atom_product'
}

const sequelize = ZebraSequelizeFactory.create({
    dialect: 'mysql',
    appName: appkey, // 应用名称，avatar 上可申请，每个应用都有一个 appKey
    jdbcRef: envs[process.env.NODE_ENV] || envs.local, // zebra配置项，可联系 DBA 配置
    // jdbcRef: envs.staging,
    routeType: 'master-only', // 两种路由策略，master-only、master-slave
    // 可选参数，参考sequelize初始化时的options参数
    timezone: "+08:00",
    pool: {
        max: 20,
        min: 0,
        acquire: 60000,
        idle: 10000
    },
    operatorsAliases
    // logging: (sql) => {
    //     logger_s_sql.info(sql);
    // },
});

const modelPath = path.join(__dirname, './models');
const allowKey = {};

fs.readdirSync(modelPath).forEach(fileName => {
    const name = fileName.split('.')[0];
    const fileFullName = path.join(modelPath, fileName);
    allowKey[name] = {
        model: require(fileFullName)["default"]["define"](sequelize, Sequelize),
        fields: require(fileFullName)["default"]["getFields"](Sequelize)
    };
})
export default {
    sequelize: sequelize,
    models: allowKey,
    create(sqlData) {
        return new Promise(function (resolve, reject) {
            const {name, data, transaction} = sqlData;
            const params = [filterRedundancyFields(data, allowKey[name]["fields"])];
            if (transaction) {
                params.push({transaction});
            }
            allowKey[name]["model"].create(...params)
                .then((val) => {
                    resolve(val.dataValues)
                })
                .catch(err => {
                    reject(err)
                });
        });
    },

    add(sqlData) {
        return new Promise(function (resolve, reject) {
            const {name, queryObj, defaultObj, transaction} = sqlData;
            let params = {
                where: filterRedundancyFields(queryObj, allowKey[name]["fields"]),
                defaults: filterRedundancyFields(defaultObj, allowKey[name]["fields"]),
                raw: true
            };
            if (transaction) {
                params.transaction = transaction;
            }
            allowKey[name]["model"].findOrCreate(params)
                .spread((rsp, created) => {
                    resolve({rsp, created});
                })
                .catch(err => {
                    reject(err)
                });
        });
    },

    modify(sqlData) {
        return new Promise(function (resolve, reject) {
            const name = sqlData[0];
            const query = sqlData[1]
            const obj = sqlData[2]
            const params = [filterRedundancyFields(obj, allowKey[name]["fields"]), {where: query}];
            if (sqlData[3]) {
                params[1]["transaction"] = sqlData[3];
            }
            allowKey[name]["model"].update(...params)
                .then((res) => {
                    resolve({ ...query, ...obj });
                }, e => {
                    logger_s_error.error(e);
                    reject(e);
                });
        });
    },

    get(sqlData) {
        return new Promise(function (resolve, reject) {
            const name = sqlData[0];
            const queryString = sqlData[1].query;
            const attr = sqlData[1].attr;
            const query = {where: queryString, order: [['ID', 'DESC']], raw: true};
            if (attr) {
                query.attributes = attr;
            }
            if (sqlData[2]) {
                const pageNum = sqlData[2].pageNum || 1;
                query.limit = sqlData[2].pageSize;
                query.offset = (pageNum - 1) * sqlData[2].pageSize;
                allowKey[name]["model"].findAndCountAll(query)
                    .then((res) => {
                        resolve({
                            page: {
                                total: res.count,
                                pageNum: pageNum,
                                pageSize: sqlData[2].pageSize
                            },
                            data: res.rows
                        });
                    }, e => {
                        logger_s_error.error(e);
                        reject(e);
                    });
                return;
            }
            allowKey[name]["model"].findAll({
                where: queryString
            }).then((res) => {
                    resolve(res);
                }, e => {
                    console.log('-------',e)
                    logger_s_error.error(e);
                    reject(e);
                });
        });
    },

    findByPk(sqlData) {
        return new Promise(function (resolve, reject) {
            const name = sqlData[0];
            const id = sqlData[1];
            allowKey[name]["model"].findByPk(id)
                .then((res) => {
                    // 查询不到返回为空
                    resolve(res === null ? {} : res.dataValues);
                }, e => {
                    logger_s_error.error(e);
                    reject(e);
                });
        });
    },

    remove(sqlData) {
        return new Promise(function (resolve, reject) {
            const name = sqlData[0];
            const queryString = sqlData[1];
            const transaction = sqlData[2];
            const params = {where: queryString};
            if (transaction) {
                params.transaction = transaction;
            }
            allowKey[name]["model"].destroy(params)
                .then((res) => {
                    resolve(res);
                }, e => {
                    logger_s_error.error(e);
                    reject(e);
                });
        });
    },

    sql(sqlData) {
        return new Promise(function (resolve, reject) {
            sequelize.query(sqlData, {raw: true, nest: true}).then(function (data) {
                resolve(data);
            })
                .catch(reject);
        });
    }
}
