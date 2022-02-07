const { encrypt, decrypt } = require("../src/helpers/encrypt-decrypt");
const { assert } = require('chai');

const secretKey = "vOVH6sdmpNWjRRIqCc7rdxs01lwHzfr3";
const iv = "80e2af0a60ecbd16618abc72c2d00fb3";

console.log('Encryption Decryption helpers test start.....');

describe("Encryption Decryption helpers testing", () => {
  it("should encrypt the text", () => {
    const encode = encrypt("test", secretKey, iv);

    assert.exists(encode, "Token is exist");
    assert.equal(encode, "6ec92a70");
  });

  it("should decrypt the text", () => {
    const decode = decrypt("6ec92a70", secretKey, iv);

    assert.exists(decode, "Token is exist");
    assert.equal(decode, "test");
  });
});

console.log("Encryption Decryption helpers test end.....");