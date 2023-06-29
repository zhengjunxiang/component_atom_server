module.exports = app => {
	const { router, $controller } = app;

    router.post('/atom/api/material/push', $controller.ci.pushBranch)
    // CI流程 before-build
    router.post('/atom/api/trigger/ci', $controller.ci.triggerCiNew)

    // 场景接口
    router.get('/atom/api/scenes/list', $controller.scenes.findScenes)
    router.post('/atom/api/scene/save', $controller.scenes.saveScene)
    router.post('/atom/api/scene/update', $controller.scenes.updateScene)
    router.get('/atom/api/scene/delete', $controller.scenes.deleteScene)

    // 物料评审相关接口
    router.post('/atom/api/component/list', $controller.component.componentList)
    router.post('/atom/api/save/component', $controller.component.saveComponent)
    router.get('/atom/api/component/info', $controller.component.getComponentInfo)
    router.post('/atom/api/delete/component', $controller.component.deleteComponent)
    router.post('/atom/api/save/components', $controller.component.patchEdit)
    router.post('/atom/api/change/status', $controller.component.changeStatus)
    // 物料分类相关接口
    router.get('/atom/api/cluster/stats', $controller.component_cluster.getClusterStats)
    router.post('/atom/api/componentCluster/list', $controller.component_cluster.findComponentClusterList)
    router.post('/atom/api/change/cluster/status', $controller.component_cluster.changeClusterStatus)
    router.get('/atom/api/componentCluster/info', $controller.component_cluster.getComponentInfo)
    router.post('/atom/api/save/configs', $controller.component_cluster.review)
    router.post('/atom/api/create/componentcluster', $controller.component_cluster.createComponentCluster)
    router.get('/atom/api/component/category', $controller.component_cluster.componentCategory)
    router.post('/atom/api/save/clusterComponents', $controller.component_cluster.editComponents)
    router.post('/atom/api/db/sync', $controller.user.syncDBData)
    router.post('/atom/api/delete/componentCluster', $controller.component_cluster.deleteComponent)

    // 查询物料列表接口
    router.get('/atom/api/material/list', $controller.material.findMaterials)
    // 创建和修改物料接口
    router.post('/atom/api/material/save', $controller.material.saveMaterial)
    // 获取物料详情
    router.get('/atom/api/material/info', $controller.material.getMaterial)
    // 删除物料
    router.get('/atom/api/material/delete', $controller.material.deleteMaterial)
    // 查询物料相关的快照列表接口
    router.get('/atom/api/material/snapshots', $controller.snapshot.findMaterialSnapshots)
    // 获取物料业务类型
    router.get('/atom/api/material/business/type', $controller.material.businessType)
    // 创建快照接口
    router.post('/atom/api/create/snapshot', $controller.snapshot.createSnapshot)
    // 修改快照接口
    router.post('/atom/api/update/snapshot', $controller.snapshot.updateNaterialSnapshots)
    // 修改快照接口
    router.get('/atom/api/delete/snapshot', $controller.snapshot.deleteMaterialSnapshots)

    // 问卷相关接口
    // 获取问卷提交情况
    router.get('/atom/api/get/survey/record', $controller.survey.getSurveyRecord)
    router.post('/atom/api/update/survey/record', $controller.survey.updateSurveyRecord)
    // // 问卷提交结果
    router.post('/atom/api/create/survey/result', $controller.survey.saveSurveyResult)
    // 获取问卷结果页
    router.get('/atom/api/survey/result', $controller.survey.getAllSurveyResult)
    router.get('/atom/api/survey/question/result', $controller.survey.getQuestionResult)

    // 问卷schema相关接口
    router.post('/atom/api/create/surveySchema', $controller.survey.createSurveySchema)
    router.post('/atom/api/copy/surveySchema', $controller.survey.copySurveySchema)
    router.get('/atom/api/surveySchema', $controller.survey.getSurveySchema)

    router.get('/atom/api/survey/list', $controller.survey.surveySchemaList)
    router.get('/atom/api/download/survey', $controller.survey.downloadSurveyResult)

	return router
};
