//
// Autogenerated by Thrifthub (https://thrifthub.sk.com)
//
// DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
//

const packageName = '@thrift-api/sjst-ecom-epassportservice';
const packageVersion = '2.0.18';
 
const services = {"AppConfigThriftService":["getAppConfigByAppKey","batchGetAppConfigByAppKeyList","getAppkeysByOctoAppkey","batchGetAppkeysByOctoAppkey","listAppKey","getEcomAuthByAppkey","getEcomAuthByOctoAppkey","modifyAppKey","createAppKey","searchContinuesByAppkey","getContinueByIds","addEcomContinue","modifyEcomContinue","modifySingleEcomContinue","deleteEcomContinue","getAppkeyPartTypes","saveMisAppKeys","grantMisAppKey","getMisAppkeys","getGrantMis","searchEcomAuth","batchGetGrantMis","getFeConfig"],"BatchTaskService":["create","modify","getBatchTaskByTaskId"],"BizAccountAdminThriftService":["logoutByToken","logoutOtherByToken","logoutByBizAccount","logoutByBizToken","logoutByPos","createToken","refreshToken","generateRandomPassword","createBizAccount","batchCreateBizAccount","createBizAccountEmail","modifyBizAccount","modifyBizAccountOp","unbindMobile","modifyBizAccountLogin","modifyBizAccountLoginV2","enableBizAccount","enableBizAccountV2","batchEnableBizAccount","createBsidToken","checkLoginValid","checkLoginRepetition","modifyBizAccountLoginOnlyForSdk","modifyBizEmail","modifyBizAcctActive","getBizAccountActiveByID","getBizAcctActiveOriginByID","checkPasswordLegal","createUniToken"],"BizAccountBgThriftService":["filterBizAccountByBgSource","filterBizAccountByBgSources","bind","searchBizAccountInBg","searchBizAccountBg","unbind"],"BizAccountInfoThriftService":["validateToken","decryptToken","checkPasswordByToken","checkPasswordByID","checkPasswordByDpID","getBizAccountByToken","getBizAccountByID","getBizAccountByDpID","getBizAccountByLogin","getAllBizAccountsByLogin","batchGetBizAccountByIDList","batchGetBizAccountByDpIDList","searchBizAccountByPhone","searchBizAccountByPartTO","queryBizSensitive","getBizAcctByEmail","getBizAcctEmailByToken","decryptUniToken","getBizAccPhoneById","getThirdAcctInfoByBizAcctId"],"BizAccountOperationInfoService":["searchBizAccountHistory","clearBizAcctCache"],"BizAccountPartThriftService":["nextPartKeyFromPool","addPartKeyToPool"],"BizAccountPhoneInfoThriftService":["getBizAccPhoneByIds","getBizAccPhoneByDpIds","getBizAccPhoneByIdsV2","getBizAccPhoneByDpIdsV2","getBizAcctPhoneByIds"],"BizAccountThirdThriftService":["binding","unBind","getThirdBindingInfo","saveThirdAcctInfo","follow","followV1","followBinding","followBindingV1","unFollow","getWeChatInfoByAcctId","getWeChatInfoByAcctIds","getWeChatInfoByOpenIds","getWeChatInfoByUnionIds","followBindingImport","followBindingImportV1"],"BizOauthLoginThriftService":["acquireCode","exchangeToken","createBizOauthLogin","queryBizOauthLogins","updateBizOauthLogin"],"EPassportEcomAuditService":["createEcomAudit","queryEcomAuditList","queryEcomAuditItem","modifyEcomAudit","createCustomerFindAudit","queryCustomerFindAudit","createModifyMobileAudit","updateModifyMobileAudit","queryModifyMobileAudit"]};
const enums = {};

function _request(params) {
  if (!window._thrifthub_browserify_request_implement_) {
    return Promise.reject('No Implement for Thrifthub browserify package!');
  }
  return Promise.resolve(window._thrifthub_browserify_request_implement_({ ...params, packageName: packageName, version: packageVersion }));
};

const exportObject = {};
Object.keys(services).forEach(serviceName => {
  exportObject[serviceName] = services[serviceName].reduce((obj, methodName) => {
    obj[methodName] = params => _request({
      serviceName, methodName, params
    });
    return obj;
  }, {});
});
Object.keys(enums).forEach(namespace => {
  if(!exportObject[namespace]) exportObject[namespace] = {};
  Object.keys(enums[namespace]).forEach(enumName => {
    exportObject[namespace][enumName] = enums[namespace][enumName];
  });
});
module.exports = exportObject;