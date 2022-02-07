const jwt = require('../src/helpers/jwt');
const { assert } = require('chai');


console.log('JWT helpers test start.....');

describe('JWT helpers testing', () => {
    let createToken = '';
    it('should create a token', async () => {            
        createToken = await jwt.encode('secret_key', {name: 'test admin'});

        assert.exists(createToken, 'Token is exist');
        assert.isString(createToken, 'Token is string');
    });

    it('should varify a token', async () => {            
        const varifyToken = await jwt.decode('secret_key', createToken);

        assert.exists(varifyToken, 'Token is exist');
        assert.isObject(varifyToken, 'Token is valid');
        assert.isString(varifyToken.name, 'Name is string');
    });
});

console.log('JWT helpers test end.....');