"use strict";

const API = require("../index");
const expect = require("expect.js");
const config = require("./config");

describe("appkey & appSecret参数缺失", function () {
  it("未传appkey应该会抛出异常", async function () {
    try {
      var apiOne = new API(null, config.appSecret);
    } catch (error) {
      expect(error.toString()).to.equal("Error: appkey不能为空");
    }
  });

  it("未传appSecret应该会抛出异常", async function () {
    try {
      var apiTwo = new API(config.appkey, null);
    } catch (error) {
      expect(error.toString()).to.equal("Error: appSecret不能为空");
    }
  });
});

describe("mixin", function () {
  it("should ok", function () {
    API.mixin({ test: function () {} });
    expect(API.prototype).to.have.property("test");
  });

  it("should not ok when override method", function () {
    var obj = { test: function () {} };
    expect(API.mixin)
      .withArgs(obj)
      .to.throwException(/Don't allow override existed prototype method\./);
  });
});
