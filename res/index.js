/**
 * @name pushV3Res接口返回格式处理
 * @param {*} response
 */
const pushV3Res = (response) => {
  if (response && response.error) {
    return response;
  }
  return {
    status: response && response.status,
    res: {
      batchId: response.res && response.res.batchId,
    },
    error: response && response.error,
  };
};

const pushTaskV3Res = (response) => {
  if (response && response.error) {
    return response;
  }
  return {
    status: response && response.status,
    res: {
      workno: response.res && response.res.workno,
      source: (response.res && response.res.source) || "webapi",
      appkey: response.res && response.res.appkey,
      pushTarget: response.res && response.res.pushTarget,
      pushNotify: response.res && response.res.pushNotify,
      pushOperator: response.res && response.res.pushOperator,
      pushForward: response.res && response.res.pushForward,
    },
    error: response && response.error,
  };
};

const cancelWorkRes = (response) => {
  if (response && response.error) {
    return response;
  }
  return {
    status: response && response.status,
    res: {
      batchId: response.res && response.res.batchId,
      code: response.res && response.res.code,
      status: response.res && response.res.status,
      errorMsg: response.res && response.res.errorMsg,
    },
    error: response && response.error,
  };
};

const statsV3Res = (response) => {
  if (response && response.error) {
    return response;
  }
  const currentTimeStamp = new Date().getTime();
  return {
    status: response && response.status,
    res: {
      id: response.res && response.res.id,
      createAt: currentTimeStamp,
      updateAt: response.res && response.res.updateAt,
      workno: response.res && response.res.workno,
      appkey: response.res && response.res.appkey,
      android: response.res && response.res.android,
      ios: response.res && response.res.ios,
      factory: response.res && response.res.factory,
      iostcp: response.res && response.res.iostcp,
      androidtcp: response.res && response.res.androidtcp,
      apns: response.res && response.res.apns,
      huawei: response.res && response.res.huawei,
      xiaomi: response.res && response.res.xiaomi,
      flyme: response.res && response.res.flyme,
      fcm: response.res && response.res.fcm,
      oppo: response.res && response.res.oppo,
      vivo: response.res && response.res.vivo,
      offlineIos: response.res && response.res.offlineIos,
      offlineAndroid: response.res && response.res.offlineAndroid,
      offlineDrop: response.res && response.res.offlineDrop,
      offlineVivo: response.res && response.res.offlineVivo,
    },
    error: response && response.error,
  };
};

const statsV3ListRes = (response) => {
  if (response && response.error) {
    return response;
  }
  return {
    status: response && response.status,
    res:
      response.res &&
      response.res.map((item) => {
        return {
          id: item.id,
          createAt: new Date().getTime(),
          updateAt: item.updateAt,
          workno: item.workno,
          appkey: item.appkey,
          android: item.android,
          ios: item.ios,
          factory: item.factory,
          iostcp: item.iostcp,
          androidtcp: item.androidtcp,
          apns: item.apns,
          huawei: item.huawei,
          xiaomi: item.xiaomi,
          flyme: item.flyme,
          fcm: item.fcm,
          oppo: item.oppo,
          vivo: item.vivo,
          offlineIos: item.offlineIos,
          offlineAndroid: item.offlineAndroid,
          offlineDrop: item.offlineDrop,
          offlineVivo: item.offlineVivo,
        };
      }),
    error: response && response.error,
  };
};

const appHourStatsRes = (response) => {
  if (response && response.error) {
    return response;
  }
  return {
    status: response && response.status,
    res: {
      id: response.res && response.res.id,
      appkey: response.res && response.res.appkey,
      hour: response.res && response.res.hour,
    },
    error: response && response.error,
  };
};

const appDayStatsRes = (response) => {
  if (response && response.error) {
    return response;
  }
  return {
    status: response && response.status,
    res: {
      id: response.res && response.res.id,
      appkey: response.res && response.res.appkey,
      day: response.res && response.res.day,
    },
    error: response && response.error,
  };
};

const appDeviceStatsRes = (response) => {
  if (response && response.error) {
    return response;
  }
  return {
    status: response && response.status,
    res: {
      totalPages: response.res && response.res.totalPages,
      total: response.res && response.res.total,
      content:
        response.res &&
        response.res.content &&
        response.res.content.map((item) => {
          return {
            id: item.id,
            rid: item.rid,
            alias: item.alias,
            guardId: item.guardId,
            tag: item.tag,
            workId: item.workId,
            patchId: item.patchId,
            deliver: item.deliver,
            deliverTime: item.deliverTime,
            report: item.report,
            reportTime: item.reportTime,
            click: item.click,
            clickTime: item.clickTime,
          };
        }),
    },
    error: response && response.error,
  };
};

module.exports = {
  pushV3Res,
  pushTaskV3Res,
  cancelWorkRes,
  statsV3Res,
  statsV3ListRes,
  appHourStatsRes,
  appDayStatsRes,
  appDeviceStatsRes,
};
