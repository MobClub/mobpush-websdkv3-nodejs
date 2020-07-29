/**
 * @name pushTaskV3方法入参格式化
 * @param {*} params
 */
const composeObj = (params) => {
  return {
    workno: params.workno || "",
    source: params.source || "webapi",
    pushTarget: {
      target: params.pushTarget && params.pushTarget.target,
      tags: params.pushTarget && params.pushTarget.tags,
      tagsType: (params.pushTarget && params.pushTarget.tagsType) || 1,
      alias: params.pushTarget && params.pushTarget.alias,
      rids: params.pushTarget && params.pushTarget.rids,
      block: params.pushTarget && params.pushTarget.block,
      city: params.pushTarget && params.pushTarget.city,
      country: params.pushTarget && params.pushTarget.country,
      province: params.pushTarget && params.pushTarget.province,
      smartLabels: params.pushTarget && params.pushTarget.smartLabels,
      pushAreas: params.pushTarget && params.pushTarget.pushAreas,
    },
    pushNotify: {
      taskCron: (params.pushNotify && params.pushNotify.taskCron) || 0,
      taskTime: params.pushNotify && params.pushNotify.taskTime,
      plats: (params.pushNotify && params.pushNotify.plats) || [1, 2],
      iosProduction:
        (params.pushNotify && params.pushNotify.iosProduction) || 1,
      offlineSeconds:
        (params.pushNotify && params.pushNotify.offlineSeconds) || 0,
      content: params.pushNotify && params.pushNotify.content,
      title: params.pushNotify && params.pushNotify.title,
      type: (params.pushNotify && params.pushNotify.iosProduction) || 1,
      customNotify: params.pushNotify && params.pushNotify.customNotify,
      androidNotify: {
        appName:
          params.pushNotify &&
          params.pushNotify.androidNotify &&
          params.pushNotify.androidNotify.appName,
        title:
          params.pushNotify &&
          params.pushNotify.androidNotify &&
          params.pushNotify.androidNotify.title,
        warn:
          (params.pushNotify &&
            params.pushNotify.androidNotify &&
            params.pushNotify.androidNotify.warn) ||
          "12",
        style:
          (params.pushNotify &&
            params.pushNotify.androidNotify &&
            params.pushNotify.androidNotify.style) ||
          0,
        content:
          params.pushNotify &&
          params.pushNotify.androidNotify &&
          params.pushNotify.androidNotify.content,
        sound:
          params.pushNotify &&
          params.pushNotify.androidNotify &&
          params.pushNotify.androidNotify.sound,
      },
      iosNotify: {
        title:
          params.pushNotify &&
          params.pushNotify.iosNotify &&
          params.pushNotify.iosNotify.title,
        subtitle:
          params.pushNotify &&
          params.pushNotify.iosNotify &&
          params.pushNotify.iosNotify.subtitle,
        sound:
          (params.pushNotify &&
            params.pushNotify.iosNotify &&
            params.pushNotify.iosNotify.sound) ||
          "default",
        badge:
          params.pushNotify &&
          params.pushNotify.iosNotify &&
          params.pushNotify.iosNotify.badge,
        badgeType:
          params.pushNotify &&
          params.pushNotify.iosNotify &&
          params.pushNotify.iosNotify.badgeType,
        category:
          params.pushNotify &&
          params.pushNotify.iosNotify &&
          params.pushNotify.iosNotify.category,
        slientPush:
          params.pushNotify &&
          params.pushNotify.iosNotify &&
          params.pushNotify.iosNotify.slientPush,
        contentAvailable:
          params.pushNotify &&
          params.pushNotify.iosNotify &&
          params.pushNotify.iosNotify.contentAvailable,
        mutableContent:
          params.pushNotify &&
          params.pushNotify.iosNotify &&
          params.pushNotify.iosNotify.mutableContent,
        attachmentType:
          params.pushNotify &&
          params.pushNotify.iosNotify &&
          params.pushNotify.iosNotify.attachmentType,
        attachment:
          params.pushNotify &&
          params.pushNotify.iosNotify &&
          params.pushNotify.iosNotify.attachment,
      },
      url: params.pushNotify && params.pushNotify.url,
      extrasMapList: params.pushNotify && params.pushNotify.extrasMapList,
    },
    pushOperator: {
      dropType: params.pushOperator && params.pushOperator.dropType,
      dropId: params.pushOperator && params.pushOperator.dropId,
      notifyId: params.pushOperator && params.pushOperator.notifyId,
    },
    pushForward: {
      nextType: (params.pushForward && params.pushForward.nextType) || 0,
      url: params.pushForward && params.pushForward.url,
      scheme: params.pushForward && params.pushForward.scheme,
      schemeDataList: params.pushForward && params.pushForward.schemeDataList,
    },
  };
};

module.exports = {
  composeObj,
};
