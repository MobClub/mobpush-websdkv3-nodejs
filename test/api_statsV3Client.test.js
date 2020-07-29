"use strict";

const API = require("../index");
const expect = require("expect.js");
const config = require("./config");
const api = new API(config.appkey, config.appSecret);

describe("getStatsByWorkId", function () {
  it("should ok", async function () {
    var res = await api.getStatsByWorkId("32ugv6xlu6sa2o0");

    expect(res.status).to.equal(200);
  });

  it("缺少workId字段", async function () {
    var res = await api.getStatsByWorkId();

    expect(res.error).to.equal("[workId]不能为空");
  });
});

describe("getStatsByWorkIds", function () {
  it("should ok", async function () {
    var res = await api.getStatsByWorkIds([
      "32ugvafq6iupv5s",
      "32ugvagw7cevytc",
    ]);

    expect(res.status).to.equal(200);
  });

  it("缺少workIds字段", async function () {
    var res = await api.getStatsByWorkIds();

    expect(res.error).to.equal("[workId]不能为空");
  });
});

describe("getStatsByWorkno", function () {
  it("should ok", async function () {
    var res = await api.getStatsByWorkno("abc123");

    expect(res.status).to.equal(200);
  });

  it("缺少workno字段", async function () {
    var res = await api.getStatsByWorkno();

    expect(res.error).to.equal("[workno]不能为空");
  });
});

describe("getStatsByHour", function () {
  it("should ok", async function () {
    var res = await api.getStatsByHour("2020072214");

    expect(res.status).to.equal(200);
  });

  it("缺少hour字段", async function () {
    var res = await api.getStatsByHour();

    expect(res.error).to.equal("时间不能为空");
  });
});

describe("getStatsByDay", function () {
  it("should ok", async function () {
    var res = await api.getStatsByDay("20200722");

    expect(res.status).to.equal(200);
  });

  it("should ok", async function () {
    var res = await api.getStatsByDay();

    expect(res.error).to.equal("时间不能为空");
  });
});

describe("getStatsByDevice", function () {
  it("should ok", async function () {
    var res = await api.getStatsByDevice("32ugvagw7cevytc", 1, 10);

    expect(res.status).to.equal(200);
  });
  
  it("should ok", async function () {
    var res = await api.getStatsByDevice("", 1, 10);

    expect(res.error).to.equal("workId不可为空");
  });
});
