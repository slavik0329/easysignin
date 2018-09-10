// Copyright 2018 Steve Dakh

const ethers = require('ethers');

function verifySignature(signature, message) {
  // Add standard ETH message to signature
  const splitSignature = ethers.utils.splitSignature(signature);
  splitSignature.messageHash = ethers.utils.id("\x19Ethereum Signed Message:\n" + message.length + message);

  // Subtract network from v to properly verify
  if (splitSignature.v >= 27) {
    splitSignature.v -= 27;
  }

  // Recover the ether address from signature
  return ethers.SigningKey.recover(splitSignature.messageHash, splitSignature.r, splitSignature.s, splitSignature.v);
}

function createSignature(privateKey, message) {
  const wallet = new ethers.Wallet(privateKey);
  return wallet.signMessage(message);
}

module.exports = {verifySignature, createSignature};