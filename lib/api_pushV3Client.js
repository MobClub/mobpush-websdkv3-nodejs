"use strict";

const PUSH_URI = "/v3/push/createPush";
const GET_BY_WORKID_URI = "/v3/push/getByWorkId";
const GET_BY_WORKNO_URI = "/v3/push/getByWorkno";
const CANCEL_TASK_URI = "/push/drop";
const REPLACE_TASK_URI = "/push/replace";
const RECALL_TASK_URI = "/push/recall";

const tools = require("../utils/tools");
const responseFormat = require("../res");

const TARGET_ALL = 1;
const TARGET_ALIAS = 2;
const TARGET_TAGS = 3;
const TARGET_RIDS = 4;
const TARGET_AREAS = 9;

/**
 * @name pushTaskV3(自定义推送，用户可以自由配置以下属性)
 *
 * @param {*} params
 * @returns {Promise}
 */
exports.pushTaskV3 = async function (params) {
  const res = await this.request(PUSH_URI, tools.composeObj(params));
  return responseFormat.pushV3Res(res);
};

/**
 * @name pushAll(广播推送)
 *
 * @param {string} workNo 任务标识
 * @param {string} title 推送标题
 * @param {string} content 推送内容
 *
 */
exports.pushAll = async function (workNo, title, content) {
  const res = await this.pushTaskV3({
    workNo: workNo,
    pushNotify: {
      content: content,
      title: title,
    },
    pushTarget: {
      target: TARGET_ALL,
    },
  });
  return res;
};

/**
 * @name pushByAlias(别名推送)
 * @param {string} workNo 任务标识
 * @param {string} title 推送标题
 * @param {string} content 推送内容
 * @param {string} alias  别名，可以传入多个
 */
exports.pushByAlias = async function (workNo, title, content, alias) {
  if (alias && Object.prototype.toString.call(alias) !== "[object String]") {
    throw new Error("alias须字符串类型");
  }
  const res = await this.pushTaskV3({
    workNo: workNo,
    pushNotify: {
      content: content,
      title: title,
    },
    pushTarget: {
      target: TARGET_ALIAS,
      alias: alias && alias.split(","),
    },
  });
  return res;
};

/**
 * @name pushByTags(标签推送)
 * @param {string} workNo 任务标识
 * @param {string} title 推送标题
 * @param {string} content 推送内容
 * @param {string} tags  标签，可以传入多个
 */
exports.pushByTags = async function (workNo, title, content, tags) {
  if (tags && Object.prototype.toString.call(tags) !== "[object String]") {
    throw new Error("tags须字符串类型");
  }
  const res = await this.pushTaskV3({
    workNo: workNo,
    pushNotify: {
      content: content,
      title: title,
    },
    pushTarget: {
      target: TARGET_TAGS,
      tags: tags && tags.split(","),
    },
  });
  return res;
};

/**
 * @name pushByRids(RegistrationId推送)
 * @param {string} workNo 任务标识
 * @param {string} title 推送标题
 * @param {string} content 推送内容
 * @param {string} rids  Registration Id，可以传入多个
 */
exports.pushByRids = async function (workNo, title, content, rids) {
  if (rids && Object.prototype.toString.call(rids) !== "[object String]") {
    throw new Error("rids须字符串类型");
  }
  const res = await this.pushTaskV3({
    wworkNo: workNo,
    pushNotify: {
      content: content,
      title: title,
    },
    pushTarget: {
      target: TARGET_RIDS,
      rids: rids && rids.split(","),
    },
  });
  return res;
};

/**
 * @name pushByAreas(特殊地理位置推送)
 * @param {string} workNo 任务标识
 * @param {string} title 推送标题
 * @param {string} content 推送内容
 * @param {object} pushAreas  地理位置
 */
exports.pushByAreas = async function (workNo, title, content, pushAreas) {
  const res = await this.pushTaskV3({
    workNo: workNo,
    pushNotify: {
      content: content,
      title: title,
    },
    pushTarget: {
      target: TARGET_AREAS,
      // TODO: pushAreas需要通过builder生成，提供外部调用方法
      pushAreas: pushAreas,
    },
  });
  return res;
};

/**
 * @name getPushByBatchId(根据任务id获取推送任务信息)
 *
 * @param {string} batchId 任务id
 */
exports.getPushByBatchId = async function (batchId) {
  const res = await this.request(GET_BY_WORKID_URI, {
    workId: batchId,
  });
  return res;
};

/**
 * @name getPushByWorkno(根据用户id获取推送任务信息)
 *
 * @param {string} workNo 任务标识
 */
exports.getPushByWorkno = async function (workno) {
  const res = await this.request(GET_BY_WORKNO_URI, {
    workno: workno,
  });
  return res;
};

/**
 * @name cancelPushTask(根据任务id取消推送)
 *
 * @param {string} workId 任务id
 */
exports.cancelPushTask = async function (workId) {
  const res = await this.request(CANCEL_TASK_URI, {
    batchId: workId,
  });
  return responseFormat.cancelWorkRes(res);
};

/**
 * @name replaceTask(根据任务id替换推送)
 * @param {string} workId 任务id
 * @param {string} content 重新推送的内容
 */
exports.replaceTask = async function (workId, content) {
  const res = await this.request(REPLACE_TASK_URI, {
    batchId: workId,
    content: content,
  });
  return responseFormat.cancelWorkRes(res);
};

/**
 * @name recallTask(根据任务id撤回推送任务)
 * @param {string} workId 任务id
 */
exports.recallTask = async function (workId) {
  const res = await this.request(RECALL_TASK_URI, {
    batchId: workId,
  });
  return responseFormat.cancelWorkRes(res);
};
