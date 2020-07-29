const constant = require("./constant");

/**
 * @name pushTaskV3方法入参校验
 * @param {*} params
 */
const checkPushTaskV3 = (params) => {
  if (params) {
    // 校验source必填及值是否在枚举值里面
    if (!params.source) {
      return new Error("缺少source字段");
    } else if (constant.sourceMap.indexOf(params.source) === -1) {
      return new Error("source值不正确");
    }

    // 校验pushTarget
    if (!params.pushTarget) {
      return new Error("缺少推送目标（pushTarget）字段");
    } else if (
      Object.prototype.toString.call(params.pushTarget) !== "[Object Object]"
    ) {
      return new Error("推送目标（pushTarget）字段类型须为对象");
    } else {
      // 校验pushTarget下的target字段
      if (!params.pushTarget.target) {
        return new Error("推送目标（pushTarget）中缺少目标类型（target）字段");
      } else if (constant.targetMap.indexOf(params.pushTarget.target) === -1) {
        return new Error(
          "推送目标（pushTarget）中的目标类型（target）字段值不正确"
        );
      }
      // 校验pushTarget下的rids字段
      if (params.pushTarget.rids && !Array.isArray(params.pushTarget.rids)) {
        return new Error("推送目标（pushTarget）中的rids字段类型须为数组");
      }
      // 校验pushTarget下的tags字段
      if (params.pushTarget.tags && !Array.isArray(params.pushTarget.tags)) {
        return new Error("推送目标（pushTarget）中的tags字段类型须为数组");
      }
      // 校验pushTarget下的tagsType字段
      if (
        params.pushTarget.tagsType &&
        constant.tagsTypeMap.indexOf(params.pushTarget.tagsType) === -1
      ) {
        return new Error("推送目标（pushTarget）中的tagsType字段值不正确");
      }
      // 校验pushTarget下的alias字段
      if (params.pushTarget.alias && !Array.isArray(params.pushTarget.alias)) {
        return new Error("推送目标（pushTarget）中的alias字段类型须为数组");
      }
      // 校验pushTarget下的smartLabels字段
      if (
        params.pushTarget.smartLabels &&
        !Array.isArray(params.pushTarget.smartLabels)
      ) {
        return new Error(
          "推送目标（pushTarget）中的smartLabels字段类型须为数组"
        );
      }
      // 校验pushTarget下的pushAreas字段
      if (
        params.pushTarget.pushAreas &&
        Object.prototype.toString.call(params.pushTarget.pushAreas) !==
          "[Object Object]"
      ) {
        return new Error("推送目标（pushTarget）中的pushAreas字段类型须为对象");
      }
    }

    // 校验pushNotify字段
    if (!params.pushNotify) {
      return new Error("缺少推送展示细节配置（pushNotify）字段");
    } else if (
      Object.prototype.toString.call(params.pushNotify) !== "[Object Object]"
    ) {
      return new Error("推送展示细节配置（pushNotify）字段类型须为对象");
    } else {
      // 校验pushNotify下的plats
      if (!params.pushNotify.plats) {
        return new Error("推送展示细节配置（pushNotify）中缺少plats字段");
      } else if (!Array.isArray(params.pushNotify.plats)) {
        ("推送展示细节配置（pushNotify）中plats字段类型须为数组");
      }
      // 校验pushNotify下的content
      if (!params.pushNotify.content) {
        return new Error(
          "推送展示细节配置（pushNotify）中缺少推送内容（content）字段"
        );
      }
      // 校验pushNotify下的type
      if (!params.pushNotify.type) {
        return new Error(
          "推送展示细节配置（pushNotify）中缺少推送类型（type）字段"
        );
      } else if (constant.pushTypeMap.indexOf(params.pushNotify.type) === -1) {
        return new Error(
          "推送展示细节配置（pushNotify）中的推送类型（type）字段值不正确"
        );
      }
      // 校验pushNotify下的customNotify
      if (
        params.pushNotify.customNotify &&
        Object.prototype.toString.call(params.pushNotify.customNotify) !==
          "[Object Object]"
      ) {
        return new Error(
          "推送展示细节配置（pushNotify）中的自定义内容（customNotify）字段类型须为对象"
        );
      }
      // 校验pushNotify下的androidNotify
      if (
        params.pushNotify.androidNotify &&
        Object.prototype.toString.call(params.pushNotify.androidNotify) !==
          "[Object Object]"
      ) {
        return new Error(
          "推送展示细节配置（pushNotify）中的androidNotify字段类型须为对象"
        );
      }
      // 校验pushNotify下的iosNotify
      if (
        params.pushNotify.iosNotify &&
        Object.prototype.toString.call(params.pushNotify.iosNotify) !==
          "[Object Object]"
      ) {
        return new Error(
          "推送展示细节配置（pushNotify）中的iosNotify字段类型须为对象"
        );
      }
      // 校验pushNotify下的extrasMapList
      if (
        params.pushNotify.extrasMapList &&
        !Array.isArray(params.pushNotify.extrasMapList)
      ) {
        return new Error(
          "推送展示细节配置（pushNotify）中的extrasMapList字段类型须为数组"
        );
      }
    }

    // 校验pushOperator字段
    if (
      params.pushOperator &&
      Object.prototype.toString.call(params.pushOperator) !== "[Object Object]"
    ) {
      return new Error("运营保障相关配置（pushOperator）字段类型须为对象");
    } else if (
      params.pushOperator &&
      Object.prototype.toString.call(params.pushOperator) === "[Object Object]"
    ) {
      // 校验pushOperator下的dropType字段
      if (
        params.pushOperator.dropType &&
        constant.dropTypeMap.indexOf(params.pushOperator.dropType) === -1
      ) {
        return new Error(
          "运营保障相关配置（pushOperator）中的修改类型（dropType）字段值不正确"
        );
      }
    }
    // 校验pushForward字段
    if (
      params.pushForward &&
      Object.prototype.toString.call(params.pushForward) !== "[Object Object]"
    ) {
      return new Error("pushForward字段类型须为对象");
    } else if (
      params.pushForward &&
      Object.prototype.toString.call(params.pushForward) === "[Object Object]"
    ) {
      // 校验pushForward下的nextType
      if (
        params.pushForward.nextType &&
        constant.nextTypeMap.indexOf(params.pushForward.nextType) === -1
      ) {
        return new Error("pushForward中的nextType字段值不正确");
      }
      // 校验pushForward下的url
      // if (!params.pushForward.url) {
      //   return new Error("pushForward中缺少url字段");
      // }
      // 校验pushForward下的schemeDataList字段
      if (
        params.pushForward.schemeDataList &&
        !Array.isArray(params.pushForward.schemeDataList)
      ) {
        return new Error("pushForward中的schemeDataList字段类型须为数组");
      }
    }
  } else {
    return new Error("缺少入参");
  }
  return "入参校验通过";
};

module.exports = { checkPushTaskV3 };
