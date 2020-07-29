const { createHash } = require("crypto");

/**
 *
 * @param {*} algorithm 加密算法
 * @param {*} content 加密内容
 * @param {*} format 格式
 */
const encrypt = (algorithm, content, format) => {
  let hash = createHash(algorithm);

  hash.update(content, format);

  return hash.digest("hex");
};

/**
 *
 * @param {*} content
 */
const md5 = (content) => encrypt("md5", content, "utf-8");

module.exports = { encrypt, md5 };
