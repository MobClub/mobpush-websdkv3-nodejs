<h1><a href="https://www.mob.com/wiki/detailed/?wiki=MobPushRestAPIfenlei1333&id=136" alt="mobpush"><img src="https://static.mob.com/common/images/logo_mobpush.png" align="center" alt="MobPush" width="25" height="25"> MobPush</a>
</h1>

![image](https://github.com/MOBX/MOB-SMS-WEBAPI/blob/master/doc/images/logo.png)

**[MobPush API for NodeJS](https://www.mob.com/wiki/detailed/?wiki=MobPushRestAPIfenlei1333&id=136)**
为了帮助开发者更方便接入MobPush免费推送SDK，提供完整的API接口的NodeJS实现，包含设备操作相关接口、推送操作相关接口以及公共接口。

了解更多 [MobPush 免费推送 SDK.](https://www.mob.com/mobService/mobpush)

## 优势 🚀

**免费使用**、**自定义 UI**、**稳定服务**、**流程体验**、**数据同步**、**专业技术团队服务**

## 接口 🌰

- 推送接口:
  - 广播推送 pushAll
  - 别名推送 pushByAlias
  - 用户标签推送 pushByTags
  - Registration ID 推送 pushByRids
  - 复杂地理位置推送 pushByAreas
  - 用户自定义配置推送 pushTaskV3
- 推送任务详情查询接口
  - 查询推送任务详情(根据 batchId) getPushByBatchId
  - 查询推送任务详情(根据 workno) getPushByWorkno
- 推送任务的处理接口
  - 取消推送任务(根据 workId) cancelPushTask
  - 替换推送任务(根据 workId) replacePushTask
  - 撤回推送任务(根据 workId) recallPushTask
- 查询推送统计接口
  - 根据推送任务 id 查询统计 getStatsByWorkId
  - 根据推送任务 id 批量查询统计 getStatsByWorkIds
  - 根据用户 id 查询统计 getStatsByWorkno
  - 按小时查询统计 getStatsByHour
  - 按日期查询统计 getStatsByDay
  - 根据 id 查询任务下发给设备的详情统计 getStatsByDevice

## 安装 

```
$ npm install mobpush-api-node-client
```

## 使用示例 
```js
const MobPush = require('mobpush-api-node-client);
const api = new MobPush(appkey, appSecret);
let result = await api.pushAll(param1, param2, param3, ...);
```
**错误码**请参考:[MobPush Api 错误码](http://wiki.mob.com/mobpush-rest-api-接口文档/#map-6)

### API - 方法 

#### pushAll - 广播推送

```js
/**
 * @name pushAll(广播推送)
 *
 * @param {string} workNo 任务标识
 * @param {string} title 推送标题
 * @param {string} content 推送内容
 *
 */
pushAll(workNo, title, content);
```

#### pushByAlias - 别名推送

```js
/**
 * @name pushByAlias(别名推送)
 * @param {string} workNo 任务标识
 * @param {string} title 推送标题
 * @param {string} content 推送内容
 * @param {string} alias  别名，可以传入多个
 */
pushByAlias(workNo, title, content, alias);
```

#### pushByTags - 标签推送

```js
/**
 * @name pushByTags(标签推送)
 * @param {string} workNo 任务标识
 * @param {string} title 推送标题
 * @param {string} content 推送内容
 * @param {string} tags  标签，可以传入多个
 */
pushByTags(workNo, title, content, tags);
```

#### pushByRids - RegistrationId 推送

```js
/**
 * @name pushByRids(RegistrationId推送)
 * @param {string} workNo 任务标识
 * @param {string} title 推送标题
 * @param {string} content 推送内容
 * @param {string} rids  Registration Id，可以传入多个
 */
pushByRids(workNo, title, content, rids);
```

#### pushByAreas - 特殊地理位置推送)

```js
/**
 * @name pushByAreas(特殊地理位置推送)
 * @param {string} workNo 任务标识
 * @param {string} title 推送标题
 * @param {string} content 推送内容
 * @param {object} pushAreas  地理位置
 */
pushByAreas(workNo, title, content, pushAreas);
```

#### getPushByBatchId - 根据任务 id 获取推送任务信息

```js
/**
 * @name getPushByBatchId(根据任务id获取推送任务信息)
 *
 * @param {string} batchId 任务id
 */
getPushByBatchId(batchId);
```

#### getPushByWorkno - 根据用户 id 获取推送任务信息

```js
/**
 * @name getPushByWorkno(根据用户id获取推送任务信息)
 *
 * @param {string} workNo 任务标识
 */
getPushByWorkno(workno);
```

#### cancelPushTask - 根据任务 id 取消推送

```js
/**
 * @name cancelPushTask(根据任务id取消推送)
 *
 * @param {string} workId 任务id
 */
cancelPushTask(workId);
```

#### replaceTask - 根据任务id替换推送

```js
/**
 * @name replaceTask(根据任务id替换推送)
 * @param {string} workId 任务id
 * @param {string} content 重新推送的内容
 */
replaceTask(workId, content);
```

#### recallTask - 根据任务id撤回推送任务

```js
/**
 * @name recallTask(根据任务id撤回推送任务)
 * @param {string} workId 任务id
 */
recallTask(workId);
```

#### getStatsByWorkId - 根据推送任务id查询统计

```js
/**
 * @name getStatsByWorkId(根据推送任务id查询统计)
 *
 * @param {string} workId 任务Id
 */
getStatsByWorkId(workId);
```

#### getStatsByWorkIds - 根据推送任务id批量查询统计

```js
/**
 * @name getStatsByWorkIds(根据推送任务id批量查询统计)
 *
 * @param {string} workIds
 */
getStatsByWorkIds(workIds);
```

#### getStatsByWorkno - 根据用户的id查询统计

```js
/**
 * @name getStatsByWorkno(根据用户的id查询统计)
 *
 * @param {string} workno 用户的推送任务id
 */
getStatsByWorkno(workno);
```

#### getStatsByHour - 按小时查询统计

```js
/**
 * @name getStatsByHour(按小时查询统计)
 *
 * @param {string} hour 小时
 */
getStatsByHour(hour);
```

#### getStatsByDay - 按天查询统计

```js
/**
 * @name getStatsByDay(按天查询统计)
 *
 * @param {string} day 天
 */
getStatsByDay(day);
```

#### getStatsByDevice - 统计每次下发的设备信息

```js
/**
 * @name getStatsByDevice(统计每次下发的设备信息)
 *
 * @param {string} workId 任务id
 * @param {number} pageIndex 页码
 * @param {number} pageSize 页数
 */
getStatsByDevice(workId, pageIndex, pageSize);
```
