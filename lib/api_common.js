"use strict";

var fetch = require("node-fetch");
var encryption = require("../utils/encryption");

class API {
  constructor(appkey, appSecret) {
    this.appkey = appkey;
    this.appSecret = appSecret;
    if (!this.appkey) {
      throw new Error("appkey不能为空");
    }
    if (!this.appSecret) {
      throw new Error("appSecret不能为空");
    }
    this.prefix = "http://api.push.mob.com";
    this.defaultObj = {
      appkey: appkey,
      appSecret: appSecret,
    };
  }

  /**
   *
   * 公用请求方法
   * @param {*} url
   * @param {*} data
   * @returns {Promise}
   * @memberof API
   */
  async request(url, data) {
    let requestUrl = this.prefix + url,
      assignData = Object.assign(this.defaultObj, data);

    const response = await fetch(requestUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        sign: encryption.md5(JSON.stringify(assignData) + this.appSecret),
        key: this.appkey,
      },
      body: JSON.stringify(assignData),
    });

    return this.checkStatus(response);
  }

  /**
   * 处理接口返回
   *
   * @param {*} response
   * @returns
   * @memberof API
   */
  checkStatus(response) {
    return response.json();
  }

  /**
   * 接口请求超时处理
   *
   * @param {*} requestPromise
   * @param {number} [timeout=10000]
   * @returns
   * @memberof API
   */
  timeOut(requestPromise, timeout = 10000) {
    let timeoutAction = null;
    const timerPromise = new Promise((resolve, reject) => {
      timeoutAction = () => {
        reject("请求超时");
      };
    });

    setTimeout(() => {
      timeoutAction();
    }, timeout);
    return Promise.race([requestPromise, timerPromise]);
  }
}

API.mixin = function (obj) {
  for (var key in obj) {
    if (API.prototype.hasOwnProperty(key)) {
      throw new Error(
        "Don't allow override existed prototype method. method: " + key
      );
    }
    API.prototype[key] = obj[key];
  }
};

module.exports = API;
