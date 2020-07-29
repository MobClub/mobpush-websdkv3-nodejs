"use strict";

const GET_BY_WORKID_URI = "/v3/stats/getByWorkId";
const GET_BY_WORKIDS_URI = "/v3/stats/getByWorkIds";
const GET_BY_WORKNO_URI = "/v3/stats/getByWorkno";
const GET_BY_HOUR_URI = "/v3/stats/getByHour";
const GET_BY_DAY_URI = "/v3/stats/getByDay";
const GET_BY_DEVICE_URI = "/v3/stats/getByDevice";

const tools = require("../utils/tools");
const responseFormat = require("../res");

/**
 * @name getStatsByWorkId(根据推送任务id查询统计)
 *
 * @param {string} workId 任务Id
 */
exports.getStatsByWorkId = async function (workId) {
  const res = await this.request(GET_BY_WORKID_URI, {
    workId: workId,
  });
  return responseFormat.statsV3Res(res);
};

/**
 * @name getStatsByWorkIds(根据推送任务id批量查询统计)
 *
 * @param {string} workIds
 */
exports.getStatsByWorkIds = async function (workIds) {
  const res = await this.request(GET_BY_WORKIDS_URI, {
    workIds: workIds,
  });
  return responseFormat.statsV3ListRes(res);
};

/**
 * @name getStatsByWorkno(根据用户的id查询统计)
 *
 * @param {string} workno 用户的推送任务id
 */
exports.getStatsByWorkno = async function (workno) {
  const res = await this.request(GET_BY_WORKNO_URI, {
    workno: workno,
  });
  return responseFormat.statsV3Res(res);
};

/**
 * @name getStatsByHour(按小时查询统计)
 *
 * @param {string} hour 小时
 */
exports.getStatsByHour = async function (hour) {
  const res = await this.request(GET_BY_HOUR_URI, {
    hour: hour,
  });
  return responseFormat.appHourStatsRes(res);
};

/**
 * @name getStatsByDay(按天查询统计)
 *
 * @param {string} day 天
 */
exports.getStatsByDay = async function (day) {
  const res = await this.request(GET_BY_DAY_URI, {
    day: day,
  });
  return responseFormat.appDayStatsRes(res);
};

/**
 * @name getStatsByDevice(统计每次下发的设备信息)
 *
 * @param {string} workId 任务id
 * @param {number} pageIndex 页码
 * @param {number} pageSize 页数
 */
exports.getStatsByDevice = async function (workId, pageIndex, pageSize) {
  const res = await this.request(GET_BY_DEVICE_URI, {
    workId: workId,
    pageIndex: pageIndex,
    pageSize: pageSize,
  });
  return responseFormat.appDeviceStatsRes(res);
};
