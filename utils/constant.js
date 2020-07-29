const sourceMap = ["webapi", "upsapi", "sdkapi", "devplat"];
// 目标类型：1广播；2别名；3标签；4regid；5地理位置；6用户分 ;8短信补量(暂时未支持); 9复杂地址位置支持
const targetMap = [1, 2, 3, 4, 5, 6, 8, 9];
// 1并集；2交集；3补集(3暂不考虑)
const tagsTypeMap = [1, 2, 3];
// 1:与, 2:或, 3:非
const typeMap = [1, 2, 3];
// 推送类型：1通知；2自定义
const pushTypeMap = [1, 2];
// 1 android;2 ios
const platsMap = [1, 2];
// 0测试环境，1生产环境，默认1
const iosProductionMap = [0, 1];
// 0、默认通知无； 1、长内容则为内容数据； 2、大图则为图片地址； 3、横幅则为多行内容
const styleMap = [0, 1, 2, 3];
// ios富文本 0 无  ； 1 图片 ；2 视频 ；3 音频
const attachmentTypeMap = [0, 1, 2, 3];
// 修改类型： 1 取消 2 替换 3 撤回
const dropTypeMap = [1, 2, 3];
//  0 打开首页 1 link跳转 2  scheme 跳转
const nextTypeMap = [0, 1, 2];

module.exports = {
  sourceMap,
  targetMap,
  tagsTypeMap,
  typeMap,
  pushTypeMap,
  platsMap,
  iosProductionMap,
  styleMap,
  attachmentTypeMap,
  dropTypeMap,
  nextTypeMap,
};
