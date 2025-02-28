const CryptoJS = require("crypto-js");// library to encrypt and decrypt data

exports.decryptData = (encryptedData) => {
    return JSON.parse(CryptoJS.AES.decrypt(encryptedData, process.env.SECRET_KEY).toString(CryptoJS.enc.Utf8));
}