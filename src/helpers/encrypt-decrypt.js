const { createCipheriv, createDecipheriv } = require("crypto");

const algorithm = "aes-256-ctr";
// const secretKey = "vOVH6sdmpNWjRRIqCc7rdxs01lwHzfr3";
// const iv = crypto.randomBytes(16).toString("hex");
// const iv = "80e2af0a60ecbd16618abc72c2d00fb3";

module.exports.encrypt = function (text, secretKey, iv) {
  const cipher = createCipheriv(algorithm, secretKey, Buffer.from(iv, "hex"));

  const encrypted = Buffer.concat([cipher.update(text), cipher.final()]);
  return encrypted.toString("hex");
};

module.exports.decrypt = function (hash, secretKey, iv) {
  const decipher = createDecipheriv(
    algorithm,
    secretKey,
    Buffer.from(iv, "hex")
  );

  const decrpyted = Buffer.concat([
    decipher.update(Buffer.from(hash, "hex")),
    decipher.final(),
  ]);

  return decrpyted.toString();
};
