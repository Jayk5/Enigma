const ipfs = require("nano-ipfs-store").at("https://ipfs.infura.io:5001");
let cryptoJS = require("crypto-js");
let AES = cryptoJS.AES;

function encrypt(data, key) {
  return AES.encrypt(data, key).toString();
}

function decrypt(data, key) {
  return AES.decrypt(data, key).toString(cryptoJS.enc.Utf8);
}

function secretPasspharse() {
  return (Math.random() * 15).toString();
}

async function upload(data) {
  const secretKey = secretPasspharse();
  const encryptedString = encrypt(JSON.stringify(data), secretKey);
  const ipfsHash = await ipfs.add(encryptedString);
  return { ipfsHash, secretKey };
}

async function retrieve(ipfsHash, key) {
  const data = await ipfs.cat(ipfsHash);
  return decrypt(data, key);
}

export { upload, retrieve };
