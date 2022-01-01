const jwt = require('jsonwebtoken');

module.exports.encode = function (secret_key, payload) {
    return new Promise((resolve, reject) => {
        jwt.sign(payload, secret_key, (err, token) => {
            if (err) {
                console.log(err.message || 'JWT Encoding Error');
                return resolve(null);
            }
            else {
                return resolve(token);
            }
        });
    });
};

module.exports.decode = function (secret_key, token) {
    return new Promise((resolve, reject) => {
        jwt.verify(token, secret_key, (err, payload) => {
            if (err) {
                console.log(err.message || 'JWT Decoding Error');
                return resolve(null);
            }
            else {
                return resolve(payload);
            }
        });
    });
};