const {createSignature, verifySignature} = require("../index");
const assert = require('assert');

const privateKey = '0x0123456789012345678901234567890123456789012345678901234567890123';
const testAddress = '0x14791697260E4c9A71f18484C9f997B308e59325';
const testMessage = 'Sign me now!';
const testSignature = '0xb779a35075e38b42bdcc9808ad301beb4c36dcd6b2f23ce1ca6be4a0f290f863093514a45859838e27e8655b25c2988d7a910f186ecf12d691269b227aa9c6a21c';

describe('createSignature()', function() {
  it('should create a signature', function() {
    const signature = createSignature(privateKey, testMessage);
    assert.equal(testSignature, signature);
  });
});

describe('verifySignature()', function() {
  it('should return an address', function() {
    const address = verifySignature(testSignature, testMessage);
    assert.equal(address, testAddress);
  });
});