"use strict";

const API = require("./lib/api_common");
// 菜单接口
API.mixin(require("./lib/api_pushV3Client"));
API.mixin(require("./lib/api_statsV3Client"));

module.exports = API;
