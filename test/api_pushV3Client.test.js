"use strict";

const API = require("../index");
const expect = require("expect.js");
const config = require("./config");

var api = new API(config.appkey, config.appSecret);

describe("pushTaskV3", function () {
  it("should ok", async function () {
    var api = new API(config.appkey, config.appSecret);
    var res = await api.pushTaskV3({
      workno: null,
      source: "devplat",
      pushTarget: {
        target: 1,
      },
      pushNotify: {
        plats: [1, 2],
        content: "杜仲 test",
        title: "杜仲 test title",
      },
      pushOperator: { notifyId: "447376183617044480" },
      pushForward: {
        url: "https://github.com/Jack-cool",
        scheme: "mlink://com.mob.mobpush.linkone",
      },
    });

    expect(res.status).to.equal(200);
  });
});

describe("pushAll", function () {
  var api = new API(config.appkey, config.appSecret);

  it("should ok", async function () {
    var res = await api.pushAll("", "测试推送title", "测试推送内容");

    expect(res.status).to.equal(200);
  });

  it("缺少content", async function () {
    var res = await api.pushAll("", "测试推送title", "");

    expect(res.error).to.equal("推送消息不能为空");
  });
});

describe("pushByAlias", function () {
  it("should ok", async function () {
    var res = await api.pushByAlias("", "测试推送title", "测试推送内容", "1,2");

    expect(res.status).to.equal(200);
  });
  it("缺少alias", async function () {
    var res = await api.pushByAlias("", "测试推送title", "测试推送内容");

    expect(res.error).to.equal("别名不能为空且长度限制[1,1000]");
  });
});

describe("pushByTags", function () {
  it("should ok", async function () {
    var res = await api.pushByTags(
      "",
      "测试推送title",
      "测试推送内容",
      "1,2,3"
    );

    expect(res.status).to.equal(200);
  });
  it("缺少tags", async function () {
    var res = await api.pushByTags("", "测试推送title", "测试推送内容");

    expect(res.error).to.equal("标签不能为空");
  });
});

describe("pushByRids", function () {
  it("should ok", async function () {
    var res = await api.pushByRids(
      "",
      "测试推送title",
      "测试推送内容",
      "5,8,9"
    );

    expect(res.status).to.equal(200);
  });

  it("缺少rids", async function () {
    var res = await api.pushByRids("", "测试推送title", "测试推送内容");

    expect(res.error).to.equal("RegisterIds不能为空且长度限制[1,1000]");
  });
});

describe("pushByAreas", function () {
  it("should ok", async function () {
    var res = await api.pushByAreas("", "duzhong", "测试推送内容", {
      countries: [
        {
          country: "中国",
          provinces: [
            {
              province: "江苏",
              cities: ["泰州", "苏州"],
              excludeCities: ["常州"],
            },
          ],
          excludeProvinces: ["湖南"],
        },
      ],
    });

    expect(res.status).to.equal(200);
  });
  
  it("缺少pushAreas字段", async function () {
    var api = new API(config.appkey, config.appSecret);
    var res = await api.pushByAreas("", "duzhong", "测试推送内容");

    expect(res.error).to.equal("区域列表推送时，未指定[pushAreas]字段");
  });

  it("pushAreas缺少countries字段", async function () {
    var api = new API(config.appkey, config.appSecret);
    var res = await api.pushByAreas("", "duzhong", "测试推送内容", {});

    expect(res.error).to.equal("地理位置[pushAreas]中国家列表[countries]不能为空");
  });

  it("缺少country字段", async function () {
    var res = await api.pushByAreas("", "duzhong", "测试推送内容", {
      countries: [
        {
          provinces: [
            {
              province: "江苏",
              cities: ["泰州", "苏州"],
              excludeCities: ["常州"],
            },
          ],
        },
      ],
    });

    expect(res.error).to.equal("国家[country]不能为空");
  });
});

describe("getPushByBatchId", function () {
  it("should ok", async function () {
    var res = await api.getPushByBatchId("32ugusct66oly4g");

    expect(res.status).to.equal(200);
  });
  it("缺少batchId字段", async function () {
    var res = await api.getPushByBatchId();

    expect(res.error).to.equal("[workId]不能为空");
  });
});

describe("getPushByWorkno", function () {
  it("should ok", async function () {
    var res = await api.getPushByWorkno("abc123");

    expect(res.status).to.equal(200);
  });
  it("缺少workno字段", async function () {
    var res = await api.getPushByWorkno();

    expect(res.error).to.equal("[workno]不能为空");
  });
});

describe("cancelPushTask", function () {
  it("should ok", async function () {
    var res = await api.cancelPushTask("32ugv77jgxg9dds");

    expect(res.status).to.equal(200);
  });

  it("缺少workId字段", async function () {
    var res = await api.cancelPushTask();

    expect(res.error).to.equal("任务id不可为空");
  });
});

describe("replaceTask", function () {
  it("should ok", async function () {
    var res = await api.replaceTask("32ugv72vx47z5z4", "测试内容");

    expect(res.status).to.equal(200);
  });

  it("缺少workId字段", async function () {
    var res = await api.replaceTask("", "测试内容");

    expect(res.error).to.equal("任务id不可为空");
  });
});

describe("recallTask", function () {
  it("should ok", async function () {
    var res = await api.recallTask("32ugv72vx47z5z4");

    expect(res.status).to.equal(200);
  });

  it("缺少workId字段", async function () {
    var res = await api.recallTask();

    expect(res.error).to.equal("任务id不可为空");
  });
});
